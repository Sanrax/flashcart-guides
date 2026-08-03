(() => {
  const root = document.querySelector("[data-cart-search]");
  if (!root) return;

  const input = root.querySelector("[data-cart-search-input]");
  const resultsBox = root.querySelector("[data-cart-search-results]");
  const indexUrl = root.dataset.indexUrl;

  let searchData = null;
  let allKnownUrls = [];
  let activeIndex = -1;

  function normalizeCartUrl(value) {
    return value
      .trim()
      .toLowerCase()
      .replace(/^https?:\/\//, "")
      .replace(/^\/\//, "")
      .replace(/^www\./, "")
      .split(/[/?#]/)[0]
      .replace(/\.$/, "");
  }

  async function loadSearchData() {
    if (searchData) return searchData;

    const response = await fetch(indexUrl);
    if (!response.ok) {
      throw new Error("Could not load cart search index.");
    }

    searchData = await response.json();
    
    // Precompute a sorted list of all unique normalized URLs for quick filtering
    const urlSet = new Set();
    for (const page of Object.values(searchData.pages)) {
      (page.matches || []).forEach(url => {
        urlSet.add(normalizeCartUrl(url));
      });
    }
    allKnownUrls = Array.from(urlSet).sort();

    return searchData;
  }

  function findResults(query, data) {
    const normalizedQuery = normalizeCartUrl(query);
    if (normalizedQuery.length < 2) return [];
  
    // Exact match, display the search results
    if (allKnownUrls.includes(normalizedQuery)) {
      const pageResults = [];
      for (const [pageId, page] of Object.entries(data.pages)) {
        const normalizedMatches = (page.matches || []).map(normalizeCartUrl);
        if (normalizedMatches.includes(normalizedQuery)) {
          pageResults.push({ type: "page", id: pageId, ...page });
        }
      }
      
      pageResults.sort((a, b) => {
        const rankA = a.rank ?? 9999;
        const rankB = b.rank ?? 9999;
        if (rankA !== rankB) return rankA - rankB;
        return a.title.localeCompare(b.title);
      });
      
      // Prepend header for page results
      pageResults.unshift({ type: "header", value: normalizedQuery });
      
      return pageResults;
    }

    // Partial match, display URL suggestions
    const suggestions = allKnownUrls.filter(url => url.startsWith(normalizedQuery));
    
    // Limit to top 5 suggestions
    const results = suggestions.slice(0, 5).map(url => ({ type: "suggestion", value: url }));
    
    // Add footnote if there are more than 5 matches
    if (suggestions.length > 5) {
        results.push({ type: "footnote", value: "Suggestions Being Limited to Top 5 Matches" });
    }

    return results;
  }

  function renderResults(results) {
    activeIndex = -1;
    resultsBox.innerHTML = "";

    if (results.length === 0) {
      resultsBox.hidden = true;
      return;
    }

    for (const item of results) {
      // Footnotes and headers should not be clickable links
      const el = document.createElement((item.type === "footnote" || item.type === "header") ? "div" : "a");

      if (item.type === "header") {
        el.style.padding = "0.45rem 0.9rem";
        el.style.borderBottom = "1px solid var(--md-default-fg-color--lighter)";
        el.style.fontSize = "0.8rem";
        
        const prefix = document.createTextNode("Matches for ");
        const boldText = document.createElement("strong");
        boldText.textContent = item.value;
        
        el.appendChild(prefix);
        el.appendChild(boldText);
        
        resultsBox.appendChild(el);
        continue; // Skip the rest of the styling for this item
      }

      if (item.type === "footnote") {
        el.style.padding = "0.5rem 0.9rem";
        el.style.textAlign = "center";
        el.style.fontSize = "0.60rem";
        el.style.color = "var(--md-default-fg-color--light)";
        el.style.fontStyle = "italic";
        el.textContent = item.value;
        resultsBox.appendChild(el);
        continue; // Skip the rest of the styling for this item
      }

      el.className = "cart-search__result";

      if (item.type === "page") {
        // Standard cart page result
        el.href = item.url;
        
        const title = document.createElement("span");
        title.className = "cart-search__title";
        title.textContent = item.title;
        el.appendChild(title);

        if (item.subtitle) {
          const subtitle = document.createElement("span");
          subtitle.className = "cart-search__subtitle";
          subtitle.textContent = item.subtitle;
          el.appendChild(subtitle);
        }
      } else if (item.type === "suggestion") {
        // URL autocomplete suggestion
        el.style.cursor = "pointer";
        
        const title = document.createElement("span");
        title.className = "cart-search__title";
        title.textContent = item.value;
        el.appendChild(title);

        // Accept a suggestion
        el.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation(); // Prevent the document click listener from hiding the results box
          
          input.value = item.value;
          input.dispatchEvent(new Event("input")); // Trigger exact match state
          input.focus();
        });
      }

      resultsBox.appendChild(el);
    }

    resultsBox.hidden = false;
  }

  function updateActiveResult(results) {
    results.forEach((result, index) => {
      result.classList.toggle("cart-search__result--active", index === activeIndex);
    });
  }

  async function updateSearch() {
    try {
      const data = await loadSearchData();
      const results = findResults(input.value, data);
      renderResults(results);
    } catch {
      resultsBox.innerHTML = "";
      resultsBox.hidden = true;
    }
  }

  input.addEventListener("input", updateSearch);
  input.addEventListener("focus", updateSearch);

  input.addEventListener("keydown", (event) => {
    const results = [...resultsBox.querySelectorAll(".cart-search__result")];
    if (results.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      activeIndex = (activeIndex + 1) % results.length;
      updateActiveResult(results);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      activeIndex = (activeIndex - 1 + results.length) % results.length;
      updateActiveResult(results);
    }

    if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      results[activeIndex].click();
    }

    if (event.key === "Escape") {
      resultsBox.hidden = true;
      activeIndex = -1;
    }
  });

  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      resultsBox.hidden = true;
      activeIndex = -1;
    }
  });
})();