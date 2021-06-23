// @ts-ignore

const linkList = [
  {type : 'js' , path : 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js'},
  {type : 'js' , path : 'https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.js'}
  {type : 'css' , path : 'https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.css'},
];

initCommon(CommmonJs);

function initCommon(callback){
  for(var i = 0; i < linkList.length; i++ ){
    if(linkList[i].type == 'css'){
      includeCss(linkList[i].path);
    }else if(linkList[i].type == 'js'){
      includeJS(linkList[i].path);
    }
    console.log('--', i , linkList.length);
    if(i === linkList.length -1 ){
      callback();
    }
  }
}

function includeJS(jsFilePath, callback) {
  var js = document.createElement('script');
  js.type = 'text/javascript';
  js.src = jsFilePath;

  document.head.appendChild(js);
  console.log('includeJS')
}

function includeCss(cssFilePath, callback) {
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.src = cssFilePath;

  document.head.appendChild(css);
  console.log('includeCss')
}


function CommmonJs(){
  console.log('123')
  $('#wrap .bxslider').bxSlider({
    auto: true,
  })
}


