<template>
<locket-table align="center" bodyAlign="center" style="margin:0 auto">
  <locket-tr>
    <locket-td><p :style="style"></p></locket-td>
  </locket-tr>
</locket-table>
</template>

<script lang="ts">
export default {
  name:'Line',
}
</script>

<script setup lang="ts">
import { ref } from 'vue';
import  { props } from './interface'
const componentProps=defineProps(props)
const style=ref({
  ...componentProps
})
</script>

<style lang="scss" scoped></style>
