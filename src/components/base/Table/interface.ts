import { PropType, CSSProperties, Prop } from 'vue'
import { Align } from '../interface'

export const props = {
  tableAlign: {
    type: String as PropType<Align>,
    default:''
  },
  bodyAlign: {
    type: String as PropType<Align>,
    default:''
  },
  bodyStyle: {
    type: String,
    default:''
  },
  bgColor: {
    type: String,
    default:''
  },
  width: {
    type: String,
    default:'100%'
  },
  height: {
    type: String,
    default:'100%'
  },
  href: {
    type: String,
    default:''
  },
  style: {
    type: [String, Object] as PropType<CSSProperties | string>,
    default: ''
  }
} as const
