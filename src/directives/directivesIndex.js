import listDir from "./listDir";
import loremDir from "./loremDir";
import priceDir from './priceDir';
import randomBgDir from "./randomBgDir";

export default {
  install(app) {
    app.directive('list', listDir)
    app.directive('random-bg', randomBgDir)
    app.directive('lorem', loremDir)
    app.directive('price', priceDir)
  }
}