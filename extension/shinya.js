window.addEventListener("load", function() {
    var el = document.getElementsByClassName("imgArea")[0];
    el.addEventListener("click", function() {
        var img = this.getElementsByTagName("img")[0];
        var dataset = img.dataset;
        if (dataset.src == undefined) {
            dataset.src = img.src;
            img.src = "http://www.shogi.or.jp/news/entry_images/satou-sin_01.jpg";
        } else {
            var _src = dataset.src;
            dataset.src = img.src;
            img.src = _src;
        }
    }); 
}, false);
