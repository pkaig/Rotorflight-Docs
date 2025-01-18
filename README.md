# Rotorflight-Docs

Rotorflight-Docs is the repository for [rotorflight.org](https://www.rotorflight.org/) and is  made with [Docusaurus](https://docusaurus.io/). Docusaurus is a static-site generator using React and renders the [markdown](https://www.markdownguide.org/) documentation pages.

The Rotorflight documentation is versioned, so each version of Rotorflight has its own documentation. The versioned documents can be found in `/versioned_docs`.

# How to run Rotorflight-Docs on your machine

First install Node.js on your machine, either by downloading the latest or by using NVM (Node Version Manager). Then:

```
> git clone https://github.com/pkaig/Rotorflight-Docs
> cd Rotorflight-Docs
> npm install
> npm run start
```

This will start the development server. Also, your browser wil open http://localhost:3000/, where you can view and test the website. If you now edit and save a markdown file in `/versioned_docs`, the changes will automatically show up in your browser.

## Build and test the complete site

You can also build the complete site and test it locally.

```
> npm run build
> npm run serve
```

This will create a `/build` directory, which contains the complete website.