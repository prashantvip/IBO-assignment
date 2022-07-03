	const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

function getUniqueProductCount() {
	let obj = {};
  listOfProducts.map(product => {
 /*  console.log(product.productName); */
  	if(obj[product.productName]=== undefined){
    	obj[product.productName] = 1
    }else{
    	obj[product.productName] += 1
    }
  })
  
  console.log(obj);
}

function getUniquePrducts (){
	const productsObj = {}

listOfProducts.map(product => {
  if (product.productName in productsObj) {
    productsObj[product.productName].quantity += product.quantity
  } else {
    productsObj[product.productName] = product
  }
})

console.log(productsObj);
}

getUniqueProductCount();
getUniquePrducts();