import LocketLink from '@/components/base/Link/Index.vue'
import LocketTable from '@/components/base/Table/Index.vue'
import LocketHeader from '@/components/base/Header/Index.vue'
import LocketFooter from '@/components/base/Footer/Index.vue'
import LocketImage from '@/components/base/Image/Index.vue'
declare module 'vue' {
  export interface GlobalComponents {
    LocketLink: typeof LocketLink
    LocketTable: typeof LocketTable
    LocketHeader: typeof LocketHeader
    LocketFooter: typeof LocketFooter
    LocketImage: typeof LocketImage
  }
}
