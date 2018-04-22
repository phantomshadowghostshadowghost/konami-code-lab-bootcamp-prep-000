const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

function init() {
  // your code here
  var konami = document.querySelector('body');
  
  konami.addEventListener('keydown', function(e) {

    const key = parseInt(e.detail || e.which)
    
    for (var i = 0; i < code.length; i++) {
      if(key === code[i]) {
          index += 1;
          if(index === code.length-1)
          alert("YOU DID IT");
          index=0;
    } else {
      alert("Wrong Code")
      index=0;
    }

  }
  return index;


  })
}

init();
