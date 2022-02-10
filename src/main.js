var products = [
	{
		id: "100",
		name: "iPhone 4S",
		brand: "Apple",
		os: "iOS",
	},
	{
		id: "101",
		name: "Moto X",
		brand: "Motorola",
		os: "Android",
	},
	{
		id: "102",
		name: "iPhone 6",
		brand: "Apple",
		os: "iOS",
	},
	{
		id: "103",
		name: "Samsung Galaxy S",
		brand: "Samsung",
		os: "Android",
	},
	{
		id: "104",
		name: "Google Nexus",
		brand: "ASUS",
		os: "Android",
	},
	{
		id: "105",
		name: "Surface",
		brand: "Microsoft",
		os: "Windows",
	},
];

$(document).ready(function () {
	var html = "<table><tr>\
        <th>ID</th>\
        <th>Name</th>\
        <th>Brand</th>\
        <th>Operating System</th>\
        <th>Remove</th>\
    </tr> ";

	for (var i = 0; i < products.length; i++) {
		html +=
			"<tr id=" +
			products[i].id +
			">\
        <td>" +
			products[i].id +
			"</td>\
        <td>" +
			products[i].name +
			"</td>\
        <td>" +
			products[i].brand +
			"</td>\
        <td>" +
			products[i].os +
			"</td>\
		<td><a href='#' id='remove' data-id=" +
			"#" +
			products[i].id +
			">X</a></td>\
    </tr>";
	}

	html += "</table>";

	$("#product-container").html(html);

	$("body").on("click", "#remove", function () {
		var rowId = $(this).data("id");

		$(rowId).hide();
	});

	// For Unique Operating System
	var myOS = new Set();

	for (var i = 0; i < products.length; ++i) {
		myOS.add(products[i].os);
	}

	var label1 = "<label for='os'>Filter By Operating System: <label>\
	<select name='os' id='os'>";

	for (var item of myOS) {
		label1 += "<option>" + item + "</option>";
	}

	label1 += "</select>";

	// For Unique Brand Name
	var myBrand = new Set();

	for (var i = 0; i < products.length; ++i) {
		myBrand.add(products[i].brand);
	}

	var label2 = "<label for='brand'>Filter By Brand Name: <label>\
	<select name='brand' id='brand'>";

	for (var item of myBrand) {
		label2 += "<option>" + item + "</option>";
	}

	$("table").before(label1, label2);
});
