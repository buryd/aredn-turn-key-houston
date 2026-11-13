# EOC solar power bill

One EOC mast. Two dishes. 200 W of panels. Radios and Ethernet surge protectors are on the radio bill. FreePBX, the phones, and both Pis stay on generator power.

Panels, battery, and controller were checked 13 Nov 2026. Other lines were checked 12 Nov 2026. The line items sum to **$1,211.53**.

## Line items

| Category | Part | Qty | Each | Line | Source |
| --- | --- | ---: | ---: | ---: | --- |
| PV module | Renogy 100 W panel, RSP100D-BK, two in series | 2 | $115.12 | $230.24 | Home Depot |
| Charge controller | Victron SmartSolar MPPT 75/15, SCC075015060R | 1 | $70.55 | $70.55 | Powerwerx |
| Battery | LiTime 24 V 60 Ah LiFePO4, Group 24 | 1 | $389.99 | $389.99 | litime.com |
| DC-DC converter | Victron Orion-Tr 24/24-5 isolated, ORI242410110 | 1 | $63.75 | $63.75 | PKYS |
| PV disconnect | MidNite Solar 15 A 150 VDC breaker, one per PV leg | 2 | $17.00 | $34.00 | SanTan Solar |
| Battery fuse | 20 A ANL fuse and holder | 1 | $25.00 | $25.00 | NAZ Solar Electric or Blue Sea Systems |
| Branch protection | 6-circuit blade fuse block | 1 | $40.00 | $40.00 | Blue Sea Systems via West Marine |
| Fuses | ATO/ATC, one 10 A and four 2 A | 1 | $8.00 | $8.00 | Marine or auto supplier |
| Cable and lugs | 10 AWG PV and battery, 14 AWG Orion, 18 AWG to the injectors | 1 | $80.00 | $80.00 | PKYS or local electrical supply |
| Enclosure | NEMA 3R cabinet | 1 | $85.00 | $85.00 | Home Depot or Grainger |
| Grounding | Ground bar, lugs, and 10 ft of #6 copper | 1 | $35.00 | $35.00 | Local electrical supply |
| Rack | Two-panel ground mount south of the tower | 1 | $150.00 | $150.00 | Renogy or IronRidge |
| EOC pack | Lines above | 1 | | $1,211.53 | This bill |

## Notes

| Part | Note |
| --- | --- |
| Renogy 100 W panels | String is about 41 V while charging, 49 V open-circuit, and about 52 V on a cold morning. That stays under the controller's 75 V limit. One panel alone cannot charge this battery. |
| SmartSolar 75/15 | About 8 A into the 24 V battery. User-defined 24 V lithium. Absorption 28.4 V. Float 27.0 V. Equalize off. Temperature compensation off. Listed at $70.55 on 13 Nov 2026. MSRP $83.00. |
| LiTime 60 Ah | About 1,536 Wh. 10.24 x 6.61 x 8.27 in. Sale price $389.99 against a $529.99 list. Three-day reserve for the two dishes. About 72 hours at 0.66 A after converter loss. Stop the discharge at or above 22.4 V. |
| Orion-Tr 24/24-5 | Output set to 24.0 V. Sale price $63.75 against a $75.00 list. Keeps the hAP ac3 under its 28 V limit while the battery charges at 28.4 V. Do not tie the output negative to the battery negative. |
| 15 A PV breakers | Listed price. Opens both legs of the series string. |
| 20 A battery fuse | Budget for fuse plus holder. 10 AWG cable, under 3 ft, between controller and battery. Victron requires 20 A to 25 A on the 75/15. |
| Load fuses | Budget. 10 A on the Orion input. 2 A on each dish injector, the sector injector, and the hAP jack. Spares of each value should ride in the cabinet. |
| Cable | Budget lot. The 75/15 terminals accept 10 AWG. Outdoor PV wire on the rack run. Keep battery leads under 3 ft. |
| Cabinet and ground | Budget. Shade the cabinet. Do not charge the battery above 113 F. Site ground is the building electrode or a bonded rod. One bond only. |
| Rack | Budget. Each panel is 41.8 x 20.9 x 1.4 in. |
