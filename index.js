
let API_KEY = '563492ad6f91700001000001d587c600c50145c3b29a7df08505b2b3';


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("cover-img").innerHTML = xhttp.responseText;
      console.log(xhttp.responseText);
    }
  };
  xhttp.open("GET", "https://api.pexels.com/v1/search?query=people", true);
  xhttp.setRequestHeader('Authorization', '563492ad6f91700001000001d587c600c50145c3b29a7df08505b2b3');
  xhttp.send();