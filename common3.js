// @ts-ignore
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

includeJS('https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js');
includeJS('https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.js');
includeCss('https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.css');

$(document).ready(function () {
  alert();
  $('#wrap .bxslider').bxSlider({
    auto: true,
  });
});
