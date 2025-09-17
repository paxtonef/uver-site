#!/bin/bash
set -e  # stop en cas d'erreur

echo "🧹 Nettoyage des caches Next.js et Node..."

# Supprimer le dossier .next (build Next.js)
rm -rf .next

# Supprimer node_modules et package-lock.json pour repartir clean
rm -rf node_modules package-lock.json

# Réinstaller les dépendances
echo "📦 Réinstallation des dépendances..."
npm install

# Reconstruire le projet
echo "⚒️  Reconstruction du projet..."
npm run build

echo "✅ Nettoyage et build terminés avec succès !"

