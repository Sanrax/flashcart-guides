(() => {
  const root = document.querySelector("[data-cart-search]");
  if (!root) return;

  const input = root.querySelector("[data-cart-search-input]");
  const resultsBox = root.querySelector("[data-cart-search-results]");
  const indexUrl = root.dataset.indexUrl;

  let searchData = null;
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
    return searchData;
  }

  function findResults(query, data) {
    const normalizedQuery = normalizeCartUrl(query);
    if (normalizedQuery.length < 2) return [];
  
    const results = [];
  
    for (const [pageId, page] of Object.entries(data.pages)) {
      const normalizedMatches = (page.matches || []).map(normalizeCartUrl);
  
      const isMatch = normalizedMatches.some((url) => {
        return url === normalizedQuery;
      });
  
      if (!isMatch) continue;
  
      results.push({
        id: pageId,
        ...page
      });
    }
  
    results.sort((a, b) => {
      const rankA = a.rank ?? 9999;
      const rankB = b.rank ?? 9999;
  
      if (rankA !== rankB) {
        return rankA - rankB;
      }
  
      return a.title.localeCompare(b.title);
    });
  
    return results;
  }

  function renderResults(results) {
    activeIndex = -1;
    resultsBox.innerHTML = "";

    if (results.length === 0) {
      resultsBox.hidden = true;
      return;
    }

    for (const page of results) {
      const link = document.createElement("a");
      link.className = "cart-search__result";
      link.href = page.url;

      const title = document.createElement("span");
      title.className = "cart-search__title";
      title.textContent = page.title;

      link.appendChild(title);

      if (page.subtitle) {
        const subtitle = document.createElement("span");
        subtitle.className = "cart-search__subtitle";
        subtitle.textContent = page.subtitle;
        link.appendChild(subtitle);
      }

      resultsBox.appendChild(link);
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