# EOC antennas and mounting

Houston County Emergency Operations Center, 102 Chief Williams Drive, Kathleen, GA 31047. Ground elevation 369 ft AMSL.

Use two MikroTik LHG XL 5 ac radios. The radio and the 27 dBi grid are one unit. Mount each with the V arrow up, on the pole clamps shipped in the box, on a 1.5-inch galvanized mast. There is no separate antenna and no coax. The radio purchase is in the backbone budget and is not repeated in the install cost below.

## Mounting structure

The fire and emergency management building is too low for a roof mast. Use one 60 ft Rohn 25G-class house-bracket tower on the south side of the building, bracketed to the south wall. If the structural engineer will not accept a bracket, use a guyed 60 ft tower on that same south side and keep the anchor allowance.

| Dish | Faces | True bearing | Compass if declination is 6.5° W | Center above ground |
| --- | --- | --- | --- | --- |
| Upper | Warner Robins | 27.4° | 33.9° | 60 ft |
| Lower | Perry | 195.6° | 202.1° | 50 ft |

The two shots are 168° apart, so one mast carries both dishes. Put the Warner Robins dish at the top, aimed 27.4°. From the south wall that shot looks north-northeast and clears the low roof. Put the Perry dish 10 ft below it, aimed 195.6°, looking south and away from the building. The survey still has to confirm the hose tower, flagpole, and trees are outside both beams.

These heights clear bare earth with about 22 ft of spare toward Warner Robins and about 15 ft toward Perry. They do not include trees. Walk the pinch point near 32.5534, −83.6700 before ordering steel. Add a foot of antenna height for each foot of tree that stands in the Fresnel.

## Installation cost

Allowances checked 12 November 2026. Requote before a purchase order. County crews can self-perform and drop the labor line.

| Item | Amount | Source |
| --- | --- | --- |
| 60 ft Rohn 25G-class tower materials | $2,400 | DX Engineering or 3Star Inc. Allowance, not a quote. |
| Bracket anchors or guy hardware | $350 | Same tower vendor. |
| Mast ground kit, #6 copper | $95 | DX Engineering or local electrical supply. |
| Outdoor shielded Cat6, 500 ft | $149 | TrueCable. |
| Two Ethernet surge protectors | $38 | Ubiquiti ETH-SP-G2. |
| Labels, ties, and tape | $60 | One third of the project consumables lot. |
| Materials | $3,092 | |
| Tower installation labor | $2,200 | Local tower contractor. Set, plumb, bond, and dress cables. |
| Structural letter | $600 | One third of the $1,800 three-site engineering allowance. |
| **Site install total** | **$5,892** | |

A path survey ($1,200), an aiming kit ($120), and freight ($250) are paid once for the whole project and are not inside this site total.

## Installation steps

1. Get the Houston County building permit and the stamped letter for a 60 ft tower. Run the FAA Notice Criteria Tool first, and file Form 7460-1 if the tool requires it.
2. Call Georgia 811 before any digging for a base, a ground rod, or a guy anchor.
3. Have a licensed electrician bond the tower to the building grounding electrode system with #6 copper. Drive a new rod only when the engineer says the building ground cannot be used, and bond that rod to the building ground.
4. Set the base on the south side and house-bracket the tower to the south wall. Stack the tower to 60 ft and plumb it. If the stamp requires guys, keep the anchors out of the Perry beam.
5. Hang both dishes with the V arrow up. Leave the clamps snug. Upper dish toward Warner Robins at 60 ft, bearing 27.4°. Lower dish toward Perry at 50 ft, bearing 195.6°.
6. Run shielded outdoor Cat6 in a drip loop, with the connector at the dish pointed down. Put one surge protector per dish at the building entry, on the outdoor side of the 24 V injector, on the same ground as the tower. Keep the injector indoors.
7. Confirm declination with the NOAA calculator on the install day. A compass only has to land the dish inside the 7° beam. Aim on AREDN SNR with someone at the far end, then lock the clamps at the peak.
8. Label both ends of every cable with the node name.
