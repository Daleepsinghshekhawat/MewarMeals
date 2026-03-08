


// js for login and signup page 

const Signupform = document.getElementById("signupform");
if(Signupform){
  Signupform
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm").value;

    if (name === "") {
      alert("Please enter your name.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    let user = {
      name: name,
      email: email,
      password: password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful!");
    window.location.href = "login.html";
  });
}


//-------------- login code

const loginForm = document.getElementById("loginform");
if(loginForm){
  loginForm.addEventListener("submit",function(e){
    e.preventDefault();

    let Email = document.getElementById("email-login").value.trim().toLowerCase();
    let Password = document.getElementById("password-login").value.trim();

    let storedUser = JSON.parse(localStorage.getItem("user"));

     if (!storedUser) {
       alert("No account found. Please signup first.");
       return;
     }
    if(Email === storedUser.email && Password === storedUser.password){
       localStorage.setItem("loggedIn", true);
      alert("login Successfull");
      window.location.href = "index.html";
    }
    else{
      alert("Invalid email or password. Please try again.");
    }
   });
  }
  // localStorage.clear();

  // js for logut button

  document.getElementById("logout").addEventListener("click", function () {
    localStorage.removeItem("loggedIn");
    alert("You have been logged out.");
    window.location.href = "login.html";
  });






  // add to cart js 
  function addtocart(name,price){
    let cart = JSON.parse(localStorage.getItem("cart"))||[];
    let item = {
      name:name,
      price:price,
    };
    cart.push(item);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert(name + " has been added to your cart!");
  }

//  clear the cart item 
  function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
  }








































// js for  Loved by Families
console.log("JS FILE LOADED");
// Love Counter
var ch = document.getElementById("chapati");
// console.log("je")

console.log(ch);

let loveCount = 0;
const love = document.getElementById("loveBtn");

console.log(love);
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
