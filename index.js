class Product {
  constructor(id, name, price, size, color, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.size = size;
    this.color = color;
    this.image = image;
  }
}

// console.log(
//   new Product(
//     "Unisex Sweatshirt",
//     75.0,
//     "L",
//     "Royal Blue",
//     "https://image.spreadshirtmedia.net/image-server/v1/products/452c3789-8ef8-4a4a-9f0d-8c16d92d5805,width=300,height=300,appearanceId=17.png"
//   )
// );

class ShoppingCartItem extends Product {
  constructor(id, name, price, size, color, image, quantity) {
    super(id, name, price, size, color, image);
    this.quantity = quantity;
  }
  calculatePrice() {
    return this.quantity * this.price;
  }
}

// console.log(
//   new ShoppingCartItem(
//     "Unisex Sweatshirt",
//     75.0,
//     "L",
//     "Royal Blue",
//     "https://image.spreadshirtmedia.net/image-server/v1/products/452c3789-8ef8-4a4a-9f0d-8c16d92d5805,width=300,height=300,appearanceId=17.png",
//     4
//   )
// );

class ShoppingCart {
  constructor() {
    this.cart = [];
  }
  getTotalItems() {
    return this.cart.length;
  }
  addItems(item) {
    this.cart.push(item);
  }
  removeItems(id) {
    this.cart = this.cart.filter((element) => element.id !== id);
  }
  displayCartItems() {
    const cartItems = document.querySelector(".cart-items");
    const items = this.cart.map(
      (item) => `
    <!-- Single Item Start -->
        <div class="single-item card grid-3">
          <div class="col">
            <img
              src=${item.image}
              alt=""
            />
          </div>
          <div class="col">
            <h4>${item.name}</h4>
            <span><strong>Size: </strong>${item.size}</span>
            <span><strong>Colour: </strong>${item.color}</span>
          </div>
          <div class="col">
            <h4><span class="price">${item.price}</span> €</h4>
            <div>
              <div class="p-y">
                <i class="fa-solid fa-square-minus fa-xl"></i>
                <span class="quantity">${item.quantity}</span>
                <i class="fa-solid fa-square-plus fa-xl"></i>
              </div>
              <div class="p-y">
                <i class="fa-solid fa-thumbs-up fa-xl"></i>
                <i class="fa-solid fa-trash fa-xl"></i>
              </div>
            </div>
          </div>
        </div>
        <!-- Single Item End -->`
    );
    cartItems.innerHTML = items.join("\n");
  }
  displayTotalPrice() {
    const total = document.getElementById("total");
    total.innerText = this.cart.reduce(
      (acc, currentItem) => acc + currentItem.calculatePrice(),

      0
    );
  }
}

const myShoppingCart = new ShoppingCart();
myShoppingCart.addItems(
  new ShoppingCartItem(
    1,
    "Unisex Sweatshirt",
    75.0,
    "L",
    "Royal Blue",
    "https://image.spreadshirtmedia.net/image-server/v1/products/452c3789-8ef8-4a4a-9f0d-8c16d92d5805,width=300,height=300,appearanceId=17.png",
    4
  )
);

myShoppingCart.addItems(
  new ShoppingCartItem(
    2,
    "Unisex Hoodie",
    40.0,
    "M",
    "Light Heather Grey",
    "https://image.spreadshirtmedia.net/image-server/v1/products/a47dd951-2359-4a1a-8dc3-c7ab49141177,width=300,height=300,appearanceId=577.png",
    4
  )
);

myShoppingCart.removeItems(1);
myShoppingCart.displayCartItems();
myShoppingCart.displayTotalPrice();

console.log(myShoppingCart.cart);
