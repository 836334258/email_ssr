import { PropType, CSSProperties, Prop } from "vue";

export const props = {
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