jQuery(document).ready(function($) {
  var $window = $(window);
  var prev = 0;

  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  var window_width = $window.innerWidth(),
      window_height = $window.innerHeight(),
      $body_scrollTop=document.body.scrollTop,
      $documentElement_scrollTop=document.documentElement.scrollTop,
      banner_height = $('.banner').innerHeight(),
      $nav = $('.navbar');

  // ---------------- scroll to hide nav, pull to show
  $window.on('scroll', function(){
    if ($window.innerWidth() <= 992 || $window.scrollTop() < 96) {
      return false;
    }
    else {
      var scrollTop = $window.scrollTop();

      if (scrollTop < $window.innerHeight()) {
        $('.navbar')
          .css("background", "rgba(250,250,250,250)")
          
      }

      else {
        $('.navbar')
          .css("background", "rgba(250,250,250,0.9)")
          
      }

      $nav.toggleClass('slideout', scrollTop > prev);
      prev = scrollTop;
    }

    scrollFunction();

  });

  $(".banner-video").click(function(){
    $("#video-iframe-sl").attr("src","https://www.youtube-nocookie.com/embed/06LNYCwFgbg?rel=0&amp;autoplay=1");
    $(".video-iframe").fadeIn(100);
    $(".mask").fadeIn(100);
    
  })

  $(".colse-ico").click(function(){
    $(".video-iframe").fadeOut(100);
    $(".mask").fadeOut(100);
    $("#video-iframe-sl").attr("src","about:blank");

  })

   
  function scrollFunction() {
    var $dynamic=$(".dynamic");
    var $height_sl=document.documentElement.clientHeight*0.9,
        $body_scrollTop=document.body.scrollTop,
        $documentElement_scrollTop=document.documentElement.scrollTop;
    
    
    $dynamic.each(function(){
      if($(this).offset().top < $body_scrollTop+$height_sl || $(this).offset().top < $documentElement_scrollTop+$height_sl){
        if(!$(this).hasClass("dynamic_display")){
          $(this).addClass("dynamic_display");
          // console.log("成功！");
        }
      }
    });
  }

  scrollFunction();

  function Top(){
    var btn = document.getElementById('top');
    var timer = null;
    var isTop = true;
    //获取页面可视区高度
    var clientHeight = document.documentElement.clientHeight;
    // console.log(clientHeight)

    //显示回到顶部按钮
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (osTop >= clientHeight) {
      $("#top").fadeIn(1000);
    } else {
      $("#top").fadeOut(1000);
    };

    //滚动条滚动时触发
    window.onscroll = function() {
      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (osTop >= clientHeight) {
        $("#top").fadeIn(1000);
      } else {
        $("#top").fadeOut(1000);
      };
      //回到顶部过程中用户滚动滚动条，停止定时器
      if (!isTop) {
        clearInterval(timer);
      };
      isTop = false;
    };
   
    btn.onclick = function() {
      //设置定时器
      timer = setInterval(function(){
        //获取滚动条距离顶部高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log('osTop '+osTop);
        var ispeed = Math.floor(-osTop / 7);
         // console.log('ispeed '+ispeed);
        document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
        //到达顶部，清除定时器
        if (osTop == 0) {
          clearInterval(timer);
        };
        isTop = true;
         
      },30);
    };
  };

  Top();
});


$(function(){
    let width = $(window).width();
    if ( width > 750 )
    {
        $(".images-box").hover(function(){
            $(this).find('.resume-text').stop(true,true).slideDown('fast');
            $(this).parents(".team-box").css({
                transform: 'scale(1.1)',
                transition: 'All .3s ease-in-out',
            });
        },function(){
            $(this).find('.resume-text').stop(true,true).slideUp('fast');
            $(this).parents(".team-box").css({
                transform: 'scale(1)',
                transition: 'All .3s ease-in-out',
            });     
        });
    }
    else
    {
        $(".images-box").on('click',function(){
            $(this).find('.resume-text').stop(true,true).slideToggle('fast');
            $(this).parents('.row').siblings('.row').find('.resume-text').slideUp('fast');
            $(this).parents('li').siblings('li').find('.resume-text').slideUp('fast');
        });
    }
});

function SubscribeList(){
	var email=$(".subscribe-email").val();
	var name=$(".subscribe-name").val();

	console.log(email,name);
	if(email=="" || name==""){
		alert("Please enter your mailbox and name！");
	}else{
		$(".loading").fadeIn(100);
		$.ajax({
		    url:"https://clientapi.benchmarkemail.com/Contact/15930838/ContactDetails",
		    dataType:'json',
		    type:'post',
		    
		    data:'{"Data":{"Email":"'+email+'","FirstName":"'+name+'","LastName":"","EmailPerm":"1"}}',
		    headers: {
		        'Content-Type':'application/json',
		        'AuthToken':'757A87F1-1324-45FC-A286-E11408A85640'
		    },
		    success:function (data) {
		       $(".loading").fadeOut(100);
		       alert("Subscribe to the success！");
		       $(".subscribe-email").val("");
		       $(".subscribe-name").val("");
		    },
		    error: function(err) {
		    	$(".loading").fadeOut(100);
				alert("Subscribe to the failure！");
			},
		});
	}	
}

function Whitelist(){
	var email=$(".whitelist-email").val();
	var name=$(".whitelist-name").val();

	console.log(email,name);
	if(email=="" || name==""){
		alert("Please enter your data！");
	}else{
		$(".loading").fadeIn(100);
		$.ajax({
		    url:"https://clientapi.benchmarkemail.com/Contact/15930837/ContactDetails",
		    dataType:'json',
		    type:'post',
		    
		    data:'{"Data":{"Email":"'+email+'","FirstName":"'+name+'","LastName":"","EmailPerm":"1"}}',
		    headers: {
		        'Content-Type':'application/json',
		        'AuthToken':'757A87F1-1324-45FC-A286-E11408A85640'
		    },
		    success:function (data) {
		       $(".loading").fadeOut(100);
		       alert("Sent successfully!");
		       window.location.reload();
		    },
		    error: function(err) {
		    	$(".loading").fadeOut(100);
				alert("Sent failed!");
			},
		});
	}	
}

$(function(){

    // particlesJS
    var $particles_js = $('#particles-js'), $particles_color = "#fff", $particles_color_alt = "#fff" ;
    // if ($body_m.hasClass('io-zinnia')) { $particles_color = "#fff", $particles_color_alt = "#fff"; }
    if ($particles_js.length > 0 ) {
        particlesJS('particles-js',
        // Update your personal code.
        {
        "particles": {
            "number": {
                "value": 30,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": $particles_color_alt,
            },
            "shape": {
                "type": "circle",
                "opacity": 0.20,
                "stroke": {
                    "width": 0,
                    "color": $particles_color,
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.30,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.12,
                    "sync": false
                }
            },
            "size": {
                "value": 6,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.08,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": $particles_color,
                "opacity": 0.50,
                "width": 1.3
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": false
            },
            "modes": {
                "grab": {
                "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
            "retina_detect": true
        }
        // Stop here.
      );
    }
})