const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let id = 0;
function init() {
const konamiCode = document.querySelector('body')
konamiCode.addEventListener('keydown', function(e){
 const key = parseInt(e.detail || e.which);
   for(id = 0; id < code.length; id++){
    if (key === code[id]) {
    id += 1
 
    if (id === code.length) {
      alert("wow coder!");
 
      id = 0;
    }
  } else {
    id = 0;
  }
} 
})
}
