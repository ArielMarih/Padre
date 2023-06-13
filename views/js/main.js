(function ($) {

	"use strict";

	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});

})(jQuery);


login = function () {
	console.log("login");

	$(document).ready(function () {
		let forms = $(".needs-validation");
		$.each(forms, function (index, form) {
			$(form).submit(function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation()
				}
				$(form).addClass("was-validated");
			})
		})
		//   $(forms[0]).trigger("submit");
	});
}



// (function() {
// 	'use strict';
// 	window.addEventListener('load', function() {
// 	  // Fetch all the forms we want to apply custom Bootstrap validation styles to
// 	  var forms = document.getElementsByClassName('needs-validation');
// 	  // Loop over them and prevent submission
// 	  var validation = Array.prototype.filter.call(forms, function(form) {
// 		form.addEventListener('submit', function(event) {
// 		  if (form.checkValidity() === false) {
// 			event.preventDefault();
// 			event.stopPropagation();
// 		  }
// 		  form.classList.add('was-validated');
// 		}, false);
// 	  });
// 	}, false);
//   })();
