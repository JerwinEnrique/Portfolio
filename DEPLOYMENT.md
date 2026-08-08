# 🚀 Deployment Guide - GitHub Pages

Complete guide to deploying your React portfolio to GitHub Pages.

## Prerequisites

- ✅ GitHub account
- ✅ Repository created (e.g., `portfolio`)
- ✅ Code pushed to repository
- ✅ Build succeeds locally (`npm run build`)

## Step-by-Step Deployment

### 1. Configure Repository Base Path

Open `vite.config.js` and update the `base` path to match your repository name:

```js
export default defineConfig({
  base: '/Portfolio/',  // ← Change 'portfolio' to YOUR repo name
  // ...
})
```

**Examples:**
- Repo: `my-site` → `base: '/my-site/'`
- Repo: `portfolio` → `base: '/Portfolio/'`
- User site: `username.github.io` → `base: '/'`

**Important:** 
- Must start and end with `/`
- Must match GitHub repo name exactly
- Case-sensitive!

### 2. Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings**
3. Scroll to **Pages** (left sidebar)
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
   - Don't select branch/folder (Actions will handle it)
5. Save

### 3. Verify Workflow File Exists

Ensure `.github/workflows/deploy.yml` exists in your repo.

If missing, create it:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Push Your Code

```bash
git add .
git commit -m "Deploy React portfolio"
git push origin main
```

### 5. Monitor Deployment

1. Go to **Actions** tab in your GitHub repo
2. You'll see "Deploy to GitHub Pages" workflow running
3. Wait for green checkmark (usually 2-3 minutes)

**Stages:**
1. ⏳ Build (install deps, build site)
2. ⏳ Deploy (upload to GitHub Pages)
3. ✅ Complete

### 6. Access Your Site

Your portfolio is now live at:

```
https://[username].github.io/[repo-name]/
```

**Examples:**
- Username: `johndoe`, Repo: `portfolio`
  → `https://johndoe.github.io/Portfolio/`

- Username: `jerwinenrique`, Repo: `portfolio`
  → `https://jerwinenrique.github.io/Portfolio/`

## Troubleshooting

### ❌ Blank Page After Deployment

**Cause:** Base path mismatch

**Fix:**
1. Check `vite.config.js` → `base` matches repo name
2. Rebuild: `npm run build`
3. Push changes
4. Wait for new deployment

**Verify locally:**
```bash
npm run build
npm run preview
```
If preview shows blank, base path is wrong.

### ❌ Assets Not Loading (404 errors)

**Cause:** Asset paths incorrect

**Fix:**
1. All asset paths must start with `/`:
   ```jsx
   // ✅ Correct
   <img src="/assets/img/photo.jpg" />
   
   // ❌ Wrong
   <img src="assets/img/photo.jpg" />
   ```

2. Assets must be in `public/` folder
3. Rebuild and redeploy

### ❌ Routing Broken (404 on refresh)

**Cause:** Using BrowserRouter instead of HashRouter

**Fix:** Already fixed! We use HashRouter which works with GitHub Pages.

Routes look like: `https://site.com/#/about`

### ❌ Build Fails in GitHub Actions

**Check these:**

1. **Dependencies issue**
   - Ensure `package-lock.json` is committed
   - Try locally: `rm -rf node_modules && npm install`

2. **Build errors**
   - Check Actions logs for error details
   - Fix locally first: `npm run build`
   - Test before pushing

3. **Node version**
   - Workflow uses Node 20
   - Ensure `package.json` doesn't require specific version

### ❌ "Repository not found" or Permission Errors

**Fix:**
1. Go to repo **Settings → Actions → General**
2. Workflow permissions → Select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Save

### ❌ Changes Don't Appear After Deployment

**Cause:** Browser cache

**Fix:**
1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Try incognito/private mode
4. Wait 1-2 minutes for CDN update

## Custom Domain (Optional)

Want `yourname.com` instead of `username.github.io`?

### Steps:

1. **Buy domain** (Namecheap, Google Domains, etc.)

2. **Add CNAME file** to `public/`:
   ```
   yourname.com
   ```

3. **Configure DNS** at domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: username.github.io
   
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

4. **Enable in GitHub**:
   - Settings → Pages
   - Custom domain: `yourname.com`
   - Check "Enforce HTTPS"

5. **Update `vite.config.js`**:
   ```js
   base: '/',  // No repo name needed
   ```

6. **Redeploy**

DNS changes take 24-48 hours to fully propagate.

## Deployment Checklist

Before deploying:

- [ ] `base` in `vite.config.js` matches repo name
- [ ] `npm run build` succeeds
- [ ] `npm run preview` shows site correctly
- [ ] All assets in `public/` folder
- [ ] Asset paths start with `/`
- [ ] `.github/workflows/deploy.yml` exists
- [ ] Code committed and pushed
- [ ] GitHub Pages source set to "GitHub Actions"

## Continuous Deployment

Good news! Deployment is now automatic.

**Every time you push to `main`:**
1. GitHub Actions runs automatically
2. Builds your site
3. Deploys to GitHub Pages
4. Usually completes in 2-3 minutes

**To deploy:**
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Then wait for Actions to complete.

## Monitor Live Site

After deployment:

1. **Test all pages** work
2. **Test mobile** responsiveness
3. **Check console** for errors (F12)
4. **Test all links** (internal and external)
5. **Verify images** load
6. **Check resume PDF** downloads

## Rollback (If Needed)

If deployment breaks:

1. Go to **Actions** tab
2. Find last successful deployment
3. Click **Re-run all jobs**

Or revert locally:
```bash
git revert HEAD
git push origin main
```

## Performance Tips

After deployment:

1. **Test speed:** [PageSpeed Insights](https://pagespeed.web.dev/)
2. **Check mobile:** Use Chrome DevTools Device Mode
3. **Verify SEO:** View page source, check meta tags
4. **Test sharing:** Share link on LinkedIn/Twitter

## Getting Help

**Deployment fails?**
1. Check Actions logs for specific error
2. Search error message on Google
3. Verify all checklist items above

**Site not updating?**
1. Check Actions completed successfully (green checkmark)
2. Hard refresh browser (Ctrl+Shift+R)
3. Wait 2-3 minutes for CDN

**Still stuck?**
- Double-check `vite.config.js` base path
- Try `npm run build && npm run preview` locally
- Ensure using HashRouter (already configured)

## Success! 🎉

Your portfolio is now:
- ✅ Live on the internet
- ✅ Automatically deployed on every push
- ✅ Accessible via GitHub Pages URL
- ✅ Ready to share with recruiters!

**Next steps:**
1. Share your portfolio URL
2. Add to LinkedIn, resume, email signature
3. Keep it updated with new projects
4. Monitor analytics (optional: Google Analytics)

Happy deploying! 🚀
