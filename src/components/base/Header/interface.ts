import { Align } from './../interface';
import { CSSProperties, ExtractPropTypes, PropType } from 'vue'

export interface LogoOption {
  src: string
  href?: string
}

export interface NavList {
  title: string
  href: string
  width?: string
}

export const headerProp = {
  style: {
    type: [String, Object] as PropType<CSSProperties | string>,
    required: false,
    default: ''
  },
  background:{
    type:String,
    default:'#026fd1'
  },
  fontColor:{
    type:String,
    default:'#fff'
  },
  textAlign:{
    type:String as PropType<Align>,
    default:'left'
  },
  logoOption: {
    type: Object as PropType<LogoOption>,
    required: true,
    default: () => {}
  },
  navList: {
    type: Array as PropType<Partial<NavList>[]>,
    required: true,
    default: () => []
  }
} as const

export type HeaderProp = Partial<ExtractPropTypes<typeof headerProp>>
