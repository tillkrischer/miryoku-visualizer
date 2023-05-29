interface ButtonProps {
  side: 'left' | 'right'
  leftTop: string
  rightTop: string
  leftBottom: string
  rightBottom: string
  top: number
  left: number
}

const Button = (props: ButtonProps) => {
  const { side, leftTop, rightTop, leftBottom, rightBottom, top, left } = props

  const colors =
    side == 'left'
      ? {
          leftTop: '#000000',
          rightTop: '#5cfc45',
          leftBottom: '#fd4526',
          rightBottom: '#4322fd',
        }
      : {}

  return (
    <div
      className='absolute h-[54px] w-[54px] rounded-[5px] border border-black bg-[#888888] text-xs font-bold'
      style={{ top, left }}
    >
      <div className='absolute left-[5px] top-[3px] h-[42px] w-[42px] rounded-[3px] border border-[rgba(0,0,0,0.3)] bg-[#a7a7a7]'>
        <div
          className='absolute left-[1px] top-[1px]'
          style={{
            color: colors.leftTop,
          }}
        >
          {leftTop}
        </div>
        <div
          className='absolute right-[1px] top-[1px]'
          style={{
            color: colors.rightTop,
          }}
        >
          {rightTop}
        </div>
        <div
          className='absolute bottom-[1px] left-[1px]'
          style={{
            color: colors.leftBottom,
          }}
        >
          {leftBottom}
        </div>
        <div
          className='absolute bottom-[1px] right-[1px]'
          style={{
            color: colors.rightBottom,
          }}
        >
          {rightBottom}
        </div>
      </div>
    </div>
  )
}

const x = [20, 20, 20, 20, 20]
const y = [20, 74, 128, 182, 234]
const alphas = ['Q', 'W', 'E', 'R', 'T']
const symbols = ['{', '&', '*', '(', '}']
const functions = ['F12', 'F7', 'F8', 'F9', 'PrtScr']
const nums = ['[', '7', '8', '9', ']']

const App = () => {
  const indicies = [...Array(5).keys()]

  return (
    <div className='App'>
      <h1 className='text-3xl font-bold underline'>Miryoku Visualizer</h1>
      <div className='h-4' />
      <div className='relative'>
        {indicies.map((i) => (
          <Button
            key={i}
            top={x[i]}
            left={y[i]}
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
