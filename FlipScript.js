function getMyToken() {
    var cookies = " " + document.cookie,
      cookieName = "aid";
   
    var index = cookies.indexOf(" " + cookieName + "=");
    if (index == -1) {
        index = cookies.indexOf(";" + cookieName + "=");
    }
    if (index == -1 || cookieName == "") {
        return false;
    }
    var lastIndex = cookies.indexOf(";", index + 1);
    if (lastIndex == -1) {
        lastIndex = cookies.length;
    }
   
    return unescape(cookies.substring(index + cookieName.length + 2, lastIndex));
}
 
var url = 'http://api1.flipkart.com/xmi?aid=';
var aid = getMyToken();
 
setInterval(function(){
    $.ajax({
        "url": url + encodeURIComponent(aid),
        "dataType": "json",
        "type" : "POST"
    })
   .done(function (data) {
        console.log(data.status);
    });
}, 1000);
 
