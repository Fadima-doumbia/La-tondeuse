// je met le reste du code à la suite de var instructions pour qu'il se charge pendant le setTimout
setTimeout(function(){
  let instructions = prompt('veillez entrer les instructions');
  var tondeuse = {positionX: 4, positionY:4, orientation: "S"};//Donner la position initiale de la tondeuse ainsi que son orientations. 
  var balise = document.getElementById("tondeuse_1");
  var initiale = document.getElementById('h2');
  var final = document.getElementById('h21');
  var text = "La position X de la tondeuse est: " + tondeuse.positionX + ", la position Y de : " + tondeuse.positionY + " Orientée vers le " + tondeuse.orientation;
  initiale.append(text);
  console.log("avant");
  for(let i=0; i<instructions.length; i++){//analyse et traitement des instructions
    console.log("apres");
    console.log(tondeuse.orientation);
    switch (instructions[i]) {
      case 'A':
        switch (tondeuse.orientation) {
          case 'S':
            if (tondeuse.positionY > 1){
              var recup = balise.offsetTop += 110;//OffsetTop montre la position de la dic sur la pelouse. je le met ds une variable pour rendre dynamique et ajouter 110
              balise.style.top = recup + "px";// je reecris mon css en lui disant que la valeur de mon top a changé. je lui assigne donc une nouvelle valeur
              console.log(balise.offsetTop)
              tondeuse.positionY -= 1;//on a mis un -1 parce que on a pris le position de depart avec un offsetTop. si j'avais fais un offsetBottom,j'aurai mis +=1
            }
          break;
          case 'N':
            if(tondeuse.positionY < 5){
              console.log(balise.offsetTop);
              var recup_nord = balise.offsetTop -= 110;
              console.log(recup_nord);
              balise.style.top = recup_nord + "px";
              console.log(balise.offsetTop);
              tondeuse.positionY += 1;
            }
          break;
          case 'W':
            if(tondeuse.positionX > 1){
              console.log(balise.offsetLeft);
              var recup_ouest = balise.offsetLeft -= 220;
              console.log(recup_ouest);
              balise.style.left = recup_ouest + "px";
              console.log(balise.offsetLeft);
              tondeuse.positionX -= 1;
            }
          break;
          case 'E':
            if(tondeuse.positionX < 5){
              console.log(balise.offsetLeft);
              var recup_est = balise.offsetLeft += 220;
              console.log(recup_est);
              balise.style.left = recup_est + "px";
              console.log(balise.offsetLeft);
              tondeuse.positionX += 1;
            }
            console.log('A marche');
            break;
          default:
            console.log(`Sorry`);
        }
        break;
        //--------------------------------------<  Les differentes orientation de la tondeuse  >--------------------------------------------------------
          // clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 100%, 0 1%); est
          // clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 50%);ouest
          // clip-path: polygon(50% 0%, 100% 50%, 100% 100%, 0 100%, 0 50%); nord
          // clip-path: polygon(100% 0, 100% 50%, 50% 100%, 1% 50%, 0 0); sud
        //--------------------------------------<  une autre manière de tourner la tondeuse  >--------------------------------------------------------
          // var angle = 180 + "deg";
          // balise.style.transform = "rotate(angle)"";
        //--------------------------------------<    Gauche     >--------------------------------------------------------
      case 'G':
        if (tondeuse.orientation == 'W'){
          tondeuse.orientation = 'S';
          balise.style.clipPath = "polygon(100% 0, 100% 50%, 50% 100%, 1% 50%, 0 0)";
        }
        else if (tondeuse.orientation == 'E'){
          tondeuse.orientation = 'N';
          balise.style.clipPath = "polygon(50% 0%, 100% 50%, 100% 100%, 0 100%, 0 50%)";
        }
        else if (tondeuse.orientation == 'N'){
          tondeuse.orientation = 'W';
          balise.style.clipPath = "polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 50%)";
        }
        else if (tondeuse.orientation == 'S'){
          tondeuse.orientation = 'E';
          balise.style.clipPath = "polygon(50% 0, 100% 50%, 50% 100%, 0 100%, 0 1%)";
        }
        console.log('G marche');
        break;
        //--------------------------------------<    Droite     >--------------------------------------------------------
      case 'D':
        if (tondeuse.orientation == 'W'){
          tondeuse.orientation = 'N';
          balise.style.clipPath = "polygon(50% 0%, 100% 50%, 100% 100%, 0 100%, 0 50%)";
        }
        else if (tondeuse.orientation == 'E'){
          tondeuse.orientation = 'S';
          balise.style.clipPath = "polygon(100% 0, 100% 50%, 50% 100%, 1% 50%, 0 0)";
        }
        else if (tondeuse.orientation == 'N'){
          tondeuse.orientation = 'E';
          balise.style.clipPath = "polygon(50% 0, 100% 50%, 50% 100%, 0 100%, 0 1%)";
        }
        else if (tondeuse.orientation == 'S'){
          tondeuse.orientation = 'W';
          balise.style.clipPath = "polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 50%)";
        }
        console.log('D marche');
        break;
      default:
        console.log(`Sorry`);
    }
  }
  window.alert("La position X de la tondeuse est: " + tondeuse.positionX + ", la position Y de : " + tondeuse.positionY + " Orientée vers le " + tondeuse.orientation)
  console.log(tondeuse.positionX, tondeuse.positionY, tondeuse.orientation);
  var text2 = "La position X de la tondeuse est: " + tondeuse.positionX + ", la position Y de : " + tondeuse.positionY + " Orientée vers le " + tondeuse.orientation;
  final.append(text2);
}, 3000);
//La deuxième tondeuse
setTimeout(function(){
  let instructions_2 = prompt('veuillez entrer la 2ème instructions', "");
  var tondeuse_2 = {positionX: 2, positionY:2, orientation: "N"}//Donner la position initiale de la tondeuse (sur la pelouse) ainsi que son orientations. 
  var balise_2 = document.getElementById("tondeuse_2");
  var initiale2 = document.getElementById('h22');
  var final2 = document.getElementById('h23');
  var text3 = "La position X de la tondeuse est: " + tondeuse_2.positionX + ", la position Y de : " + tondeuse_2.positionY + " Orientée vers le " + tondeuse_2.orientation;
  initiale2.append(text3);
  console.log("avant");
  for(let i=0; i<instructions_2.length; i++){//analyse et traitement des instructions
    console.log("apres");
    console.log(tondeuse_2.orientation);
    switch (instructions_2[i]) {
      case 'A':
        switch (tondeuse_2.orientation) {
          case 'S':
            if (tondeuse_2.positionY > 1){
              var recup2 = balise_2.offsetTop += 110;//montre la position de la dic sur la pelouse. Je le met ds une variable pour rendre dynamique et ajouter 110
              balise_2.style.top = recup2 + "px";// je reecris mon css en lui disant que la valeur de mon top a changé. je lui assigne donc une nouvelle valeur
              console.log(balise_2.offsetTop);
              tondeuse_2.positionY -= 1;//on a mis un -1 parce que on a pris le position de depart avec un offsetTop. si j'avais fais un offsetBottom,j'aurai mis +=1
            }
          break;  
          case 'N':
            if(tondeuse_2.positionY < 5){
              console.log(balise_2.offsetTop);
              var nord = balise_2.offsetTop -= 110;
              console.log(nord);
              console.log(balise_2);
              balise_2.style.top = nord + "px";
              console.log(balise_2.offsetTop);
              tondeuse_2.positionY += 1;
            }
          break;
          case 'W':
            if(tondeuse_2.positionX > 1){
              console.log(balise_2.offsetLeft);
              var recup2_ouest = balise_2.offsetLeft -= 220;
              console.log(recup2_ouest);
              balise_2.style.left = recup2_ouest + "px";
              console.log(balise_2.offsetLeft);
              tondeuse_2.positionX -= 1;
            }
          break;
          case 'E':
            if(tondeuse_2.positionX < 5){
              console.log(balise_2.offsetLeft);
              var recup2_est = balise_2.offsetLeft += 220;
              console.log(recup2_est);
              balise_2.style.left = recup2_est + "px";
              console.log(balise_2.offsetLeft);
              tondeuse_2.positionX += 1;
            }
          break;

          default:
            console.log(`Sorry`);
        }
        console.log('A marche');
      break;
      //--------------------------------------<    Gauche     >--------------------------------------------------------
      case 'G':
        if (tondeuse_2.orientation == 'W'){
          tondeuse_2.orientation = 'S';
          balise_2.style.clipPath = "polygon(100% 0, 100% 50%, 50% 100%, 1% 50%, 0 0)";
        }
        else if (tondeuse_2.orientation == 'E'){
          tondeuse_2.orientation = 'N';
          balise_2.style.clipPath = "polygon(50% 0%, 100% 50%, 100% 100%, 0 100%, 0 50%)";
        }
        else if (tondeuse_2.orientation == 'N'){
          tondeuse_2.orientation = 'W';
          balise_2.style.clipPath = "polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 50%)";
        }
        else if (tondeuse_2.orientation == 'S'){
          tondeuse_2.orientation = 'E';
          balise_2.style.clipPath = "polygon(50% 0, 100% 50%, 50% 100%, 0 100%, 0 1%)";
        }
        console.log('G marche');
        break;
        //--------------------------------------<    Droite     >--------------------------------------------------------
      case 'D':
        if (tondeuse_2.orientation == 'W'){
          tondeuse_2.orientation = 'N';
          balise_2.style.clipPath = "polygon(50% 0%, 100% 50%, 100% 100%, 0 100%, 0 50%)";
        }
        else if (tondeuse_2.orientation == 'E'){
          tondeuse_2.orientation = 'S';
          balise_2.style.clipPath = "polygon(100% 0, 100% 50%, 50% 100%, 1% 50%, 0 0)";
        }
        else if (tondeuse_2.orientation == 'N'){
          tondeuse_2.orientation = 'E';
          balise_2.style.clipPath = "polygon(50% 0, 100% 50%, 50% 100%, 0 100%, 0 1%)";
        }
        else if (tondeuse_2.orientation == 'S'){
          tondeuse_2.orientation = 'W';
          balise_2.style.clipPath = "polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 50%)";
        }
        console.log('D marche');
        break;
      default:
      console.log(`Sorry`);
    }
  }
  window.alert("La position X de la tondeuse est: " + tondeuse_2.positionX + " , la position Y de : " + tondeuse_2.positionY + " Orientée vers le " + tondeuse_2.orientation)
  console.log(tondeuse_2.positionX, tondeuse_2.positionY, tondeuse_2.orientation);
  //------------< Et lorsqu'une tondeuse achève une série d'instruction, elle communique sa position et son orientation; >------------------------------------------
  var text4 = "La position X de la tondeuse est: " + tondeuse_2.positionX + ", la position Y de : " + tondeuse_2.positionY + " Orientée vers le " + tondeuse_2.orientation;
  final2.append(text4);
}, 9000);// ou 3 seconds