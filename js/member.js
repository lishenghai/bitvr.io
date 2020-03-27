/**
 * Created by Administrator on 18-10-16.
 * author@jiangyue
 */
$(document).ready(function(){
    change_fontsize();
});
$(window).resize(function(){
    change_fontsize();
});
function change_fontsize() {
    var width = $('.progress-box').width();
    let txt = $(".percentage-sl").width() + 15;
    let boxWidth = Number((width-txt)/width).toFixed(2) * 100 + '%';
    $(".progress").css({
    	width:boxWidth
    });
}
$(function(){

	// 侧边栏active滑动效果
	// $(".catalog-item").on('click',function(){
	// 	var index = $(this).index();
	// 	var add=1.6+(4.55*index);
	// 	var addRem=add+"rem";
	// 	$(".catalog-item").removeClass("active");
	// 	$(this).addClass("active");				
	// 	$(".active-ico").animate({top:addRem});
	// });
	// 侧边栏点击切换效果
	// $(".jiantou-box").on('click',function(){
	// 	if($(this).hasClass('jiantou-active')){
	// 		$(this).removeClass('jiantou-active')
	// 		$(".side-catalog").animate({left:'-100%'},1);
	// 		$(".mark").fadeOut(200);

	// 	}else{
	// 		$(this).addClass('jiantou-active')
	// 		$(".side-catalog").animate({left:'4rem'},1);
	// 		$(".mark").fadeIn(200);

	// 	}
	// })

	// faq手风琴效果
	$('.faq-item-tit').on('click',function(){
		var faq_item=$(this).parents(".faq-item");
		if(faq_item.hasClass('active')){
			faq_item.removeClass('active');
			
		}else{
			$(".faq-item").removeClass("active");
			faq_item.addClass("active");
		}
	});

	var width=$(window).width();

	// if(width<1300){
	// 	// 侧边栏hover切换效果
	// 	$(".side-catalog").on('mouseenter','.jiantou-box',function(){
	// 		$(this).addClass('jiantou-active')
	// 		$(".side-catalog").animate({left:'0'},1);
	// 	});
	// 	$(".side-catalog").on('mouseleave',function(){
	// 		$(".jiantou-box").removeClass('jiantou-active')
	// 		$(".side-catalog").animate({left:'-10.4rem'},1);
	// 	});
	// }
	if(width<1300 && 768<width){
		// 侧边栏hover切换效果
		$(".side-catalog").on('mouseenter','.jiantou-box',function(){
			$(this).addClass('jiantou-active');
			$(".side-catalog").animate({left:'0'},1);
			console.log(width);
		});
		$(".side-catalog").on('mouseleave',function(){
			$(".jiantou-box").removeClass('jiantou-active');
			$(".side-catalog").animate({left:'-10.4rem'},1);
		});
	}
	if(width<768){
		$('.jiantou-box').on('click',function(){
			if($(this).hasClass("jiantou-active")){
				$(".jiantou-box").removeClass('jiantou-active');
				$(".side-catalog").animate({left:'-10.4rem'},1);
				console.log(2);
			}else{
				$(this).addClass('jiantou-active');
				$(".side-catalog").animate({left:'0'},1);
				console.log(1);
			}
		})
	}

});