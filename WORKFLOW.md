# Your Workflow: Test Locally → Deploy When Ready

This guide helps you test changes on your computer first, and only update Netlify when you're happy with the result.

---

## 📁 Project Structure

| Folder/File | Purpose |
|-------------|---------|
| **Root** (`index.html`, `script.js`, `styles.css`) | **Your live version** — this is what you edit and what gets deployed to Netlify |
| **template-base/** | **Backup of the original** — untouched copy for reference. Don't edit this. |

---

## 🧪 Step 1: Test Locally (Before Deploying)

Always test on your computer first. Open Terminal and run **one** of these:

### Option A: Python (usually pre-installed on Mac)
```bash
cd /Users/metra.strode/fashion-lucky-color
python3 -m http.server 8080
```

### Option B: Node/npx (if you have Node.js)
```bash
cd /Users/metra.strode/fashion-lucky-color
npx serve
```

Then open your browser and go to:
- **Option A:** http://localhost:8080
- **Option B:** http://localhost:3000 (or the URL shown in the terminal)

**To stop the server:** Press `Ctrl + C` in the Terminal.

---

## ✅ Step 2: What to Test

Before deploying, check:

- [ ] Title shows: "Spin Your Spring / Summer 2026 Fashion Colors"
- [ ] Spin button works
- [ ] Color wheel spins and stops
- [ ] Result popup shows after spin
- [ ] "Color Combinations" button works
- [ ] Typeform link works
- [ ] Try on mobile size (resize browser or use phone)

---

## 🚀 Step 3: Deploy to Netlify (Only When You Approve)

**Only do this when you're happy with your local test!**

### If you use GitHub + Netlify (auto-deploy):

1. Open Terminal
2. Run:

```bash
cd /Users/metra.strode/fashion-lucky-color

# Save your changes
git add .
git commit -m "Update title to Spring/Summer 2026"

# Push to GitHub (Netlify will auto-deploy)
git push
```

### If you deploy manually (drag & drop):

1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag the **entire project folder** onto the deploy area
3. Netlify will update your site

---

## 🔄 Quick Reference

| I want to... | Do this |
|--------------|---------|
| **Test my changes** | Run `python3 -m http.server 8080` or `npx serve`, open localhost |
| **Compare with original** | Open `template-base/index.html` in browser (or run server from that folder) |
| **Deploy to Netlify** | `git add .` → `git commit -m "message"` → `git push` |
| **Undo a change** | Copy file from `template-base/` back to root |

---

## ❓ Common Questions

**Q: Will Netlify update automatically when I edit files?**  
A: No. Netlify only updates when you push to GitHub (or drag & drop). So you can edit and test locally as much as you want without affecting the live site.

**Q: I broke something. How do I go back?**  
A: Copy the file from `template-base/` to replace the broken one. For example: `cp template-base/index.html index.html`

**Q: Do I need to run the server every time?**  
A: Yes, for local testing. Or you can double-click `index.html` to open it in a browser — but some features (like loading fonts) may work better with the server.

---

Need help? Ask anytime!
