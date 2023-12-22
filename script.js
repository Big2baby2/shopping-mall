let cart = [];

// Function to fetch food items from a JSON file (foods.json)
function fetchFoods() {
  // Use AJAX, Fetch API, or any other method to get data from JSON file
  // For simplicity, we'll manually define food items here
  fetch("foods.json")
    .then((response) => response.json())
    .then((foods) => organizeAndDisplayFoods(foods))
    .catch((error) => console.error("Error fetching foods:", error));
}

// Function to organize and display foods by category
function organizeAndDisplayFoods(foods) {
  const riceMenu = document.getElementById("rice-menu");
  const platterMenu = document.getElementById("platter-menu");
  const dessertsMenu = document.getElementById("desserts-menu");
  const combosMenu = document.getElementById("combos-menu");
  const proteinMenu = document.getElementById("protein-menu");
  const sandwichesMenu = document.getElementById("sandwiches-menu");
  const swallowMenu = document.getElementById("swallow-menu");
  const soupMenu = document.getElementById("soup-menu");
  const italianDelightMenu = document.getElementById("italian-delight-menu");
  const beveragesMenu = document.getElementById("beverages-menu");
  const snacksMenu = document.getElementById("snacks-menu");
  const smoothiesMenu = document.getElementById("smoothies-menu");

  foods.forEach((food) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <img src="${food.image}" alt="${
      food.name
    }" width="150" height="150px">
            <h3>${food.name}</h3>
            <p>$${food.price.toFixed(2)}</p>
            <input type="number" value="1" min="1" id="quantity-${food.id}">
            <button onclick="addToCart(${food.id}, '${food.name}', ${
      food.price
    })">Add to Cart</button>
        `;

    // Create a div to serve as a flex container for the cards in each category
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    // Append the card to the category container
    categoryContainer.appendChild(card);

    // Decide which category to append the card based on the food's category property
    if (food.category === "Rice") {
      riceMenu.appendChild(categoryContainer);
    }
    if (food.category === "Platter") {
      platterMenu.appendChild(categoryContainer);
    }
    if (food.category === "Desserts") {
      dessertsMenu.appendChild(categoryContainer);
    }
    if (food.category === "Combos") {
      combosMenu.appendChild(categoryContainer);
    }
    if (food.category === "Protein") {
      proteinMenu.appendChild(categoryContainer);
    }
    if (food.category === "Sandwiches") {
      sandwichesMenu.appendChild(categoryContainer);
    }
    if (food.category === "Swallow") {
      swallowMenu.appendChild(categoryContainer);
    }
    if (food.category === "Soup") {
      soupMenu.appendChild(categoryContainer);
    }
    if (food.category === "Italian Delight") {
      italianDelightMenu.appendChild(categoryContainer);
    }
    if (food.category === "Beverages") {
      beveragesMenu.appendChild(categoryContainer);
    }
    if (food.category === "Snacks") {
      snacksMenu.appendChild(categoryContainer);
    } else if (food.category === "Smoothies") {
      smoothiesMenu.appendChild(categoryContainer);
    }
  });
}

// Function to toggle the cart visibility
function toggleCart() {
  const cartSection = document.getElementById("cart");
  cartSection.classList.toggle("open");
}

// Function to add an item to the cart
function addToCart(id, name, price) {
  const quantity = parseInt(document.getElementById(`quantity-${id}`).value);
  const item = { id, name, price, quantity };
  cart.push(item);
  updateCart();
  showNotification(name);
}

// Function to remove an item from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Function to show a notification when an item is added to the cart
function showNotification(itemName) {
  const notification = document.getElementById("notification");
  notification.textContent = `${itemName} added to the cart`;
  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
  }, 2000); // Hide the notification after 2 seconds
}

// Function to update the cart display
function updateCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
            <button id="remove-btn" onclick="removeFromCart(${index})"><img src="./images/Icons/icon-delete.svg" alt="Remove"></button>
        `;
    cartList.appendChild(li);

    total += item.price * item.quantity;
  });

  document.getElementById("total").textContent = total.toFixed(2);
}

// Function to handle the checkout process (you need to implement this based on your requirements)
function checkout() {
  // Add your payment processing logic here
  alert(
    "Checkout functionality not implemented. Implement your payment processing logic."
  );
}

// Function to handle scroll events
function handleScroll() {
  const nav = document.querySelector("nav");
  const cartBtn = document.getElementById("cart-btn");
  const navOffset = cartBtn.offsetHeight + 10; // Adjust this value based on your design

  if (window.scrollY > navOffset) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
}

// Attach the handleScroll function to the scroll event
window.addEventListener("scroll", handleScroll);

// Fetch and display foods when the page loads
document.addEventListener("DOMContentLoaded", () => {
  fetchFoods();
});

// let cart = [];

// // Function to fetch food items from a JSON file (foods.json)
// function fetchFoods() {
//   // Use AJAX, Fetch API, or any other method to get data from JSON file
//   // For simplicity, we'll manually define food items here
//   fetch("foods.json")
//     .then((response) => response.json())
//     .then((foods) => organizeAndDisplayFoods(foods))
//     .catch((error) => console.error("Error fetching foods:", error));
// }

// // Function to organize and display foods by category
// function organizeAndDisplayFoods(foods) {
//   const mainCourseMenu = document.getElementById("main-course-menu");
//   const dessertsMenu = document.getElementById("desserts-menu");

//   foods.forEach((food) => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.innerHTML = `
//             <img src="${food.image}" alt="${food.name}" width="150">
//             <h3>${food.name}</h3>
//             <p>$${food.price.toFixed(2)}</p>
//             <input type="number" value="1" min="1" id="quantity-${food.id}">
//             <button onclick="addToCart(${food.id}, '${food.name}', ${
//       food.price
//     })">Add to Cart</button>
//         `;

//     // Decide which category to append the card based on the food's category property
//     if (food.category === "Main Course") {
//       mainCourseMenu.appendChild(card);
//     } else if (food.category === "Desserts") {
//       dessertsMenu.appendChild(card);
//     }
//   });
// }

// // Function to toggle the cart visibility
// function toggleCart() {
//   const cartSection = document.getElementById("cart");
//   cartSection.classList.toggle("open");
// }

// // Function to add an item to the cart
// function addToCart(id, name, price) {
//   const quantity = parseInt(document.getElementById(`quantity-${id}`).value);
//   const item = { id, name, price, quantity };
//   cart.push(item);
//   updateCart();
// }

// // Function to remove an item from the cart
// function removeFromCart(index) {
//   cart.splice(index, 1);
//   updateCart();
// }

// // Function to update the cart display
// function updateCart() {
//   const cartList = document.getElementById("cart-items");
//   cartList.innerHTML = "";

//   let total = 0;

//   cart.forEach((item, index) => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//             <span>${item.name} x${item.quantity}</span>
//             <span>$${(item.price * item.quantity).toFixed(2)}</span>
//             <button onclick="removeFromCart(${index})">Remove</button>
//         `;
//     cartList.appendChild(li);

//     total += item.price * item.quantity;
//   });

//   document.getElementById("total").textContent = total.toFixed(2);
// }

// // Function to handle the checkout process (you need to implement this based on your requirements)
// function checkout() {
//   // Add your payment processing logic here
//   alert(
//     "Checkout functionality not implemented. Implement your payment processing logic."
//   );
// }

// // Fetch and display foods when the page loads
// document.addEventListener("DOMContentLoaded", () => {
//   fetchFoods();
// });

// let cart = [];

// // Function to fetch food items from a JSON file (foods.json)
// function fetchFoods() {
//   // Use AJAX, Fetch API, or any other method to get data from JSON file
//   // For simplicity, we'll manually define food items here
//   fetch("foods.json")
//     .then((response) => response.json())
//     .then((foods) => organizeAndDisplayFoods(foods))
//     .catch((error) => console.error("Error fetching foods:", error));
// }

// // Function to organize and display foods by category
// function organizeAndDisplayFoods(foods) {
//   const mainCourseMenu = document.getElementById("main-course-menu");
//   const dessertsMenu = document.getElementById("desserts-menu");

//   foods.forEach((food) => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.innerHTML = `
//             <img src="${food.image}" alt="${food.name}" width="150">
//             <h3>${food.name}</h3>
//             <p>$${food.price.toFixed(2)}</p>
//             <input type="number" value="1" min="1" id="quantity-${food.id}">
//             <button onclick="addToCart(${food.id}, '${food.name}', ${
//       food.price
//     })">Add to Cart</button>
//         `;

//     // Decide which category to append the card based on the food's category property
//     if (food.category === "Main Course") {
//       mainCourseMenu.appendChild(card);
//     } else if (food.category === "Desserts") {
//       dessertsMenu.appendChild(card);
//     }
//   });
// }

// // Function to toggle the cart visibility
// function toggleCart() {
//   const cartSection = document.getElementById("cart");
//   cartSection.style.display =
//     cartSection.style.display === "none" || cartSection.style.display === ""
//       ? "block"
//       : "none";
// }

// // Function to add an item to the cart
// function addToCart(id, name, price) {
//   const quantity = parseInt(document.getElementById(`quantity-${id}`).value);
//   const item = { id, name, price, quantity };
//   cart.push(item);
//   updateCart();
// }

// // Function to remove an item from the cart
// function removeFromCart(index) {
//   cart.splice(index, 1);
//   updateCart();
// }

// // Function to update the cart display
// function updateCart() {
//   const cartList = document.getElementById("cart-items");
//   cartList.innerHTML = "";

//   let total = 0;

//   cart.forEach((item, index) => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//             <span>${item.name} x${item.quantity}</span>
//             <span>$${(item.price * item.quantity).toFixed(2)}</span>
//             <button onclick="removeFromCart(${index})">Remove</button>
//         `;
//     cartList.appendChild(li);

//     total += item.price * item.quantity;
//   });

//   document.getElementById("total").textContent = total.toFixed(2);
// }

// // Function to handle the checkout process (you need to implement this based on your requirements)
// function checkout() {
//   // Add your payment processing logic here
//   alert(
//     "Checkout functionality not implemented. Implement your payment processing logic."
//   );
// }

// // Fetch and display foods when the page loads
// document.addEventListener("DOMContentLoaded", () => {
//   fetchFoods();
// });

// // import foodItems from "./foodItems";

// // document.addEventListener("DOMContentLoaded", function () {
// //   const categories = document.getElementById("categories");
// //   const menu = document.getElementById("menu");
// //   const cart = document.getElementById("cart");
// //   const cartItems = document.getElementById("cart-items");
// //   const totalElement = document.getElementById("total");
// //   const checkoutButton = document.getElementById("checkout");
// //   const cartButton = document.getElementById("cart-button");

// //   function populateMenu(category) {
// //     menu.innerHTML = "";
// //     foodItems[category].forEach((item) => {
// //       const menuItem = document.createElement("div");
// //       menuItem.classList.add("item");
// //       menuItem.dataset.id = item.id;
// //       menuItem.dataset.name = item.name;
// //       menuItem.dataset.price = item.price;
// //       menuItem.dataset.image = item.image;

// //       menuItem.innerHTML = `
// //         <img src="${item.image}" alt="${item.name}">
// //         <div class="item-info">
// //           <h3>${item.name}</h3>
// //           <span>$${item.price.toFixed(2)}</span>
// //           <button class="add-to-cart">Add to Cart</button>
// //         </div>
// //       `;

// //       menu.appendChild(menuItem);
// //     });
// //   }

// //   function showCategory(category) {
// //     const allCategories = document.querySelectorAll(".category");
// //     allCategories.forEach((cat) => {
// //       cat.style.display = "none";
// //     });

// //     const selectedCategory = document.getElementById(category);
// //     selectedCategory.style.display = "block";

// //     populateMenu(category);
// //   }

// //   function toggleCart() {
// //     if (cart.style.display === "none" || cart.style.display === "") {
// //       cart.style.display = "block";
// //     } else {
// //       cart.style.display = "none";
// //     }
// //   }

// //   function addToCart(item) {
// //     const itemId = item.dataset.id;
// //     const itemName = item.dataset.name;
// //     const itemPrice = parseFloat(item.dataset.price);
// //     const itemImage = item.dataset.image;

// //     const cartItem = document.createElement("li");
// //     cartItem.innerHTML = `
// //       <img src="${itemImage}" alt="${itemName}">
// //       <div class="cart-item-info">
// //         <h4>${itemName}</h4>
// //         <span class="cart-item-price">$${itemPrice.toFixed(2)}</span>
// //         <div class="quantity-controls">
// //           <button class="decrement-quantity">-</button>
// //           <span class="item-quantity">1</span>
// //           <button class="increment-quantity">+</button>
// //         </div>
// //       </div>
// //     `;
// //     cartItems.appendChild(cartItem);

// //     updateTotal(itemPrice);
// //   }

// //   function updateTotal(amount) {
// //     const currentTotal = parseFloat(totalElement.textContent);
// //     totalElement.textContent = (currentTotal + amount).toFixed(2);
// //   }

// //   function incrementQuantity(item) {
// //     const quantityElement = item.querySelector(".item-quantity");
// //     const priceElement = item.querySelector(".cart-item-price");

// //     let quantity = parseInt(quantityElement.textContent);
// //     quantity++;
// //     quantityElement.textContent = quantity;

// //     const price = parseFloat(priceElement.textContent.substring(1));
// //     updateTotal(price);
// //   }

// //   function decrementQuantity(item) {
// //     const quantityElement = item.querySelector(".item-quantity");
// //     const priceElement = item.querySelector(".cart-item-price");

// //     let quantity = parseInt(quantityElement.textContent);
// //     if (quantity > 1) {
// //       quantity--;
// //       quantityElement.textContent = quantity;

// //       const price = parseFloat(priceElement.textContent.substring(1));
// //       updateTotal(-price);
// //     }
// //   }

// //   categories.addEventListener("click", function (event) {
// //     if (event.target.classList.contains("category-button")) {
// //       const category = event.target.dataset.category;
// //       showCategory(category);
// //     }
// //   });

// //   cartButton.addEventListener("click", function () {
// //     toggleCart();
// //   });

// //   menu.addEventListener("click", function (event) {
// //     if (event.target.classList.contains("add-to-cart")) {
// //       addToCart(event.target.closest(".item"));
// //     }
// //   });

// //   cartItems.addEventListener("click", function (event) {
// //     const target = event.target;
// //     const item = target.closest("li");

// //     if (target.classList.contains("increment-quantity")) {
// //       incrementQuantity(item);
// //     } else if (target.classList.contains("decrement-quantity")) {
// //       decrementQuantity(item);
// //     }
// //   });

// //   checkoutButton.addEventListener("click", function () {
// //     // Implement payment functionality here
// //     alert("Payment processed! Thank you for your order.");
// //     clearCart();
// //   });

// //   function clearCart() {
// //     cartItems.innerHTML = "";
// //     totalElement.textContent = "0.00";
// //     toggleCart();
// //   }
// // });
