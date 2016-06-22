// This prevents javascript from running
// before the page has loaded
$(document).ready(function(){
	$('#street-fighter-logo img').fadeIn(30000).fadeOut(3000,function(){
		$('.creator h1').fadeIn(3000).fadeOut(3000,function(){
			$('.my-name h1').fadeIn(3000).fadeOut(3000,function(){
				$('.help-text').fadeIn(3000)
			});
		});
	});
	
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		$('ryu-cool').hide();
	})
	.mousedown(function(){
	// play hadouken sound
    // show hadouken and animate it to the right of the screen

    	playHadouken();
		$('.ryu-throwing').show();
		$('.ryu-ready').hide();

		$('.hadouken').finish().show().animate({'left':'1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left','520px'); 
		});
	})
	.mouseup(function(){
	// ryu goes back to his ready position
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();


		$('.hadouken').hide();


	});

	$(document).keydown(function(event){
		
		if(event.which===88){
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
			$('.ryu-throwing').hide();
		}
	})
	.keyup(function(){
		$('.ryu-ready').show();
		$('.ryu-cool').hide();
	});

});

function playHadouken(){
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}