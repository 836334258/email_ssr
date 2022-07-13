import { CSSProperties, PropType } from 'vue'
import { Align } from '../interface'

export const props = {
  height:{
    type:String,
    default:'1px'
  },
  width:{
    type:String,
    default:'100%'
  },
  background:{
    type:String,
    default:'rgba(27, 28, 30, 0.1)'
  },
  margin:{
    type:String,
    default:'16px 0'
  }
}
