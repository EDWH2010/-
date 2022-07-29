const VideoData = {
    srcArray:[]
};


function detectIsSrcFormat(src){
    let reg = /video\/(\w+\/)*(\w|\s)+\.(mp4)/;
    return reg.test(src);
}

function detectVideoData(data){
    
}