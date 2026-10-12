#!/usr/bin/env bash
# Pulls the images from your current Figma site into ./assets
# Run once from the repo root:  bash download-assets.sh
set -e
mkdir -p assets
B="https://amarisefthimiou.com/_assets/v11"
curl -fL "$B/2f9c96d908b5c40d7eef52b07c0dd348e5702a9b.png" -o assets/hero.png
curl -fL "$B/18d218918c2d5198b2652616ff44dd7b2bf331c3.png" -o assets/student-concierge-flower.png
curl -fL "$B/dde9acaccaf815756327f7a52513b5f3e29f6f5d.png" -o assets/neeli-bendapudi.png
curl -fL "$B/d700dd45b34c786ca64a5179368be8c2eeb01cf5.png" -o assets/tailored-tracks-flower.png
curl -fL "$B/1f2185237d7ef168d2fa5f47242426efa89cbec2.png" -o assets/tailored-tracks-mural.png
curl -fL "$B/d389c8867c7267b5f208e31c228e7d8c00f6999e.png" -o assets/tailored-tracks-solution.png
curl -fL "$B/bf216e1d32f186505b3012173783e9da25fbdc8d.png" -o assets/tailored-tracks-figma.png
curl -fL "$B/5f770f1f11ba9668353e83423dca17caf4f546db.png" -o assets/crime-analytics-flower-1.png
curl -fL "$B/9ec5c22050c6a39bcd2880ed8101b86bdc67fbdd.png" -o assets/crime-analytics-flower-2.png
echo "Done — 9 images saved to ./assets"
