var productsCount = document.getElementById('products-count');
var addToCartButtons = document.querySelectorAll(".add-to-card");
for(var i = 0; i < addToCartButtons.length; i++){
	addToCartButtons[i].addEventListener('click',function() {
		var prevProductsCount = +productsCount.textContent;
		productsCount.textContent = prevProductsCount + 1;
	})
}
