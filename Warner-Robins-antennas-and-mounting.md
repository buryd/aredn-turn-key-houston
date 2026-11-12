# Warner Robins antennas and mounting

Emory Hospital Warner Robins, 1601 Watson Boulevard, Warner Robins, GA 31093. Ground elevation 429 ft AMSL.

Use two MikroTik LHG XL 5 ac radios. The radio and the 27 dBi grid are one unit. Mount each with the V arrow up, on the pole clamps shipped in the box, on a 1.5-inch galvanized mast. There is no separate antenna and no coax. The radio purchase is in the backbone budget and is not repeated in the install cost below.

## Mounting structure

This roof is the high end of both paths. Use a SitePro-class non-penetrating roof mount on the south or southwest corner, so parapets and penthouses sit behind the dishes. Measure the roof, then cut the mast so the upper dish center is 65 ft above ground. Do not cut the roof membrane unless facilities accepts a penetration and a warranty repair.

| Dish | Faces | True bearing | Compass if declination is 6.5° W | Center above ground |
| --- | --- | --- | --- | --- |
| Upper | EOC | 207.4° | 213.9° | 65 ft |
| Lower | Perry | 202.9° | 209.4° | 55 ft |

These two bearings are only 4.5° apart, inside one antenna beam, so the 10 ft vertical split is required. If the roof is already near 65 ft, keep a short pole and the same 10 ft split.

The hop back to the EOC has about 22 ft of bare-earth spare at 65 ft. The hop to Perry is the long path and the tight one. Keep the lower dish at 55 ft unless the path survey finds trees, in which case add a foot of height for each foot of intrusion.

## Installation cost

Allowances checked 12 November 2026. Requote before a purchase order.

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

1. Measure the roof height above ground. The mast length is whatever remains to put the upper dish center at 65 ft.
2. Get the stamped ballast letter, the City of Warner Robins permit, and facilities’ roof rules. Run the FAA Notice Criteria Tool, and file Form 7460-1 if the tool requires it.
3. Set the mount on the south or southwest roof corner, on the roof protection named in the letter. Ballast only to the stamp. Do not cut the membrane unless facilities has approved a penetration and a warranty path.
4. Bond the mount to building steel with #6 copper.
5. Hang both dishes with the V arrow up. Leave the clamps snug. Upper dish toward the EOC at 65 ft, bearing 207.4°. Lower dish toward Perry at 55 ft, bearing 202.9°.
6. Run shielded outdoor Cat6 in a drip loop, connector at the dish pointed down. Put one surge protector per dish at the building entry, on the outdoor side of the 24 V injector, on the same ground as the mount. Keep the injector indoors.
7. Confirm declination with the NOAA calculator on the install day. Aim on AREDN SNR with someone at the far end, then lock the clamps at the peak.
8. Label both ends of every cable with the node name.
