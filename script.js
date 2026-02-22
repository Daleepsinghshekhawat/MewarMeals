// js for  Loved by Families
console.log("JS FILE LOADED");
// Love Counter
var ch=document.getElementById("chapati")
// console.log("je")

console.log(ch)

let loveCount = 0;
const love = document.getElementById("loveBtn");

console.log(love)
const loveDisplay = document.getElementById("loveCount");

console.log(loveDisplay);
console.log("mphio");


love.addEventListener("click", () => {
  loveCount++;
  loveDisplay.textContent = loveCount;
});

// Review Button (Popup Input)
const reviewBtn = document.getElementById("reviewBtn");

reviewBtn.addEventListener("click", () => {
  const review = prompt("⭐ Write your review for MewarMeals:");

  if (review && review.trim() !== "") {
    alert("Thank you for your review! ❤️");
    console.log("User Review:", review);
  }
});

// Share Thoughts Button
const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", () => {
  const thought = prompt("💬 Share your thoughts about MewarMeals:");

  if (thought && thought.trim() !== "") {
    alert("Thanks for sharing your thoughts! 😊");
    console.log("User Thought:", thought);
  }
});
