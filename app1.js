var shoppingList = {
	items: []
};

function addItem (shoppingList, item) {
	shoppingList.items.push({
		displayName: item,
		checkedOff: false
	});
	//console.log(shoppingList);
};

function rmItem (shoppingList, item) {
	var indexRm = shoppingList.items.indexOf(item);
	shoppingList.items.splice(indexRm,1);
};

function getItem (shoppingList, itemIndex) {
	console.log(ShoppingList.items[itemIndex]);
	return shoppingList.items[itemIndex];
}

//function updateItem (shoppingList, itemIndex) {
	//return shoppingList.items[itemIndex] = newItemState;
//}

function renderList (shoppingList, element) {
	var shoppingListHTML = shoppingList.items.map(function(item) {
		return '<li>' + '<span class="shopping-item">' + item + '</span>' + '<div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' + '<span class="button-label">' + 'check' + '</span>' + '</button>' + '<button class="shopping-item-delete">' + '<span class="button-label">' + 'delete' + '</span>' + '</button>' + '</div>' + '</li>';
	});
	//console.log(shoppingListHTML);

	element.html(shoppingListHTML);
};

$(function() {
	$('ul').on('click', 'button.shopping-item-toggle', function(event) {
		//event.preventDefault();
		//console.log('woof');
		console.log($(this).closest('li'));
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
	});
	$('ul').on('click', 'button.shopping-item-delete', function (event) {
		//console.log($(this).closest('.shopping-item').contents());
		//event.preventDefault();
		rmItem(shoppingList, $(this).closest('span').contents());
		$(this).closest('li').remove();
	});
	$('#js-shopping-list-form').submit(function(event) {
		//console.log($('input').val());
		addItem(shoppingList, $('input').val());
		renderList(shoppingList, $('.shopping-list'));
		(document.getElementById('js-shopping-list-form')).reset();
		event.preventDefault();
	});
});


//$(function() {
	//})

//$(function() {
	
//})

