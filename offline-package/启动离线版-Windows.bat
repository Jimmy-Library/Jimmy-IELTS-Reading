@echo off
setlocal
cd /d "%~dp0"
set "APP_URL=http://127.0.0.1:8765/OPEN-Jimmy-IELTS-Reading.html"

where py >nul 2>nul
if %errorlevel%==0 (
  start "Jimmy IELTS Offline Server" /min py -m http.server 8765 --bind 127.0.0.1
  timeout /t 2 /nobreak >nul
  start "" "%APP_URL%"
  exit /b 0
)

where python >nul 2>nul
if %errorlevel%==0 (
  start "Jimmy IELTS Offline Server" /min python -m http.server 8765 --bind 127.0.0.1
  timeout /t 2 /nobreak >nul
  start "" "%APP_URL%"
  exit /b 0
)

echo Python was not found. Opening the direct webpage version instead.
start "" "OPEN-Jimmy-IELTS-Reading.html"
exit /b 0
