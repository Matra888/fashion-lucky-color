#!/bin/bash
# Push your Spring Summer 2026 version to GitHub (Matra888/fashion-lucky-color)
# Run this in Terminal: cd to this folder, then ./PUSH_TO_GITHUB_NOW.sh

cd "$(dirname "$0")"

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
