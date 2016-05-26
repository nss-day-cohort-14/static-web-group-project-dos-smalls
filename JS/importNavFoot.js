//input locations
var navLocation = document.getElementsByTagName("nav")[0];
var footLocation = document.getElementsByTagName("footer")[0];

/***********************************

class replace loop here 

************************************/


// function to add background styles to selected links
function addStyles () {
  var anchorList = document.getElementsByClassName("navAnchor");
	var url = window.location,
			urlString = url.pathname.replace("/", "");

	console.log("anchorList", anchorList);

	// function classReplace () {
	for (var i = 0; i < anchorList.length; i++) {
		// console.log("Hello", anchorList);

		var href = anchorList[i].getAttribute('href');

		console.log("href", href)
		console.log("urlString", urlString)

		if (href === urlString) {
				anchorList[i].className = 'navAnchor active';
 		} else {
 			anchorList[i].className = 'navAnchor';
 		}
	}
}


// function to load navbar

function loadNavBars() {
	console.log("Function Triggered for Nav");
		//this adds in the top navbar
	navLocation.innerHTML += 
	`
	<ul class="navUl">
		<li class="navLi flexLeft">
			<a href="index.html" id="navAnchor1" class="navAnchor">Home</a>
		</li>
		<li class="navLi">
			<a href="products.html" id="navAnchor2" class="navAnchor">Products</a>
		</li>
		<li class="navLi">
			<a href="awards.html" id="navAnchor3" class="navAnchor">Accolades</a>
		</li>
		<li class="navLi">
			<a href="employees.html" id="navAnchor4" class="navAnchor">Cohort</a>
		</li>
	</ul>
	`;
		//this adds in the footer
	footLocation.innerHTML +=
	`
		<ul class="footerUl">
			<li class="footerLi flexLeft"><p>Killin Me Smalls Inc., &copy; 1993</p></li>
			<li class="footerLi"><a href="http://www.linkedin.com" id="footerAnchor4"><img src="images/mail.png" /></a></li>
			<li class="footerLi"><a href="http://www.facebook.com" id="footerAnchor2"><img src="images/facebook.png" /></a></li>
			<li class="footerLi"><a href="http://www.twitter.com" id="footerAnchor3"><img src="images/twitter.png" /></a></li>
			<li class="footerLi"><a href="http://www.linkedin.com" id="footerAnchor4"><img src="images/linkedin.png" /></a></li>
		</ul>
	`;
	console.log("Function completed");

	// call add styles function
	addStyles();

	// var tt = window.setTimeout(addStyles, 3000);

}
// console.log("Nav load script started");
//event listener for page load
window.addEventListener("load", loadNavBars(), false);




















