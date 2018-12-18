contentShow = document.getElementById("content");
content = document.getElementById("contentmain");

contentShow.addEventListener('click',function(e){
    // if(contentShow.)
    if(content.className == "contentshow"){
        content.className = content.className.replace("contentshow","contentmain");        
    }else{
        content.className = "contentshow";
    }
});
