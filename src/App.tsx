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
const yPos = [...yPosLeft, ...yPosRight];
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
const xPos = [...xPosLeft, ...xPosRight];
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
const rotation = [...rotationLeft, ...rotationRight];
// prettier-ignore
const alphasLeft = [
  "Q", "W", "E", "R", "T",
  "A", "S", "D", "F", "G",
  "Z", "X", "C", "V", "B",
  "Esc", "Spc", "⭾"
];
// prettier-ignore
const alphasRight = [
  "Y", "U", "I", "O", "P",
  "H", "J", "K", "L", "'",
  "N", "M", ",", ".", "/",
  "↵", "⌫", "⌦"
];
const alphas = [...alphasLeft, ...alphasRight];
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
const layer2 = [...symbols, ...mouse];
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
const layer3 = [...functions, ...media];
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
const layer4 = [...nums, ...navigation];

interface ButtonProps {
  side: "left" | "right";
  leftTop: string;
  rightTop: string;
  leftBottom: string;
  rightBottom: string;
  top: number;
  left: number;
  rotation: number;
}

const Button = (props: ButtonProps) => {
  const {
    side,
    leftTop,
    rightTop,
    leftBottom,
    rightBottom,
    top,
    left,
    rotation
  } = props;

  const colors =
    side === "left"
      ? {
        leftTop: "text-[#000000]",
        rightTop: "text-[#5cfc45]",
        leftBottom: "text-[#fd4526]",
        rightBottom: "text-[#4322fd]"
      }
      : {
        leftTop: "text-[#000000]",
        rightTop: "text-[#ffff1b]",
        leftBottom: "text-[#ff4fff]",
        rightBottom: "text-[#4bffff]"
      };

  return (
    <div
      className="absolute h-[54px] w-[54px] rounded-[5px] border border-black bg-[#888888] font-bold"
      style={{ top, left, transform: `rotate(${rotation}deg)` }}
    >
      <div
        className="absolute left-[5px] top-[3px] h-[42px] w-[42px] rounded-[3px] border border-[rgba(0,0,0,0.3)] bg-[#a7a7a7]">
        <div
          className={`absolute left-[1px] top-[1px] text-[0.75rem] ${colors.leftTop}`}
        >
          {leftTop}
        </div>
        <div
          className={`absolute right-[1px] top-[1px] text-[0.65rem] ${colors.rightTop}`}
        >
          {rightTop}
        </div>
        <div
          className={`absolute bottom-[1px] left-[1px] text-[0.65rem] ${colors.leftBottom}`}
        >
          {leftBottom}
        </div>
        <div
          className={`absolute bottom-[1px] right-[1px] text-[0.65rem] ${colors.rightBottom}`}
        >
          {rightBottom}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const indicies = [...Array(36).keys()];

  return (
    <div className="App">
      <div className="m-auto max-w-[650px] text-center">
        <h1 className="text-3xl font-bold underline">Miryoku Visualizer</h1>
        <div className="h-4" />
        <div className="relative">
          {indicies.map((i) => (
            <Button
              key={i}
              top={yPos[i]}
              left={xPos[i]}
              rotation={rotation[i]}
              side={i < 18 ? "left" : "right"}
              leftTop={alphas[i]}
              rightTop={layer2[i]}
              leftBottom={layer3[i]}
              rightBottom={layer4[i]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
