# 🚀 Quick Start Guide

Get your modernized portfolio running in 5 minutes!

## Prerequisites Check

Before starting, ensure you have:
- ✅ Node.js 18+ installed (`node --version`)
- ✅ npm installed (`npm --version`)
- ✅ Git installed (`git --version`)

If missing, download Node.js from [nodejs.org](https://nodejs.org/)

## Step 1: Install Dependencies (2 minutes)

Open your terminal in the portfolio folder and run:

```bash
npm install
```

This installs React, Vite, Tailwind, and all dependencies.

**Expected output:** 
```
added 200+ packages in 30s
```

## Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

**Expected output:**
```
VITE v5.4.5  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  press h + enter to show help
```

🎉 **Your portfolio is now running!**

Open http://localhost:3000 in your browser.

## Step 3: Verify Everything Works

You should see:
- ✅ Navigation bar with logo and menu
- ✅ Hero section with your name and title
- ✅ Stats section
- ✅ Core competencies grid
- ✅ Footer with links

**If you see a blank page:**
1. Check browser console for errors (F12)
2. Ensure port 3000 isn't in use
3. Try `npm run dev -- --port 3001`

## Step 4: Copy Your Assets

Copy these files from your old portfolio to the new one:

```
OLD → NEW

assets/docs/resume.pdf 
  → public/assets/docs/resume.pdf

assets/img/profile-photo.jpg 
  → public/assets/img/profile-photo.jpg

assets/img/social-preview.png 
  → public/assets/img/social-preview.png
```

Create the folders if they don't exist:
```bash
mkdir -p public/assets/docs
mkdir -p public/assets/img
```

Then copy/paste your files.

## Step 5: Test the Build (1 minute)

```bash
npm run build
```

**Expected output:**
```
✓ built in 3.45s
dist/index.html                  1.23 kB
dist/assets/index-abc123.js      145.67 kB
```

If build succeeds, you're ready to deploy!

## Next Steps

### For Development
- **Edit content:** All data in `src/data/portfolio.js`
- **Edit pages:** Files in `src/pages/`
- **Edit components:** Files in `src/components/`
- **Hot reload:** Changes appear instantly in browser

### For Deployment
Read the "Deployment" section of `README.md`, or `DEPLOYMENT.md` for full details.

## Common Issues & Fixes

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Node version too old
Update Node.js to 18+ from nodejs.org

### npm not found
Install Node.js (includes npm)

### Build errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Assets not loading
- Check file paths start with `/`
- Ensure files exist in `public/` folder
- Clear browser cache (Ctrl+Shift+R)

## Development Tips

### Auto-format on save
Install VS Code extension: **Prettier**

### View on mobile
On dev server, access via:
`http://[your-ip]:3000`

Find your IP:
- Windows: `ipconfig`
- Mac/Linux: `ifconfig`

### Stop the dev server
Press `Ctrl + C` in terminal

### Clear and restart
```bash
# Stop server (Ctrl+C)
npm run dev
```

## File Structure Quick Reference

```
src/
├── pages/          → Each page (Home, About, etc.)
├── components/     → Reusable components
├── data/           → All your content (edit here!)
├── App.jsx         → Routes configuration
├── main.jsx        → React entry point
└── index.css       → Global styles

public/
└── assets/         → Images, PDFs, static files
```

## Commands Cheat Sheet

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |

## Getting Help

1. **Development issues:** Check browser console (F12)
2. **Build issues:** Check terminal output
3. **Deployment issues:** Check GitHub Actions logs
4. **Content updates:** Edit `src/data/portfolio.js`

## You're All Set! 🎉

Your portfolio foundation is running. Now you can:

1. ✅ Customize content in `src/data/portfolio.js`
2. ✅ Add your project images
3. ✅ Test thoroughly
4. ✅ Deploy to GitHub Pages

Happy coding! 🚀
