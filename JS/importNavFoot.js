//input locations
var navLocation = document.getElementsByTagName("nav")[0];
var footLocation = document.getElementsByTagName("footer")[0];
//function to load navbar
function loadNavBars() {
	console.log("Function Triggered for Nav");
		//this adds in the top navbar
	navLocation.innerHTML += 
	`
	<ul class="navUl">
		<li class="navLi flexLeft">
			<a href="index.html" id="navAnchor1">Home<!-- <img src="../images/sandlotLogo.png" / --></a>
		</li>
		<li class="navLi">
			<a href="products.html" id="navAnchor2">Products</a>
		</li>
		<li class="navLi">
			<a href="awards.html" id="navAnchor3">Accolades</a>
		</li>
		<li class="navLi">
			<a href="employees.html" id="navAnchor4">Cohort</a>
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
	console.log("Function completed")
	return;
}
// console.log("Nav load script started");
//event listener for page load
window.addEventListener("load", loadNavBars(), false);