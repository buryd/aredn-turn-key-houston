import { H1, H2, Row, Stack, Stat, Table, Text } from "cursor/canvas";

const lineItems: string[][] = [
  [
    "PV module",
    "Renogy 100 W panel",
    "RSP100D-BK. Two in series, 200 W.",
    "2",
    "$115.12",
    "$230.24",
    "Home Depot",
  ],
  [
    "Charge controller",
    "Victron SmartSolar MPPT 75/15",
    "SCC075015060R. 75 V, 15 A.",
    "1",
    "$70.55",
    "$70.55",
    "Powerwerx",
  ],
  [
    "Battery",
    "LiTime 24 V 60 Ah LiFePO4",
    "Group 24. About 1,536 Wh.",
    "1",
    "$389.99",
    "$389.99",
    "litime.com",
  ],
  [
    "DC-DC converter",
    "Victron Orion-Tr 24/24-5 isolated",
    "ORI242410110. Output set to 24.0 V.",
    "1",
    "$63.75",
    "$63.75",
    "PKYS",
  ],
  [
    "PV disconnect",
    "MidNite 15 A 150 VDC breaker",
    "One in each PV conductor.",
    "2",
    "$17.00",
    "$34.00",
    "SanTan Solar",
  ],
  [
    "Battery fuse",
    "20 A ANL fuse and holder",
    "Within 7 in of the battery positive.",
    "1",
    "$25.00",
    "$25.00",
    "NAZ or Blue Sea",
  ],
  [
    "Branch protection",
    "6-circuit blade fuse block",
    "One 10 A fuse and four 2 A fuses.",
    "1",
    "$40.00",
    "$40.00",
    "Blue Sea via West Marine",
  ],
  [
    "Fuses",
    "ATO/ATC fuses",
    "One 10 A and four 2 A, plus spares.",
    "1",
    "$8.00",
    "$8.00",
    "Marine or auto supplier",
  ],
  [
    "Cable and lugs",
    "PV, battery, and load wire",
    "10 AWG PV and battery. 14 AWG Orion. 18 AWG to the injectors.",
    "1",
    "$80.00",
    "$80.00",
    "PKYS or local supply",
  ],
  [
    "Enclosure",
    "NEMA 3R cabinet",
    "Controller, converter, fuse block, and battery.",
    "1",
    "$85.00",
    "$85.00",
    "Home Depot or Grainger",
  ],
  [
    "Grounding",
    "Ground bar, lugs, and #6 copper",
    "10 ft. One bond from the battery negative.",
    "1",
    "$35.00",
    "$35.00",
    "Local electrical supply",
  ],
  [
    "Rack",
    "Two-panel ground mount",
    "Tilt rack south of the tower. Each panel 41.8 x 20.9 x 1.4 in.",
    "1",
    "$150.00",
    "$150.00",
    "Renogy or IronRidge",
  ],
];

const notes: string[][] = [
  [
    "Renogy 100 W panels",
    "String is about 41 V while charging, 49 V open-circuit, and about 52 V on a cold morning. That stays under the controller's 75 V limit. One panel alone cannot charge this battery.",
  ],
  [
    "SmartSolar 75/15",
    "About 8 A into the 24 V battery. User-defined 24 V lithium. Absorption 28.4 V. Float 27.0 V. Equalize off. Temperature compensation off.",
  ],
  [
    "LiTime 60 Ah",
    "Three-day reserve for the two dishes. About 72 hours at 0.66 A after converter loss. Stop the discharge at or above 22.4 V.",
  ],
  [
    "Orion-Tr 24/24-5",
    "Keeps the hAP ac3 under its 28 V limit while the battery charges at 28.4 V. Do not tie the output negative to the battery negative.",
  ],
  [
    "20 A battery fuse",
    "10 AWG leads, under 3 ft. Victron requires 20 A to 25 A on the 75/15. The terminals accept 10 AWG.",
  ],
  [
    "Load fuses",
    "10 A on the Orion input. 2 A on each dish injector, the sector injector, and the hAP jack.",
  ],
  [
    "Cabinet and ground",
    "Shade the cabinet. Do not charge the battery above 113 F. Site ground is the building electrode or a bonded rod. One bond only.",
  ],
];

export default function EocSolarBom() {
  return (
    <Stack gap={24}>
      <Stack gap={8}>
        <H1>EOC solar power bill</H1>
        <Text tone="secondary">
          Houston County EOC, Kathleen. One mast, two dishes, 200 W of panels.
          Radios and Ethernet surge protectors are on the radio bill. FreePBX,
          the phones, and both Pis stay on generator power.
        </Text>
      </Stack>

      <Row gap={16} wrap>
        <Stat value="$1,211.53" label="EOC pack total" />
        <Stat value="200 W" label="Two 100 W panels in series" />
        <Stat value="60 Ah" label="24 V LiFePO4, about 1,536 Wh" />
        <Stat value="75/15" label="Victron SmartSolar, 15 A" />
      </Row>

      <Stack gap={8}>
        <H2>Line items</H2>
        <Text tone="secondary" size="small">
          Source: Solar-Power-BOM.md. Panels, battery, and controller are
          listed prices checked 13 Nov 2026. The fuse, cable, cabinet,
          grounding, and rack lines are budget allowances checked 12 Nov 2026.
        </Text>
        <Table
          headers={["Category", "Part", "Qty", "Each", "Line", "Source"]}
          columnAlign={["left", "left", "right", "right", "right", "left"]}
          striped
          stickyHeader
          rows={lineItems.map((row) => [
            row[0],
            <Stack gap={2}>
              <Text weight="semibold">{row[1]}</Text>
              <Text tone="secondary" size="small">
                {row[2]}
              </Text>
            </Stack>,
            row[3],
            row[4],
            row[5],
            row[6],
          ])}
        />
      </Stack>

      <Stack gap={8}>
        <H2>Settings that go with the parts</H2>
        <Table
          headers={["Part", "Note"]}
          striped
          rows={notes}
        />
      </Stack>
    </Stack>
  );
}
