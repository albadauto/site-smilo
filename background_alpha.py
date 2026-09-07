from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter


project = Path(__file__).parent
source_path = project / "public/images/brand/smilo-device-mockup-v3.png"
guide_path = project / "public/images/brand/smilo-device-mockup-transparent.png"
output_path = project / "public/images/brand/smilo-device-mockup-transparent-v2.png"

source = Image.open(source_path).convert("RGB")
guide = Image.open(guide_path).convert("RGB")

if source.size != guide.size:
    raise ValueError(f"Image sizes differ: source={source.size}, guide={guide.size}")

guide_array = np.asarray(guide)
height, width, _ = guide_array.shape

# The image generator rendered a neutral light checkerboard where
# transparency belonged. Include every light neutral shade in that guide;
# connectivity below protects white UI areas enclosed by black bezels.
channel_range = guide_array.max(axis=2).astype(np.int16) - guide_array.min(axis=2).astype(np.int16)
candidate = (channel_range <= 14) & (guide_array.min(axis=2) >= 218)

# Keep only candidate pixels connected to the canvas boundary so white areas
# enclosed by the device bezels remain opaque.
background = np.zeros((height, width), dtype=bool)
queue = deque()
for x in range(width):
    if candidate[0, x]:
        background[0, x] = True
        queue.append((0, x))
    if candidate[height - 1, x]:
        background[height - 1, x] = True
        queue.append((height - 1, x))
for y in range(height):
    if candidate[y, 0]:
        background[y, 0] = True
        queue.append((y, 0))
    if candidate[y, width - 1]:
        background[y, width - 1] = True
        queue.append((y, width - 1))

while queue:
    y, x = queue.popleft()
    for next_y, next_x in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
        if (
            0 <= next_y < height
            and 0 <= next_x < width
            and candidate[next_y, next_x]
            and not background[next_y, next_x]
        ):
            background[next_y, next_x] = True
            queue.append((next_y, next_x))

alpha = Image.fromarray(np.where(background, 0, 255).astype(np.uint8), mode="L")
alpha = alpha.filter(ImageFilter.GaussianBlur(radius=0.8))
result = source.convert("RGBA")
result.putalpha(alpha)
result.save(output_path, optimize=True)

print(f"saved={output_path}")
print(f"size={result.size} mode={result.mode} alpha_extrema={alpha.getextrema()}")
