// @ts-ignore


function includeJS(jsFilePath) {
  return new Promise(resolve => {
    var js = document.createElement('script');
    js.type = 'text/javascript';
    js.src = jsFilePath;
    const r = document.head.appendChild(js);

    js.onload = function() {
      resolve(r);
    };
  });
}

function includeCss(cssFilePath) {
  return new Promise(resolve => {
    var css = document.createElement('link');
    css.type = 'stylesheet';
    css.src = cssFilePath;
    const r = document.head.appendChild(css);

    resolve(r);
  });
}

async function importJs(){
  await includeCss('https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.css');
  await includeJS('https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js');
  await includeJS('https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.js');

  commonJs();
}

$(document).ready(function() {
  importJs();
});

function commonJs(){
  $('#wrap .bxslider').bxSlider({
    auto: true,
  });
}
