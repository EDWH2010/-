
   const ShowEffect = {
                SLIDE:'slide',
                FADE:"fade",
                NORMAL:'normal'
            };

    const SoundEffectOptions = {
        EFFECT1:'effect1',
        EFFECT2:'effect2',
        EFFECT3:'scrollEffect'
    };

const createSoundLib = (id) => {
      let div = document.createElement('div');
     div.setAttribute('id',id);
    document.body.appendChild(div);

    return div;
}

const createSoundEffect = (type) => {
    let parent=null;
    if(document.getElementById('audio-effect-lib') == null){
        parent = createSoundLib('audio-effect-lib');
    }
    parent = document.getElementById('audio-effect-lib');

   let aEle = document.createElement('audio');
   aEle.setAttribute('src',getSoundEffect(type));
    aEle.setAttribute('autoplay','autoplay');
   aEle.addEventListener('ended',function(){
      parent.removeChild(this);
   });

   parent.appendChild(aEle);
}


const getSoundEffect = (type) =>{
    let result='';
    switch(type) {
        case 'effect1':
            result =  'sound/buttonEvent01.mp3';
            break;
        case 'effect2':
            break;
        default:
            break;
    }
    return result;
};

            const getMainContent = () =>{
                let mainCom = $('#Main');
                return mainCom;
            };

            const getMainPage = () => {
                return getMainContent().find('div#main-page');
            };

            const getIntroductionPage = () => {
                return getMainContent().find('div#introduction-page');
            };

            const getStoryPage = () => {
                return getMainContent().find('div#story-page');
            };

            const getCastPage = () =>{
                return getMainContent().find('div#cast-page');
            };

            const getTrailerPage = () =>{
                return getMainContent().find('div#trailer-page');
            }

            const getAllPage = () =>{
                let tArr = [getMainPage(),getIntroductionPage(),getStoryPage(),getCastPage(),getTrailerPage()];
                return tArr;
            };

            const detectEveryMainPage = () => {
                return (getMainContent().find('div#main-page') && getMainContent().find('div#introduction-page') && getMainContent().find('div#story-page')
                && getMainContent().find('div#cast-page') && getMainContent().find('div#trailer-page')) ? true : false;
            };
            
            const returnPageName = (id) =>{
                let rId='HOME';
                switch(id){
                    case 'main-page':
                        rId='HOME'
                        break;
                    case 'introduction-page':
                        rId='INTRODUCTION';
                        break;
                    case 'story-page':
                        rId = 'STORY';
                        break;
                    case 'cast-page':
                        rId='CAST';
                        break;
                    case 'trailer-page':
                        rId='TRAILER';
                        break;
                }

                return rId;
            };

            const contentShow = (content,type) => {
                let id = content.attr('id');

                if(type == ShowEffect.SLIDE)
                    pageSlideShowById(id);
                else if(type == ShowEffect.Fade)
                    pageFadeShowById(id);
                else if(type == ShowEffect.NORMAL)
                    pageNormalShowById(id);
            };

            const pageSlideShowById = (id)=>{
                getAllPage().filter(e=>e.attr('id') != id).forEach((e)=>{
                     e.slideUp(1000);
                     
                 });      
                  getAllPage().filter(e=>e.attr('id') == id).forEach((e)=>{
                       
                     e.stop().slideDown(1000,function(){
                        let hBlock = e.parent().find('#main-content-title').find('h1');
                        let dname = returnPageName(id);

                        textShow(hBlock,dname);
                     });
                     
                    // 
                 });     
            }

            const pageFadeShowById = (id)=>{
                 getAllPage().filter(e=>e.attr('id') != id).forEach((e)=>{
                     e.animate({opacity:'0%'},1000,function(){
                        e.hide();
                     });     
                 });      
                  getAllPage().filter(e=>e.attr('id') == id).forEach((e)=>{
                       
                     e.stop().animate({opacity:'100%'},1000,function(){
                        e.show();
                        let hBlock = e.parent().find('#main-content-title').find('h1');
                        let dname = returnPageName(id);

                        textShow(hBlock,dname);
                     });
                     
                    // 
                 });     
            }

            const pageNormalShowById = (id) =>{
                 getAllPage().filter(e=>e.attr('id') != id).forEach((e)=>{
                     e.hide();
                 });      
                  getAllPage().filter(e=>e.attr('id') == id).forEach((e)=>{
                     e.show();

                     let hBlock = e.parent().find('#main-content-title').find('h1');
                    textShow(hBlock,returnPageName(id));
                 });
                   
            }

            function textShow(ele,text){
                if(typeof ele === 'Array'){
                    return;
                }
                 ele.html(text);
            }

//imageUpdate
const bgImages = {
    Home:"../img/bg/alian_bg.jpg",
    Introduction:"../img/bg/alian_bg(Intro).jpg",
    Story:"../img/bg/alian_bg(Story).jpg",
    Cast:"../img/bg/alian_bg.jpg",
    Trailer:"../img/bg/alian_bg(Trailer).jpg"
};

String.prototype.captilize = function(){
    let str = this;
    let fs = str.charAt(0).toUpperCase();

    return fs + str.substring(1,str.length).toLowerCase();
}

let imgIndex=0;

function imageUpdate(slider){
    
  let imgs = slider.children();
   if(++imgIndex >= imgs.size())
     imgIndex=0;
    imgs.fadeOut(1500);

  imgs.each(function(index,element){   
        var $e = $(element);
        if(index == imgIndex){
            $e.fadeIn(1500);
        }
  });
}

function imageChange(slider,index){
    if(imgIndex == index){
        return;
    }
    
    let imgs = slider.children();
    imgs.fadeOut(1500);

    imgIndex=index;

     imgs.each(function(i,element){   
        if(i == imgIndex){
            $(element).fadeIn(1500);
        }
  });
}

//scrolling Effect

function scrollToTop(){
    $('body').animate({scrollTop:'0'},1500);
}
