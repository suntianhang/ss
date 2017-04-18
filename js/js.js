$(function() {
	var index = 0;
	var time;
	$('.hd ul li:nth-child(1)').append('<img src="img/slide_button_hover.png"/>')
	$('.hd ul li').hover(function() {
		index = $(this).index()
		tab()
		tab1()
	})

	function tab() {
		$('.bd_div ul li').eq(index).fadeIn(600).siblings().fadeOut(300)
	}

	function tab1() {
		$('.slide_bg_div ul li').eq(index).fadeIn(600).siblings().fadeOut(300)
		$('.hd ul li').eq(index).append('<img src="img/slide_button_hover.png"/>').siblings().children().remove()
	}
	$('.mian').hover(function() {
		clearInterval(time)
	}, function() {
		clearInterval(time)
		time = setInterval(function() {
			index++;
			index %= $('.bd_div ul li').length;
			tab();
			tab1();
		}, 4000)
	}).trigger('mouseleave')

	$('.prev').click(function() {
		index--;
		index %= $('.bd_div ul li').length;
		tab();
		tab1();
	})
	$('.next').click(function() {
		index++;
		index %= $('.bd_div ul li').length;
		tab();
		tab1();
	})
	$('.prev').hover(function() {
		$('.prev').append('<p style="width:100%;height:100%;background:#000;opacity:0.5;border-radius:5px 0 0 5px;"></p>')
	}, function() {
		$('.prev').children().remove()
	})
	$('.next').hover(function() {
		$('.next').append('<p style="width:100%;height:100%;background:#000;opacity:0.5;border-radius:0 5px 5px 0;"></p>')
	}, function() {
		$('.next').children().remove()
	})

	$('.menu1_link').hover(function() {
		$(this).siblings().css({
			'display': 'block'
		})
	}, function() {
		$('.menu-bd1').css({
			'display': 'none'
		})
	})
})