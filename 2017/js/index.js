var imgs = document.getElementsByTagName("img");
// var progressbar = document.getElementById("progressbar");
var mp3 = document.getElementById("mp3");
// console.log(imgs);
function loadAllImages(images,callBack){
    var index = 0;
    mp3.pause();
    for(var i =0 ; i < images.length ; i++){
        // 请求过程
        var img = new Image();
        img.src = images[i].src;
        img.onload = function(){
            index++;
            if(index == images.length){
                callBack();
            }
        }
    }
}

loadAllImages(imgs,function(){
    // progressbar.style.display = "none";
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
        }, 
        onSlideChangeEnd: function(swiper){   //每次切换结束执行动画
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画 
        }
    })
  
    $(function(){
        var music = document.getElementById("music");
        var musicOn = document.getElementById("music-on");

        var deg = 360;
    	mp3.play();
        var flag = true;
        music.onclick = function(){
             if(!mp3.paused){
                mp3.pause();
                music.style.animationPlayState = "paused";
                music.style.WebkitAnimationPlayState="paused";
            }else{
               mp3.play();
                musicOn.src = "imgs/music-on.png";
                music.style.animationPlayState = "running";
            	music.style.WebkitAnimationPlayState="running";
            }
        }
    });
});        
 
