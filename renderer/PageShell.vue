<template>
  <LocketHeader :textAlign="textAlign"  :background="background" :font-color="fontColor" :logo-option="logoOption" :nav-list="navList" />
  <slot />
  <LocketFooter :after-icon="afterIcon" :media-link="mediaLink" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UsHeaderData from '@/components/base/Header/data'
import UsFooterData from '@/components/base/Footer/data'
export default defineComponent({
  name: 'PageShell',
  data() {
    return {
      ...UsHeaderData.de,
      ...UsFooterData.de
    }
  }
})
</script>
