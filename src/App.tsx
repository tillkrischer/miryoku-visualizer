import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useMemo, useState } from 'react'
import { Label } from '@/components/ui/label'
import {
  alphasAzertyLeft,
  alphasAzertyRight,
  alphasQwertyLeft,
  alphasQwertyRight,
  rotation,
  xPos,
  yPos,
  layer2,
  layer3,
  layer4,
} from '@/data'

interface ButtonProps {
  colorScheme: 'left' | 'right'
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
    colorScheme,
    leftTop,
    rightTop,
    leftBottom,
    rightBottom,
    top,
    left,
    rotation,
  } = props

  return (
    <div
      className='absolute h-[54px] w-[54px] rounded-[5px] border border-black bg-[#888888]'
      style={{ top, left, transform: `rotate(${rotation}deg)` }}
    >
      <div className='absolute left-[5px] top-[3px] h-[42px] w-[42px] rounded-[3px] border border-[rgba(0,0,0,0.3)] bg-[#a7a7a7]'>
        <ButtonLabel
          position='leftTop'
          value={leftTop}
          colorScheme={colorScheme}
        />
        <ButtonLabel
          position='rightTop'
          value={rightTop}
          colorScheme={colorScheme}
        />
        <ButtonLabel
          position='leftBottom'
          value={leftBottom}
          colorScheme={colorScheme}
        />
        <ButtonLabel
          position='rightBottom'
          value={rightBottom}
          colorScheme={colorScheme}
        />
      </div>
    </div>
  )
}

const colorsLeft = {
  leftTop: 'text-[#000000]',
  rightTop: 'text-[#5cfc45]',
  leftBottom: 'text-[#fd4526]',
  rightBottom: 'text-[#4322fd]',
}
const colorsRight = {
  leftTop: 'text-[#000000]',
  rightTop: 'text-[#ffff1b]',
  leftBottom: 'text-[#ff4fff]',
  rightBottom: 'text-[#4bffff]',
}

interface LabelProp {
  value: string
  position: 'leftTop' | 'rightTop' | 'leftBottom' | 'rightBottom'
  colorScheme: 'left' | 'right'
}

const ButtonLabel = (props: LabelProp) => {
  const { value, position, colorScheme } = props

  let pos = 'top-[1px] left-[1px]'
  if (position === 'rightTop') {
    pos = 'top-[1px] right-[1px]'
  } else if (position === 'leftBottom') {
    pos = 'bottom-[1px] left-[1px]'
  } else if (position === 'rightBottom') {
    pos = 'bottom-[1px] right-[1px]'
  }

  let color = colorsLeft[position]
  if (colorScheme === 'right') {
    color = colorsRight[position]
  }

  return <div className={`absolute ${pos} text-[0.75rem] font-[500] ${color}`}>{value}</div>
}

const alphaLayouts = ['azerty', 'qwerty']

const App = () => {
  const [alphaLayout, setAlphaLayout] = useState<string>('qwerty')

  const alphas = useMemo(() => {
    switch (alphaLayout) {
      case 'qwerty':
        return [...alphasQwertyLeft, ...alphasQwertyRight]
      case 'azerty':
        return [...alphasAzertyLeft, ...alphasAzertyRight]
      default:
        return [...alphasQwertyLeft, ...alphasQwertyRight]
    }
  }, [alphaLayout])

  return (
    <div className='App'>
      <div className='flex w-screen min-w-[670px] flex-col items-center'>
        <h1 className='text-2xl font-bold underline'>Miryoku Visualizer</h1>
        <div className='h-4' />
        <div className='relative h-[350px] w-[670px]'>
          {[...Array(36).keys()].map((i) => (
            <Button
              key={i}
              top={yPos[i]}
              left={xPos[i]}
              rotation={rotation[i]}
              colorScheme={i < 18 ? 'left' : 'right'}
              leftTop={alphas[i]}
              rightTop={layer2[i]}
              leftBottom={layer3[i]}
              rightBottom={layer4[i]}
            />
          ))}
        </div>
        <div>
          <SelectOption
            options={alphaLayouts}
            onChange={setAlphaLayout}
            selected={alphaLayout}
            label='alphas'
          />
        </div>
      </div>
    </div>
  )
}

export default App

interface SelectOptionsProps {
  options: string[]
  selected: string
  onChange: (value: string) => void
  label: string
}

export const SelectOption = (props: SelectOptionsProps) => {
  const { options, onChange, selected, label } = props

  return (
    <div className='w-[180px] text-left'>
      <Label>{label}</Label>
      <Select onValueChange={onChange} value={selected}>
        <SelectTrigger>
          <SelectValue>{selected}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((opt) => (
              <SelectItem value={opt} key={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
