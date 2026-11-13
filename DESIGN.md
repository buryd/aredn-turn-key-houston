# Houston County 5.8 GHz AREDN Backbone

Desk design dated 12 November 2026. This is an amateur-radio emergency mesh under FCC Part 97, using AREDN firmware on commercial 5 GHz radios. It connects three operating positions:

| Site | Address | Ground elevation | Coordinates used |
| --- | --- | --- | --- |
| Houston County EOC (HEMA), Kathleen | 102 Chief Williams Drive, Kathleen, GA 31047 | 369 ft AMSL | 32.521989, −83.689266 |
| Emory Hospital Warner Robins | 1601 Watson Boulevard, Warner Robins, GA 31093 | 429 ft AMSL | 32.616245, −83.631256 |
| Emory Hospital Perry | 1120 Morningside Drive, Perry, GA 31069 | 359 ft AMSL | 32.459398, −83.710026 |

Ground elevations are USGS 3DEP at those coordinates. Roof mounts will shift the coordinates by a few tens of meters. Recompute the bearings after the roof points are picked.

The priced bill of materials is in `BOM.csv`. Hardware totals **$10,576.66**. The project budget, including structural letters, installation allowances, a path survey, freight, and 8 percent contingency, is **$19,872.79**. Software licenses are $0. Firm quotes replace every allowance before the county encumbers funds.

## What the network carries

Each building has its own phone system, mail server, and chat server. Local service keeps working if a radio hop is down. The other buildings are reachable when the hop is up.

| Need | How it is met | Count |
| --- | --- | --- |
| Voice | FreePBX 17 on a mini PC, three Grandstream phones | 3 phones per site, 9 total |
| Mail | Citadel on a Raspberry Pi 5 | 1 per site |
| Chat | MeshChat on a second Raspberry Pi 5 | 1 per site |
| Backbone | MikroTik LHG XL 5 ac on AREDN, one dish per hop end | 6 dishes, plus 2 spares |

Traffic is small. Three simultaneous G.711 calls are about 0.5 Mbit/s. Mail and chat are smaller if attachments stay under 1 MB. Every hop, on a clear path, has more than 19 dB of margin at a much higher rate than that. The design spends that margin on reliability: 10 MHz channels, narrow dishes, and a third hop so the two hospitals can still talk if the EOC mast is down.

## Topology

```
          Emory Warner Robins
          1601 Watson Blvd
         dish 65 ft    dish 55 ft
            \            /
     7.34 mi \          / 11.77 mi
      5820 MHz\        / 5735 MHz
              \      /
               EOC Kathleen
               102 Chief Williams Dr
               dish 60 ft and dish 50 ft
                      |
                 4.49 mi
                 5765 MHz
                      |
              Emory Perry
              1120 Morningside Dr
              dish 50 ft and dish 45 ft
```

The EOC is the hub because it sits between the hospitals and the two shots from the EOC are 168 degrees apart. The direct hospital-to-hospital hop is the diversity path. It is also the long path, and at Warner Robins the two dishes point only 4.5 degrees apart (207.4° toward the EOC, 202.9° toward Perry). Those two radios are separated in frequency by 85 MHz and in height by about 10 ft so they do not overload each other.

At each building the two outdoor radios do not talk to each other over the air. They are different channels. An indoor MikroTik hAP ac3 running AREDN joins them with device-to-device linking on the Ethernet switch ports. Servers and phones sit on the hAP LAN and are reached from the mesh by advertised services.

There is no default route to the internet and no tunnel. The mesh stays a closed amateur network.

## Link budget

Radio: MikroTik LHG XL 5 ac, integrated dual-polarization grid.

| Parameter | Value | Source |
| --- | --- | --- |
| Model installed | RBLHGG-5acD-XL-US, bought as the 4-pack RBLHGG-5acD-XL4pack-US | MikroTik product page |
| Antenna gain | 27 dBi, 7° beamwidth | MikroTik |
| Conducted power used in the budget | 25 dBm at MCS0 | MikroTik wireless table |
| EIRP | 52 dBm (about 158 W) | 25 dBm + 27 dBi |
| MCS7 receive sensitivity | −75 dBm | MikroTik table, 20 MHz datasheet figure |
| MCS0 receive sensitivity | −96 dBm | MikroTik table |
| Frequency range of the US model | 5725–5835 MHz, lock cannot be removed | MikroTik |
| Firmware | Current AREDN stable for `mikrotik_lhgg-5acd-xl` | arednmesh.org firmware selector |

The US-locked model is the correct purchase for a county project. The channel plan below fits inside 5725–5835 MHz. An international unit is not required.

Free-space loss uses 5820 MHz as a representative frequency. The 1.5 dB allowance covers aiming error and the shielded-cable connectors. There is no coax run; the feed is integrated.

| Hop | Distance | Free-space loss | Expected receive | Margin above MCS7 | Margin above MCS0 |
| --- | --- | --- | --- | --- | --- |
| EOC – Warner Robins | 11.81 km / 7.34 mi | 129.2 dB | −52 dBm | 23 dB | 44 dB |
| EOC – Perry | 7.23 km / 4.49 mi | 124.9 dB | −47 dBm | 28 dB | 49 dB |
| Perry – Warner Robins | 18.94 km / 11.77 mi | 133.3 dB | −56 dBm | 19 dB | 40 dB |

Rain fade at 5.8 GHz on these distances is a few decibels in a heavy storm. A clear path has enough margin for the phones at a high MCS rate. A tree in the Fresnel zone does not have a link budget solution. It has a height solution or a relay solution.

Set the AREDN distance field above the real path so the acknowledgment timing is long enough: 9 miles, 6 miles, and 13 miles.

## Channel plan

All three hops use a 10 MHz channel width. Center frequencies sit inside the US radio lock and are spread so that the two radios on one roof are not on adjacent channels.

| Hop | Center | Occupied | Width | AREDN distance setting |
| --- | --- | --- | --- | --- |
| EOC – Warner Robins | 5820 MHz | 5815–5825 | 10 MHz | 9 mi |
| EOC – Perry | 5765 MHz | 5760–5770 | 10 MHz | 6 mi |
| Perry – Warner Robins | 5735 MHz | 5730–5740 | 10 MHz | 13 mi |

Separation on the roof: 55 MHz at the EOC, 30 MHz at Perry, 85 MHz at Warner Robins. Warner Robins gets the widest split because its dishes look almost the same direction.

Before the first transmission, check the live AREDN map and ask the Georgia ARES emergency coordinator whether any existing 5 GHz node already uses these centers. Move a hop by 10 MHz inside the table above if one is occupied. Keep the Warner Robins pair at opposite ends of the list.

SSID, mesh key, and firmware channel list are whatever the current stable AREDN release uses. Do not invent a private SSID. These nodes join the AREDN protocol so a later county node can be added.

## Antennas and mounting heights

The dish and the radio are one unit. There is no separate antenna to buy and no coax loss to calculate. Mount the grid with the V arrow up, per the MikroTik label, so the dual-polarization chains match at both ends.

Heights below are the dish center above local ground. They clear USGS bare earth by at least 60 percent of the first Fresnel zone, with earth curvature at k = 4/3, and they leave the spare shown in the last column. They do not include trees.

| Site | Dish faces | True bearing | Compass if declination is 6.5° W | Center AGL | Center AMSL | Bare-earth spare |
| --- | --- | --- | --- | --- | --- | --- |
| EOC | Warner Robins | 27.4° | 33.9° | 60 ft | 429 ft | 22 ft on that hop |
| EOC | Perry | 195.6° | 202.1° | 50 ft | 419 ft | 15 ft on that hop |
| Warner Robins | EOC | 207.4° | 213.9° | 65 ft | 494 ft | 22 ft on that hop |
| Warner Robins | Perry | 202.9° | 209.4° | 55 ft | 484 ft | see diversity hop |
| Perry | EOC | 15.6° | 22.1° | 50 ft | 409 ft | 15 ft on that hop |
| Perry | Warner Robins | 22.9° | 29.4° | 45 ft | 404 ft | 13 ft on that hop |

Confirm magnetic declination with the NOAA calculator for the install day. Central Georgia is several degrees west. A compass only has to land the dish inside a 7 degree beam. The final aim is the AREDN SNR number, with the far end watching while the near end is moved in half-degree steps.

How each site gets there:

- **EOC.** The fire and emergency management building is a low structure. A roof mast will not reach 60 ft above ground. Budget a 60 ft Rohn 25G-class bracket tower on the south side of the building, bracketed to the south wall, or a guyed tower on that same side if the structural engineer rejects a bracket. Put the Warner Robins dish at the top, aimed north-northeast over the roof, and the Perry dish 10 ft below it, aimed south. The two look almost opposite directions, so one mast is enough.
- **Warner Robins hospital.** The building is multi-story and the ground is already the high end of every path. Measure the roof. A non-penetrating mount and a short mast make up the difference between the roof and 65 ft above ground. Put the Perry dish about 10 ft lower on the same mast. If the roof is already near 65 ft, use a short pole and keep the 10 ft vertical split.
- **Perry hospital.** Same roof method, to 50 ft above ground for the EOC dish and 45 ft for the Warner Robins dish.

Pinch points to walk or fly during the survey, from the same 3DEP sample:

| Hop | Fraction along the path | Approximate point | Ground | What to look for |
| --- | --- | --- | --- | --- |
| EOC – Warner Robins | 0.33 from the EOC | 32.5534, −83.6700 | 399 ft | Trees or buildings taller than about 20 ft on this ridge consume the spare |
| EOC – Perry | 0.58 from the EOC | 32.4855, −83.7014 | 377 ft | Same test, about 15 ft of spare |
| Perry – Warner Robins | 0.58 from Perry | 32.5509, −83.6641 | 390 ft | Tightest spare, about 13 ft; also check 2.9 miles from Perry |

Samples are about a mile apart. A narrow ridge, a water tower, or a tree row between samples will not show in this desk study. The path survey is a hold point before the tower is ordered. If the corridor is open, the EOC mast can be shortened and that budget line drops. If a tree stands in the Fresnel, add a foot of antenna height for each foot of intrusion, at the end closer to the tree, or pick a relay site. Do not raise power to punch through foliage. At 5.8 GHz it will not.

Wind: the LHG XL is rated 186 N at 205 km/h. That covers a middle Georgia thunderstorm. Guy or bracket the EOC mast per the stamp. Ice loading is not a design driver in Houston County.

## Legal operating rules

This design is for a licensed amateur station. It is not a county IT circuit and it is not a hospital clinical circuit.

| Rule | What it means on this network |
| --- | --- |
| 47 CFR 97.301 | The 5 cm band is available to Technician class and above. Every control operator holds at least a Technician license. |
| 47 CFR 97.109 | A control operator is responsible whenever a transmitter is on. Name a trustee. The club call sign goes in every node name. Automatic control is acceptable when the trustee can shut the site down. |
| 47 CFR 97.113 | Messages travel in the clear. Voice uses SIP and RTP, or IAX2, with encryption turned off. Mail uses HTTP and SMTP. Chat uses HTTP. No VPN, no Wi-Fi passphrase, no SRTP, no HTTPS user service across the RF, no commercial traffic, no music. |
| 47 CFR 97.115 | Hospital staff who are not hams may use the phones while a control operator is present, under the third-party rules. |
| 47 CFR 97.403 and 97.405 | During an actual emergency, stations may use any means of radiocommunication at their disposal to provide essential communication. |

HIPAA and hospital policy are separate from Part 97, and they are stricter here. Do not put patient information, scheduling tied to a patient, or a clinical system on this mesh. Emory facilities issues a written statement that the mesh switches are not connected to the hospital network. The mesh lives in a radio closet, on its own UPS, on its own switch.

A lawyer for the county or an ARRL volunteer counsel should read the one-page operating plan before the first non-ham uses a phone. This document is the engineering design, not a legal opinion.

## Software

Install the current stable release on build day. Record the version in the as-built sheet. Do not run nightly firmware on these three sites.

| Role | Software | Where to get it | Notes |
| --- | --- | --- | --- |
| Outdoor dishes and indoor hAP | AREDN stable | Firmware selector at arednmesh.org | Images `mikrotik_lhgg-5acd-xl` and `mikrotik_hap-ac3`. Download the factory/kernel image and the sysupgrade image. |
| Phone system | FreePBX 17 Distro | freepbx.org | Build the installer on a laptop that has internet. The PBX itself runs with no WAN. |
| Mail | Citadel | citadel.org Easy Install | Raspberry Pi OS Lite, 64-bit. Serve the user interface on HTTP. |
| Chat | MeshChat | The build linked from the AREDN applications page | One board per site. Boards do not replicate. Operators bookmark the other two when the hop is up. Name them HOUSTON-EOC, HOUSTON-WR, HOUSTON-PERRY. |
| Pi operating system | Raspberry Pi OS Lite 64-bit | raspberrypi.com | Current image on build day. |
| Phone codec set | G.711 µ-law and G.722 | Set in FreePBX | Both are unencrypted. G.711 is the fallback. |

Node names carry the trustee call sign. Replace `CALL` below.

| Node | Name |
| --- | --- |
| EOC dish toward Warner Robins | `CALL-EOC-WR` |
| EOC dish toward Perry | `CALL-EOC-PERRY` |
| EOC indoor | `CALL-EOC-HAP` |
| Warner Robins dish toward EOC | `CALL-WR-EOC` |
| Warner Robins dish toward Perry | `CALL-WR-PERRY` |
| Warner Robins indoor | `CALL-WR-HAP` |
| Perry dish toward EOC | `CALL-PERRY-EOC` |
| Perry dish toward Warner Robins | `CALL-PERRY-WR` |
| Perry indoor | `CALL-PERRY-HAP` |

On each hAP, expand the LAN to a /24 and reserve addresses:

| Address | Host |
| --- | --- |
| .10 | FreePBX |
| .11 | Citadel Pi |
| .12 | MeshChat Pi |
| .21 .22 .23 | The three phones |

Advertised services and port forwards on the hAP:

| Service name | Protocol | Port | LAN host |
| --- | --- | --- | --- |
| pbx | UDP | 4569 | FreePBX |
| mail | TCP | 80 and 25 | Citadel |
| chat | TCP | 80 | MeshChat |

Phones register only to the local PBX, so their audio never has to cross AREDN address translation. Inter-site audio rides inside the IAX2 trunk on UDP 4569. That is the reason each site has its own PBX.

### Dial plan

| Site | Extensions | Suggested positions |
| --- | --- | --- |
| EOC | 1001, 1002, 1003 | EMA director, radio room, operations floor |
| Warner Robins | 2001, 2002, 2003 | Emergency department charge, house supervisor, facilities or EMS bay |
| Perry | 3001, 3002, 3003 | Emergency department charge, house supervisor, facilities or EMS bay |

Each PBX has an IAX2 trunk to the other two, encryption disabled, `qualify` on, codecs ulaw and g722. Outbound routes send 1xxx, 2xxx, and 3xxx to the matching trunk. A call from 2001 to 3001 stays local if it is the same building, and crosses one hop if it is not.

Citadel rooms to create at each site: Operations, Logistics, Shelter. Users read mail on the local server. The three servers exchange mail by SMTP to each other's advertised host names.

## Approvals and coordination

Do these before a transmitter is mounted. Several of them can run in parallel.

| Organization | Why | What to take them |
| --- | --- | --- |
| FCC, through a volunteer examiner team | Station license | Technician exam for each control operator. Club station call sign through a Club Station Call Sign Administrator, with a trustee who can shut the system down. |
| Houston County Emergency Management | The EOC is their building, and the network exists for their plan | Site approval, power, and a paragraph in the local emergency operations plan. HEMA is at this address: 478-542-2040, hema@houstoncountyga.gov. |
| Emory Healthcare facilities, plus compliance | Roof, power, infection control, HIPAA boundary | MOU, roof rules, and a letter that the mesh is not connected to clinical systems. |
| Houston County building department | The EOC is in Kathleen, in the unincorporated county | Permit for the mast. Zoning height check. A 60 ft mast may be under the threshold; confirm against the current ordinance. |
| City of Warner Robins building department | Hospital roof mount | Permit and the structural letter. |
| City of Perry building department | Hospital roof mount | Permit and the structural letter. |
| A Georgia professional engineer | Hospital roofs and the EOC tower | Stamped letter for ballast, penetration, and wind. Budget $1,800. |
| FAA Obstruction Evaluation / Airport Airspace Analysis | Robins AFB (KWRB) is east of the Warner Robins hospital. Perry-Houston County Airport (KPXE) serves Perry. Middle Georgia Regional (KMCN) is north of the county. | Run all three coordinates and heights through the FAA Notice Criteria Tool. File Form 7460-1 where the tool says notice is required. Antenna Structure Registration with the FCC is expected to be unnecessary at these heights; confirm after the FAA result. |
| Robins AFB spectrum management, 78th Air Base Wing | The EOC-to-Warner Robins shot, bearing 27°, looks toward the base area from Kathleen. Sidelobes exist even when the main beam is pointed at the hospital. | One-page notice: sites, bearings, 5735/5765/5820 MHz, 10 MHz, 52 dBm EIRP, Part 97. This is coordination, not a Part 97 license. |
| Georgia 811 | Ground rods and guy anchors | Locate ticket before digging. |
| Georgia ARES, ARRL Georgia Section, local emergency coordinator | Operating roster and channel deconfliction | This channel plan and the trustee's call sign. |
| GEMA/HS | Only if the county wants RACES as well as ARES | A RACES plan under 47 CFR 97.407, with the county as the civil-defense sponsor. ARES enrollment does not require this. |
| Existing AREDN operators in Georgia | Co-channel courtesy | The three center frequencies, posted before turn-up. |

The Southeastern Repeater Association coordinates VHF and UHF repeaters. This 5 GHz network is outside that coordination. Do not file it there.

## Installation

Work in this order. Bench-configure every radio before anyone climbs.

### Phase 1 — Paper

1. Name the trustee and at least two more control operators. Schedule exams for anyone who still needs a Technician license.
2. Sign the EMA and Emory access agreements. Get the clinical-network isolation letter.
3. Have facilities mark the exact roof points. Survey those points and recompute bearings if they moved.
4. Walk or fly the three pinch points listed above. Record tree height in the Fresnel. Adjust the mast heights before ordering steel.
5. Run the FAA Notice Criteria Tool. File 7460-1 if required. Send the Robins courtesy notice.
6. Pull building permits with the structural letters.
7. Order from `BOM.csv` after the survey, so the tower line matches the real height.

### Phase 2 — Bench

Do this on a table, one radio at a time, with a laptop set to a static address on the radio's default subnet. Follow the current AREDN MikroTik install page at docs.arednmesh.org. The sequence, which the on-screen AREDN guide spells out in detail, is:

1. Connect Ethernet directly to the stock radio. Power it from the included 24 V injector.
2. Open WinBox. Under System, Resources, note whether RouterOS is v6 or v7. The AREDN page tells you which sysupgrade file matches that version.
3. In the terminal, set device-mode so the board can be flashed, then set the boot device to try Ethernet once and then NAND. Power off.
4. Serve the AREDN factory image with the installer method in the current AREDN docs. Power on and wait until the node boots AREDN.
5. Browse to the node at its AREDN status address, set the password, and load the sysupgrade image so the full firmware is on flash.
6. Set the node name, channel, channel width, and distance from the tables above. Save and reboot.
7. Repeat for all eight dishes and all four hAP ac3 units. Label the case with the node name before the radio leaves the bench. Leave the two spare dishes flashed with a generic spare name.
8. On a hAP, set two ports to device-to-device, one port to the LAN, and leave one port free for a local laptop. Confirm the LAN reservations.

Build the servers on the same bench:

1. Install FreePBX 17 Distro on each mini PC from the ISO. Set the address to .10. Create the three extensions, the two IAX2 trunks, and the outbound routes. Turn trunk encryption off. Restrict RTP to a documented range even though inter-site audio uses IAX2.
2. Install Raspberry Pi OS Lite on each Pi, then Citadel or MeshChat. Set .11 and .12. Create the Citadel rooms. Confirm the web page loads on HTTP from a laptop.
3. Image each disk onto the spare SSDs.
4. Factory-reset nothing after this. Pack each site in its own bin: two dishes, two injectors, the hAP, the phones, the PCs, the Pis, the UPS, the surge protectors, and a printed one-page of names and channels.

### Phase 3 — Mount and ground

1. A licensed electrician bonds the EOC mast to the building grounding electrode system. Hospitals bond the mount to building steel. Use #6 copper. Drive a new rod only when the engineer says the building ground cannot be used, and bond that rod to the building ground. Do not leave a separate unbonded rod.
2. Call 811 before any excavation.
3. Set the EOC tower plumb. Set the hospital non-penetrating mounts on the roof protection the structural letter names. Do not cut the roof membrane unless facilities has approved a penetration and a warranty path.
4. Hang the dishes at the design heights, V polarization arrow up, aimed on the compass bearing. Leave the clamps snug, not crushed, so the aim can still move.
5. Run shielded outdoor Cat6 in a drip loop. The connector at the dish points down. One Ethernet surge protector per radio goes at the building entry, on the outdoor side of the 24 V injector, bonded to the same ground as the mast. The injector stays indoors.
6. Land the injector data port on the hAP device-to-device port named for that dish.
7. Land the mini PC, both Pis, and the PoE switch on the hAP LAN. Phones go on the PoE switch. The UPS feeds the injectors, the hAP, the PCs, the Pis, and the PoE switch. Plug the UPS into a generator-backed outlet and label the outlet "Amateur mesh — generator."
8. Label both ends of every cable with the node name.

### Phase 4 — Aim

Aim one hop at a time, with a person at each end and a phone call on the cellular network for coordination.

1. Both dishes on that hop are powered and on the channel from the table. Read SNR and neighbor quality in the AREDN status page.
2. Move the dish that is easier to reach, in small steps, until SNR peaks. Then move the far dish. Lock the clamps at the peak, not at the first time the link comes up.
3. A clear hop should show a signal near the receive level in the link-budget table, neighbor link quality near 100 percent, and a steady ping. If the signal is 15 dB worse than the table, stop and look for a tree on the bearing before you accept the link.
4. Repeat for the other two hops. Then confirm all three are up at once. The two radios on one roof should show each other as device-to-device neighbors, not as RF neighbors.

### Phase 5 — Services and acceptance

Do these tests and write the numbers in the as-built sheet.

| Test | Pass |
| --- | --- |
| 500 pings across each hop | Average under 30 ms, loss under 1 percent |
| 500 pings from Perry to Warner Robins the long way, through the EOC | Average under 80 ms, loss under 1 percent |
| Call 1001 to 2001, then 2001 to 3001, then 3001 to 1001 | Two-way audio, no one-way voice |
| Two simultaneous calls across the same hop | Both stay up |
| Power off the EOC dishes | A call from Warner Robins to Perry still completes on the direct hop |
| Citadel message from each site to each other site | Delivered |
| MeshChat post at the EOC, read from a laptop at each hospital | The hospital browser opens the EOC board |
| Mesh default route | Empty. No internet path. |
| Hospital IT check | No route from a clinical VLAN to the mesh switch |

After acceptance, export the FreePBX configuration and store it with the spare SSDs. Retest after any firmware change.

## Bill of materials

Full lines, quantities, and sources are in `BOM.csv`. Summary:

| Group | Amount | What it buys |
| --- | --- | --- |
| Radios and indoor nodes | $1,706.66 | Two US 4-packs of the LHG XL 5 ac (8 radios) and four hAP ac3 |
| Phones and FreePBX PCs | $1,417.00 | 10 phones and 3 mini PCs |
| Citadel and MeshChat | $1,155.00 | 7 Raspberry Pi 5 kits |
| Power, surge, cable | $1,788.00 | UPS, PoE switches, outdoor Cat6, surge protectors, ground kits, spare SSDs |
| Mounts and EOC tower | $4,510.00 | Two hospital roof mounts, the 60 ft tower allowance, hardware, labels, aiming tools |
| Hardware total | $10,576.66 | |
| Structural letters | $1,800.00 | Allowance |
| Installation labor | $5,200.00 | EOC tower $2,200; each hospital roof $1,500 |
| Path survey | $1,200.00 | Allowance, and the hold point |
| Freight | $250.00 | Allowance |
| Contingency | $846.13 | 8 percent of hardware |
| Project total | $19,872.79 | |

The radio 4-pack is the ISP Supplies / WAV listing checked on 12 November 2026: $454.93 plus a $180.40 tariff line, $635.33 each, times two. Stocking locations on that vendor's site include College Station, Texas; Aurora and West Chicago, Illinois; and Kalama, Washington. The hAP ac3 unit price is the MikroTik suggested price of $109; buy it from Baltic Networks, ISP Supplies, or Roc-Noc and use the quoted price. Every other hardware line is a budget street price from the vendor named in the CSV. Requote before the purchase order.

Each LHG box includes the 24 V injector, the power supply, and the pole clamps. Do not buy a second injector. Do not power the dishes from the phone PoE switch. The phones are 802.3af. The dishes are passive 24 V.

Spares on the shelf: two flashed dishes, one hAP ac3, one phone, one Raspberry Pi kit, and three imaged SSDs.

## What this design does not include

A fourth site, a sector antenna for neighborhood coverage, or a tunnel to the wider AREDN network. Add those later as separate nodes on a new channel. A relay tower, if the survey finds a blocked Fresnel, replaces the height assumption and gets its own structural letter and FAA check. Labor allowances assume a contractor. County and hospital crews can self-perform and remove those lines.
