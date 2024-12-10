$(document).ready(function(){
	var item=$('.could-first')
	var item2=$('.could-second')
	var item3=$('.sun-img')
	var item4=$('.road-section')
	var item5=$('.home,.light,.tree')
	var item6=$('.car-section')
	var item7=$('.girl')
	var item8=$('.dot1')
	var item9=$('.dot2')
	var item10=$('.dot3')
	var item11=$('.tire,.tire2')
	var item12=$('.t1')
	var item13=$('.t2')
	var item14=$('.t3')
	var item15=$('.boy-section')
	chavda();
	function chavda(){
		item.fadeIn().css({left:"20%"})
		item2.fadeIn().css({right:"20%"})
		item3.css({ animation:"animName 2s linear infinite"},5000)

		setTimeout(function() {
			item3.fadeIn().animate({bottom:"0"},1000)
			item.css({ animation:"mover 0.4s infinite  alternate"});

		
               
                    }, 1000);
		setInterval(function(){
			item.animate({left:"0"},6000).animate({left:"70%"},6000)
			item2.animate({right:"0"},6000).animate({right:"70%"},6000)
 
},1000);

		setTimeout(function() {
			item4.fadeIn()

		
               
                    }, 3000);

		setTimeout(function() {
			item5.css({opacity:"1"})

		
               
                    }, 4000);
		setTimeout(function() {
			item7.fadeIn().animate({left:"100%"},5000)

		
               
                    }, 6000);

			setTimeout(function() {
			item6.fadeIn().animate({right:"40%"},6000)
			item8.animate({},2000)
			item9.animate()
			item10.animate()
			item12.fadeIn()
			


		
               
                    }, 7000);

			setInterval(function() {
			item8.fadeIn(3000).fadeOut()
			item9.fadeIn(5000).fadeOut()
			item10.fadeIn(1000).fadeOut()


		
               
                    }, 3000);
			setTimeout(function() {
			item11.css({animation:"inherit"})


		
               
                    }, 13000);
			setTimeout(function() {
			item13.fadeIn()


		
               
                    }, 9000);
			setTimeout(function() {
			item14.fadeIn()


		
               
                    }, 11000);

			setInterval(function() {
			item12.fadeIn(2000).fadeOut(1000)
			item13.fadeIn(4000).fadeOut(1000)
			item14.fadeIn(6000).fadeOut(1000)


		
               
                    },8000);
				setTimeout(function() {
					item7.fadeOut()
					item15.fadeIn()
			


		
               
                    }, 13000);



			
			



		
	}

});