# Flashcart Guides - https://sanrax.github.io

## Description
A flashcart setup guide repository for the r/flashcarts sub-reddit

## Contributing
If you'd like to see a cart or specific piece of info added, you may create an issue with the request, or fork the repository and then submit a pull request for me to approve. Any help is welcome!

This site uses Material-MKDocs as the base. The website is generated from all `.md` files found in the `docs` directory. To edit the contents of a page on the site, simply open and edit the corresponding markdown file.

Syntax documentation can be found in the [Material-MKDocs reference pages.](https://squidfunk.github.io/mkdocs-material/reference/)

## Building the Site
1. Install latest [Python 3.x.](https://www.python.org/downloads/)
1. Install mkdocs-material by following the "Installation" section of the [mkdocs-material wiki.](https://squidfunk.github.io/mkdocs-material/getting-started/)
1. Install the mkdocs macros plugin: `pip install mkdocs-macros-plugin`
1. Downgrade `click` to version `8.2.1` for working live-reload: `pip install click==8.2.1`
1. `git clone` the repository to your local PC: `git clone https://github.com/Sanrax/flashcart-guides.git`
1. Change into the `flashcart-guides` directory (`cd flashcart-guides`), then run `mkdocs serve` to build and serve the site locally at `localhost:8000`.
