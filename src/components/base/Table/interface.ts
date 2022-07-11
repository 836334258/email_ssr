import { PropType, CSSProperties, Prop } from "vue";

export type AlignType='left'| 'center'|'right'

export const props = {
  tableAlign:{
    type:String as PropType<AlignType>
  },
  bodyAlign:{
    type:String as PropType<AlignType>
  },
  bodyStyle:{
    type:String
  },
  bgColor:{
    type:String
  },
  width:{
    type:String
  },
  height:{
    type:String
  },
  href:{
    type:String,
    required:true
  },
  style: {
    type: [String, Object] as PropType<CSSProperties | string>,
    required: false,
    default: '',
  },
} as const