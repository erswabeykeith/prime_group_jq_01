$(document).ready(function() {
	var totalCash = 100;

	var applePrice = 5;
	var orangePrice = 5;
	var bananaPrice = 5;
	var pearPrice = 5;

	var appleInventory = 0;
	var orangeInventory = 0;
	var bananaInventory = 0;
	var pearInventory = 0;

	appendToDom();
	function appendToDom() {

	$("h1").text("Total Available Cash: $" + totalCash);
	$("#priceApple").text("Average Price: $" + applePrice);
	$("#priceOrange").text("Average Price: $" + orangePrice);
	$("#priceBanana").text("Average Price: $" + bananaPrice);
	$("#pricePear").text("Average Price: $" + pearPrice);
  }
	setInterval(function priceChange() {
		var applePriceChange = randomNumber(-50, 50);
		var orangePriceChange	= randomNumber(-50, 50);
		var bananaPriceChange = randomNumber(-50, 50);
		var pearPriceChange	= randomNumber(-50, 50);

		applePrice -= Math.round(applePriceChange) / 100;
		orangePrice -= Math.round(orangePriceChange) / 100;
		bananaPrice -= Math.round(bananaPriceChange) / 100;
		pearPrice -= Math.round(pearPriceChange) / 100;

		applePrice = parseFloat(applePrice.toFixed(2));
			if (applePrice < .50) {
				applePrice = .5
			} else if (applePrice > 9.99) {
				applePrice = 9.99
			}
		orangePrice = parseFloat(orangePrice.toFixed(2));
		if (orangePrice < .50) {
			orangePrice = .5
		} else if (orangePrice > 9.99) {
			orangePrice = 9.99
		}
		bananaPrice = parseFloat(bananaPrice.toFixed(2));
		if (bananaPrice < .50) {
			bananaPrice = .5
		} else if (bananaPrice > 9.99) {
			bananaPrice = 9.99
		}
		pearPrice = parseFloat(pearPrice.toFixed(2));
		if (pearPrice < .50) {
			pearPrice = .5
		} else if (pearPrice > 9.99) {
			pearPrice = 9.99
		}

		console.log(appleInventory);


		appendToDom();

		// console.log(applePrice, orangePrice, bananaPrice, pearPrice)
	}, 1000);

	$('button').on('click', function(){
		appleInventory++;
		totalCash -= applePrice;
		$(this).parent().find('h4').html(appleInventory);
	});

	$('button').on('click', function(){
		orangeInventory++;
		totalCash -= orangePrice;
		$(this).parent().find('h4').html(orangeInventory);
	});

	$('button').on('click', function(){
		bananaInventory++;
		totalCash -= bananaPrice;
		$(this).parent().find('h4').html(bananaInventory);
	});

	$('button').on('click', function(){
		pearInventory++;
		totalCash -= pearPrice;
		$(this).parent().find('h4').html(pearInventory);
	});



});


function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
