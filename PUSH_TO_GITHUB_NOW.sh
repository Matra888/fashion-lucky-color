#!/bin/bash
# Push your Spring Summer 2026 version to GitHub (Matra888/fashion-lucky-color)
# Run this in Terminal: cd to this folder, then ./PUSH_TO_GITHUB_NOW.sh

# ⬇️ FILL IN YOUR DETAILS BELOW (edit once, save, then run) ⬇️
GIT_NAME="Your Name"
GIT_EMAIL="your.email@example.com"
# ⬆️ Change the two lines above to your real name and GitHub email ⬆️

cd "$(dirname "$0")"

# Set git identity (from MY_DETAILS.txt if you filled it in, else from variables above)
if [ -f "MY_DETAILS.txt" ]; then
    source MY_DETAILS.txt 2>/dev/null || true
fi
if [ -n "$GIT_NAME" ] && [ "$GIT_NAME" != "Your Name" ]; then
    git config user.name "$GIT_NAME"
    git config user.email "$GIT_EMAIL"
    echo "✓ Using: $GIT_NAME <$GIT_EMAIL>"
elif ! git config user.name > /dev/null 2>&1; then
    echo "❌ Git identity not set. Either:"
    echo "   1. Edit MY_DETAILS.txt with your name and email, then run again"
    echo "   2. Or run: git config --global user.name 'Your Name'"
    echo "             git config --global user.email 'your@email.com'"
    exit 1
fi

echo "📦 Adding all files..."
git add .

echo "💾 Committing..."
git commit -m "Spring Summer 2026 update"

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Commit failed. If you see 'trailer' error, try:"
    echo "   git config --global --unset-all commit.gpgsign 2>/dev/null"
    echo "   git config --global --unset-all format.notes 2>/dev/null"
    echo "   Then run this script again."
    exit 1
fi

echo "🔗 Setting up GitHub remote..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/Matra888/fashion-lucky-color.git

echo "🌿 Ensuring main branch..."
git branch -M main

echo "📤 Pushing (this may overwrite GitHub - that's ok)..."
git push -u origin main --force

echo ""
echo "✅ Done! Check https://github.com/Matra888/fashion-lucky-color"
