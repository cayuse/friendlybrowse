$().ready(function () {

});


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    document.getElementById("demo").innerHTML = this.responseText;
    xhttp.open("GET", "http://127.0.0.1:3000/browse", true);
    xhttp.send();
}