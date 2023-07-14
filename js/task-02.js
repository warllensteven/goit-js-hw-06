const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let listIngredients = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  let list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add("item");
  listIngredients.appendChild(list);
});
