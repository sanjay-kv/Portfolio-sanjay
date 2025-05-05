export interface UnderlineEffectProps {
  stroke?: string
  className?: string
}

export interface CircleStrokeTextProps {
  height?: number
  width?: number
  textHeight?: string
  text: string
}

export interface ImageProps {
  src: string
  alt: string
  width: number
  height: number
}

export interface MasonryGridProps {
  images: ImageProps[]
}

export interface AccordionItemProps {
  index: number
  title: string
  isOpen: boolean
  onClick: (index: number) => void
  children: React.ReactNode
}
