$( () => {
	$(".blanco").on("click", (e) => {
		e.preventDefault();
		$(".outfit").hide();
		$(".blanco").show();
	});

	$(".negro").on("click", (e) => {
		e.preventDefault();
		$(".outfit").hide();
		$(".negro").show();
	});

	$(".militar").on("click", (e) => {
		e.preventDefault();
		$(".outfit").hide();
		$(".militar").show();
	});

	$(".rayas").on("click", (e) => {
		e.preventDefault();
		$(".outfit").hide();
		$(".rayas").show();
	});

	$(".jeans").on("click", (e) => {
		e.preventDefault();
		$(".outfit").hide();
		$(".jeans").show();

	});
});
