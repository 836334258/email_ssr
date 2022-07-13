import { CSSProperties, PropType } from 'vue'
import { Align, VAlign } from '../interface'

export const props = {
  align: {
    type: String as PropType<Align>
  },
  style: {
    type: [String,Object] as PropType<CSSProperties|string>
  },
  width:{
    type:String,
    default:'auto'
  },
  height:{
    type:String
  },
  valign:{
    type:String as PropType<VAlign>
  }
}
