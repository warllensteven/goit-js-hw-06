let categorias = document.getElementsByClassName("item");

console.log("Numero de categorias:", categorias.length);

let listCategories = document.querySelectorAll("#categories > li");

listCategories.forEach((category) => {
  const titleCategory = category.querySelector("h2").textContent;
  const numberElements = category.querySelectorAll("li").length;
  console.log("Category:", titleCategory);
  console.log("Elements:", numberElements);
});
