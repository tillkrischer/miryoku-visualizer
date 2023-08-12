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
  colorsLeft,
  colorsRight,
  modLayerLeft,
  modLayerRight,
  modLayerLeftColors,
  modLayerRightColors,
  functions,
  nums,
  navigation,
  mouse,
  media,
  symbols,
  Layer,
} from '@/data'

interface ButtonProps {
  colorScheme: 'left' | 'right'
  leftTopValue: string
  rightTopValue: string
  leftBottomValue: string
  rightBottomValue: string
  top: number
  left: number
  rotation: number
  bottomValue: string
  bottomColor: string
}

const Button = (props: ButtonProps) => {
  const {
    colorScheme,
    leftTopValue,
    rightTopValue,
    leftBottomValue,
    rightBottomValue,
    top,
    left,
    rotation,
    bottomValue,
    bottomColor,
  } = props

  return (
    <div
      className='absolute h-[54px] w-[54px] rounded-[5px] border border-black bg-[#888888]'
      style={{ top, left, transform: `rotate(${rotation}deg)` }}
    >
      <div className='absolute left-[5px] top-[3px] h-[42px] w-[42px] rounded-[3px] border border-[rgba(0,0,0,0.3)] bg-[#a7a7a7] leading-none'>
        <ButtonLabel
          position='leftTop'
          value={leftTopValue}
          colorScheme={colorScheme}
        />
        <ButtonLabel
          position='rightTop'
          value={rightTopValue}
          colorScheme={colorScheme}
        />
        <ButtonLabel
          position='leftBottom'
          value={leftBottomValue}
          colorScheme={colorScheme}
        />
        <ButtonLabel
          position='rightBottom'
          value={rightBottomValue}
          colorScheme={colorScheme}
        />
      </div>
      <div
        className={`absolute bottom-[0px]  flex  w-full justify-center text-[0.5rem] font-[600] leading-none ${bottomColor}`}
      >
        {bottomValue}
      </div>
    </div>
  )
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

  return (
    <div className={`absolute ${pos} text-[0.75rem] font-[500] ${color}`}>
      {value}
    </div>
  )
}

const arrangeLayerInternal = (left: Layer, right: Layer, flip: string, nav: string, flipLayers: boolean) => {
  let rightHalf: string[][];
  let leftHalf: string[][];

  if (flip === 'flip') {
    rightHalf = right.flip.default
    leftHalf = left.flip.default
    if (nav === 'invertedT') {
      if (right.flip.invertedT) {
        rightHalf = right.flip.invertedT
      }
      if (left.flip.invertedT) {
        leftHalf = left.flip.invertedT
      }
    }
    else if (nav === 'vi') {
      if (right.flip.vi) {
        rightHalf = right.flip.vi
      }
      if (left.flip.vi) {
        leftHalf = left.flip.vi
      }
    }
  } else {
    rightHalf = right.regular.default
    leftHalf = left.regular.default
    if (nav === 'invertedT') {
      if (right.regular.invertedT) {
        rightHalf = right.regular.invertedT
      }
      if (left.regular.invertedT) {
        leftHalf = left.regular.invertedT
      }
    }
    if (nav === 'vi') {
      if (right.regular.vi) {
        rightHalf = right.regular.vi
      }
      if (left.regular.vi) {
        leftHalf = left.regular.vi
      }
    }
  }

  if (flip === 'flip' && flipLayers) {
    return [
      ...rightHalf.flatMap((i) => i),
      ...leftHalf.flatMap((i) => i),
    ]
  }

  return [
    ...leftHalf.flatMap((i) => i),
    ...rightHalf.flatMap((i) => i),
  ]
}

const arrangeLayer = (left: Layer, right: Layer, flip: string, nav: string) => {
  return arrangeLayerInternal(left, right, flip, nav, true)
}

const arrangeAlphaLayer = (left: Layer, right: Layer, flip: string, nav: string) => {
  return arrangeLayerInternal(left, right, flip, nav, false)
}

const getColorScheme = (index: number, flip: string) => {
  if (flip === 'flip') {
    return index < 18 ? 'right' : 'left'
  }
  return index < 18 ? 'left' : 'right'
}

const alphaLayoutOptions = ['azerty', 'qwerty']
const layerOptions = ['default', 'flip']
const navOptions = ['default', 'invertedT', 'vi']

export const App = () => {
  const [alphaLayout, setAlphaLayout] = useState<string>('qwerty')
  const [flip, setFlip] = useState<string>('default')
  const [nav, setNav] = useState<string>('default')

  const alphas = useMemo(() => {
    switch (alphaLayout) {
      case 'qwerty':
        return arrangeAlphaLayer(alphasQwertyLeft, alphasQwertyRight, flip, nav)
      case 'azerty':
        return arrangeAlphaLayer(alphasAzertyLeft, alphasAzertyRight, flip, nav)
      default:
        return arrangeAlphaLayer(alphasQwertyLeft, alphasQwertyRight, flip, nav)
    }
  }, [alphaLayout, flip, nav])

  const layer2 = useMemo(() => {
    return arrangeLayer(symbols, mouse, flip, nav)
  }, [flip, nav])

  const layer3 = useMemo(() => {
    return arrangeLayer(functions, media, flip, nav)
  }, [flip, nav])

  const layer4 = useMemo(() => {
    return arrangeLayer(nums, navigation, flip, nav)
  }, [flip, nav])

  const modLayer = useMemo(() => {
    return arrangeAlphaLayer(modLayerLeft, modLayerRight, flip, nav)
  }, [flip, nav])

  const modLayerColors = useMemo(() => {
    return arrangeAlphaLayer(modLayerLeftColors, modLayerRightColors, flip, nav)
  }, [flip, nav])

  return (
    <div className='App'>
      <div className='flex w-screen min-w-[670px] flex-col items-center'>
        <h1 className='text-2xl font-bold underline'>Miryoku Visualizer</h1>
        <div className='h-4' />
        <div className='relative h-[320px] w-[670px]'>
          {[...Array(36).keys()].map((i) => (
            <Button
              key={i}
              top={yPos[i]}
              left={xPos[i]}
              rotation={rotation[i]}
              colorScheme={getColorScheme(i, flip)}
              leftTopValue={alphas[i]}
              rightTopValue={layer2[i]}
              leftBottomValue={layer3[i]}
              rightBottomValue={layer4[i]}
              bottomValue={modLayer[i]}
              bottomColor={modLayerColors[i]}
            />
          ))}
        </div>
        <div className='h-4' />
        <div className='flex gap-4'>
          <SelectOption
            options={alphaLayoutOptions}
            onChange={setAlphaLayout}
            selected={alphaLayout}
            label='alphas'
          />
          <SelectOption
            options={navOptions}
            onChange={setNav}
            selected={nav}
            label='nav'
          />
          <SelectOption
            options={layerOptions}
            onChange={setFlip}
            selected={flip}
            label='layers'
          />
        </div>
      </div>
    </div>
  )
}

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
