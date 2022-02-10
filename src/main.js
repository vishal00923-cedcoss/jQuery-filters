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
	var displayAllProducts = products;

	var selectElement =
		"<div class='filter-container'><label for='os'>Select OS: " +
		"<select name='Operating System' id='os'>" +
		"<option value='all'>ALL</option>" +
		"<option value='android'>Android</option>" +
		"<option value='ios'>IOS</option>" +
		"<option value='windows'>Windows</option>" +
		"</select></label>" +
		"<label for='brand'>Select Brand: <select name='brand' id='brand'>" +
		"<option value='all'>ALL</option>" +
		"<option value='Apple'>Apple</option>" +
		"<option value='Samsung'>Samsung</option>" +
		"<option value='Motorola'>Motorola</option>" +
		"<option value='Asus'>ASUS</option>" +
		"<option value='microsoft'>Microsoft</option>" +
		"</select></label>" +
		"</div>";

	var table = "<table id='filter-table'>" + "<thead><tr><th>" + "ID</th><th>Name</th><th>Brand</th>" + "<th>Operating System</th>" + "<th>Remove</th></tr></thead>";

	for (let i = 0; i < products.length; i++) {
		table +=
			"<tr><td id='pid'>" +
			products[i].id +
			"</td><td class='pname'>" +
			products[i].name +
			"</td><td>" +
			products[i].brand +
			"</td><td>" +
			products[i].os +
			"</td><td id='hide'><a href='#'>X</a></td></tr>";
	}

	function display(products) {
		var table = "<thead><tr><th>" + "ID</th><th>Name</th><th>Brand</th>" + "<th>Operating System</th>" + "<th>Remove</th></tr></thead>";
		for (let i = 0; i < products.length; i++) {
			table +=
				"<tr id='pid'><td>" +
				products[i].id +
				"</td><td class='pname'>" +
				products[i].name +
				"</td><td>" +
				products[i].brand +
				"</td><td>" +
				products[i].os +
				"</td><td id='hide'><a href='#'>X</a></td></tr>";
		}

		table += "</table>";
		$("#filter-table").html(table);
	}

	var searchBar = "<label for='search-input'>" + "<input id='search-input' type='text' placeholder='Search' />" + "</label>";

	$("#product-container").append(selectElement);
	$("#product-container").append(table + "</table>");
	$("#product-container").append(searchBar);

	$("#product-container").on("click", "#hide", function () {
		$(this).parent().hide();
	});

	$("#product-container").on("click", "select", function () {
		var os = $("#os").val();
		var brand = $("#brand").val();

		if (os && brand) {
			displayAllProducts = products;

			if (os != "all" && brand == "all") {
				displayAllProducts = displayAllProducts.filter((item) => item.os.toLowerCase() == os.toLowerCase());
			} else if (os == "all" && brand != "all") {
				displayAllProducts = displayAllProducts.filter((item) => item.brand.toLowerCase() == brand.toLowerCase());
			} else if (os != "all" && brand != "all") {
				displayAllProducts = displayAllProducts.filter((item) => item.os.toLowerCase() == os.toLowerCase() && item.brand.toLowerCase() == brand.toLowerCase());
			}

			display(displayAllProducts);
		}
	});

	$("#product-container").on("keyup", "#search-input", function () {
		var value = $(this).val().toLowerCase();

		if (!isNaN(value)) {
			$("#filter-table tbody tr .pid ").filter(function () {
				$(this)
					.parent()
					.toggle($(this).text().toLowerCase().indexOf(value) > -1);
			});
		} else {
			$("#filter-table tbody tr .pname ").filter(function () {
				$(this)
					.parent()
					.toggle($(this).text().toLowerCase().indexOf(value) > -1);
			});
		}
	});
});
