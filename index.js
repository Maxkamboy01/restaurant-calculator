
var foodMenu = [
  {
    name: "Bread",
    price: 0.9,
  },
  {
    name: "Tea 🍵",
    price: 0.1,
  },
  {
    name: "Water 🥤",
    price: 0.3,
  },
  {
    name: "Lavash 🍿",
    price: 1.7,
  },
  {
    name: "Burger 🍔",
    price: 1.5,
  },
  {
    name: "Hot-Dog 🌭",
    price: 0.5,
  },

  {
    name: "Pizza 🍕",
    price: 3.2,
  },
  {
    name: "Milk 🥛",
    price: 0.6,
  },

  {
    name: "Cake 🍰",
    price: 4.5,
  },
  {
    name: "Taco",
    price: 2.1,
  },
  
];

var boughtFood = [];

function loopMenu() {
  menuText = "";
  foodMenu.forEach(function (value, index) {
    menuText += `<option value="${index}">${value.name}          $${value.price}</option>`;
  });

  document.getElementById("foods").innerHTML = menuText;
}

loopMenu();

function addFood() {
  var selectedFood = document.getElementById("foods").value;
  boughtFood.push(foodMenu[selectedFood]);
  loopBoughtFood();
}

function loopBoughtFood() {
  var overallPrice = 0;

  var tableText = `<tr>
  <th>Food Name</th>
  <th>Price</th>
</tr>`;
  boughtFood.forEach(function (value, index) {
    overallPrice += value.price;
    tableText += `
    <tr>
        <th>${value.name}</th>
        <th>$${value.price}</th>
      </tr>`;
  });

  tableText += `
  <tr>
        <th><b>Overall</b></th>
        <th><b>$${overallPrice.toFixed(2)}</b></th>
      </tr>
  <tr>
        <th><b>Overall + 10%</b></th>
        <th><b>$${addTenPercent(Number(overallPrice.toFixed(2))).toFixed(2)}</b></th>
      </tr>`;
  document.getElementById("table").innerHTML = tableText;
}
function addTenPercent(number) {
  return number + (number / 100) * 10;
}


function hover(){
  document.getElementById('foods').className = hover
}