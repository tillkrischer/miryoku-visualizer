// prettier-ignore
const yPosLeft = [
  40, 27, 20, 27, 33,
  94, 81, 74, 81, 87,
  148, 135, 128, 135, 141,
  192, 202, 231
];
// prettier-ignore
const yPosRight = [
  33, 27, 20, 27, 40,
  87, 81, 74, 81, 94,
  141, 135, 128, 135, 148,
  231, 202, 192
];
export const yPos = [...yPosLeft, ...yPosRight]
// prettier-ignore
const xPosLeft = [
  20, 74, 128, 182, 236,
  20, 74, 128, 182, 236,
  20, 74, 128, 182, 236,
  150, 210, 263
];
// prettier-ignore
const xPosRight = [
  380, 434, 488, 542, 596,
  380, 434, 488, 542, 596,
  380, 434, 488, 542, 596,
  353, 406, 466
];
export const xPos = [...xPosLeft, ...xPosRight]
// prettier-ignore
const rotationLeft = [
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0,
  0, 20, 40
];
// prettier-ignore
const rotationRight = [
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0,
  -40, -20, 0
];
export const rotation = [...rotationLeft, ...rotationRight]

export type Layer = {
  regular: string[]
  flip: string[]
}

// prettier-ignore
export const alphasQwertyLeft = [
  "Q", "W", "E", "R", "T",
  "A", "S", "D", "F", "G",
  "Z", "X", "C", "V", "B",
  "Esc", "Spc", "⭾"
];
// prettier-ignore
export const alphasQwertyRight = [
  "Y", "U", "I", "O", "P",
  "H", "J", "K", "L", "'",
  "N", "M", ",", ".", "/",
  "↵", "⌫", "⌦"
];
// prettier-ignore
export const alphasAzertyLeft = [
  "A", "Z", "E", "R", "T",
  "Q", "S", "D", "F", "G",
  "W", "X", "C", "V", "B",
  "Esc", "Spc", "⭾"
];
// prettier-ignore
export const alphasAzertyRight = [
  "Y", "U", "I", "O", "P",
  "H", "J", "K", "L", "M",
  "N", ",", ".", "/", "'",
  "↵", "⌫", "⌦"
];

// prettier-ignore
export const symbols: Layer = {
  regular:
    [
      "{", "&", "*", "(", "}",
      ":", "$", "%", "^", "+",
      "~", "!", "@", "#", "|",
      "(", ")", "_"
    ],
  flip:
    [
      "{", "&", "*", "(", "}",
      "+", "$", "%", "^", ":",
      "|", "!", "@", "#", "~",
      "_" ,"(", ")", 
    ],
}

// prettier-ignore
export const mouse: Layer = {
  regular:
    [
      "Rdo", "Pst", "Cpy", "Cut", "Und",
      "", "🠘", "🠙", "🠛", "🠚",
      "", "⇦", "⇧", "⇩", "⇨",
      "R", "L", "M"
    ],
  flip:
    [
      "⇦", "⇧", "⇩", "⇨", "",
      "🠘", "🠙", "🠛", "🠚", "",
      "Und", "Cut", "Cpy", "Pst", "Rdo",
      "M", "L", "R"
    ],
}

// prettier-ignore
export const functions = [
  "F12", "F7", "F8", "F9", "PrtScr",
  "F11", "F4", "F5", "F6", "ScrLo",
  "F10", "F1", "F2", "F3", "Pause",
  "≡", "Spc", "⭾"
];
// prettier-ignore
export const media = [
  "R", "M", "H", "S", "V",
  "E", "Prev", "VUp", "VDo", "Next",
  "◯", "1", "2", "3", "4",
  "Stp", "Ply", "Mut"
];
// prettier-ignore
export const nums = [
  "[", "7", "8", "9", "]",
  ";", "4", "5", "6", "=",
  "`", "1", "2", "3", "\\",
  ".", "0", "-"
];
// prettier-ignore
export const navigation = [
  "Rdo", "Pst", "Cpy", "Cut", "Und",
  "CapL", "⯇", "▲", "▼", "⯈",
  "Ins", "Hom", "PgD", "PgU", "End",
  "⌦", "⌫", "↵",
];

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

// prettier-ignore
export const modLayerLeft = [
  'Boot', 'Tap' , 'Extra', 'Base', '',
  'Super', 'Alt' , 'Ctrl', 'Shift', '',
  'Button', 'RAlt' , 'Opp', 'Cur', '',
  'Media', 'Nav' , 'Mouse', 
]

// prettier-ignore
export const modLayerRight = [
  '', 'Base', 'Extra' , 'Tap', 'Boot',
  '', 'Shift', 'Ctrl' , 'Alt', 'Super',
  '', 'Cur', 'Opp' , 'RAlt', 'Button',
  'Sym', 'Num' , 'Fun', 
]

// prettier-ignore
export const modLayerLeftColors = [
  colorWhite, colorWhite , colorWhite, colorWhite, '',
  colorBlack, colorBlack , colorBlack, colorBlack, '',
  colorGrey, colorBlack , colorWhite, colorWhite, '',
  colorPink, colorCyan , colorYellow, 
]

// prettier-ignore
export const modLayerRightColors = [
  '', colorWhite, colorWhite , colorWhite, colorWhite, 
  '', colorBlack, colorBlack , colorBlack, colorBlack, 
  '', colorWhite, colorWhite , colorBlack, colorGrey, 
  colorGreen, colorBlue, colorRed, 
]
