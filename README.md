# Albert's portfolio

This is a static site made with vanilla HTML, CSS, and JavaScript. There is no build step or package manager.

The neural background is built with the native HTML5 Canvas API in `script.js`. It creates a sparse responsive set of drifting nodes, draws nearby violet network edges, bounces particles off the viewport edges, gently attracts nearby nodes toward the mouse, and adds fading pink mouse-to-node connections. It caps device-pixel-ratio scaling at 2 for sharper rendering without excessive canvas cost. With reduced motion enabled, it renders a static mesh. No animation library is required.

## Edit the content

- Update personal copy and links in [index.html](./index.html).
- Edit the `projects` array in [script.js](./script.js) to change project titles, descriptions, tags, images, and links. Add one screenshot under `images/` and set its `image` field to a relative path such as `"images/hoax-detection.png"`, or set `images` to an array of paths for a scrollable carousel. Set the `github` and `demo` fields to the project's repository and live-demo URLs. Until URLs are added, the card shows labeled placeholders.
- Edit the `journey` array in [script.js](./script.js) to change timeline entries.
- Edit the `stack` object in [script.js](./script.js) to change the Technical Skills lists. Each key is a category and its array contains the skills shown in that category. Add, remove, or rename strings in the arrays; for example, add `"C++"` to `Languages`.
- Replace the avatar letter in the `.avatar` element with an image if desired. Add `alt` text to the image.
- Replace `albert@example.com`, the GitHub URL, and the LinkedIn URL with real contact details.

## Deploy to GitHub Pages

1. Create a GitHub repository and upload `index.html`, `style.css`, `script.js`, and any images.
2. Open **Settings → Pages** in the repository.
3. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. GitHub will provide the published URL. Future pushes to `main` update the site.

The Google Fonts import is optional; if you want the site to work without an internet connection, remove the font link and add local fallback fonts in `style.css`.
