<template>
<locket-tr style="{background-color: 'red'; height: '200px';}"></locket-tr>
</template>

<script  lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Index',
  setup(){
    return {
      style:{
        backgrounColor:'red'
      }
    }
  }
})
</script>
