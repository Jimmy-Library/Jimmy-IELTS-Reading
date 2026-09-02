#!/bin/bash
cd "$(dirname "$0")" || exit 1
APP_URL="http://127.0.0.1:8765/OPEN-Jimmy-IELTS-Reading.html"

if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server 8765 --bind 127.0.0.1 >/tmp/jimmy-ielts-offline.log 2>&1 &
  sleep 2
  open "$APP_URL"
else
  open "OPEN-Jimmy-IELTS-Reading.html"
fi
