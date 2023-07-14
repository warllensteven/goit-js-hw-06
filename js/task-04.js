const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
let value = document.getElementById("value");
let count = 0;

decrement.addEventListener("click", () => {
  count -= 1;
  value.textContent = count;
});
increment.addEventListener("click", () => {
  count += 1;
  value.textContent = count;
});
