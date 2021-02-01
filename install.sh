#!/usr/bin/bash

apt update && apt upgrade
pkg install nodejs
pkg install libwebp
pkg install ffmpeg
pkg install wget
pkg install tesseract
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
bpm install

echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
