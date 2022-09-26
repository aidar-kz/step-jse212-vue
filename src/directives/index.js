import listDir from "./listDir";
import randomBgDir from "./randomBgDir";
import loremDir from "./loremDir";
import priceDir from './priceDir'

export default {
  install(Vue) {
    Vue.directive('list', listDir)
    Vue.directive('random-bg', randomBgDir)
    Vue.directive('lorem', loremDir)
    Vue.directive('price', priceDir)
  }
}