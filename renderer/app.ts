import { App, createSSRApp, defineComponent, h } from 'vue'
import PageShell from './PageShell.vue'
import { setPageContext } from './usePageContext'
import components from '@/components'
import type { PageContext } from './types'

export { createApp }


function registerComponent(app:App,componentName:string,component:any){
  const isRegister=app.component(componentName)
  if(!isRegister){
    app.component(componentName,component)
  }
}

function createApp(pageContext: PageContext) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = defineComponent({
    render() {
      return h(
        PageShell,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          }
        }
      )
    }
  })

  const app = createSSRApp(PageWithLayout)
  for(let componentName in components){
    registerComponent(app,componentName,components[componentName])
  }

  // Make `pageContext` available from any Vue component
  setPageContext(app, pageContext)

  return app
}
