var products = [];
  // assings to HTML div  
  
// this is the object factory function
  var productFactory = function(url, name, description, price) {

	var product = {};
	product.url = url;
	product.name = name;
	product.description = description;
	product.price = price;
	 
  return product;
};

products.push(productFactory("beach.jpg", "Lovely Beach Sand", "This sand is directly from shores of the Bahamas", "$5.99/granule"));
products.push(productFactory("hand-print.jpg", "Hand-Print Beach Sand", "Hand-Print Sand made by Mark Myers", "$0.99/granule"));
products.push(productFactory("jabba.jpg", "Jabba The Hut", "El jaya kulpa intick kuny ku suwa", "$3.99/granule"));
products.push(productFactory("manchester.jpg", "Manchester Sand", "Sand from exotic Manchester, TN", "$2.99/granule"));
products.push(productFactory("pile-of.jpeg", "Deceptive Sand", "It may be a pile, but you're still paying by the granule", "$4.99/granule"));
products.push(productFactory("playground.jpeg", "Playground Sand", "Bring back your childhood memories for a low price", "$5.99/granule"));
products.push(productFactory("rippled.jpeg", "Rippled Sand", "Simply sand or beautiful artwork, you decide", "$7.99/granule"));
products.push(productFactory("starfish-heart.jpg", "Starfish Sand", "*Starfish not included", "$2.99/granule"));
products.push(productFactory("wavey.jpg", "Wavey Sand", "Make waves this summer with Wavey Sand", "$5.99/granule"));
// now we have an array full of sand types

var container= document.getElementById("container");

// lesson- can only return in a functionm

	var html = '';
for (var i = 0; i < products.length; i++) {
	html += `<div class="card">` + `<h2>` + `<img src="../images/sand/` + products[i].url + `" class="sandImg">` + `<br>` + `<p class="title">` + products[i].name + `</p>` + `<br>` + products[i].description + `<br>` + `<br>` + products[i].price + `</h2>` + `</div>`;
};


container.innerHTML += ` <div> 
${html}
 </div> `;

 // '<img src=../images/' + productObject.fileName + '/>'