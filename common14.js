// @ts-ignore
includeJS('https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js');
includeJS('https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.js');
includeCss('https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.css');

function includeJS(jsFilePath) {
  var js = document.createElement('script');
  js.type = 'text/javascript';
  js.src = jsFilePath;

  document.head.appendChild(js);
  console.log('includeJS')
}

function includeCss(cssFilePath) {
  var css = document.createElement('link');
  css.type = 'stylesheet';
  css.src = cssFilePath;

  document.head.appendChild(css);
  console.log('includeCss')
}



$(document).ready(function () {
  console.log('ready 1')
  
  $('#wrap .bxslider').bxSlider({
    auto: true,
  });
  console.log('ready 2')
});