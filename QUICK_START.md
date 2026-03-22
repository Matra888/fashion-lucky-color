# Quick Start - Push to GitHub

## Step 1: Create Repository on GitHub
1. Go to GitHub.com → Click green "New" button
2. Name: `fashion-lucky-color`
3. Don't check "Initialize with README"
4. Click "Create repository"

## Step 2: Set Git Config (if not done)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 3: Push Your Code

**Option A: Use the script** (after editing YOUR_USERNAME)
```bash
# Edit PUSH_TO_GITHUB.sh and replace YOUR_USERNAME
# Then run:
chmod +x PUSH_TO_GITHUB.sh
./PUSH_TO_GITHUB.sh
```

**Option B: Manual commands**
```bash
cd /Users/metra.strode/fashion-lucky-color

# Commit files
git add .
git commit -m "Initial commit: Fashion Lucky Color wheel"

# Add GitHub remote (replace YOUR_USERNAME!)
git remote add origin https://github.com/YOUR_USERNAME/fashion-lucky-color.git

# Push
git branch -M main
git push -u origin main
```

## Step 4: Connect to Netlify
1. Go to app.netlify.com
2. Add new site → Import from Git → GitHub
3. Select `fashion-lucky-color` repository
4. Deploy!

---

**Important:** Replace `YOUR_USERNAME` with your actual GitHub username!

