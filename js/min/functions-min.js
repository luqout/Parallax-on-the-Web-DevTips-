$(window).scroll(function(){var s=$(this).scrollTop();if($(".logo").css({transform:"translate(0px, "+s/2+"%)"}),$(".back-bird").css({transform:"translate(0px, "+s/4+"%)"}),$(".fore-bird").css({transform:"translate(0px, -"+s/40+"%)"}),s>$(".clothes-pics").offset().top-$(window).height()/1.2&&$(".clothes-pics figure").each(function(s){setTimeout(function(){$(".clothes-pics figure").eq(s).addClass("is-showing")},700*Math.exp(.14*s)-700)}),s>$(".large-window").offset().top-$(window).height()){$(".large-window").css({"background-position":"center "+(s-$(".large-window").offset().top)+"px"});var t=(s-$(".large-window").offset().top+400)/(s/5);$(".window-tint").css({opacity:t})}if(s>$(".blog-posts").offset().top-$(window).height()){var o=Math.min(0,s-$(".blog-posts").offset().top+$(window).height()-350);$(".post-1").css({transform:"translate("+o+"px, "+Math.abs(.2*o)+"px)"}),$(".post-3").css({transform:"translate("+Math.abs(o)+"px, "+Math.abs(.2*o)+"px)"})}});