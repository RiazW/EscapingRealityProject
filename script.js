let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

let ufos = [];


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  for (let x = 0; x < 20; x++) {
      let xPos = rnd(-35,35);
      let zPos = rnd(-20,35);
      let yPos = rnd(35, 35);

     ufos.push(new Ufo(xPos, yPos, zPos));
  };
    
      loop();
});
   
function loop(){

    for(let i=0; i< ufos.length; i++){
    ufos[i].invade();
  }

  
  window.requestAnimationFrame( loop );
}