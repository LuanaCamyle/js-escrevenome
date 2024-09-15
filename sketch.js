let campoIdade;
let campoFantasia; 
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2" , "Recomendador de filmes")
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background(176, 224, 230);
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  
  fill(color(18, 10, 143));
  textAlign(CENTER, CENTER);
  textSize(48);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) { 
  if(idade >= 10) {
    if(idade >= 14) {
      return "Jogos vorazes";
    } else {
      if(idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: de volta ao lar"
        } else {
         return "Guardiões da galáxia";
        }  
      } else {
      if(gostaDeFantasia) {
         return "As aventuras de pi";
      } else {
        return "Minha juventude";
       }
     }
    }
  } else {
    if(gostaDeFantasia) {
       return "Carros 3";
    } else {
      return "O feitiço do tempo";
    }
  }
}