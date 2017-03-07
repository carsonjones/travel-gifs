import Main from './main.js'

const $body = $('body');

export default {
  init: ()=>{
    if ($body.hasClass('main-page')){
      Main.init();
    }
  }
}