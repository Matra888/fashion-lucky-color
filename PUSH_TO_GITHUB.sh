#!/bin/bash
# Script to push fashion-lucky-color to GitHub
# Run this after creating the repository on GitHub

echo "🚀 Pushing fashion-lucky-color to GitHub..."

# Check if git config is set
if ! git config user.name > /dev/null 2>&1; then
    echo "❌ Git user.name not set. Please run:"
    echo "   git config --global user.name 'Your Name'"
    echo "   git config --global user.email 'your.email@example.com'"
    exit 1
fi

# Add all files
git add .

# Commit
git commit -m "Initial commit: Fashion Lucky Color wheel"

# Check if remote already exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  Remote 'origin' already exists. Updating..."
    git remote set-url origin https://github.com/YOUR_USERNAME/fashion-lucky-color.git
else
    echo "➕ Adding GitHub remote..."
    git remote add origin https://github.com/YOUR_USERNAME/fashion-lucky-color.git
fi

# Rename branch to main
git branch -M main

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

echo "✅ Done! Check your GitHub repository."

