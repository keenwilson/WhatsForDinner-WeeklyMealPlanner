var html2img = $("#weekly-plan")[0];

$("#export").click(function () {
  var canvasWidth = $("#weekly-plan").width();
  console.log(canvasWidth)
	html2canvas(html2img,{width: canvasWidth, height: 400}).then(function(canvas) {
		$("#show-ingredients-body").empty();
	$("#show-ingredients-footer").empty();
    $("#show-ingredients-body").append(canvas);
    var a = $("<a id='test' href='#'></a>");
    $("#show-ingredients-footer").append(a);
    $('#test').attr('href', canvas.toDataURL('image/png'));
    $('#test').attr('download', 'Test.png');
    $('#test')[0].click();

	});
	// $("#show-ingredients-title").text("Save weekly planner image:");
	// $("#show-ingredients").addClass("is-active");

})

$('#save_image_locally').click(function(){
    html2canvas($('#imagesave'), 
    {
      onrendered: function (canvas) {
        var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'somefilename.jpg';
        a.click();
      }
    });
  });

// html2canvas($('#imagesave')[0], {
//     width: 1200,
//     height: 1200
//   }