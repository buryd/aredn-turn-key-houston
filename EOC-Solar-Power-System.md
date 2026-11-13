# EOC solar power system

Houston County Emergency Operations Center, 102 Chief Williams Drive, Kathleen, GA 31047.

The solar pack powers the two dish radios and the indoor hAP. FreePBX, the phones, and both Pis stay on the generator outlet. The panels sit on the ground south of the tower. The tower is house-bracketed to the south wall. The cabinet is the shaded NEMA 3R box at the tower base. The mounting drawing is `EOC-Radios-Antennas-Solar.jpg`. The parts inside the cabinet are drawn in `NEMA-3R-Component-Mounting.jpg`. Prices and sources are in `Solar-Power-BOM.csv`.

## What the sun does

Two Renogy 250 W panels, model RSP250DCT-US, are wired in series. Each has an open-circuit voltage of 22.35 V, so the string is about 45 V in standard sun and about 51 V on a cold morning. That is under the controller's 100 V limit. A 15 A breaker opens each leg of the string before the wires enter the cabinet.

The Victron SmartSolar MPPT 100/30, model SCC110030210, takes that string voltage and charges the battery. Set a user-defined 24 V lithium profile. Absorption is 28.4 V. Float is 27.0 V. Equalize is off. Temperature compensation is off.

The battery is one LiTime 24 V 100 Ah LiFePO4. Nameplate energy is about 2,560 Wh. A 40 A fuse sits within 7 inches of the battery positive.

## Why the radios see 24.0 V

The battery rises to 28.4 V while it is charging. The hAP ac3 is limited to 28 V. The dishes accept 10–30 V. A Victron Orion-Tr 24/24-5 isolated converter, model ORI242410110, sits between the battery and the radios. Its output is set to 24.0 V. The output is isolated, so the 24 V negative stays off the battery ground bar. A 10 A fuse is on the Orion input.

From the Orion, a 2 A fuse feeds each dish injector and a third 2 A fuse feeds the hAP. The fourth position on the fuse block is a spare.

## From the cabinet to the radios

The 24.0 V pair leaves the bottom of the cabinet and enters the building. Indoors, each MikroTik injector puts that voltage on the outdoor Cat6. Passive PoE uses pins 4 and 5 positive and pins 7 and 8 negative. One surge protector per dish sits at the building entry, on the outdoor side of the injector. The injectors stay indoors.

Shielded Cat6 runs up the south-side tower. The upper dish, aimed at Warner Robins, is at 60 ft. The lower dish, aimed at Perry, is at 50 ft. The hAP plugs into the same 24 V rail on its 5.5/2 mm jack, center positive.

The radios draw current the whole time they are powered. The site load is about 40 W, about 2 A at 24 V, whether or not anyone is talking. After the loss in the Orion, the battery supplies about 46 W.

## Night and cloud

While the sun is up, the array replaces a day's use. On a normal December day the 500 W of panels makes about 1,300 Wh, and the radios use about 1,100 Wh. The battery carries the hours the sun is down.

One 100 Ah battery holds about 2,000 Wh after an 80 percent discharge. At 46 W that is about 45 hours, a night plus a cloudy day. The battery's own switch opens if a cell falls too low. The Orion's low-voltage shutdown is 14 V, which is too low for this lithium battery, so the battery switch is what stops the discharge. Keep that threshold at or above 22.4 V, which is 2.8 V per cell.

## Ground and heat

One #6 wire bonds the battery negative to the building grounding electrode. The panel frames, the controller case, and the Ethernet surge protectors land on that same bar. The Orion output negative does not.

Shade the cabinet. Do not charge the battery above 113°F. Cable entries are in the bottom of the box. Nothing mounts on the slip-on cover. The box rests on a support at the tower base. The wall screws only keep it from tipping.
