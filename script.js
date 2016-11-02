$(document).ready(function() {
	var totalCash = 100;

	var applePrice = randomNumber(-50, 50);
	var orangePrice	= randomNumber(-50, 50);
	var bananaPrice = randomNumber(-50, 50);
	var grapesPrice	= randomNumber(-50, 50);

	setInterval(function () {
		applePrice = randomNumber(-50, 50);
		orangePrice	= randomNumber(-50, 50);
		bananaPrice = randomNumber(-50, 50);
		grapesPrice	= randomNumber(-50, 50);
		applePrice /= 100;
		orangePrice /= 100;
		bananaPrice /= 100;
		grapesPrice /= 100;

		$("h1").text("Total Available Cash: $" + totalCash);

		$("#priceApple").text("Average Price: $" + applePrice);
		$("#priceOrange").text("Average Price: $" + orangePrice);
		$("#priceBanana").text("Average Price: $" + bananaPrice);
		$("#priceGrapes").text("Average Price: $" + grapesPrice);

		console.log(applePrice, orangePrice, bananaPrice, grapesPrice)
	}, 5000);


});


function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
