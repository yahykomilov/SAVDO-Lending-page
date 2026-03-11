@echo off
echo ========================================
echo   SAVDO - Bazaar Savdo Tracking System
echo ========================================
echo.
echo Starting Backend and Frontend...
echo.
start "Savdo Backend" cmd /k "cd /d %~dp0backend && npm run dev"
timeout /t 3 /nobreak >nul
start "Savdo Frontend" cmd /k "cd /d %~dp0apps\web && npm run dev"
echo.
echo Backend: http://localhost:3000
echo Frontend: http://localhost:5173
echo.
pause
