import { CSSProperties, PropType } from 'vue'
import { Align } from '../interface'

export const props = {
  align: {
    type: String as PropType<Align>
  },
  style: {
    type: [String, Object] as PropType<CSSProperties | string>
  }
}
