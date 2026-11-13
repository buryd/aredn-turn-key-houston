# EOC solar power bill

One EOC mast. Two dishes. 200 W of panels. Radios and Ethernet surge protectors are on the radio bill. FreePBX, the phones, and both Pis stay on generator power.

Panels, battery, and controller were checked 13 Nov 2026. Other lines were checked 12 Nov 2026.

```
Category           Part                            Qty     Each       Line  Source
-----------------  ------------------------------  ---  -------  ---------  ---------------
PV module          Renogy 100 W panel, RSP100D-BK    2  $115.12    $230.24  Home Depot
Charge controller  Victron SmartSolar MPPT 75/15     1   $70.55     $70.55  Powerwerx
Battery            LiTime 24 V 60 Ah LiFePO4         1  $389.99    $389.99  litime.com
DC-DC converter    Orion-Tr 24/24-5 isolated         1   $63.75     $63.75  PKYS
PV disconnect      MidNite 15 A 150 VDC breaker      2   $17.00     $34.00  SanTan Solar
Battery fuse       20 A ANL fuse and holder          1   $25.00     $25.00  NAZ or Blue Sea
Branch protection  6-circuit blade fuse block        1   $40.00     $40.00  Blue Sea
Fuses              ATO/ATC, one 10 A and four 2 A    1    $8.00      $8.00  Marine supplier
Cable and lugs     10 AWG PV and battery wire        1   $80.00     $80.00  PKYS or local
Enclosure          NEMA 3R cabinet                   1   $85.00     $85.00  Home Depot
Grounding          Ground bar and 10 ft of #6        1   $35.00     $35.00  Local supply
Rack               Two-panel ground mount            1  $150.00    $150.00  Renogy
EOC pack           Lines above                       1           $1,211.53  This bill
```

```
Part                 Note
-------------------  -------------------------------------------------------------------------------
Renogy 100 W panels  About 41 V charging, 49 V open-circuit, 52 V cold. Under the 75 V limit.
SmartSolar 75/15     About 8 A. Absorption 28.4 V. Float 27.0 V. Equalize off. No temp compensation.
LiTime 60 Ah         About 1,536 Wh. About 72 hours at 0.66 A. Stop at or above 22.4 V.
Orion-Tr 24/24-5     Output 24.0 V. Do not tie the output negative to the battery negative.
20 A battery fuse    10 AWG, under 3 ft. Victron allows 20 A to 25 A on the 75/15.
Load fuses           10 A on the Orion. 2 A on each dish, the sector injector, and the hAP.
Cabinet              Shade it. Do not charge the battery above 113 F. One ground bond only.
Rack                 Each panel is 41.8 x 20.9 x 1.4 in. South of the tower.
```
