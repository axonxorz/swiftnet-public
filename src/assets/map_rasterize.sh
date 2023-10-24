#!/bin/bash

# Full version
cwebp -q 80 map_source.png -o map.webp

# Square version
convert map_source.png -crop 1200x1200+640+0 mapsquare.png
cwebp -q 80 mapsquare.png -o mapsquare.webp
rm mapsquare.png