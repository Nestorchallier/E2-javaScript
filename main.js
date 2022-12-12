const numberInput = document.getElementById("numberInput");  // escucha lo que el usuario ingresa
const submitInput = document.getElementById("submitInput"); //escucha evento
const form = document.getElementById("form"); // formulario, capturo el submit
const render__container = document.getElementById("render--container"); // renderiza las pizzas

const Pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Maza: (harina, huevos, aceite), salsa, muzzarella, aceitunas"],

  },
  {
    id: 2,
    nombre: "Pizza Napolitana",
    precio: 850,
    ingredientes: ["Maza: (harina, huevos, aceite), salsa, muzzarella, tomate, ajo, aceitunas"],

  },
  {
    id: 3,
    nombre: "Pizza Calabresa",
    precio: 450,
    ingredientes: ["Maza: (harina, huevos, aceite), salsa, longaniza,  aceitunas"],

  },
  {
    id: 4,
    nombre: "Pizza Fugazeta",
    precio: 700,
    ingredientes: ["Maza: (harina, huevos, aceite), muzzarella, cebolla, aceitunas "],

  },
  {
    id: 5,
    nombre: ["Pizza Fiesta"],
    precio: 600,
    ingredientes: ["Maza: (harina, huevos, aceite), salsa, muzzarella, anana, aceitunas"],

  },
  {
    id: 6,
    nombre: "Pizza party",
    precio: 900,
    ingredientes: ["Maza: (harina, huevos, aceite), salsa, muzzarella, ajo y perejil, chorrizo colorado, aceitunas"],

  },
  {
    id: 7,
    nombre: "Pizza zapi",
    precio: 680,
    ingredientes: ["Maza: (harina, huevos, aceite), salsa, muzzarella, roquefort, provolone, aceitunas"],

  },
];


const PizzaElegida = () => {
  const numberValue = numberInput.value.trim();

  const findPizzas = Pizzas.find((pizza) => { return pizza.id == numberValue; });
  if (isEmpty(numberValue)) { render__container.classList.add("hidden"); showError(numberInput, "*Tiene ingresar algún número."); }
  else if (!findPizzas) { render__container.classList.add("hidden"); showError(numberInput, "*Solo números entre 1 y 7."); }
  else if (findPizzas) {
    removeError(numberInput); render__container.classList.remove("hidden"); render__container.innerHTML =
      `<h2 class="nombre--pizza">La ${findPizzas.nombre} tiene un precio de </h2>
      <h3 class="precio--pizza">$ ${findPizzas.precio}</h3>`;
  }
};

const isEmpty = (value) => !value.length;

const showError = (input, message) => {
  const div = input.parentElement; div.classList.add("error");
  const error = div.querySelector("small"); error.textContent = message;
};

const removeError = (input) => {
  const div = input.parentElement; div.classList.remove("error");
  const error = div.querySelector("small"); error.textContent = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  PizzaElegida();
});
