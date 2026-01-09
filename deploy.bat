@echo off
echo ==========================================
echo  NotionHub Templates - Skrypt Uruchomienia
echo ==========================================
echo.

:: Sprawdz czy Node.js jest zainstalowany
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [BLAD] Node.js nie jest zainstalowany!
    echo.
    echo Pobierz Node.js z: https://nodejs.org
    echo Wybierz wersje LTS i zainstaluj.
    echo.
    echo Po instalacji uruchom ten skrypt ponownie.
    pause
    exit /b 1
)

echo [OK] Node.js znaleziony:
node --version
echo.

:: Sprawdz czy npm jest zainstalowany
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [BLAD] npm nie jest zainstalowany!
    pause
    exit /b 1
)

echo [OK] npm znaleziony:
npm --version
echo.

:: Instaluj zaleznosci
echo [1/4] Instalowanie zaleznosci...
echo To moze potrwac kilka minut przy pierwszym uruchomieniu.
echo.
call npm install
if %errorlevel% neq 0 (
    echo [BLAD] Instalacja zaleznosci nie powiodla sie!
    pause
    exit /b 1
)
echo.
echo [OK] Zaleznosci zainstalowane!
echo.

:: Buduj projekt
echo [2/4] Budowanie projektu...
call npm run build
if %errorlevel% neq 0 (
    echo [BLAD] Budowanie nie powiodlo sie!
    pause
    exit /b 1
)
echo.
echo [OK] Projekt zbudowany!
echo.

:: Info o deploymencie
echo ==========================================
echo  SUKCES! Projekt jest gotowy do deploy.
echo ==========================================
echo.
echo Masz teraz 2 opcje:
echo.
echo OPCJA 1 - Vercel (ZALECANE - najlatwiejsze):
echo   1. Wgraj ten folder na GitHub
echo   2. Wejdz na https://vercel.com
echo   3. Kliknij "New Project"
echo   4. Wybierz swoje repo z GitHub
echo   5. Kliknij "Deploy"
echo   6. Gotowe!
echo.
echo OPCJA 2 - Test lokalny:
echo   Uruchom: npm run start
echo   Otworz: http://localhost:3000
echo.
echo ==========================================
echo.
echo Czy chcesz uruchomic strone lokalnie do testow? (T/N)
set /p choice=
if /i "%choice%"=="T" (
    echo.
    echo Uruchamianie serwera lokalnego...
    echo Otworz przegladarke: http://localhost:3000
    echo Aby zatrzymac: Ctrl+C
    echo.
    call npm run start
)

pause
