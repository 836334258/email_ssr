import { CSSProperties, PropType } from 'vue'
import { Align, VAlign } from '../interface'

export const props = {
  align: {
    type: String as PropType<Align>
  },
  style: {
    type: [String,Object] as PropType<CSSProperties|string>,
    default:()=>({
      'font-family':'Roboto',
      'font-style': 'normal',
      'font-weight': 400,
      'font-size': '16px',
      'line-height': '150%',
      'color': '#515759'
    })
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
