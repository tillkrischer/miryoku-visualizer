// prettier-ignore
const topPos = [
  40, 27, 20, 27, 33,
  94, 81, 74, 81, 87,
  148, 135, 128, 135, 141,
  192, 202, 231
];
// prettier-ignore
const leftPos = [
  20, 74, 128, 182, 236,
  20, 74, 128, 182, 236,
  20, 74, 128, 182, 236,
  150, 210, 263
];
// prettier-ignore
const rotation = [
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0,
  0, 20, 40
];
// prettier-ignore
const alphas = [
  "Q", "W", "E", "R", "T",
  "A", "S", "D", "F", "G",
  "Z", "X", "C", "V", "B",
  "Esc", "Spc", "⭾"
];
// prettier-ignore
const symbols = [
  "{", "&", "*", "(", "}",
  ":", "$", "%", "^", "+",
  "~", "!", "@", "#", "|",
  "(", ")", "_"
];
// prettier-ignore
const functions = [
  "F12", "F7", "F8", "F9", "PrtScr",
  "F11", "F4", "F5", "F6", "ScrLo",
  "F10", "F1", "F2", "F3", "Pause",
  "≡", "Spc", "⭾"
];
// prettier-ignore
const nums = [
  "[", "7", "8", "9", "]",
  ";", "4", "5", "6", "=",
  "`", "1", "2", "3", "\\",
  ".", "0", "-"
];

interface ButtonProps {
  side: 'left' | 'right'
  leftTop: string
  rightTop: string
  leftBottom: string
  rightBottom: string
  top: number
  left: number
  rotation: number
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
    rotation,
  } = props

  const colors =
    side === 'left'
      ? {
          leftTop: 'text-[#000000]',
          rightTop: 'text-[#5cfc45]',
          leftBottom: 'text-[#fd4526]',
          rightBottom: 'text-[#4322fd]',
        }
      : {}

  return (
    <div
      className='absolute h-[54px] w-[54px] rounded-[5px] border border-black bg-[#888888] text-xs font-bold'
      style={{ top, left, transform: `rotate(${rotation}deg)` }}
    >
      <div className='absolute left-[5px] top-[3px] h-[42px] w-[42px] rounded-[3px] border border-[rgba(0,0,0,0.3)] bg-[#a7a7a7]'>
        <div className={`absolute left-[1px] top-[1px] ${colors.leftTop}`}>
          {leftTop}
        </div>
        <div className={`absolute right-[1px] top-[1px] ${colors.rightTop}`}>
          {rightTop}
        </div>
        <div
          className={`absolute bottom-[1px] left-[1px] ${colors.leftBottom}`}
        >
          {leftBottom}
        </div>
        <div
          className={`absolute bottom-[1px] right-[1px] ${colors.rightBottom}`}
        >
          {rightBottom}
        </div>
      </div>
    </div>
  )
}

const App = () => {
  const indicies = [...Array(18).keys()]

  return (
    <div className='App'>
      <h1 className='text-3xl font-bold underline'>Miryoku Visualizer</h1>
      <div className='h-4' />
      <div className='relative'>
        {indicies.map((i) => (
          <Button
            key={i}
            top={topPos[i]}
            left={leftPos[i]}
            rotation={rotation[i]}
            side={i < 18 ? 'left' : 'right'}
            leftTop={alphas[i]}
            rightTop={symbols[i]}
            leftBottom={functions[i]}
            rightBottom={nums[i]}
          />
        ))}
      </div>
    </div>
  )
}

export default App
