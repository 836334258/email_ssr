import { PropType, ExtractPropTypes } from 'vue'

export interface AfterIcon {
  src: string
  title: string
  href: string
}

export interface MediaLink {
  src: string
  href: string
}

export const footerProp = {
  afterIcon: {
    type: Array as PropType<AfterIcon[]>,
    default: () => []
  },
  mediaLink: {
    type: Array as PropType<MediaLink[]>,
    default: () => []
  }
} as const

export type FooterProp = Partial<ExtractPropTypes<typeof footerProp>>
