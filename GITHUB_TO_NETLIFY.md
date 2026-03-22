# Deploy from GitHub to Netlify - Step by Step

Your project is now initialized as a Git repository! Here's how to push it to GitHub and deploy to Netlify.

---

## 📋 Step 1: Set Up Git (One-time setup)

Open Terminal and run these commands (use your actual name and email):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## 🚀 Step 2: Push to GitHub

### 2.1: Create GitHub Repository
1. Go to [github.com](https://github.com) and sign up/login
2. Click the **"+"** icon → **"New repository"**
3. Repository name: `fashion-lucky-color` (or any name you like)
4. Choose **Public** or **Private**
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **"Create repository"**

### 2.2: Push Your Files
In Terminal, navigate to your project folder and run:

```bash
cd /Users/metra.strode/fashion-lucky-color

# Add all files
git add .

# Commit
git commit -m "Initial commit: Fashion Lucky Color wheel"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/fashion-lucky-color.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note:** GitHub might ask you to authenticate. Follow the prompts.

---

## 🌐 Step 3: Connect GitHub to Netlify

### 3.1: Deploy Site
1. Go to [app.netlify.com](https://app.netlify.com)
2. Sign up or log in (use GitHub to sign in for easier connection)
3. Click **"Add new site"** → **"Import an existing project"**
4. Click **"Deploy with GitHub"**
5. Authorize Netlify to access your GitHub account
6. Select your `fashion-lucky-color` repository
7. Netlify will auto-detect it's a static site

### 3.2: Build Settings
Netlify should auto-detect:
- **Build command:** (leave empty - it's static)
- **Publish directory:** `/` (root)

Click **"Deploy site"**

### 3.3: Your Site is Live!
- Netlify will deploy your site
- You'll get a URL like: `amazing-name-12345.netlify.app`
- ⚡ **Every time you push to GitHub, Netlify will auto-deploy!**

---

## 🔗 Step 4: Connect Custom Domain

1. In Netlify dashboard → Your site → **"Domain settings"**
2. Click **"Add custom domain"**
3. Enter: `charismenthe.com`
4. Follow Netlify's DNS instructions:
   - They'll show you DNS records to add
   - Go to your domain registrar
   - Add the DNS records
5. Wait a few minutes for DNS to propagate
6. Done! Your site is at `charismenthe.com`

---

## 🔄 Updating Your Site (After Initial Setup)

Once connected, updating is super easy:

```bash
# Make changes to your files
# Then in Terminal:

git add .
git commit -m "Description of your changes"
git push
```

Netlify will automatically detect the push and redeploy your site!

---

## ✅ Quick Checklist

- [ ] Set git config (name & email)
- [ ] Create GitHub repository
- [ ] Push files to GitHub
- [ ] Connect GitHub to Netlify
- [ ] Deploy site on Netlify
- [ ] Add custom domain (charismenthe.com)
- [ ] Test your site!

---

## 🆘 Troubleshooting

### "Permission denied" when pushing?
- Make sure you're authenticated with GitHub
- Use GitHub CLI or Personal Access Token if needed

### "Repository not found"?
- Check repository name matches exactly
- Verify you have access to the repo

### Netlify build fails?
- Check that all files are in the root directory
- Verify file paths are correct (relative paths)

---

## 🎯 Benefits of GitHub + Netlify

✅ **Version control** - Track all changes
✅ **Auto-deployments** - Push to GitHub = auto-deploy
✅ **Easy updates** - Just push changes
✅ **Free hosting** - Forever free tier
✅ **Custom domain** - Use your own domain
✅ **SSL/HTTPS** - Automatic free SSL

---

Need help? Both GitHub and Netlify have great documentation!

