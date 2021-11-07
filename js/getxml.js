var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};

xhttp.open("GET", "xml/aboutus.xml", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;

    for (i = 0, j = 1; i < 7; i++, j++) {
        document.getElementById("par" + j).innerHTML =
            xmlDoc.getElementsByTagName("paragraph")[i].childNodes[0].nodeValue;
    }
}