import { Component } from "vue"

const componentModules = import.meta.globEager('./**/**/*.vue')
const componentStartName = 'Locket'
const components: Record<string, Component> = {}
for (let componentModule in componentModules) {
  let componentName = componentModule.split('/')[2]
  let componentFullName:string = componentStartName + componentName
  components[componentFullName] = componentModules[componentModule].default
}
// console.log('components',components)

export default components
