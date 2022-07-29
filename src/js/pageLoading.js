$(document).ready(function(){
    switch(document.body.id){
       case "INDEX":
          indexLoading();
          break;
      case "HOME":
         homeLoading();
         break;
    }
 });

function indexLoading(){
    alert('indexPage loaded');
    contentShow(getMainPage(),ShowEffect.NORMAL); 
   setInterval(function(){
      imageUpdate($('#content-main-slider'));
   },5000) ;
} 

 function homeLoading(){
    alert('homePage loaded');
    
 }

function loadingPage(url){
   createSoundEffect(SoundEffectOptions.EFFECT1);
   setTimeout(function(){
      window.location.href=url;
   },1500);
}

 function transformParagraph(target,search,text){

 }