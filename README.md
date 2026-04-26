# Dr. Harvindra Singh — Academic Personal Website

A clean, lightweight, single-page academic personal website built with plain HTML, CSS,
and a small JavaScript file. No build step, no backend, no frameworks — just upload and
deploy on **GitHub Pages** in minutes.

---

## ✨ Features

- 📄 Single-page layout with sticky navigation
- 🎨 Light theme with soft academic blue accents (`#2563eb`)
- 🔠 Clean academic typography (Lora serif + Source Sans 3)
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Lightweight — no dependencies, no build tools
- 🖨️ Print-friendly (Ctrl/Cmd + P generates a clean CV-style document)
- ♿ Semantic HTML, accessible navigation

---

## 📁 File Structure

```
harvindra-website/
├── index.html           # Main page (all content)
├── styles.css           # Stylesheet — light theme
├── script.js            # Smooth scroll, mobile menu, active link
├── README.md            # This file
└── assets/              # Place CV PDF and images here
    └── CV_Harvindra_Singh.pdf   (add your own)
```

---

## 🚀 Deploying on GitHub Pages

Follow these steps to publish the site for free at
`https://<your-username>.github.io/<repo-name>/`.

### Step 1 — Create a new GitHub repository

1. Sign in to [github.com](https://github.com).
2. Click the **"+"** icon (top right) → **New repository**.
3. Choose a repository name. Two good options:
   - `harvindra-singh.github.io` — gives you the URL
     `https://harvindra-singh.github.io/` (replace with your username).
   - `academic-website` — gives you `https://<username>.github.io/academic-website/`.
4. Set the repository to **Public**.
5. **Do not** tick "Add a README" (we already have one).
6. Click **Create repository**.

### Step 2 — Upload the website files

You can use either the GitHub web interface or the command line.

**Option A — Web interface (easiest)**

1. On the new empty repository page, click **"uploading an existing file"**.
2. Drag-and-drop **all four** files plus the `assets/` folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `assets/` (folder containing your CV PDF)
3. Scroll to the bottom, write a commit message
   (e.g. *"Initial website upload"*), and click **Commit changes**.

**Option B — Command line**

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
# copy all the website files (index.html, styles.css, script.js, README.md, assets/) here
git add .
git commit -m "Initial website upload"
git push origin main
```

### Step 3 — Enable GitHub Pages

1. In your repository, click the **Settings** tab.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment** → **Source**, select **Deploy from a branch**.
4. Under **Branch**, select **`main`** and folder **`/ (root)`**.
5. Click **Save**.

### Step 4 — Access your live website

1. Wait 30–60 seconds for the first build.
2. Refresh the **Settings → Pages** page.
3. You will see a green box:
   > *Your site is live at* `https://<your-username>.github.io/<repo-name>/`
4. Open the URL — your website is now public!

---

## 🛠️ Customising the Website

### Update text content

Open **`index.html`** in any text editor (VS Code, Notepad++, Sublime Text, etc.).
All sections are clearly commented. Edit the text directly between the HTML tags.

### Add your CV (PDF)

1. Place your CV file in the `assets/` folder.
2. Name it **`CV_Harvindra_Singh.pdf`** (or update the link in `index.html`).
3. The download button on the page will work automatically.

### Add a profile photo

1. Place a square photo (e.g. `profile.jpg`) in the `assets/` folder.
2. Open `index.html` and find the `<div class="photo-placeholder">` block.
3. Replace it with:

   ```html
   <img src="assets/profile.jpg" alt="Dr. Harvindra Singh"
        style="width:100%;height:100%;object-fit:cover;">
   ```

### Change colours

Open **`styles.css`** and edit the variables at the top:

```css
:root {
  --color-accent:    #2563eb;   /* main blue */
  --color-accent-dark: #1d4ed8;
  --color-bg-alt:    #f7f9fc;   /* alternating section background */
}
```

### Add or remove sections

Each section in `index.html` is a `<section>` element with a unique `id`.
To add a new section:

1. Copy an existing `<section>` block.
2. Change its `id` and content.
3. Add a matching `<a>` link in the `<nav class="nav-links">` block at the top.

---

## 🔄 Updating the Site Later

Every time you push a change to the `main` branch, GitHub Pages automatically
rebuilds and redeploys within 30–60 seconds. You can edit files directly in the
GitHub web editor (click any file → pencil icon → save) without using a terminal.

---

## 🌐 Custom Domain (optional)

If you own a domain (e.g. `harvindrasingh.in`):

1. In **Settings → Pages**, enter your domain in the **Custom domain** box.
2. Add a `CNAME` DNS record at your domain registrar pointing to
   `<your-username>.github.io`.
3. Wait for DNS propagation (a few minutes to a few hours).
4. Tick **Enforce HTTPS** once it becomes available.

---

## 📜 License

This website template is provided for personal academic use by Dr. Harvindra Singh.
Feel free to adapt the structure for your own academic page.

---

## 📧 Contact

**Dr. Harvindra Singh**
Department of Mathematics, School of Allied Sciences
Dev Bhoomi Uttarakhand University, Dehradun – 248007, India

- Email: [singh.harvindrahs@gmail.com](mailto:singh.harvindrahs@gmail.com)
- Google Scholar: [Profile](https://scholar.google.com/citations?user=uSFqUHAAAAAJ&hl=en&authuser=2)
- ORCID: [0000-0002-3032-4642](https://orcid.org/0000-0002-3032-4642)
