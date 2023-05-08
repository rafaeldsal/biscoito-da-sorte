// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnCokiee = document.querySelector("#btnCokiee");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);

// Eventos
btnCokiee.addEventListener("click", handleClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keypress", handleKeypress);

function handleClick(e) {
  e.preventDefault();

  const messages = ['A vida trará coisas boas se tiver paciência.', 
                    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.', 
                    'Não compense na ira o que lhe falta na razão.', 
                    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?', 'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.', 
                    'A juventude não é uma época da vida, é um estado de espírito.',
                    'Siga os bons e aprenda com eles.', 
                    'Não importa o tamanho da montanha, ela não pode tapar o sol.',
                    'A sorte favorece a mente bem preparada.',
                    'Espere pelo mais sábio dos conselhos: o tempo.',
                    'Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho.'];

  screen2.querySelector("p").innerText = messages[randomNumber]

  toggleScreen();
}

function handleResetClick() {
  toggleScreen();
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function handleKeypress(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}