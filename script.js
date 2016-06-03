function processform(){
  if(document.getElementById("password").value !== "12345678"){
    alert("Wrong Password!");
  }

  var valid = new RegExp("\\d");
  var username = document.getElementById("username").value;
    if(!valid.test(username)){
      alert("Username needs to have at least one digit.")
    } else{
      document.getElementById("title").innerText="Hello World!";
    }
    return false;
  }
