var cnt=0;
const cartItems = [];  
const cartContainer = document.getElementById('scr');  
const totalAmountElement = document.getElementById('totalAmount');  
  
document.addEventListener('DOMContentLoaded', () => {  
  const addCartButtons = document.querySelectorAll('.card button');  
  addCartButtons.forEach((button) => {  
button.addEventListener('click', (e) => {  
 const itemName = e.target.getAttribute('data-item-name');  
 const itemPrice = parseInt(e.target.getAttribute('data-item-price'));  
 const itemImage = e.target.getAttribute('data-item-image');  
 addItemToCart(itemName, itemPrice, itemImage);  
 });  
  });  
});  
  
function addItemToCart(itemName, itemPrice, itemImage) {  
  const cartItem = {  
 name: itemName,  
 price: itemPrice,  
 image: itemImage,  
  };  
  cartItems.push(cartItem);  
  cnt++; 
  document.getElementById("count").innerHTML=cnt; 
  updateCartDisplay();  
  updateTotalAmount();  
}

function updateCartDisplay() {  
  cartContainer.innerHTML = '';  
  document.getElementById("scr").style.display="block";  
  cartItems.forEach((item) => {  
 const cartItemHTML = `  
 <div style="display: inline-block; margin: 10px; width: 200px; border: 2px dotted red;overflow:hidden">  
  <img height="150px" width="200px" src="${item.image}">  
 <h2>${item.name}</h2>    
 <h2>Rs. ${item.price}</h2>  
 <button data-item-index="${cartItems.indexOf(item)}" class="remove-button" style="border:transparent;width:110px;height:30px;border-radius:10px;background-color:red;color:white;margin:5px;">  
  <i class="fa-solid fa-trash"></i> Remove  
  </button>  
 </div>  
 `;  
 cartContainer.innerHTML += cartItemHTML;  
  });  
  const removeButtons = cartContainer.querySelectorAll('.remove-button');  
  removeButtons.forEach((button) => {  
 button.addEventListener('click', (e) => {  
 const itemIndex = parseInt(e.target.getAttribute('data-item-index'));  
 removeItemFromCart(itemIndex);  
 });  
  });  
}


function removeItemFromCart(itemIndex) {  
  cartItems.splice(itemIndex, 1);  
  cnt--; // decrement cnt here  
  document.getElementById("count").innerHTML = cnt; // update #count here  
  updateCartDisplay();  
  updateTotalAmount();  
}

  
function updateTotalAmount() {  
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);  
  totalAmountElement.textContent = `Rs. ${totalAmount}`;  
}
/*
document.addEventListener('DOMContentLoaded', function() {
  const items = ["Chocolate Cone", "Strawberry Cone", "Pista Cone", "Vanilla Cup", "Chocolate Cup", "Mango Cup", "Rose Falooda", "Vanilla Falooda", "Chocolate Falooda", "Choco Bar", "Vanilla Bar", "Butterscotch Bar", "Kulfi", "Milkshake"];
  const prices = {
      "Chocolate Cone": 30,
      "Strawberry Cone": 35,
      "Pista Cone": 50,
      "Vanilla Cup": 20,
      "Chocolate Cup": 25,
      "Mango Cup": 25,
      "Rose Falooda": 40,
      "Vanilla Falooda": 45,
      "Chocolate Falooda": 50,
      "Choco Bar": 15,
      "Vanilla Bar": 20,
      "Butterscotch Bar": 25,
      "Kulfi": 10,
      "Milkshake": 20
  };

  const input = document.getElementById('srch');
  const searchResults = document.getElementById('search-results');
  const cart = [];

  function updateCartDisplay() {
      // Update cart display logic
  }

  function handleAddToCart(item) {
      cart.push(item);
      // Update cart logic
  }

  function showItemDetails(item) {
      // Logic to display item details
      alert(`Selected item: ${item}\nPrice: Rs.${prices[item]}`);
  }

  input.addEventListener('input', function() {
      const value = this.value.toLowerCase();
      searchResults.innerHTML = '';

      if (value) {
          const filteredItems = items.filter(item => item.toLowerCase().includes(value));
          filteredItems.forEach(item => {
              const div = document.createElement('div');
              div.textContent = item;
              div.addEventListener('click', function() {
                  showItemDetails(item);
                  input.value = '';
                  searchResults.innerHTML = '';
              });
              searchResults.appendChild(div);
          });
      }
  });

  document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
          const itemName = this.getAttribute('data-item-name');
          const itemPrice = parseInt(this.getAttribute('data-item-price'));
          const selectedItem = {
              name: itemName,
              price: itemPrice
          };
          handleAddToCart(selectedItem);
      });
  });
});
*/
/*
document.addEventListener('DOMContentLoaded', function() {
  const items = ["Chocolate Cone", "Strawberry Cone", "Pista Cone", "Vanilla Cup", "Chocolate Cup", "Blueberry Cup", "Strawberry Cup", "Tender Coconut Cup", "Chocolate Shake", "Strawberry Shake", "Mango Shake", "Casatta Slice", "Chocolate Vanilla Slice", "Pista Slice","Mango Slice","Badam Kulfi","Milk Kulfi","Pista Kulfi"];
  const prices = {
      "Chocolate Cone":30 ,
      "Strawberry Cone":35 ,
      "Pista Cone":50,
      "Vanilla Cup": 70,
      "Chocolate Cup": 80,
      "Blueberry Cup":120 ,
      "Strawberry Cup":110 ,
      "Tender Coconut Cup":150 ,
      "Chocolate Shake":115 ,
      "Strawberry Shake":125,
      "Mango Shake":150 ,
      "Casatta Slice":80 ,
      "Chocolate Vanilla Slice":80 ,
      "Pista Slice": 90,
      "Mango Slice":90,
      "Badam Kulfi":60,
      "Milk Kulfi":50,
      "Pista Kulfi":82
  };

  const images = {
      "Chocolate Cone": download (6).jfif,
      "Strawberry Cone": download (7).jfif,
      "Pista Cone": images (15).jfif,
      "Vanilla Cup": images (9).jfif,
      "Chocolate Cup": images (10).jfif,
      "Blueberry Cup": images (2).jfif,
      "Strawberry Cup": images (8).jfif,
      "Tender Coconut Cup": images (11).jfif,
      "Chocolate Shake": download (5).jfif,
      "Strawberry Shake": images (13).jfif,
      "Mango Shake": images (14).jfif,
      "Casatta Slice": download (9).jfif,
      "Chocolate Vanilla Slice": download (10).jfif,
      "Pista Slice": download (11).jfif,
      "Mango Slice":images (18).jfif,
      "Badam Kulfi":download (14).jfif,
      "Milk Kulfi":download (16).jfif,
      "Pista Kulfi":images (19).jfif
  };

  const input = document.getElementById('srch');
  const searchResults = document.getElementById('search-results');
  const cart = [];

  function updateCartDisplay() {
      // Update cart display logic
  }

  function handleAddToCart(item) {
      cart.push(item);
      // Update cart logic
  }

  function showItemDetails(item) {
      const imgUrl = images[item];
      alert(`Selected item: ${item}\nPrice: Rs.${prices[item]}\n\nImage:`);
      const img = new Image();
      img.src = imgUrl;
      img.style.maxWidth = "100%";
      img.onload = function() {
          document.body.appendChild(img);
          setTimeout(() => document.body.removeChild(img), 3000); // Show image for 3 seconds
      };
  }

  input.addEventListener('input', function() {
      const value = this.value.toLowerCase();
      searchResults.innerHTML = '';

      if (value) {
          const filteredItems = items.filter(item => item.toLowerCase().includes(value));
          filteredItems.forEach(item => {
              const div = document.createElement('div');
              div.textContent = item;
              div.addEventListener('click', function() {
                  showItemDetails(item);
                  input.value = '';
                  searchResults.innerHTML = '';
              });
              searchResults.appendChild(div);
          });
      }
  });

  document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
          const itemName = this.getAttribute('data-item-name');
          const itemPrice = parseInt(this.getAttribute('data-item-price'));
          const selectedItem = {
              name: itemName,
              price: itemPrice
          };
          handleAddToCart(selectedItem);
      });
  });
});
*/

document.addEventListener('DOMContentLoaded', function() {
    const items = ["Chocolate Cone", "Strawberry Cone", "Pista Cone", "Vanilla Cup", "Chocolate Cup", "Blueberry Cup", "Strawberry Cup", "Tender Coconut Cup", "Chocolate Shake", "Strawberry Shake", "Mango Shake", "Casatta Slice", "Chocolate Vanilla Slice", "Pista Slice","Mango Slice","Badam Kulfi","Milk Kulfi","Pista Kulfi"];
    const prices = {
        "Chocolate Cone": 30,
        "Strawberry Cone": 35,
        "Pista Cone": 50,
        "Vanilla Cup": 70,
        "Chocolate Cup": 80,
        "Blueberry Cup": 120,
        "Strawberry Cup": 110,
        "Tender Coconut Cup": 150,
        "Chocolate Shake": 115,
        "Strawberry Shake": 125,
        "Mango Shake": 150,
        "Casatta Slice": 80,
        "Chocolate Vanilla Slice": 80,
        "Pista Slice": 90,
        "Mango Slice": 90,
        "Badam Kulfi": 60,
        "Milk Kulfi": 50,
        "Pista Kulfi": 82
    };

    const images = {
        "Chocolate Cone": "download (6).jfif",
        "Strawberry Cone": "download (7).jfif",
        "Pista Cone": "images (15).jfif",
        "Vanilla Cup": "images (9).jfif",
        "Chocolate Cup": "images (10).jfif",
        "Blueberry Cup": "images (2).jfif",
        "Strawberry Cup": "images (8).jfif",
        "Tender Coconut Cup": "images (11).jfif",
        "Chocolate Shake": "download (5).jfif",
        "Strawberry Shake": "images (13).jfif",
        "Mango Shake": "images (14).jfif",
        "Casatta Slice": "download (9).jfif",
        "Chocolate Vanilla Slice": "download (10).jfif",
        "Pista Slice": "download (11).jfif",
        "Mango Slice": "images (18).jfif",
        "Badam Kulfi": "download (14).jfif",
        "Milk Kulfi": "download (16).jfif",
        "Pista Kulfi": "images (19).jfif"
    };

    const input = document.getElementById('srch');
    const searchResults = document.getElementById('search-results');
    const cart = [];

    function updateCartDisplay() {
        // Update cart display logic
    }

    function handleAddToCart(item) {
        cart.push(item);
        // Update cart logic
        updateCartDisplay();
    }

    function showItemDetails(item) {
        const modal = document.getElementById('item-modal');
        const overlay = document.getElementById('overlay');
        const itemName = document.getElementById('item-name');
        const itemPrice = document.getElementById('item-price');
        const itemImage = document.getElementById('item-image');

        itemName.textContent = item;
        itemPrice.textContent = `Price: Rs.${prices[item]}`;
        itemImage.src = images[item];

        modal.style.display = 'block';
        overlay.style.display = 'block';

        overlay.addEventListener('click', closeModal);
        document.querySelector('.close-modal').addEventListener('click', closeModal);

        function closeModal() {
            modal.style.display = 'none';
            overlay.style.display = 'none';
        }
    }

    input.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        searchResults.innerHTML = '';

        if (value) {
            const filteredItems = items.filter(item => item.toLowerCase().includes(value));
            filteredItems.forEach(item => {
                const div = document.createElement('div');
                div.textContent = item;
                div.addEventListener('click', function() {
                    showItemDetails(item);
                    input.value = '';
                    searchResults.innerHTML = '';
                });
                searchResults.appendChild(div);
            });
        }
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-item-name');
            const itemPrice = parseInt(this.getAttribute('data-item-price'));
            const selectedItem = {
                name: itemName,
                price: itemPrice
            };
            handleAddToCart(selectedItem);
        });
    });
});