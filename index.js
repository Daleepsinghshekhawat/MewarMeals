/* ===============================
   AUTO DAY / NIGHT MODE
   =============================== */
function setThemeByTime() {
  const hour = new Date().getHours();
  const body = document.body;

  if (hour >= 18 || hour < 6) {
    body.classList.add("night-mode");
  } else {
    body.classList.remove("night-mode");
  }
}

setThemeByTime();
setInterval(setThemeByTime, 60000);

/* ===============================
   RECIPE PAGE LOGIC (SCOPED)
   =============================== */
document.addEventListener("DOMContentLoaded", function () {
  // Check if this is recipe page
  const recipePage = document.querySelector(".recipe-page");
  if (!recipePage) return; // ⛔ stop JS on other pages

  const form = document.getElementById("recipeForm");
  const recipeList = document.getElementById("recipeList");

  if (!form || !recipeList) return;

  loadRecipes();

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const recipe = {
      name: document.getElementById("recipeName").value,
      author: document.getElementById("authorName").value,
      ingredients: document.getElementById("ingredients").value,
      steps: document.getElementById("steps").value,
    };

    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));

    form.reset();
    loadRecipes();
  });

  function loadRecipes() {
    recipeList.innerHTML = "";

    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    recipes.forEach((r, index) => {
      const div = document.createElement("div");
      div.className = "recipe-card";

      div.innerHTML = `
        <h3>${r.name}</h3>
        <p><strong>By:</strong> ${r.author}</p>
        <p><strong>Ingredients:</strong><br>${r.ingredients}</p>
        <p><strong>Steps:</strong><br>${r.steps}</p>
      `;

      recipeList.appendChild(div);
    });
  }
});
