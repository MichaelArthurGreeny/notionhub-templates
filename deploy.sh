#!/bin/bash

echo "=========================================="
echo " NotionHub Templates - Skrypt Uruchomienia"
echo "=========================================="
echo ""

# Sprawdz czy Node.js jest zainstalowany
if ! command -v node &> /dev/null; then
    echo "[BLAD] Node.js nie jest zainstalowany!"
    echo ""
    echo "Zainstaluj Node.js:"
    echo "  Mac: brew install node"
    echo "  Ubuntu/Debian: sudo apt install nodejs npm"
    echo "  Lub pobierz z: https://nodejs.org"
    echo ""
    exit 1
fi

echo "[OK] Node.js znaleziony:"
node --version
echo ""

# Sprawdz czy npm jest zainstalowany
if ! command -v npm &> /dev/null; then
    echo "[BLAD] npm nie jest zainstalowany!"
    exit 1
fi

echo "[OK] npm znaleziony:"
npm --version
echo ""

# Instaluj zaleznosci
echo "[1/4] Instalowanie zaleznosci..."
echo "To moze potrwac kilka minut przy pierwszym uruchomieniu."
echo ""
npm install
if [ $? -ne 0 ]; then
    echo "[BLAD] Instalacja zaleznosci nie powiodla sie!"
    exit 1
fi
echo ""
echo "[OK] Zaleznosci zainstalowane!"
echo ""

# Buduj projekt
echo "[2/4] Budowanie projektu..."
npm run build
if [ $? -ne 0 ]; then
    echo "[BLAD] Budowanie nie powiodlo sie!"
    exit 1
fi
echo ""
echo "[OK] Projekt zbudowany!"
echo ""

# Info o deploymencie
echo "=========================================="
echo " SUKCES! Projekt jest gotowy do deploy."
echo "=========================================="
echo ""
echo "Masz teraz 2 opcje:"
echo ""
echo "OPCJA 1 - Vercel (ZALECANE - najlatwiejsze):"
echo "  1. Wgraj ten folder na GitHub"
echo "  2. Wejdz na https://vercel.com"
echo "  3. Kliknij 'New Project'"
echo "  4. Wybierz swoje repo z GitHub"
echo "  5. Kliknij 'Deploy'"
echo "  6. Gotowe!"
echo ""
echo "OPCJA 2 - Test lokalny:"
echo "  Uruchom: npm run start"
echo "  Otworz: http://localhost:3000"
echo ""
echo "=========================================="
echo ""
read -p "Czy chcesz uruchomic strone lokalnie do testow? (t/n) " choice
if [ "$choice" = "t" ] || [ "$choice" = "T" ]; then
    echo ""
    echo "Uruchamianie serwera lokalnego..."
    echo "Otworz przegladarke: http://localhost:3000"
    echo "Aby zatrzymac: Ctrl+C"
    echo ""
    npm run start
fi
