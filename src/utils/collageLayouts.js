// src/utils/collageLayouts.js
export const collageLayouts = [
  // Layout 1
  [
    { top: 0, left: 40, rotate: -5 },
    { top: 30, left: 220, rotate: 3 },
    { top: 150, left: 100, rotate: -2 },
    { top: 60, left: 400, rotate: 4 },
    { top: 180, left: 300, rotate: -4 },
    { top: 100, left: 500, rotate: 2 },
  ],

  // Layout 2
  [
    { top: 20, left: 60, rotate: 4 },
    { top: 80, left: 250, rotate: -3 },
    { top: 180, left: 120, rotate: 5 },
    { top: 40, left: 420, rotate: -2 },
    { top: 160, left: 330, rotate: 3 },
    { top: 90, left: 520, rotate: -5 },
  ],

  // Layout 3
  [
    { top: 10, left: 30, rotate: -2 },
    { top: 60, left: 200, rotate: 2 },
    { top: 140, left: 80, rotate: -4 },
    { top: 50, left: 380, rotate: 5 },
    { top: 170, left: 280, rotate: -3 },
    { top: 100, left: 480, rotate: 1 },
  ],

  // Layout 4
  [
    { top: 0, left: 70, rotate: 3 },
    { top: 40, left: 250, rotate: -5 },
    { top: 160, left: 150, rotate: 4 },
    { top: 80, left: 420, rotate: -2 },
    { top: 190, left: 320, rotate: 2 },
    { top: 120, left: 510, rotate: -4 },
  ],

  // Layout 5
  [
    { top: 15, left: 50, rotate: -3 },
    { top: 70, left: 230, rotate: 5 },
    { top: 150, left: 110, rotate: -2 },
    { top: 60, left: 390, rotate: 4 },
    { top: 180, left: 310, rotate: -5 },
    { top: 110, left: 490, rotate: 2 },
  ],
]
// Helper para elegir layout aleatorio
export function getCollageLayout() {
  const index = Math.floor(Math.random() * collageLayouts.length)
  return collageLayouts[index]
}
