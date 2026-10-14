/**
 * ZenLights 50 Solver-Verified Level Definitions
 * Auto-generated with exact GF(2) linear solver par thresholds
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ZenLightsLevels = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const PACKS = [
  {
    "id": "pack-1",
    "name": "Dawn Awakening",
    "subtitle": "Gentle 3x3 ripples to learn the harmonic balance",
    "rows": 3,
    "cols": 3,
    "levelDefs": [
      {
        "name": "First Glow",
        "moves": [
          [
            1,
            1
          ]
        ]
      },
      {
        "name": "Twin Beacons",
        "moves": [
          [
            0,
            1
          ],
          [
            2,
            1
          ]
        ]
      },
      {
        "name": "Diagonal Echo",
        "moves": [
          [
            0,
            0
          ],
          [
            2,
            2
          ]
        ]
      },
      {
        "name": "Cornerstone",
        "moves": [
          [
            0,
            0
          ],
          [
            0,
            2
          ],
          [
            2,
            0
          ]
        ]
      },
      {
        "name": "Four Corners",
        "moves": [
          [
            0,
            0
          ],
          [
            0,
            2
          ],
          [
            2,
            0
          ],
          [
            2,
            2
          ]
        ]
      },
      {
        "name": "Cross Beam",
        "moves": [
          [
            0,
            1
          ],
          [
            1,
            0
          ],
          [
            1,
            2
          ],
          [
            2,
            1
          ]
        ]
      },
      {
        "name": "The Trident",
        "moves": [
          [
            0,
            1
          ],
          [
            1,
            1
          ],
          [
            2,
            1
          ]
        ]
      },
      {
        "name": "Whispering Wind",
        "moves": [
          [
            0,
            0
          ],
          [
            1,
            1
          ],
          [
            2,
            0
          ]
        ]
      },
      {
        "name": "Radiant Diamond",
        "moves": [
          [
            1,
            0
          ],
          [
            0,
            1
          ],
          [
            1,
            2
          ],
          [
            2,
            1
          ],
          [
            1,
            1
          ]
        ]
      },
      {
        "name": "Zenith 3x3",
        "moves": [
          [
            0,
            0
          ],
          [
            0,
            2
          ],
          [
            1,
            1
          ],
          [
            2,
            1
          ]
        ]
      }
    ],
    "levels": [
      {
        "id": "level-1",
        "packId": "pack-1",
        "packName": "Dawn Awakening",
        "indexInPack": 1,
        "globalIndex": 1,
        "name": "First Glow",
        "rows": 3,
        "cols": 3,
        "grid": [
          [
            0,
            1,
            0
          ],
          [
            1,
            1,
            1
          ],
          [
            0,
            1,
            0
          ]
        ],
        "optimalMoves": 1,
        "par": 1,
        "starThresholds": [
          1,
          3,
          6
        ]
      },
      {
        "id": "level-2",
        "packId": "pack-1",
        "packName": "Dawn Awakening",
        "indexInPack": 2,
        "globalIndex": 2,
        "name": "Twin Beacons",
        "rows": 3,
        "cols": 3,
        "grid": [
          [
            1,
            1,
            1
          ],
          [
            0,
            0,
            0
          ],
          [
            1,
            1,
            1
          ]
        ],
        "optimalMoves": 2,
        "par": 2,
        "starThresholds": [
          2,
          4,
          7
        ]
      },
      {
        "id": "level-3",
        "packId": "pack-1",
        "packName": "Dawn Awakening",
        "indexInPack": 3,
        "globalIndex": 3,
        "name": "Diagonal Echo",
        "rows": 3,
        "cols": 3,
        "grid": [
          [
            1,
            1,
            0
          ],
          [
            1,
            0,
            1
          ],
          [
            0,
            1,
            1
          ]
        ],
        "optimalMoves": 2,
        "par": 2,
        "starThresholds": [
          2,
          4,
          7
        ]
      },
      {
        "id": "level-4",
        "packId": "pack-1",
        "packName": "Dawn Awakening",
        "indexInPack": 4,
        "globalIndex": 4,
        "name": "Cornerstone",
        "rows": 3,
        "cols": 3,
        "grid": [
          [
            1,
            0,
            1
          ],
          [
            0,
            0,
            1
          ],
          [
            1,
            1,
            0
          ]
        ],
        "optimalMoves": 3,
        "par": 3,
        "starThresholds": [
          3,
          5,
          8
        ]
      },
      {
        "id": "level-5",
        "packId": "pack-1",
        "packName": "Dawn Awakening",
        "indexInPack": 5,
        "globalIndex": 5,
        "name": "Four Corners",
        "rows": 3,
        "cols": 3,
        "grid": [
          [
            1,
            0,
            1
          ],
          [
            0,
            0,
            0
          ],
          [
            1,
            0,
            1
          ]
        ],
        "optimalMoves": 4,
        "par": 4,
        "starThresholds": [
          4,
          6,
          9
        ]
      },
      {
        "id": "level-6",
        "packId": "pack-1",
        "packName": "Dawn Awakening",
        "indexInPack": 6,
        "globalIndex": 6,
        "name": "Cross Beam",
        "rows": 3,
        "cols": 3,
        "grid": [
          [
            0,
            1,
            0
          ],
          [
            1,
            0,
            1
          ],
          [
            0,
            1,
            0
          ]
        ],
        "optimalMoves": 4,
        "par": 4,
        "starThresholds": [
          4,
          6,
          9
        ]
      },
      {
        "id": "level-7",
        "packId": "pack-1",
        "packName": "Dawn Awakening",
        "indexInPack": 7,
        "globalIndex": 7,
        "name": "The Trident",
        "rows": 3,
        "cols": 3,
        "grid": [
          [
            1,
            0,
            1
          ],
          [
            1,
            1,
            1
          ],
          [
            1,
            0,
            1
          ]
        ],
        "optimalMoves": 3,
        "par": 3,
        "starThresholds": [
          3,
          5,
          8
        ]
      },
      {
        "id": "level-8",
        "packId": "pack-1",
        "packName": "Dawn Awakening",
        "indexInPack": 8,
        "globalIndex": 8,
        "name": "Whispering Wind",
        "rows": 3,
        "cols": 3,
        "grid": [
          [
            1,
            0,
            0
          ],
          [
            1,
            1,
            1
          ],
          [
            1,
            0,
            0
          ]
        ],
        "optimalMoves": 3,
        "par": 3,
        "starThresholds": [
          3,
          5,
          8
        ]
      },
      {
        "id": "level-9",
        "packId": "pack-1",
        "packName": "Dawn Awakening",
        "indexInPack": 9,
        "globalIndex": 9,
        "name": "Radiant Diamond",
        "rows": 3,
        "cols": 3,
        "grid": [
          [
            0,
            0,
            0
          ],
          [
            0,
            1,
            0
          ],
          [
            0,
            0,
            0
          ]
        ],
        "optimalMoves": 5,
        "par": 5,
        "starThresholds": [
          5,
          7,
          10
        ]
      },
      {
        "id": "level-10",
        "packId": "pack-1",
        "packName": "Dawn Awakening",
        "indexInPack": 10,
        "globalIndex": 10,
        "name": "Zenith 3x3",
        "rows": 3,
        "cols": 3,
        "grid": [
          [
            1,
            1,
            1
          ],
          [
            0,
            0,
            0
          ],
          [
            1,
            0,
            1
          ]
        ],
        "optimalMoves": 4,
        "par": 4,
        "starThresholds": [
          4,
          6,
          9
        ]
      }
    ]
  },
  {
    "id": "pack-2",
    "name": "Lotus Petals",
    "subtitle": "Balanced 4x4 symmetries and elegant geometry",
    "rows": 4,
    "cols": 4,
    "levelDefs": [
      {
        "name": "Lotus Bud",
        "moves": [
          [
            1,
            1
          ],
          [
            2,
            2
          ]
        ]
      },
      {
        "name": "Square Dance",
        "moves": [
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            2,
            1
          ],
          [
            2,
            2
          ]
        ]
      },
      {
        "name": "Outer Ring",
        "moves": [
          [
            0,
            0
          ],
          [
            0,
            3
          ],
          [
            3,
            0
          ],
          [
            3,
            3
          ]
        ]
      },
      {
        "name": "Petal Waves",
        "moves": [
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            3,
            1
          ],
          [
            3,
            2
          ]
        ]
      },
      {
        "name": "Mirror Lake",
        "moves": [
          [
            1,
            0
          ],
          [
            2,
            0
          ],
          [
            1,
            3
          ],
          [
            2,
            3
          ]
        ]
      },
      {
        "name": "The Anchor",
        "moves": [
          [
            0,
            1
          ],
          [
            1,
            1
          ],
          [
            2,
            1
          ],
          [
            3,
            2
          ]
        ]
      },
      {
        "name": "Pinwheel",
        "moves": [
          [
            0,
            1
          ],
          [
            1,
            3
          ],
          [
            3,
            2
          ],
          [
            2,
            0
          ]
        ]
      },
      {
        "name": "Crescent Moon",
        "moves": [
          [
            0,
            0
          ],
          [
            1,
            0
          ],
          [
            2,
            0
          ],
          [
            3,
            1
          ],
          [
            3,
            2
          ]
        ]
      },
      {
        "name": "Diamond Ring",
        "moves": [
          [
            0,
            2
          ],
          [
            1,
            1
          ],
          [
            2,
            2
          ],
          [
            1,
            3
          ],
          [
            3,
            0
          ]
        ]
      },
      {
        "name": "Zenith 4x4",
        "moves": [
          [
            0,
            0
          ],
          [
            0,
            3
          ],
          [
            1,
            2
          ],
          [
            2,
            1
          ],
          [
            3,
            0
          ],
          [
            3,
            3
          ]
        ]
      }
    ],
    "levels": [
      {
        "id": "level-11",
        "packId": "pack-2",
        "packName": "Lotus Petals",
        "indexInPack": 1,
        "globalIndex": 11,
        "name": "Lotus Bud",
        "rows": 4,
        "cols": 4,
        "grid": [
          [
            0,
            1,
            0,
            0
          ],
          [
            1,
            1,
            0,
            0
          ],
          [
            0,
            0,
            1,
            1
          ],
          [
            0,
            0,
            1,
            0
          ]
        ],
        "optimalMoves": 2,
        "par": 2,
        "starThresholds": [
          2,
          4,
          7
        ]
      },
      {
        "id": "level-12",
        "packId": "pack-2",
        "packName": "Lotus Petals",
        "indexInPack": 2,
        "globalIndex": 12,
        "name": "Square Dance",
        "rows": 4,
        "cols": 4,
        "grid": [
          [
            0,
            1,
            1,
            0
          ],
          [
            1,
            1,
            1,
            1
          ],
          [
            1,
            1,
            1,
            1
          ],
          [
            0,
            1,
            1,
            0
          ]
        ],
        "optimalMoves": 4,
        "par": 4,
        "starThresholds": [
          4,
          6,
          9
        ]
      },
      {
        "id": "level-13",
        "packId": "pack-2",
        "packName": "Lotus Petals",
        "indexInPack": 3,
        "globalIndex": 13,
        "name": "Outer Ring",
        "rows": 4,
        "cols": 4,
        "grid": [
          [
            1,
            1,
            1,
            1
          ],
          [
            1,
            0,
            0,
            1
          ],
          [
            1,
            0,
            0,
            1
          ],
          [
            1,
            1,
            1,
            1
          ]
        ],
        "optimalMoves": 4,
        "par": 4,
        "starThresholds": [
          4,
          6,
          9
        ]
      },
      {
        "id": "level-14",
        "packId": "pack-2",
        "packName": "Lotus Petals",
        "indexInPack": 4,
        "globalIndex": 14,
        "name": "Petal Waves",
        "rows": 4,
        "cols": 4,
        "grid": [
          [
            1,
            0,
            0,
            1
          ],
          [
            0,
            1,
            1,
            0
          ],
          [
            0,
            1,
            1,
            0
          ],
          [
            1,
            0,
            0,
            1
          ]
        ],
        "optimalMoves": 4,
        "par": 4,
        "starThresholds": [
          4,
          6,
          9
        ]
      },
      {
        "id": "level-15",
        "packId": "pack-2",
        "packName": "Lotus Petals",
        "indexInPack": 5,
        "globalIndex": 15,
        "name": "Mirror Lake",
        "rows": 4,
        "cols": 4,
        "grid": [
          [
            1,
            0,
            0,
            1
          ],
          [
            0,
            1,
            1,
            0
          ],
          [
            0,
            1,
            1,
            0
          ],
          [
            1,
            0,
            0,
            1
          ]
        ],
        "optimalMoves": 4,
        "par": 4,
        "starThresholds": [
          4,
          6,
          9
        ]
      },
      {
        "id": "level-16",
        "packId": "pack-2",
        "packName": "Lotus Petals",
        "indexInPack": 6,
        "globalIndex": 16,
        "name": "The Anchor",
        "rows": 4,
        "cols": 4,
        "grid": [
          [
            1,
            0,
            1,
            0
          ],
          [
            1,
            1,
            1,
            0
          ],
          [
            1,
            0,
            0,
            0
          ],
          [
            0,
            0,
            1,
            1
          ]
        ],
        "optimalMoves": 4,
        "par": 4,
        "starThresholds": [
          4,
          6,
          9
        ]
      },
      {
        "id": "level-17",
        "packId": "pack-2",
        "packName": "Lotus Petals",
        "indexInPack": 7,
        "globalIndex": 17,
        "name": "Pinwheel",
        "rows": 4,
        "cols": 4,
        "grid": [
          [
            1,
            1,
            1,
            1
          ],
          [
            1,
            1,
            1,
            1
          ],
          [
            1,
            1,
            1,
            1
          ],
          [
            1,
            1,
            1,
            1
          ]
        ],
        "optimalMoves": 4,
        "par": 4,
        "starThresholds": [
          4,
          6,
          9
        ]
      },
      {
        "id": "level-18",
        "packId": "pack-2",
        "packName": "Lotus Petals",
        "indexInPack": 8,
        "globalIndex": 18,
        "name": "Crescent Moon",
        "rows": 4,
        "cols": 4,
        "grid": [
          [
            0,
            1,
            0,
            0
          ],
          [
            1,
            1,
            0,
            0
          ],
          [
            0,
            0,
            1,
            0
          ],
          [
            0,
            0,
            0,
            1
          ]
        ],
        "optimalMoves": 3,
        "par": 3,
        "starThresholds": [
          3,
          5,
          8
        ]
      },
      {
        "id": "level-19",
        "packId": "pack-2",
        "packName": "Lotus Petals",
        "indexInPack": 9,
        "globalIndex": 19,
        "name": "Diamond Ring",
        "rows": 4,
        "cols": 4,
        "grid": [
          [
            0,
            0,
            1,
            0
          ],
          [
            1,
            1,
            0,
            1
          ],
          [
            1,
            0,
            1,
            0
          ],
          [
            1,
            1,
            1,
            0
          ]
        ],
        "optimalMoves": 5,
        "par": 5,
        "starThresholds": [
          5,
          7,
          10
        ]
      },
      {
        "id": "level-20",
        "packId": "pack-2",
        "packName": "Lotus Petals",
        "indexInPack": 10,
        "globalIndex": 20,
        "name": "Zenith 4x4",
        "rows": 4,
        "cols": 4,
        "grid": [
          [
            1,
            1,
            0,
            1
          ],
          [
            1,
            0,
            1,
            0
          ],
          [
            0,
            1,
            0,
            1
          ],
          [
            1,
            0,
            1,
            1
          ]
        ],
        "optimalMoves": 6,
        "par": 6,
        "starThresholds": [
          6,
          8,
          11
        ]
      }
    ]
  },
  {
    "id": "pack-3",
    "name": "Constellations",
    "subtitle": "Classic 5x5 deep logic matrices and starry patterns",
    "rows": 5,
    "cols": 5,
    "levelDefs": [
      {
        "name": "North Star",
        "moves": [
          [
            2,
            2
          ],
          [
            1,
            2
          ],
          [
            3,
            2
          ]
        ]
      },
      {
        "name": "Pleiades",
        "moves": [
          [
            1,
            1
          ],
          [
            1,
            3
          ],
          [
            3,
            1
          ],
          [
            3,
            3
          ]
        ]
      },
      {
        "name": "Orion Belt",
        "moves": [
          [
            2,
            1
          ],
          [
            2,
            2
          ],
          [
            2,
            3
          ]
        ]
      },
      {
        "name": "Solar Corona",
        "moves": [
          [
            1,
            2
          ],
          [
            2,
            1
          ],
          [
            2,
            3
          ],
          [
            3,
            2
          ],
          [
            0,
            2
          ],
          [
            4,
            2
          ]
        ]
      },
      {
        "name": "Cassiopeia",
        "moves": [
          [
            0,
            1
          ],
          [
            1,
            3
          ],
          [
            2,
            2
          ],
          [
            3,
            4
          ],
          [
            4,
            2
          ]
        ]
      },
      {
        "name": "Starlight Cross",
        "moves": [
          [
            0,
            2
          ],
          [
            2,
            0
          ],
          [
            2,
            4
          ],
          [
            4,
            2
          ],
          [
            2,
            2
          ]
        ]
      },
      {
        "name": "Stardust Orbit",
        "moves": [
          [
            0,
            0
          ],
          [
            0,
            4
          ],
          [
            4,
            0
          ],
          [
            4,
            4
          ],
          [
            2,
            2
          ]
        ]
      },
      {
        "name": "Southern Cross",
        "moves": [
          [
            1,
            2
          ],
          [
            2,
            1
          ],
          [
            2,
            2
          ],
          [
            2,
            3
          ],
          [
            3,
            2
          ],
          [
            4,
            2
          ]
        ]
      },
      {
        "name": "Galaxy Spiral",
        "moves": [
          [
            0,
            2
          ],
          [
            1,
            1
          ],
          [
            2,
            0
          ],
          [
            3,
            1
          ],
          [
            4,
            2
          ],
          [
            3,
            3
          ],
          [
            2,
            4
          ]
        ]
      },
      {
        "name": "Zenith 5x5",
        "moves": [
          [
            0,
            1
          ],
          [
            0,
            3
          ],
          [
            1,
            0
          ],
          [
            1,
            4
          ],
          [
            3,
            0
          ],
          [
            3,
            4
          ],
          [
            4,
            1
          ],
          [
            4,
            3
          ]
        ]
      }
    ],
    "levels": [
      {
        "id": "level-21",
        "packId": "pack-3",
        "packName": "Constellations",
        "indexInPack": 1,
        "globalIndex": 21,
        "name": "North Star",
        "rows": 5,
        "cols": 5,
        "grid": [
          [
            0,
            0,
            1,
            0,
            0
          ],
          [
            0,
            1,
            0,
            1,
            0
          ],
          [
            0,
            1,
            1,
            1,
            0
          ],
          [
            0,
            1,
            0,
            1,
            0
          ],
          [
            0,
            0,
            1,
            0,
            0
          ]
        ],
        "optimalMoves": 3,
        "par": 3,
        "starThresholds": [
          3,
          5,
          8
        ]
      },
      {
        "id": "level-22",
        "packId": "pack-3",
        "packName": "Constellations",
        "indexInPack": 2,
        "globalIndex": 22,
        "name": "Pleiades",
        "rows": 5,
        "cols": 5,
        "grid": [
          [
            0,
            1,
            0,
            1,
            0
          ],
          [
            1,
            1,
            0,
            1,
            1
          ],
          [
            0,
            0,
            0,
            0,
            0
          ],
          [
            1,
            1,
            0,
            1,
            1
          ],
          [
            0,
            1,
            0,
            1,
            0
          ]
        ],
        "optimalMoves": 4,
        "par": 4,
        "starThresholds": [
          4,
          6,
          9
        ]
      },
      {
        "id": "level-23",
        "packId": "pack-3",
        "packName": "Constellations",
        "indexInPack": 3,
        "globalIndex": 23,
        "name": "Orion Belt",
        "rows": 5,
        "cols": 5,
        "grid": [
          [
            0,
            0,
            0,
            0,
            0
          ],
          [
            0,
            1,
            1,
            1,
            0
          ],
          [
            1,
            0,
            1,
            0,
            1
          ],
          [
            0,
            1,
            1,
            1,
            0
          ],
          [
            0,
            0,
            0,
            0,
            0
          ]
        ],
        "optimalMoves": 3,
        "par": 3,
        "starThresholds": [
          3,
          5,
          8
        ]
      },
      {
        "id": "level-24",
        "packId": "pack-3",
        "packName": "Constellations",
        "indexInPack": 4,
        "globalIndex": 24,
        "name": "Solar Corona",
        "rows": 5,
        "cols": 5,
        "grid": [
          [
            0,
            1,
            0,
            1,
            0
          ],
          [
            0,
            0,
            0,
            0,
            0
          ],
          [
            1,
            1,
            0,
            1,
            1
          ],
          [
            0,
            0,
            0,
            0,
            0
          ],
          [
            0,
            1,
            0,
            1,
            0
          ]
        ],
        "optimalMoves": 6,
        "par": 6,
        "starThresholds": [
          6,
          8,
          11
        ]
      },
      {
        "id": "level-25",
        "packId": "pack-3",
        "packName": "Constellations",
        "indexInPack": 5,
        "globalIndex": 25,
        "name": "Cassiopeia",
        "rows": 5,
        "cols": 5,
        "grid": [
          [
            1,
            1,
            1,
            1,
            0
          ],
          [
            0,
            1,
            0,
            1,
            1
          ],
          [
            0,
            1,
            1,
            0,
            1
          ],
          [
            0,
            0,
            0,
            1,
            1
          ],
          [
            0,
            1,
            1,
            1,
            1
          ]
        ],
        "optimalMoves": 5,
        "par": 5,
        "starThresholds": [
          5,
          7,
          10
        ]
      },
      {
        "id": "level-26",
        "packId": "pack-3",
        "packName": "Constellations",
        "indexInPack": 6,
        "globalIndex": 26,
        "name": "Starlight Cross",
        "rows": 5,
        "cols": 5,
        "grid": [
          [
            0,
            1,
            1,
            1,
            0
          ],
          [
            1,
            0,
            0,
            0,
            1
          ],
          [
            1,
            0,
            1,
            0,
            1
          ],
          [
            1,
            0,
            0,
            0,
            1
          ],
          [
            0,
            1,
            1,
            1,
            0
          ]
        ],
        "optimalMoves": 5,
        "par": 5,
        "starThresholds": [
          5,
          7,
          10
        ]
      },
      {
        "id": "level-27",
        "packId": "pack-3",
        "packName": "Constellations",
        "indexInPack": 7,
        "globalIndex": 27,
        "name": "Stardust Orbit",
        "rows": 5,
        "cols": 5,
        "grid": [
          [
            1,
            1,
            0,
            1,
            1
          ],
          [
            1,
            0,
            1,
            0,
            1
          ],
          [
            0,
            1,
            1,
            1,
            0
          ],
          [
            1,
            0,
            1,
            0,
            1
          ],
          [
            1,
            1,
            0,
            1,
            1
          ]
        ],
        "optimalMoves": 5,
        "par": 5,
        "starThresholds": [
          5,
          7,
          10
        ]
      },
      {
        "id": "level-28",
        "packId": "pack-3",
        "packName": "Constellations",
        "indexInPack": 8,
        "globalIndex": 28,
        "name": "Southern Cross",
        "rows": 5,
        "cols": 5,
        "grid": [
          [
            0,
            0,
            1,
            0,
            0
          ],
          [
            0,
            0,
            0,
            0,
            0
          ],
          [
            1,
            0,
            1,
            0,
            1
          ],
          [
            0,
            0,
            1,
            0,
            0
          ],
          [
            0,
            1,
            0,
            1,
            0
          ]
        ],
        "optimalMoves": 6,
        "par": 6,
        "starThresholds": [
          6,
          8,
          11
        ]
      },
      {
        "id": "level-29",
        "packId": "pack-3",
        "packName": "Constellations",
        "indexInPack": 9,
        "globalIndex": 29,
        "name": "Galaxy Spiral",
        "rows": 5,
        "cols": 5,
        "grid": [
          [
            0,
            0,
            1,
            1,
            0
          ],
          [
            0,
            1,
            0,
            0,
            1
          ],
          [
            1,
            1,
            0,
            0,
            1
          ],
          [
            0,
            1,
            1,
            1,
            0
          ],
          [
            0,
            0,
            1,
            0,
            0
          ]
        ],
        "optimalMoves": 7,
        "par": 7,
        "starThresholds": [
          7,
          9,
          12
        ]
      },
      {
        "id": "level-30",
        "packId": "pack-3",
        "packName": "Constellations",
        "indexInPack": 10,
        "globalIndex": 30,
        "name": "Zenith 5x5",
        "rows": 5,
        "cols": 5,
        "grid": [
          [
            0,
            1,
            0,
            1,
            0
          ],
          [
            1,
            0,
            0,
            0,
            1
          ],
          [
            0,
            0,
            0,
            0,
            0
          ],
          [
            1,
            0,
            0,
            0,
            1
          ],
          [
            0,
            1,
            0,
            1,
            0
          ]
        ],
        "optimalMoves": 8,
        "par": 8,
        "starThresholds": [
          8,
          10,
          13
        ]
      }
    ]
  },
  {
    "id": "pack-4",
    "name": "Eclipse Matrix",
    "subtitle": "Intricate harmonic interference across 5x5 and 6x6",
    "rows": 5,
    "cols": 5,
    "levelDefs": [
      {
        "name": "Total Eclipse",
        "moves": [
          [
            1,
            1
          ],
          [
            1,
            3
          ],
          [
            2,
            2
          ],
          [
            3,
            1
          ],
          [
            3,
            3
          ],
          [
            0,
            0
          ],
          [
            4,
            4
          ]
        ]
      },
      {
        "name": "Umbra Wave",
        "moves": [
          [
            0,
            2
          ],
          [
            1,
            2
          ],
          [
            2,
            0
          ],
          [
            2,
            4
          ],
          [
            3,
            2
          ],
          [
            4,
            2
          ],
          [
            1,
            1
          ],
          [
            3,
            3
          ]
        ]
      },
      {
        "name": "Prism Refraction",
        "moves": [
          [
            0,
            0
          ],
          [
            1,
            1
          ],
          [
            2,
            2
          ],
          [
            3,
            3
          ],
          [
            4,
            4
          ],
          [
            0,
            4
          ],
          [
            4,
            0
          ]
        ]
      },
      {
        "name": "Penumbra Veil",
        "moves": [
          [
            1,
            0
          ],
          [
            1,
            4
          ],
          [
            3,
            0
          ],
          [
            3,
            4
          ],
          [
            2,
            1
          ],
          [
            2,
            3
          ],
          [
            2,
            2
          ]
        ]
      },
      {
        "name": "Lunar Tide",
        "moves": [
          [
            0,
            1
          ],
          [
            0,
            3
          ],
          [
            2,
            2
          ],
          [
            4,
            1
          ],
          [
            4,
            3
          ],
          [
            1,
            2
          ],
          [
            3,
            2
          ],
          [
            2,
            0
          ]
        ]
      },
      {
        "name": "Hexagonal Gate",
        "rows": 6,
        "cols": 6,
        "moves": [
          [
            1,
            2
          ],
          [
            1,
            3
          ],
          [
            2,
            1
          ],
          [
            2,
            4
          ],
          [
            3,
            1
          ],
          [
            3,
            4
          ],
          [
            4,
            2
          ],
          [
            4,
            3
          ]
        ]
      },
      {
        "name": "Binary Star",
        "rows": 6,
        "cols": 6,
        "moves": [
          [
            1,
            1
          ],
          [
            2,
            2
          ],
          [
            3,
            3
          ],
          [
            4,
            4
          ],
          [
            1,
            4
          ],
          [
            4,
            1
          ]
        ]
      },
      {
        "name": "Singularity",
        "rows": 6,
        "cols": 6,
        "moves": [
          [
            2,
            2
          ],
          [
            2,
            3
          ],
          [
            3,
            2
          ],
          [
            3,
            3
          ],
          [
            0,
            0
          ],
          [
            5,
            5
          ]
        ]
      },
      {
        "name": "Nebula Rift",
        "rows": 6,
        "cols": 6,
        "moves": [
          [
            0,
            1
          ],
          [
            1,
            2
          ],
          [
            2,
            3
          ],
          [
            3,
            4
          ],
          [
            4,
            5
          ],
          [
            5,
            0
          ],
          [
            2,
            2
          ]
        ]
      },
      {
        "name": "Zenith Eclipse",
        "rows": 6,
        "cols": 6,
        "moves": [
          [
            0,
            0
          ],
          [
            0,
            5
          ],
          [
            5,
            0
          ],
          [
            5,
            5
          ],
          [
            2,
            2
          ],
          [
            2,
            3
          ],
          [
            3,
            2
          ],
          [
            3,
            3
          ]
        ]
      }
    ],
    "levels": [
      {
        "id": "level-31",
        "packId": "pack-4",
        "packName": "Eclipse Matrix",
        "indexInPack": 1,
        "globalIndex": 31,
        "name": "Total Eclipse",
        "rows": 5,
        "cols": 5,
        "grid": [
          [
            1,
            0,
            0,
            1,
            0
          ],
          [
            0,
            1,
            1,
            1,
            1
          ],
          [
            0,
            1,
            1,
            1,
            0
          ],
          [
            1,
            1,
            1,
            1,
            0
          ],
          [
            0,
            1,
            0,
            0,
            1
          ]
        ],
        "optimalMoves": 7,
        "par": 7,
        "starThresholds": [
          7,
          9,
          12
        ]
      },
      {
        "id": "level-32",
        "packId": "pack-4",
        "packName": "Eclipse Matrix",
        "indexInPack": 2,
        "globalIndex": 32,
        "name": "Umbra Wave",
        "rows": 5,
        "cols": 5,
        "grid": [
          [
            0,
            0,
            0,
            1,
            0
          ],
          [
            0,
            0,
            1,
            1,
            1
          ],
          [
            1,
            0,
            0,
            0,
            1
          ],
          [
            1,
            1,
            1,
            0,
            0
          ],
          [
            0,
            1,
            0,
            0,
            0
          ]
        ],
        "optimalMoves": 8,
        "par": 8,
        "starThresholds": [
          8,
          10,
          13
        ]
      },
      {
        "id": "level-33",
        "packId": "pack-4",
        "packName": "Eclipse Matrix",
        "indexInPack": 3,
        "globalIndex": 33,
        "name": "Prism Refraction",
        "rows": 5,
        "cols": 5,
        "grid": [
          [
            1,
            0,
            0,
            1,
            1
          ],
          [
            0,
            1,
            0,
            0,
            1
          ],
          [
            0,
            0,
            1,
            0,
            0
          ],
          [
            1,
            0,
            0,
            1,
            0
          ],
          [
            1,
            1,
            0,
            0,
            1
          ]
        ],
        "optimalMoves": 7,
        "par": 7,
        "starThresholds": [
          7,
          9,
          12
        ]
      },
      {
        "id": "level-34",
        "packId": "pack-4",
        "packName": "Eclipse Matrix",
        "indexInPack": 4,
        "globalIndex": 34,
        "name": "Penumbra Veil",
        "rows": 5,
        "cols": 5,
        "grid": [
          [
            1,
            0,
            0,
            0,
            1
          ],
          [
            1,
            0,
            1,
            0,
            1
          ],
          [
            1,
            0,
            1,
            0,
            1
          ],
          [
            1,
            0,
            1,
            0,
            1
          ],
          [
            1,
            0,
            0,
            0,
            1
          ]
        ],
        "optimalMoves": 7,
        "par": 7,
        "starThresholds": [
          7,
          9,
          12
        ]
      },
      {
        "id": "level-35",
        "packId": "pack-4",
        "packName": "Eclipse Matrix",
        "indexInPack": 5,
        "globalIndex": 35,
        "name": "Lunar Tide",
        "rows": 5,
        "cols": 5,
        "grid": [
          [
            1,
            1,
            1,
            1,
            1
          ],
          [
            1,
            0,
            0,
            0,
            0
          ],
          [
            1,
            0,
            1,
            1,
            0
          ],
          [
            1,
            0,
            0,
            0,
            0
          ],
          [
            1,
            1,
            1,
            1,
            1
          ]
        ],
        "optimalMoves": 8,
        "par": 8,
        "starThresholds": [
          8,
          10,
          13
        ]
      },
      {
        "id": "level-36",
        "packId": "pack-4",
        "packName": "Eclipse Matrix",
        "indexInPack": 6,
        "globalIndex": 36,
        "name": "Hexagonal Gate",
        "rows": 6,
        "cols": 6,
        "grid": [
          [
            0,
            0,
            1,
            1,
            0,
            0
          ],
          [
            0,
            0,
            0,
            0,
            0,
            0
          ],
          [
            1,
            0,
            0,
            0,
            0,
            1
          ],
          [
            1,
            0,
            0,
            0,
            0,
            1
          ],
          [
            0,
            0,
            0,
            0,
            0,
            0
          ],
          [
            0,
            0,
            1,
            1,
            0,
            0
          ]
        ],
        "optimalMoves": 8,
        "par": 8,
        "starThresholds": [
          8,
          10,
          13
        ]
      },
      {
        "id": "level-37",
        "packId": "pack-4",
        "packName": "Eclipse Matrix",
        "indexInPack": 7,
        "globalIndex": 37,
        "name": "Binary Star",
        "rows": 6,
        "cols": 6,
        "grid": [
          [
            0,
            1,
            0,
            0,
            1,
            0
          ],
          [
            1,
            1,
            0,
            1,
            1,
            1
          ],
          [
            0,
            0,
            1,
            0,
            1,
            0
          ],
          [
            0,
            1,
            0,
            1,
            0,
            0
          ],
          [
            1,
            1,
            1,
            0,
            1,
            1
          ],
          [
            0,
            1,
            0,
            0,
            1,
            0
          ]
        ],
        "optimalMoves": 6,
        "par": 6,
        "starThresholds": [
          6,
          8,
          11
        ]
      },
      {
        "id": "level-38",
        "packId": "pack-4",
        "packName": "Eclipse Matrix",
        "indexInPack": 8,
        "globalIndex": 38,
        "name": "Singularity",
        "rows": 6,
        "cols": 6,
        "grid": [
          [
            1,
            1,
            0,
            0,
            0,
            0
          ],
          [
            1,
            0,
            1,
            1,
            0,
            0
          ],
          [
            0,
            1,
            1,
            1,
            1,
            0
          ],
          [
            0,
            1,
            1,
            1,
            1,
            0
          ],
          [
            0,
            0,
            1,
            1,
            0,
            1
          ],
          [
            0,
            0,
            0,
            0,
            1,
            1
          ]
        ],
        "optimalMoves": 6,
        "par": 6,
        "starThresholds": [
          6,
          8,
          11
        ]
      },
      {
        "id": "level-39",
        "packId": "pack-4",
        "packName": "Eclipse Matrix",
        "indexInPack": 9,
        "globalIndex": 39,
        "name": "Nebula Rift",
        "rows": 6,
        "cols": 6,
        "grid": [
          [
            1,
            1,
            0,
            0,
            0,
            0
          ],
          [
            0,
            0,
            0,
            0,
            0,
            0
          ],
          [
            0,
            1,
            1,
            0,
            0,
            0
          ],
          [
            0,
            0,
            1,
            0,
            1,
            0
          ],
          [
            1,
            0,
            0,
            0,
            0,
            1
          ],
          [
            1,
            1,
            0,
            0,
            0,
            1
          ]
        ],
        "optimalMoves": 7,
        "par": 7,
        "starThresholds": [
          7,
          9,
          12
        ]
      },
      {
        "id": "level-40",
        "packId": "pack-4",
        "packName": "Eclipse Matrix",
        "indexInPack": 10,
        "globalIndex": 40,
        "name": "Zenith Eclipse",
        "rows": 6,
        "cols": 6,
        "grid": [
          [
            1,
            1,
            0,
            0,
            1,
            1
          ],
          [
            1,
            0,
            1,
            1,
            0,
            1
          ],
          [
            0,
            1,
            1,
            1,
            1,
            0
          ],
          [
            0,
            1,
            1,
            1,
            1,
            0
          ],
          [
            1,
            0,
            1,
            1,
            0,
            1
          ],
          [
            1,
            1,
            0,
            0,
            1,
            1
          ]
        ],
        "optimalMoves": 8,
        "par": 8,
        "starThresholds": [
          8,
          10,
          13
        ]
      }
    ]
  },
  {
    "id": "pack-5",
    "name": "Infinite Zen",
    "subtitle": "Grand 6x6 meditative master challenges",
    "rows": 6,
    "cols": 6,
    "levelDefs": [
      {
        "name": "Serenity Ripple",
        "moves": [
          [
            1,
            1
          ],
          [
            1,
            4
          ],
          [
            4,
            1
          ],
          [
            4,
            4
          ],
          [
            2,
            2
          ],
          [
            3,
            3
          ]
        ]
      },
      {
        "name": "Bamboo Forest",
        "moves": [
          [
            0,
            1
          ],
          [
            2,
            1
          ],
          [
            4,
            1
          ],
          [
            1,
            4
          ],
          [
            3,
            4
          ],
          [
            5,
            4
          ]
        ]
      },
      {
        "name": "Floating Lanterns",
        "moves": [
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            5,
            2
          ],
          [
            5,
            3
          ],
          [
            2,
            0
          ],
          [
            3,
            0
          ],
          [
            2,
            5
          ],
          [
            3,
            5
          ]
        ]
      },
      {
        "name": "Karesansui Sand",
        "moves": [
          [
            1,
            2
          ],
          [
            2,
            3
          ],
          [
            3,
            2
          ],
          [
            4,
            3
          ],
          [
            0,
            0
          ],
          [
            5,
            5
          ],
          [
            0,
            5
          ]
        ]
      },
      {
        "name": "Torus Loop",
        "moves": [
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            1,
            3
          ],
          [
            1,
            4
          ],
          [
            4,
            1
          ],
          [
            4,
            2
          ],
          [
            4,
            3
          ],
          [
            4,
            4
          ]
        ]
      },
      {
        "name": "Temple Gate",
        "moves": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            4
          ],
          [
            0,
            5
          ],
          [
            3,
            2
          ],
          [
            3,
            3
          ],
          [
            5,
            2
          ],
          [
            5,
            3
          ]
        ]
      },
      {
        "name": "Shinto Shrine",
        "moves": [
          [
            1,
            0
          ],
          [
            1,
            5
          ],
          [
            2,
            1
          ],
          [
            2,
            4
          ],
          [
            3,
            2
          ],
          [
            3,
            3
          ],
          [
            4,
            1
          ],
          [
            4,
            4
          ]
        ]
      },
      {
        "name": "Enso Circle",
        "moves": [
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            1,
            1
          ],
          [
            1,
            4
          ],
          [
            2,
            0
          ],
          [
            2,
            5
          ],
          [
            3,
            0
          ],
          [
            3,
            5
          ],
          [
            4,
            1
          ],
          [
            4,
            4
          ],
          [
            5,
            2
          ],
          [
            5,
            3
          ]
        ]
      },
      {
        "name": "Grand Harmonizer",
        "moves": [
          [
            0,
            0
          ],
          [
            1,
            1
          ],
          [
            2,
            2
          ],
          [
            3,
            3
          ],
          [
            4,
            4
          ],
          [
            5,
            5
          ],
          [
            0,
            5
          ],
          [
            1,
            4
          ],
          [
            2,
            3
          ],
          [
            3,
            2
          ],
          [
            4,
            1
          ],
          [
            5,
            0
          ]
        ]
      },
      {
        "name": "Nirvana",
        "moves": [
          [
            0,
            2
          ],
          [
            1,
            3
          ],
          [
            2,
            4
          ],
          [
            3,
            1
          ],
          [
            4,
            2
          ],
          [
            5,
            3
          ],
          [
            2,
            2
          ],
          [
            3,
            3
          ],
          [
            0,
            0
          ],
          [
            5,
            5
          ]
        ]
      }
    ],
    "levels": [
      {
        "id": "level-41",
        "packId": "pack-5",
        "packName": "Infinite Zen",
        "indexInPack": 1,
        "globalIndex": 41,
        "name": "Serenity Ripple",
        "rows": 6,
        "cols": 6,
        "grid": [
          [
            0,
            1,
            0,
            0,
            1,
            0
          ],
          [
            1,
            1,
            0,
            1,
            1,
            1
          ],
          [
            0,
            0,
            1,
            0,
            1,
            0
          ],
          [
            0,
            1,
            0,
            1,
            0,
            0
          ],
          [
            1,
            1,
            1,
            0,
            1,
            1
          ],
          [
            0,
            1,
            0,
            0,
            1,
            0
          ]
        ],
        "optimalMoves": 6,
        "par": 6,
        "starThresholds": [
          6,
          8,
          11
        ]
      },
      {
        "id": "level-42",
        "packId": "pack-5",
        "packName": "Infinite Zen",
        "indexInPack": 2,
        "globalIndex": 42,
        "name": "Bamboo Forest",
        "rows": 6,
        "cols": 6,
        "grid": [
          [
            1,
            1,
            1,
            0,
            1,
            0
          ],
          [
            0,
            0,
            0,
            1,
            1,
            1
          ],
          [
            1,
            1,
            1,
            0,
            0,
            0
          ],
          [
            0,
            0,
            0,
            1,
            1,
            1
          ],
          [
            1,
            1,
            1,
            0,
            0,
            0
          ],
          [
            0,
            1,
            0,
            1,
            1,
            1
          ]
        ],
        "optimalMoves": 6,
        "par": 6,
        "starThresholds": [
          6,
          8,
          11
        ]
      },
      {
        "id": "level-43",
        "packId": "pack-5",
        "packName": "Infinite Zen",
        "indexInPack": 3,
        "globalIndex": 43,
        "name": "Floating Lanterns",
        "rows": 6,
        "cols": 6,
        "grid": [
          [
            0,
            1,
            0,
            0,
            1,
            0
          ],
          [
            1,
            0,
            1,
            1,
            0,
            1
          ],
          [
            0,
            1,
            0,
            0,
            1,
            0
          ],
          [
            0,
            1,
            0,
            0,
            1,
            0
          ],
          [
            1,
            0,
            1,
            1,
            0,
            1
          ],
          [
            0,
            1,
            0,
            0,
            1,
            0
          ]
        ],
        "optimalMoves": 8,
        "par": 8,
        "starThresholds": [
          8,
          10,
          13
        ]
      },
      {
        "id": "level-44",
        "packId": "pack-5",
        "packName": "Infinite Zen",
        "indexInPack": 4,
        "globalIndex": 44,
        "name": "Karesansui Sand",
        "rows": 6,
        "cols": 6,
        "grid": [
          [
            1,
            1,
            1,
            0,
            1,
            1
          ],
          [
            1,
            1,
            1,
            0,
            0,
            1
          ],
          [
            0,
            0,
            1,
            1,
            1,
            0
          ],
          [
            0,
            1,
            1,
            1,
            0,
            0
          ],
          [
            0,
            0,
            0,
            1,
            1,
            1
          ],
          [
            0,
            0,
            0,
            1,
            1,
            1
          ]
        ],
        "optimalMoves": 7,
        "par": 7,
        "starThresholds": [
          7,
          9,
          12
        ]
      },
      {
        "id": "level-45",
        "packId": "pack-5",
        "packName": "Infinite Zen",
        "indexInPack": 5,
        "globalIndex": 45,
        "name": "Torus Loop",
        "rows": 6,
        "cols": 6,
        "grid": [
          [
            0,
            1,
            1,
            1,
            1,
            0
          ],
          [
            1,
            0,
            1,
            1,
            0,
            1
          ],
          [
            0,
            1,
            1,
            1,
            1,
            0
          ],
          [
            0,
            1,
            1,
            1,
            1,
            0
          ],
          [
            1,
            0,
            1,
            1,
            0,
            1
          ],
          [
            0,
            1,
            1,
            1,
            1,
            0
          ]
        ],
        "optimalMoves": 8,
        "par": 8,
        "starThresholds": [
          8,
          10,
          13
        ]
      },
      {
        "id": "level-46",
        "packId": "pack-5",
        "packName": "Infinite Zen",
        "indexInPack": 6,
        "globalIndex": 46,
        "name": "Temple Gate",
        "rows": 6,
        "cols": 6,
        "grid": [
          [
            0,
            0,
            1,
            1,
            0,
            0
          ],
          [
            1,
            1,
            0,
            0,
            1,
            1
          ],
          [
            0,
            0,
            1,
            1,
            0,
            0
          ],
          [
            0,
            1,
            0,
            0,
            1,
            0
          ],
          [
            0,
            0,
            0,
            0,
            0,
            0
          ],
          [
            0,
            1,
            0,
            0,
            1,
            0
          ]
        ],
        "optimalMoves": 8,
        "par": 8,
        "starThresholds": [
          8,
          10,
          13
        ]
      },
      {
        "id": "level-47",
        "packId": "pack-5",
        "packName": "Infinite Zen",
        "indexInPack": 7,
        "globalIndex": 47,
        "name": "Shinto Shrine",
        "rows": 6,
        "cols": 6,
        "grid": [
          [
            1,
            0,
            0,
            0,
            0,
            1
          ],
          [
            1,
            0,
            0,
            0,
            0,
            1
          ],
          [
            0,
            1,
            0,
            0,
            1,
            0
          ],
          [
            0,
            1,
            0,
            0,
            1,
            0
          ],
          [
            1,
            1,
            0,
            0,
            1,
            1
          ],
          [
            0,
            1,
            0,
            0,
            1,
            0
          ]
        ],
        "optimalMoves": 8,
        "par": 8,
        "starThresholds": [
          8,
          10,
          13
        ]
      },
      {
        "id": "level-48",
        "packId": "pack-5",
        "packName": "Infinite Zen",
        "indexInPack": 8,
        "globalIndex": 48,
        "name": "Enso Circle",
        "rows": 6,
        "cols": 6,
        "grid": [
          [
            0,
            0,
            0,
            0,
            0,
            0
          ],
          [
            0,
            1,
            0,
            0,
            1,
            0
          ],
          [
            0,
            0,
            0,
            0,
            0,
            0
          ],
          [
            0,
            0,
            0,
            0,
            0,
            0
          ],
          [
            0,
            1,
            0,
            0,
            1,
            0
          ],
          [
            0,
            0,
            0,
            0,
            0,
            0
          ]
        ],
        "optimalMoves": 12,
        "par": 12,
        "starThresholds": [
          12,
          14,
          17
        ]
      },
      {
        "id": "level-49",
        "packId": "pack-5",
        "packName": "Infinite Zen",
        "indexInPack": 9,
        "globalIndex": 49,
        "name": "Grand Harmonizer",
        "rows": 6,
        "cols": 6,
        "grid": [
          [
            1,
            0,
            0,
            0,
            0,
            1
          ],
          [
            0,
            1,
            0,
            0,
            1,
            0
          ],
          [
            0,
            0,
            1,
            1,
            0,
            0
          ],
          [
            0,
            0,
            1,
            1,
            0,
            0
          ],
          [
            0,
            1,
            0,
            0,
            1,
            0
          ],
          [
            1,
            0,
            0,
            0,
            0,
            1
          ]
        ],
        "optimalMoves": 12,
        "par": 12,
        "starThresholds": [
          12,
          14,
          17
        ]
      },
      {
        "id": "level-50",
        "packId": "pack-5",
        "packName": "Infinite Zen",
        "indexInPack": 10,
        "globalIndex": 50,
        "name": "Nirvana",
        "rows": 6,
        "cols": 6,
        "grid": [
          [
            1,
            0,
            1,
            0,
            0,
            0
          ],
          [
            1,
            0,
            1,
            1,
            0,
            0
          ],
          [
            0,
            0,
            1,
            0,
            1,
            1
          ],
          [
            1,
            1,
            0,
            1,
            0,
            0
          ],
          [
            0,
            0,
            1,
            1,
            0,
            1
          ],
          [
            0,
            0,
            0,
            1,
            0,
            1
          ]
        ],
        "optimalMoves": 10,
        "par": 10,
        "starThresholds": [
          10,
          12,
          15
        ]
      }
    ]
  }
];
  const ALL_LEVELS = [
  {
    "id": "level-1",
    "packId": "pack-1",
    "packName": "Dawn Awakening",
    "indexInPack": 1,
    "globalIndex": 1,
    "name": "First Glow",
    "rows": 3,
    "cols": 3,
    "grid": [
      [
        0,
        1,
        0
      ],
      [
        1,
        1,
        1
      ],
      [
        0,
        1,
        0
      ]
    ],
    "optimalMoves": 1,
    "par": 1,
    "starThresholds": [
      1,
      3,
      6
    ]
  },
  {
    "id": "level-2",
    "packId": "pack-1",
    "packName": "Dawn Awakening",
    "indexInPack": 2,
    "globalIndex": 2,
    "name": "Twin Beacons",
    "rows": 3,
    "cols": 3,
    "grid": [
      [
        1,
        1,
        1
      ],
      [
        0,
        0,
        0
      ],
      [
        1,
        1,
        1
      ]
    ],
    "optimalMoves": 2,
    "par": 2,
    "starThresholds": [
      2,
      4,
      7
    ]
  },
  {
    "id": "level-3",
    "packId": "pack-1",
    "packName": "Dawn Awakening",
    "indexInPack": 3,
    "globalIndex": 3,
    "name": "Diagonal Echo",
    "rows": 3,
    "cols": 3,
    "grid": [
      [
        1,
        1,
        0
      ],
      [
        1,
        0,
        1
      ],
      [
        0,
        1,
        1
      ]
    ],
    "optimalMoves": 2,
    "par": 2,
    "starThresholds": [
      2,
      4,
      7
    ]
  },
  {
    "id": "level-4",
    "packId": "pack-1",
    "packName": "Dawn Awakening",
    "indexInPack": 4,
    "globalIndex": 4,
    "name": "Cornerstone",
    "rows": 3,
    "cols": 3,
    "grid": [
      [
        1,
        0,
        1
      ],
      [
        0,
        0,
        1
      ],
      [
        1,
        1,
        0
      ]
    ],
    "optimalMoves": 3,
    "par": 3,
    "starThresholds": [
      3,
      5,
      8
    ]
  },
  {
    "id": "level-5",
    "packId": "pack-1",
    "packName": "Dawn Awakening",
    "indexInPack": 5,
    "globalIndex": 5,
    "name": "Four Corners",
    "rows": 3,
    "cols": 3,
    "grid": [
      [
        1,
        0,
        1
      ],
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        1
      ]
    ],
    "optimalMoves": 4,
    "par": 4,
    "starThresholds": [
      4,
      6,
      9
    ]
  },
  {
    "id": "level-6",
    "packId": "pack-1",
    "packName": "Dawn Awakening",
    "indexInPack": 6,
    "globalIndex": 6,
    "name": "Cross Beam",
    "rows": 3,
    "cols": 3,
    "grid": [
      [
        0,
        1,
        0
      ],
      [
        1,
        0,
        1
      ],
      [
        0,
        1,
        0
      ]
    ],
    "optimalMoves": 4,
    "par": 4,
    "starThresholds": [
      4,
      6,
      9
    ]
  },
  {
    "id": "level-7",
    "packId": "pack-1",
    "packName": "Dawn Awakening",
    "indexInPack": 7,
    "globalIndex": 7,
    "name": "The Trident",
    "rows": 3,
    "cols": 3,
    "grid": [
      [
        1,
        0,
        1
      ],
      [
        1,
        1,
        1
      ],
      [
        1,
        0,
        1
      ]
    ],
    "optimalMoves": 3,
    "par": 3,
    "starThresholds": [
      3,
      5,
      8
    ]
  },
  {
    "id": "level-8",
    "packId": "pack-1",
    "packName": "Dawn Awakening",
    "indexInPack": 8,
    "globalIndex": 8,
    "name": "Whispering Wind",
    "rows": 3,
    "cols": 3,
    "grid": [
      [
        1,
        0,
        0
      ],
      [
        1,
        1,
        1
      ],
      [
        1,
        0,
        0
      ]
    ],
    "optimalMoves": 3,
    "par": 3,
    "starThresholds": [
      3,
      5,
      8
    ]
  },
  {
    "id": "level-9",
    "packId": "pack-1",
    "packName": "Dawn Awakening",
    "indexInPack": 9,
    "globalIndex": 9,
    "name": "Radiant Diamond",
    "rows": 3,
    "cols": 3,
    "grid": [
      [
        0,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        0,
        0,
        0
      ]
    ],
    "optimalMoves": 5,
    "par": 5,
    "starThresholds": [
      5,
      7,
      10
    ]
  },
  {
    "id": "level-10",
    "packId": "pack-1",
    "packName": "Dawn Awakening",
    "indexInPack": 10,
    "globalIndex": 10,
    "name": "Zenith 3x3",
    "rows": 3,
    "cols": 3,
    "grid": [
      [
        1,
        1,
        1
      ],
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        1
      ]
    ],
    "optimalMoves": 4,
    "par": 4,
    "starThresholds": [
      4,
      6,
      9
    ]
  },
  {
    "id": "level-11",
    "packId": "pack-2",
    "packName": "Lotus Petals",
    "indexInPack": 1,
    "globalIndex": 11,
    "name": "Lotus Bud",
    "rows": 4,
    "cols": 4,
    "grid": [
      [
        0,
        1,
        0,
        0
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1
      ],
      [
        0,
        0,
        1,
        0
      ]
    ],
    "optimalMoves": 2,
    "par": 2,
    "starThresholds": [
      2,
      4,
      7
    ]
  },
  {
    "id": "level-12",
    "packId": "pack-2",
    "packName": "Lotus Petals",
    "indexInPack": 2,
    "globalIndex": 12,
    "name": "Square Dance",
    "rows": 4,
    "cols": 4,
    "grid": [
      [
        0,
        1,
        1,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        1,
        1,
        0
      ]
    ],
    "optimalMoves": 4,
    "par": 4,
    "starThresholds": [
      4,
      6,
      9
    ]
  },
  {
    "id": "level-13",
    "packId": "pack-2",
    "packName": "Lotus Petals",
    "indexInPack": 3,
    "globalIndex": 13,
    "name": "Outer Ring",
    "rows": 4,
    "cols": 4,
    "grid": [
      [
        1,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        1
      ]
    ],
    "optimalMoves": 4,
    "par": 4,
    "starThresholds": [
      4,
      6,
      9
    ]
  },
  {
    "id": "level-14",
    "packId": "pack-2",
    "packName": "Lotus Petals",
    "indexInPack": 4,
    "globalIndex": 14,
    "name": "Petal Waves",
    "rows": 4,
    "cols": 4,
    "grid": [
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        1,
        1,
        0
      ],
      [
        0,
        1,
        1,
        0
      ],
      [
        1,
        0,
        0,
        1
      ]
    ],
    "optimalMoves": 4,
    "par": 4,
    "starThresholds": [
      4,
      6,
      9
    ]
  },
  {
    "id": "level-15",
    "packId": "pack-2",
    "packName": "Lotus Petals",
    "indexInPack": 5,
    "globalIndex": 15,
    "name": "Mirror Lake",
    "rows": 4,
    "cols": 4,
    "grid": [
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        1,
        1,
        0
      ],
      [
        0,
        1,
        1,
        0
      ],
      [
        1,
        0,
        0,
        1
      ]
    ],
    "optimalMoves": 4,
    "par": 4,
    "starThresholds": [
      4,
      6,
      9
    ]
  },
  {
    "id": "level-16",
    "packId": "pack-2",
    "packName": "Lotus Petals",
    "indexInPack": 6,
    "globalIndex": 16,
    "name": "The Anchor",
    "rows": 4,
    "cols": 4,
    "grid": [
      [
        1,
        0,
        1,
        0
      ],
      [
        1,
        1,
        1,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1
      ]
    ],
    "optimalMoves": 4,
    "par": 4,
    "starThresholds": [
      4,
      6,
      9
    ]
  },
  {
    "id": "level-17",
    "packId": "pack-2",
    "packName": "Lotus Petals",
    "indexInPack": 7,
    "globalIndex": 17,
    "name": "Pinwheel",
    "rows": 4,
    "cols": 4,
    "grid": [
      [
        1,
        1,
        1,
        1
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        1,
        1,
        1,
        1
      ]
    ],
    "optimalMoves": 4,
    "par": 4,
    "starThresholds": [
      4,
      6,
      9
    ]
  },
  {
    "id": "level-18",
    "packId": "pack-2",
    "packName": "Lotus Petals",
    "indexInPack": 8,
    "globalIndex": 18,
    "name": "Crescent Moon",
    "rows": 4,
    "cols": 4,
    "grid": [
      [
        0,
        1,
        0,
        0
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        0
      ],
      [
        0,
        0,
        0,
        1
      ]
    ],
    "optimalMoves": 3,
    "par": 3,
    "starThresholds": [
      3,
      5,
      8
    ]
  },
  {
    "id": "level-19",
    "packId": "pack-2",
    "packName": "Lotus Petals",
    "indexInPack": 9,
    "globalIndex": 19,
    "name": "Diamond Ring",
    "rows": 4,
    "cols": 4,
    "grid": [
      [
        0,
        0,
        1,
        0
      ],
      [
        1,
        1,
        0,
        1
      ],
      [
        1,
        0,
        1,
        0
      ],
      [
        1,
        1,
        1,
        0
      ]
    ],
    "optimalMoves": 5,
    "par": 5,
    "starThresholds": [
      5,
      7,
      10
    ]
  },
  {
    "id": "level-20",
    "packId": "pack-2",
    "packName": "Lotus Petals",
    "indexInPack": 10,
    "globalIndex": 20,
    "name": "Zenith 4x4",
    "rows": 4,
    "cols": 4,
    "grid": [
      [
        1,
        1,
        0,
        1
      ],
      [
        1,
        0,
        1,
        0
      ],
      [
        0,
        1,
        0,
        1
      ],
      [
        1,
        0,
        1,
        1
      ]
    ],
    "optimalMoves": 6,
    "par": 6,
    "starThresholds": [
      6,
      8,
      11
    ]
  },
  {
    "id": "level-21",
    "packId": "pack-3",
    "packName": "Constellations",
    "indexInPack": 1,
    "globalIndex": 21,
    "name": "North Star",
    "rows": 5,
    "cols": 5,
    "grid": [
      [
        0,
        0,
        1,
        0,
        0
      ],
      [
        0,
        1,
        0,
        1,
        0
      ],
      [
        0,
        1,
        1,
        1,
        0
      ],
      [
        0,
        1,
        0,
        1,
        0
      ],
      [
        0,
        0,
        1,
        0,
        0
      ]
    ],
    "optimalMoves": 3,
    "par": 3,
    "starThresholds": [
      3,
      5,
      8
    ]
  },
  {
    "id": "level-22",
    "packId": "pack-3",
    "packName": "Constellations",
    "indexInPack": 2,
    "globalIndex": 22,
    "name": "Pleiades",
    "rows": 5,
    "cols": 5,
    "grid": [
      [
        0,
        1,
        0,
        1,
        0
      ],
      [
        1,
        1,
        0,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        0,
        1,
        1
      ],
      [
        0,
        1,
        0,
        1,
        0
      ]
    ],
    "optimalMoves": 4,
    "par": 4,
    "starThresholds": [
      4,
      6,
      9
    ]
  },
  {
    "id": "level-23",
    "packId": "pack-3",
    "packName": "Constellations",
    "indexInPack": 3,
    "globalIndex": 23,
    "name": "Orion Belt",
    "rows": 5,
    "cols": 5,
    "grid": [
      [
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1,
        0
      ],
      [
        1,
        0,
        1,
        0,
        1
      ],
      [
        0,
        1,
        1,
        1,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0
      ]
    ],
    "optimalMoves": 3,
    "par": 3,
    "starThresholds": [
      3,
      5,
      8
    ]
  },
  {
    "id": "level-24",
    "packId": "pack-3",
    "packName": "Constellations",
    "indexInPack": 4,
    "globalIndex": 24,
    "name": "Solar Corona",
    "rows": 5,
    "cols": 5,
    "grid": [
      [
        0,
        1,
        0,
        1,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        0,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        0,
        1,
        0
      ]
    ],
    "optimalMoves": 6,
    "par": 6,
    "starThresholds": [
      6,
      8,
      11
    ]
  },
  {
    "id": "level-25",
    "packId": "pack-3",
    "packName": "Constellations",
    "indexInPack": 5,
    "globalIndex": 25,
    "name": "Cassiopeia",
    "rows": 5,
    "cols": 5,
    "grid": [
      [
        1,
        1,
        1,
        1,
        0
      ],
      [
        0,
        1,
        0,
        1,
        1
      ],
      [
        0,
        1,
        1,
        0,
        1
      ],
      [
        0,
        0,
        0,
        1,
        1
      ],
      [
        0,
        1,
        1,
        1,
        1
      ]
    ],
    "optimalMoves": 5,
    "par": 5,
    "starThresholds": [
      5,
      7,
      10
    ]
  },
  {
    "id": "level-26",
    "packId": "pack-3",
    "packName": "Constellations",
    "indexInPack": 6,
    "globalIndex": 26,
    "name": "Starlight Cross",
    "rows": 5,
    "cols": 5,
    "grid": [
      [
        0,
        1,
        1,
        1,
        0
      ],
      [
        1,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        1,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        1
      ],
      [
        0,
        1,
        1,
        1,
        0
      ]
    ],
    "optimalMoves": 5,
    "par": 5,
    "starThresholds": [
      5,
      7,
      10
    ]
  },
  {
    "id": "level-27",
    "packId": "pack-3",
    "packName": "Constellations",
    "indexInPack": 7,
    "globalIndex": 27,
    "name": "Stardust Orbit",
    "rows": 5,
    "cols": 5,
    "grid": [
      [
        1,
        1,
        0,
        1,
        1
      ],
      [
        1,
        0,
        1,
        0,
        1
      ],
      [
        0,
        1,
        1,
        1,
        0
      ],
      [
        1,
        0,
        1,
        0,
        1
      ],
      [
        1,
        1,
        0,
        1,
        1
      ]
    ],
    "optimalMoves": 5,
    "par": 5,
    "starThresholds": [
      5,
      7,
      10
    ]
  },
  {
    "id": "level-28",
    "packId": "pack-3",
    "packName": "Constellations",
    "indexInPack": 8,
    "globalIndex": 28,
    "name": "Southern Cross",
    "rows": 5,
    "cols": 5,
    "grid": [
      [
        0,
        0,
        1,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        1,
        0,
        1
      ],
      [
        0,
        0,
        1,
        0,
        0
      ],
      [
        0,
        1,
        0,
        1,
        0
      ]
    ],
    "optimalMoves": 6,
    "par": 6,
    "starThresholds": [
      6,
      8,
      11
    ]
  },
  {
    "id": "level-29",
    "packId": "pack-3",
    "packName": "Constellations",
    "indexInPack": 9,
    "globalIndex": 29,
    "name": "Galaxy Spiral",
    "rows": 5,
    "cols": 5,
    "grid": [
      [
        0,
        0,
        1,
        1,
        0
      ],
      [
        0,
        1,
        0,
        0,
        1
      ],
      [
        1,
        1,
        0,
        0,
        1
      ],
      [
        0,
        1,
        1,
        1,
        0
      ],
      [
        0,
        0,
        1,
        0,
        0
      ]
    ],
    "optimalMoves": 7,
    "par": 7,
    "starThresholds": [
      7,
      9,
      12
    ]
  },
  {
    "id": "level-30",
    "packId": "pack-3",
    "packName": "Constellations",
    "indexInPack": 10,
    "globalIndex": 30,
    "name": "Zenith 5x5",
    "rows": 5,
    "cols": 5,
    "grid": [
      [
        0,
        1,
        0,
        1,
        0
      ],
      [
        1,
        0,
        0,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        0,
        1
      ],
      [
        0,
        1,
        0,
        1,
        0
      ]
    ],
    "optimalMoves": 8,
    "par": 8,
    "starThresholds": [
      8,
      10,
      13
    ]
  },
  {
    "id": "level-31",
    "packId": "pack-4",
    "packName": "Eclipse Matrix",
    "indexInPack": 1,
    "globalIndex": 31,
    "name": "Total Eclipse",
    "rows": 5,
    "cols": 5,
    "grid": [
      [
        1,
        0,
        0,
        1,
        0
      ],
      [
        0,
        1,
        1,
        1,
        1
      ],
      [
        0,
        1,
        1,
        1,
        0
      ],
      [
        1,
        1,
        1,
        1,
        0
      ],
      [
        0,
        1,
        0,
        0,
        1
      ]
    ],
    "optimalMoves": 7,
    "par": 7,
    "starThresholds": [
      7,
      9,
      12
    ]
  },
  {
    "id": "level-32",
    "packId": "pack-4",
    "packName": "Eclipse Matrix",
    "indexInPack": 2,
    "globalIndex": 32,
    "name": "Umbra Wave",
    "rows": 5,
    "cols": 5,
    "grid": [
      [
        0,
        0,
        0,
        1,
        0
      ],
      [
        0,
        0,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        0,
        0
      ],
      [
        0,
        1,
        0,
        0,
        0
      ]
    ],
    "optimalMoves": 8,
    "par": 8,
    "starThresholds": [
      8,
      10,
      13
    ]
  },
  {
    "id": "level-33",
    "packId": "pack-4",
    "packName": "Eclipse Matrix",
    "indexInPack": 3,
    "globalIndex": 33,
    "name": "Prism Refraction",
    "rows": 5,
    "cols": 5,
    "grid": [
      [
        1,
        0,
        0,
        1,
        1
      ],
      [
        0,
        1,
        0,
        0,
        1
      ],
      [
        0,
        0,
        1,
        0,
        0
      ],
      [
        1,
        0,
        0,
        1,
        0
      ],
      [
        1,
        1,
        0,
        0,
        1
      ]
    ],
    "optimalMoves": 7,
    "par": 7,
    "starThresholds": [
      7,
      9,
      12
    ]
  },
  {
    "id": "level-34",
    "packId": "pack-4",
    "packName": "Eclipse Matrix",
    "indexInPack": 4,
    "globalIndex": 34,
    "name": "Penumbra Veil",
    "rows": 5,
    "cols": 5,
    "grid": [
      [
        1,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        1,
        0,
        1
      ],
      [
        1,
        0,
        1,
        0,
        1
      ],
      [
        1,
        0,
        1,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        1
      ]
    ],
    "optimalMoves": 7,
    "par": 7,
    "starThresholds": [
      7,
      9,
      12
    ]
  },
  {
    "id": "level-35",
    "packId": "pack-4",
    "packName": "Eclipse Matrix",
    "indexInPack": 5,
    "globalIndex": 35,
    "name": "Lunar Tide",
    "rows": 5,
    "cols": 5,
    "grid": [
      [
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        1,
        1,
        0
      ],
      [
        1,
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1,
        1
      ]
    ],
    "optimalMoves": 8,
    "par": 8,
    "starThresholds": [
      8,
      10,
      13
    ]
  },
  {
    "id": "level-36",
    "packId": "pack-4",
    "packName": "Eclipse Matrix",
    "indexInPack": 6,
    "globalIndex": 36,
    "name": "Hexagonal Gate",
    "rows": 6,
    "cols": 6,
    "grid": [
      [
        0,
        0,
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1,
        0,
        0
      ]
    ],
    "optimalMoves": 8,
    "par": 8,
    "starThresholds": [
      8,
      10,
      13
    ]
  },
  {
    "id": "level-37",
    "packId": "pack-4",
    "packName": "Eclipse Matrix",
    "indexInPack": 7,
    "globalIndex": 37,
    "name": "Binary Star",
    "rows": 6,
    "cols": 6,
    "grid": [
      [
        0,
        1,
        0,
        0,
        1,
        0
      ],
      [
        1,
        1,
        0,
        1,
        1,
        1
      ],
      [
        0,
        0,
        1,
        0,
        1,
        0
      ],
      [
        0,
        1,
        0,
        1,
        0,
        0
      ],
      [
        1,
        1,
        1,
        0,
        1,
        1
      ],
      [
        0,
        1,
        0,
        0,
        1,
        0
      ]
    ],
    "optimalMoves": 6,
    "par": 6,
    "starThresholds": [
      6,
      8,
      11
    ]
  },
  {
    "id": "level-38",
    "packId": "pack-4",
    "packName": "Eclipse Matrix",
    "indexInPack": 8,
    "globalIndex": 38,
    "name": "Singularity",
    "rows": 6,
    "cols": 6,
    "grid": [
      [
        1,
        1,
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        1,
        1,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1,
        1,
        0
      ],
      [
        0,
        1,
        1,
        1,
        1,
        0
      ],
      [
        0,
        0,
        1,
        1,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0,
        1,
        1
      ]
    ],
    "optimalMoves": 6,
    "par": 6,
    "starThresholds": [
      6,
      8,
      11
    ]
  },
  {
    "id": "level-39",
    "packId": "pack-4",
    "packName": "Eclipse Matrix",
    "indexInPack": 9,
    "globalIndex": 39,
    "name": "Nebula Rift",
    "rows": 6,
    "cols": 6,
    "grid": [
      [
        1,
        1,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        0,
        0,
        0
      ],
      [
        0,
        0,
        1,
        0,
        1,
        0
      ],
      [
        1,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        1,
        0,
        0,
        0,
        1
      ]
    ],
    "optimalMoves": 7,
    "par": 7,
    "starThresholds": [
      7,
      9,
      12
    ]
  },
  {
    "id": "level-40",
    "packId": "pack-4",
    "packName": "Eclipse Matrix",
    "indexInPack": 10,
    "globalIndex": 40,
    "name": "Zenith Eclipse",
    "rows": 6,
    "cols": 6,
    "grid": [
      [
        1,
        1,
        0,
        0,
        1,
        1
      ],
      [
        1,
        0,
        1,
        1,
        0,
        1
      ],
      [
        0,
        1,
        1,
        1,
        1,
        0
      ],
      [
        0,
        1,
        1,
        1,
        1,
        0
      ],
      [
        1,
        0,
        1,
        1,
        0,
        1
      ],
      [
        1,
        1,
        0,
        0,
        1,
        1
      ]
    ],
    "optimalMoves": 8,
    "par": 8,
    "starThresholds": [
      8,
      10,
      13
    ]
  },
  {
    "id": "level-41",
    "packId": "pack-5",
    "packName": "Infinite Zen",
    "indexInPack": 1,
    "globalIndex": 41,
    "name": "Serenity Ripple",
    "rows": 6,
    "cols": 6,
    "grid": [
      [
        0,
        1,
        0,
        0,
        1,
        0
      ],
      [
        1,
        1,
        0,
        1,
        1,
        1
      ],
      [
        0,
        0,
        1,
        0,
        1,
        0
      ],
      [
        0,
        1,
        0,
        1,
        0,
        0
      ],
      [
        1,
        1,
        1,
        0,
        1,
        1
      ],
      [
        0,
        1,
        0,
        0,
        1,
        0
      ]
    ],
    "optimalMoves": 6,
    "par": 6,
    "starThresholds": [
      6,
      8,
      11
    ]
  },
  {
    "id": "level-42",
    "packId": "pack-5",
    "packName": "Infinite Zen",
    "indexInPack": 2,
    "globalIndex": 42,
    "name": "Bamboo Forest",
    "rows": 6,
    "cols": 6,
    "grid": [
      [
        1,
        1,
        1,
        0,
        1,
        0
      ],
      [
        0,
        0,
        0,
        1,
        1,
        1
      ],
      [
        1,
        1,
        1,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        1,
        1,
        1
      ],
      [
        1,
        1,
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        0,
        1,
        1,
        1
      ]
    ],
    "optimalMoves": 6,
    "par": 6,
    "starThresholds": [
      6,
      8,
      11
    ]
  },
  {
    "id": "level-43",
    "packId": "pack-5",
    "packName": "Infinite Zen",
    "indexInPack": 3,
    "globalIndex": 43,
    "name": "Floating Lanterns",
    "rows": 6,
    "cols": 6,
    "grid": [
      [
        0,
        1,
        0,
        0,
        1,
        0
      ],
      [
        1,
        0,
        1,
        1,
        0,
        1
      ],
      [
        0,
        1,
        0,
        0,
        1,
        0
      ],
      [
        0,
        1,
        0,
        0,
        1,
        0
      ],
      [
        1,
        0,
        1,
        1,
        0,
        1
      ],
      [
        0,
        1,
        0,
        0,
        1,
        0
      ]
    ],
    "optimalMoves": 8,
    "par": 8,
    "starThresholds": [
      8,
      10,
      13
    ]
  },
  {
    "id": "level-44",
    "packId": "pack-5",
    "packName": "Infinite Zen",
    "indexInPack": 4,
    "globalIndex": 44,
    "name": "Karesansui Sand",
    "rows": 6,
    "cols": 6,
    "grid": [
      [
        1,
        1,
        1,
        0,
        1,
        1
      ],
      [
        1,
        1,
        1,
        0,
        0,
        1
      ],
      [
        0,
        0,
        1,
        1,
        1,
        0
      ],
      [
        0,
        1,
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        0,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        1,
        1,
        1
      ]
    ],
    "optimalMoves": 7,
    "par": 7,
    "starThresholds": [
      7,
      9,
      12
    ]
  },
  {
    "id": "level-45",
    "packId": "pack-5",
    "packName": "Infinite Zen",
    "indexInPack": 5,
    "globalIndex": 45,
    "name": "Torus Loop",
    "rows": 6,
    "cols": 6,
    "grid": [
      [
        0,
        1,
        1,
        1,
        1,
        0
      ],
      [
        1,
        0,
        1,
        1,
        0,
        1
      ],
      [
        0,
        1,
        1,
        1,
        1,
        0
      ],
      [
        0,
        1,
        1,
        1,
        1,
        0
      ],
      [
        1,
        0,
        1,
        1,
        0,
        1
      ],
      [
        0,
        1,
        1,
        1,
        1,
        0
      ]
    ],
    "optimalMoves": 8,
    "par": 8,
    "starThresholds": [
      8,
      10,
      13
    ]
  },
  {
    "id": "level-46",
    "packId": "pack-5",
    "packName": "Infinite Zen",
    "indexInPack": 6,
    "globalIndex": 46,
    "name": "Temple Gate",
    "rows": 6,
    "cols": 6,
    "grid": [
      [
        0,
        0,
        1,
        1,
        0,
        0
      ],
      [
        1,
        1,
        0,
        0,
        1,
        1
      ],
      [
        0,
        0,
        1,
        1,
        0,
        0
      ],
      [
        0,
        1,
        0,
        0,
        1,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        0,
        0,
        1,
        0
      ]
    ],
    "optimalMoves": 8,
    "par": 8,
    "starThresholds": [
      8,
      10,
      13
    ]
  },
  {
    "id": "level-47",
    "packId": "pack-5",
    "packName": "Infinite Zen",
    "indexInPack": 7,
    "globalIndex": 47,
    "name": "Shinto Shrine",
    "rows": 6,
    "cols": 6,
    "grid": [
      [
        1,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        1
      ],
      [
        0,
        1,
        0,
        0,
        1,
        0
      ],
      [
        0,
        1,
        0,
        0,
        1,
        0
      ],
      [
        1,
        1,
        0,
        0,
        1,
        1
      ],
      [
        0,
        1,
        0,
        0,
        1,
        0
      ]
    ],
    "optimalMoves": 8,
    "par": 8,
    "starThresholds": [
      8,
      10,
      13
    ]
  },
  {
    "id": "level-48",
    "packId": "pack-5",
    "packName": "Infinite Zen",
    "indexInPack": 8,
    "globalIndex": 48,
    "name": "Enso Circle",
    "rows": 6,
    "cols": 6,
    "grid": [
      [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        0,
        0,
        1,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        0,
        0,
        1,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    ],
    "optimalMoves": 12,
    "par": 12,
    "starThresholds": [
      12,
      14,
      17
    ]
  },
  {
    "id": "level-49",
    "packId": "pack-5",
    "packName": "Infinite Zen",
    "indexInPack": 9,
    "globalIndex": 49,
    "name": "Grand Harmonizer",
    "rows": 6,
    "cols": 6,
    "grid": [
      [
        1,
        0,
        0,
        0,
        0,
        1
      ],
      [
        0,
        1,
        0,
        0,
        1,
        0
      ],
      [
        0,
        0,
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1,
        0,
        0
      ],
      [
        0,
        1,
        0,
        0,
        1,
        0
      ],
      [
        1,
        0,
        0,
        0,
        0,
        1
      ]
    ],
    "optimalMoves": 12,
    "par": 12,
    "starThresholds": [
      12,
      14,
      17
    ]
  },
  {
    "id": "level-50",
    "packId": "pack-5",
    "packName": "Infinite Zen",
    "indexInPack": 10,
    "globalIndex": 50,
    "name": "Nirvana",
    "rows": 6,
    "cols": 6,
    "grid": [
      [
        1,
        0,
        1,
        0,
        0,
        0
      ],
      [
        1,
        0,
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        0,
        1,
        1
      ],
      [
        1,
        1,
        0,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1,
        0,
        1
      ],
      [
        0,
        0,
        0,
        1,
        0,
        1
      ]
    ],
    "optimalMoves": 10,
    "par": 10,
    "starThresholds": [
      10,
      12,
      15
    ]
  }
];

  return {
    PACKS,
    ALL_LEVELS,
    getLevelById: function(id) {
      return ALL_LEVELS.find(l => l.id === id);
    },
    getLevelByIndex: function(idx) {
      return ALL_LEVELS[idx - 1] || null;
    }
  };
}));
