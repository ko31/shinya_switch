window.addEventListener("load", function() {
    var el = document.getElementsByClassName("kishi")[0];
    el.addEventListener("click", function() {
        var img = this.getElementsByTagName("img")[0];
        img.src = "http://www.shogi.or.jp/topics/photo/satou-sin_01.jpg";
    }); 
}, false);
