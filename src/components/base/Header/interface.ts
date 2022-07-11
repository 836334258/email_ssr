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
  logoOption: {
    type: Object as PropType<LogoOption>,
    required: true,
    default: () => {}
  },
  navList: {
    type: Array as PropType<NavList[]>,
    required: true,
    default: () => []
  }
} as const

export type HeaderProp = Partial<ExtractPropTypes<typeof headerProp>>
