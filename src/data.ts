
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
const symbols = [
  "{", "&", "*", "(", "}",
  ":", "$", "%", "^", "+",
  "~", "!", "@", "#", "|",
  "(", ")", "_"
];
// prettier-ignore
const mouse = [
  "Redo", "Paste", "Copy", "Cut", "Undo",
  "", "🠘", "🠙", "🠛", "🠚",
  "", "⇦", "⇧", "⇩", "⇨",
  "R", "L", "M"
];
export const layer2 = [...symbols, ...mouse]
// prettier-ignore
const functions = [
  "F12", "F7", "F8", "F9", "PrtScr",
  "F11", "F4", "F5", "F6", "ScrLo",
  "F10", "F1", "F2", "F3", "Pause",
  "≡", "Spc", "⭾"
];
// prettier-ignore
const media = [
  "R", "M", "H", "S", "V",
  "E", "Prev", "VUp", "VDo", "Next",
  "◯", "1", "2", "3", "4",
  "Stop", "Play", "Mut"
];
export const layer3 = [...functions, ...media]
// prettier-ignore
const nums = [
  "[", "7", "8", "9", "]",
  ";", "4", "5", "6", "=",
  "`", "1", "2", "3", "\\",
  ".", "0", "-"
];
// prettier-ignore
const navigation = [
  "Redo", "Paste", "Copy", "Cut", "Undo",
  "CapL", "⯇", "▲", "▼", "⯈",
  "Ins", "Home", "PgD", "PgU", "End",
  "↵", "⌫", "⌦"
];
export const layer4 = [...nums, ...navigation]
