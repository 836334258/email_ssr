import { PropType, CSSProperties, Prop } from 'vue'

export const props = {
  href: {
    type: String,
    required: false
  },
  alt: {
    type: String,
    required: false
  },
  style: {
    type: [String, Object] as PropType<CSSProperties | string>,
    required: false,
    default: ''
  },
  src: {
    type: String,
    required: true
  }
} as const
