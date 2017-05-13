var shoppingList = {
	items: []
};

var addItem = function (shoppingList, item) {
	var newItem = {
		name: item,
		isChecked: false
	};
	//console.log(shoppingList.items.name);
	shoppingList.items.push(newItem);
}

var rmItem = function (shoppingList, targetItem) {
	shoppingList.items.forEach(function (item, index) {
		if (item.name == targetItem) {
			shoppingList.items.splice(index,1);
		} 
	});
}

var renderList = function (shoppingList, element) {
	var shoppingListHTML = shoppingList.items.map(function(item) {
		console.log(item.isChecked);
		if (item.isChecked) {
			return '<li>' + '<span class="shopping-item shopping-item__checked">' + item.name + '</span>' + '<div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' + '<span class="button-label">' + 'check' + '</span>' + '</button>' + '<button class="shopping-item-delete">' + '<span class="button-label">' + 'delete' + '</span>' + '</button>' + '</div>' + '</li>';
		}
		else {
			return '<li>' + '<span class="shopping-item">' + item.name + '</span>' + '<div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' + '<span class="button-label">' + 'check' + '</span>' + '</button>' + '<button class="shopping-item-delete">' + '<span class="button-label">' + 'delete' + '</span>' + '</button>' + '</div>' + '</li>';
		}
	});
	//console.log(shoppingListHTML);

	element.html(shoppingListHTML);
}

var toggleCheckedItem = function (shoppingList, targetItem) {
	shoppingList.items.forEach(function (item, index) {
		console.log(item.isChecked);
		if (item.name == targetItem) {
			item.isChecked = !item.isChecked;
			console.log(item.isChecked);
		};
	});
}


$(function() {
	$('ul').on('click', 'button.shopping-item-toggle', function(event) {
		//event.preventDefault();
		//console.log('woof');
		//console.log($(this).closest('li'));
		var shoppingItem = $(this).closest('li').find('.shopping-item');
		shoppingItem.toggleClass('shopping-item__checked');
		toggleCheckedItem(shoppingList, shoppingItem.text());
		console.log(shoppingItem.contents());
	});
	$('ul').on('click', 'button.shopping-item-delete', function (event) {
		//console.log($(this).closest('.shopping-item').contents());
		//event.preventDefault();
		var shoppingItem = $(this).closest('li').find('.shopping-item');
		rmItem(shoppingList, shoppingItem.text());
		$(this).closest('li').remove();
	});
	$('#js-shopping-list-form').submit(function(event) {
		event.preventDefault();
		//console.log($('input').val());
		addItem(shoppingList, $('input').val());
		renderList(shoppingList, $('.shopping-list'));
		(document.getElementById('js-shopping-list-form')).reset();
	});
});


//$(function() {
	//})

//$(function() {
	
//})

