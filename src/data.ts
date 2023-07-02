const yPosLeft = [
  [40, 27, 20, 27, 33],
  [94, 81, 74, 81, 87],
  [148, 135, 128, 135, 141],
  [192, 202, 231],
]

const yPosRight = [
  [33, 27, 20, 27, 40],
  [87, 81, 74, 81, 94],
  [141, 135, 128, 135, 148],
  [231, 202, 192],
]

export const yPos = [
  ...yPosLeft.flatMap((i) => i),
  ...yPosRight.flatMap((i) => i),
]

const xPosLeft = [
  [20, 74, 128, 182, 236],
  [20, 74, 128, 182, 236],
  [20, 74, 128, 182, 236],
  [150, 210, 263],
]

const xPosRight = [
  [380, 434, 488, 542, 596],
  [380, 434, 488, 542, 596],
  [380, 434, 488, 542, 596],
  [353, 406, 466],
]

export const xPos = [
  ...xPosLeft.flatMap((i) => i),
  ...xPosRight.flatMap((i) => i),
]

const rotationLeft = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 20, 40],
]

const rotationRight = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [-40, -20, 0],
]

export const rotation = [
  ...rotationLeft.flatMap((i) => i),
  ...rotationRight.flatMap((i) => i),
]

export type Layer = {
  regular: string[][]
  flip: string[][]
}

export const alphasQwertyLeft: Layer = {
  regular: [
    ['Q', 'W', 'E', 'R', 'T'],
    ['A', 'S', 'D', 'F', 'G'],
    ['Z', 'X', 'C', 'V', 'B'],
    ['Esc', 'Spc', '⭾'],
  ],
  flip: [
    ['Q', 'W', 'E', 'R', 'T'],
    ['A', 'S', 'D', 'F', 'G'],
    ['Z', 'X', 'C', 'V', 'B'],
    ['⌦', '⌫', '↵'],
  ],
}

export const alphasQwertyRight: Layer = {
  regular: [
    ['Y', 'U', 'I', 'O', 'P'],
    ['H', 'J', 'K', 'L', "'"],
    ['N', 'M', ',', '.', '/'],
    ['↵', '⌫', '⌦'],
  ],
  flip: [
    ['Y', 'U', 'I', 'O', 'P'],
    ['H', 'J', 'K', 'L', "'"],
    ['N', 'M', ',', '.', '/'],
    ['⭾', 'Spc', 'Esc'],
  ],
}

export const alphasAzertyLeft: Layer = {
  regular: [
    ['A', 'Z', 'E', 'R', 'T'],
    ['Q', 'S', 'D', 'F', 'G'],
    ['W', 'X', 'C', 'V', 'B'],
    ['Esc', 'Spc', '⭾'],
  ],
  flip: [
    ['A', 'Z', 'E', 'R', 'T'],
    ['Q', 'S', 'D', 'F', 'G'],
    ['W', 'X', 'C', 'V', 'B'],
    ['↵', '⌫', '⌦'],
  ],
}

// prettier-ignore
export const alphasAzertyRight: Layer = {
  regular: [
    ["Y", "U", "I", "O", "P"],
    ["H", "J", "K", "L", "M"],
    ["N", ",", ".", "/", "'"],
    ["↵", "⌫", "⌦"]
  ],
  flip: [
    ["Y", "U", "I", "O", "P"],
    ["H", "J", "K", "L", "M"],
    ["N", ",", ".", "/", "'"],
    ["Esc", "Spc", "⭾"]
  ],
};

// prettier-ignore
export const symbols: Layer = {
  regular: [
    ["{", "&", "*", "(", "}"],
    [":", "$", "%", "^", "+"],
    ["~", "!", "@", "#", "|"],
    ["(", ")", "_"]
  ],
  flip: [
    ["{", "&", "*", "(", "}"],
    ["+", "$", "%", "^", ":"],
    ["|", "!", "@", "#", "~"],
    ["_" ,"(", ")"], 
  ],
}

export const mouse: Layer = {
  regular: [
    ['Rdo', 'Pst', 'Cpy', 'Cut', 'Und'],
    ['', '🠘', '🠙', '🠛', '🠚'],
    ['', '⇦', '⇧', '⇩', '⇨'],
    ['R', 'L', 'M'],
  ],
  flip: [
    ['⇦', '⇧', '⇩', '⇨', ''],
    ['🠘', '🠙', '🠛', '🠚', ''],
    ['Und', 'Cut', 'Cpy', 'Pst', 'Rdo'],
    ['M', 'L', 'R'],
  ],
}

export const functions: Layer = {
  regular: [
    ['F12', 'F7', 'F8', 'F9', 'PrtScr'],
    ['F11', 'F4', 'F5', 'F6', 'ScrLo'],
    ['F10', 'F1', 'F2', 'F3', 'Pause'],
    ['≡', 'Spc', '⭾'],
  ],
  flip: [
    ['PrtScr', 'F7', 'F8', 'F9', 'F12'],
    ['ScrLo', 'F4', 'F5', 'F6', 'F11'],
    ['Pause', 'F1', 'F2', 'F3', 'F10'],
    ['≡', 'Spc', '⭾'],
  ],
}

export const media: Layer = {
  regular: [
    ['R', 'M', 'H', 'S', 'V'],
    ['E', 'Prev', 'VUp', 'VDo', 'Next'],
    ['◯', '1', '2', '3', '4'],
    ['Stp', 'Ply', 'Mut'],
  ],
  flip: [
    ['M', 'H', 'S', 'V', 'R'],
    ['Prev', 'VUp', 'VDo', 'Next', 'E'],
    ['1', '2', '3', '4', '◯'],
    ['Mut', 'Ply', 'Stp'],
  ],
}

export const nums: Layer = {
  regular: [
    ['[', '7', '8', '9', ']'],
    [';', '4', '5', '6', '='],
    ['`', '1', '2', '3', '\\'],
    ['.', '0', '-'],
  ],
  flip: [
    ['[', '7', '8', '9', ']'],
    ['=', '4', '5', '6', ';'],
    ['\\', '1', '2', '3', '`'],
    ['-', '0', '.'],
  ],
}

export const navigation: Layer = {
  regular: [
    ['Rdo', 'Pst', 'Cpy', 'Cut', 'Und'],
    ['CapL', '⯇', '▲', '▼', '⯈'],
    ['Ins', 'Hom', 'PgD', 'PgU', 'End'],
    ['⌦', '⌫', '↵'],
  ],
  flip: [
    ['Hom', 'PgD', 'PgU', 'End', 'Ins'],
    ['⯇', '▲', '▼', '⯈', 'CapL'],
    ['Und', 'Cut', 'Cpy', 'Pst', 'Rdo'],
    ['⌦', '⌫', '↵'],
  ],
}

const colorBlack = 'text-[#000000]'
const colorGreen = 'text-[#5cfc45]'
const colorRed = 'text-[#fd4526]'
const colorBlue = 'text-[#4322fd]'
const colorYellow = 'text-[#ffff1b]'
const colorPink = 'text-[#ff4fff]'
const colorCyan = 'text-[#4bffff]'
const colorWhite = 'text-[#ffffff]'
const colorGrey = 'text-[#b2b2b2]'

export const colorsLeft = {
  leftTop: colorBlack,
  rightTop: colorGreen,
  leftBottom: colorRed,
  rightBottom: colorBlue,
}

export const colorsRight = {
  leftTop: colorBlack,
  rightTop: colorYellow,
  leftBottom: colorPink,
  rightBottom: colorCyan,
}

export const modLayerLeft: Layer = {
  regular: [
    ['Boot', 'Tap', 'Extra', 'Base', ''],
    ['Super', 'Alt', 'Ctrl', 'Shift', ''],
    ['Button', 'RAlt', 'Opp', 'Cur', ''],
    ['Media', 'Nav', 'Mouse'],
  ],
  flip: [
    ['Boot', 'Tap', 'Extra', 'Base', ''],
    ['Super', 'Alt', 'Ctrl', 'Shift', ''],
    ['Button', 'RAlt', 'Opp', 'Cur', ''],
    ['Fun', 'Num', 'Sym'],
  ],
}

export const modLayerRight: Layer = {
  regular: [
    ['', 'Base', 'Extra', 'Tap', 'Boot'],
    ['', 'Shift', 'Ctrl', 'Alt', 'Super'],
    ['', 'Cur', 'Opp', 'RAlt', 'Button'],
    ['Sym', 'Num', 'Fun'],
  ],
  flip: [
    ['', 'Base', 'Extra', 'Tap', 'Boot'],
    ['', 'Shift', 'Ctrl', 'Alt', 'Super'],
    ['', 'Cur', 'Opp', 'RAlt', 'Button'],
    ['Mouse', 'Nav', 'Media'],
  ],
}

export const modLayerLeftColors: Layer = {
  regular: [
    [colorWhite, colorWhite, colorWhite, colorWhite, ''],
    [colorBlack, colorBlack, colorBlack, colorBlack, ''],
    [colorGrey, colorBlack, colorWhite, colorWhite, ''],
    [colorPink, colorCyan, colorYellow],
  ],
  flip: [
    [colorWhite, colorWhite, colorWhite, colorWhite, ''],
    [colorBlack, colorBlack, colorBlack, colorBlack, ''],
    [colorGrey, colorBlack, colorWhite, colorWhite, ''],
    [colorRed, colorBlue, colorGreen],
  ],
}

export const modLayerRightColors: Layer = {
  regular: [
    ['', colorWhite, colorWhite, colorWhite, colorWhite],
    ['', colorBlack, colorBlack, colorBlack, colorBlack],
    ['', colorWhite, colorWhite, colorBlack, colorGrey],
    [colorGreen, colorBlue, colorRed],
  ],
  flip: [
    ['', colorWhite, colorWhite, colorWhite, colorWhite],
    ['', colorBlack, colorBlack, colorBlack, colorBlack],
    ['', colorWhite, colorWhite, colorBlack, colorGrey],
    [colorYellow, colorCyan, colorPink],
  ],
}
