
let itemList = [
    {},
    { name: "Chocolate-A", price: 1000, quantity: 0 },
    { name: "Chocolate-B", price: 1200, quantity: 0 },
    { name: "Chocolate-C", price: 1000, quantity: 0 }
  ];
  
  function addItem(event) {
    event.preventDefault();
    const item = event.target;
    const itemId = item.getAttribute('data-id');
    
    if (getTotalQuantity() + 1 <= 8) {
      itemList[itemId].quantity++;
      updateUI();
    } else {
      alert("You can't add more chocolates. Maximum limit reached (8 items).");
    }
  }
  
  function getTotalQuantity() {
    let total = 0;
    for (let i = 1; i < itemList.length; i++) {
      total += itemList[i].quantity;
    }
    return total;
  }
  
  function updateUI() {
    const totalItemsSpan = document.getElementById('totalItems');
    const totalPriceSpan = document.getElementById('totalPrice');
  
    const totalItems = getTotalQuantity();
    const totalPrice = calculateTotalPrice();
  
    totalItemsSpan.innerText = totalItems;
    totalPriceSpan.innerText = totalPrice;
  }
  
  function calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 1; i < itemList.length; i++) {
      totalPrice += itemList[i].quantity * itemList[i].price;
    }
    return totalPrice;
  }
  