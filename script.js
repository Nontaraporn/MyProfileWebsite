$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
		if(this.scrollY > 500){
			$('.scroll-up-btn').addClass("show");
		}else{
			$('.scroll-up-btn').removeClass("show");
		}
	});

	// slide up
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
	})

	// chang icons
	

	// typing animation scrip
	var typed = new Typed(".typing", {
		strings: ["Programer","Youtuber","Designer","Freelancer","Reviewver"],
		typeSpeed: 100,
		baskSpeed: 80,
		loop: true
	})
	var typed = new Typed(".typingMe", {
		strings: ["Nontaraporn","Ta-tar","Guitar","Data","{Just} Tar ~"],
		typeSpeed: 100,
		baskSpeed: 80,
		loop: true
	})

	// toggle menu
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	})
})