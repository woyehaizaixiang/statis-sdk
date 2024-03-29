// 错误日志上报fn
function reportError(log){
  let ua = window.navigator.userAgent;
  let href = window.location.href;
  new Image().src = `http://101.132.236.74:3000/log?log=${log}&ua=${ua}&host=${href}`;
}

function init(Vue){
  window.addEventListener('error', error => {
    reportError(error.message);
  })
  if(typeof(Vue) != 'undefined'){
    Vue.config.errorHandler = function (error) {
      reportError(error);
      console.log(error);
    }
  }
}

module.exports = {
  init,
}
