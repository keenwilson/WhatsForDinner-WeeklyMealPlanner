var html2img = $("#weekly-plan")[0];

$("#weekly-plan").click(function () {
	html2canvas(html2img,{width: 600, height: 450}).then(function(canvas) {
		$("#show-ingredients-body").empty();
		$("#show-ingredients-body").append(canvas);
	});
	$("#show-ingredients-title").text("Save weekly planner image:");
	// $("#show-ingredients-")
	$("#show-ingredients").addClass("is-active");
})

// html2canvas($('#imagesave')[0], {
//     width: 1200,
//     height: 1200
//   }