// 错误日志上报fn
function reportError(log){
  let ua = window.navigator.userAgent;
  let href = window.location.href;
  new Image().src = `http://101.132.236.74:3000/log?log=${log}&ua=${ua}&host=${href}`;
}

window.addEventListener('error', error => {
  reportError(error.message);
})

function init(Vue){
  if(typeof(Vue) != 'undefined'){
    Vue.config.errorHandler = function (error) {
      reportError(error);
    }
  }
}

export default {
  init,
}