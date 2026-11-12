# Perry antennas and mounting

Emory Hospital Perry, 1120 Morningside Drive, Perry, GA 31069. Ground elevation 359 ft AMSL.

Use two MikroTik LHG XL 5 ac radios. The radio and the 27 dBi grid are one unit. Mount each with the V arrow up, on the pole clamps shipped in the box, on a 1.5-inch galvanized mast. There is no separate antenna and no coax. The radio purchase is in the backbone budget and is not repeated in the install cost below.

## Mounting structure

Use a SitePro-class non-penetrating roof mount on the north side of the roof so the building is not in front of the dishes. Measure the roof, then cut the mast so the upper dish center is 50 ft above ground. Do not cut the roof membrane unless facilities accepts a penetration and a warranty repair.

| Dish | Faces | True bearing | Compass if declination is 6.5° W | Center above ground |
| --- | --- | --- | --- | --- |
| Upper | EOC | 15.6° | 22.1° | 50 ft |
| Lower | Warner Robins | 22.9° | 29.4° | 45 ft |

These bearings are 7.3° apart. Keep the Warner Robins dish at 45 ft. That hop is the tight one, with about 13 ft of bare-earth spare. If the roof structure allows, raise the EOC dish toward 55 ft so the pair has about 10 ft of vertical split. The short hop has the spare for that extra height.

Check the pinch point near 32.5509, −83.6641, about 6.9 miles toward Warner Robins, and the ridge about 2.9 miles out. Add a foot of antenna height for each foot of tree that stands in the Fresnel.

## Installation cost

Allowances checked 12 November 2026. Requote before a purchase order. Same structure budget as Warner Robins.

| Item | Amount | Source |
| --- | --- | --- |
| Non-penetrating roof mount | $650 | SitePro class, Tessco or Talley. Ballast comes from the structural letter. |
| 1.5 in galvanized mast | $80 | Local steel supplier. Cut to the remainder above the measured roof. |
| Mast ground kit, #6 copper | $95 | Bond to building steel. |
| Outdoor shielded Cat6, 500 ft | $149 | TrueCable. |
| Two Ethernet surge protectors | $38 | Ubiquiti ETH-SP-G2. |
| Labels, ties, and tape | $60 | One third of the project consumables lot. |
| Materials | $1,072 | |
| Roof installation labor | $1,500 | Hospital-approved vendor. After hours if the hospital requires it. |
| Structural letter | $600 | One third of the $1,800 three-site engineering allowance. |
| **Site install total** | **$3,172** | |

A path survey ($1,200), an aiming kit ($120), and freight ($250) are paid once for the whole project and are not inside this site total.

## Installation steps

1. Measure the roof height above ground. The mast length is whatever remains to put the upper dish center at 50 ft.
2. Get the stamped ballast letter, the City of Perry permit, and facilities’ roof rules. Run the FAA Notice Criteria Tool, and file Form 7460-1 if the tool requires it.
3. Set the mount on the north side of the roof, on the roof protection named in the letter. Ballast only to the stamp. Do not cut the membrane unless facilities has approved a penetration and a warranty path.
4. Bond the mount to building steel with #6 copper.
5. Hang both dishes with the V arrow up. Leave the clamps snug. Upper dish toward the EOC at 50 ft, bearing 15.6°. Lower dish toward Warner Robins at 45 ft, bearing 22.9°. If the stamp allows a taller mast, raise the EOC dish toward 55 ft and keep the Warner Robins dish at 45 ft.
6. Run shielded outdoor Cat6 in a drip loop, connector at the dish pointed down. Put one surge protector per dish at the building entry, on the outdoor side of the 24 V injector, on the same ground as the mount. Keep the injector indoors.
7. Confirm declination with the NOAA calculator on the install day. Aim on AREDN SNR with someone at the far end, then lock the clamps at the peak.
8. Label both ends of every cable with the node name.
