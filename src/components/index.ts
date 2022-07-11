const componentModules=import.meta.globEager('./**/**/*.vue')
const componentStartName='Locket'
const components:Record<string,any>={}
for(let componentModule in componentModules){
  let componentName= componentModule.split('/')[2]
  let componentFullName=componentStartName+componentName
  components[componentFullName]=componentModules[componentModule].default
}

export default components