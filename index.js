let API_KEY = "563492ad6f91700001000001d587c600c50145c3b29a7df08505b2b3";
let SearchForm = document.querySelector('#search-form');

SearchForm.addEventListener('submit', function(e){
  e.preventDefault();

  var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          //document.getElementById("container").innerHTML = xhttp.responseText;
          let res = JSON.parse(xhttp.responseText);
          console.log(res);
          console.log(res.photos);
          // let picData= res.photos.map(function(item){
          //   console.log(item.src.medium)
          //   return item.src;
            
          // });
          
          let imageSection = document.getElementById('img-section');
          res.photos.forEach(function (picture) {
            let imgDiv = document.createElement('div');
            imgDiv.classList.add('pic-divs');
            imgDiv.innerHTML="";
            imgDiv.innerHTML = ` 
            <img src="${picture.src.medium}">
            <p> ${picture.photographer}</p>
            <p>${picture.photographer_url}</p>

            `

            imageSection.appendChild(imgDiv)
            
          });
           
        }
      };
      let textValue = document.getElementById('search-bar').value;
      

      xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}`, true);
      xhttp.setRequestHeader("Authorization", API_KEY);
      xhttp.send();

 
})
      
