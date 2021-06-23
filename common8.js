// @ts-ignore

const linkList = [
  {type : 'css' , path : 'https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.css'},
  {type : 'js' , path : 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js'},
  {type : 'js' , path : 'https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.js'}
];
function initCommon(callback){
  for(var i = 0; i < linkList.length; i++ ){
    if(linkList[i].type == 'css'){
      includeCss(linkList[i].path);
    }else if(linkList[i].type == 'js'){
      includeJS(linkList[i].path);
    }

    if(i === linkList.length){
      callback();
    }
  }
}

function includeJS(jsFilePath, _callback) {
  var js = document.createElement('script');
  js.type = 'text/javascript';
  js.src = jsFilePath;

  document.head.appendChild(js);
  console.log('includeJS')

  if(_callback){
    _callback();
  }
}

function includeCss(cssFilePath) {
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.src = cssFilePath;

  document.head.appendChild(css);
  console.log('includeCss')
}

$(document).ready(function () {
  initCommon(CommmonJs);
});

function CommmonJs(){
  console.log('123')
  $('#wrap .bxslider').bxSlider({
    auto: true,
  })
}


