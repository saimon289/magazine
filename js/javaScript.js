var ul = document.getElementById('sl');
var Prev=document.getElementById('prev');
var Next=document.getElementById('next');
var check = document.querySelectorAll('.radio');
 var cube = document.getElementById('cub');
ul.style.left=  -3793 +'px';

 

check[0].onclick= function () {
	 ul.style.left=  4 +'px';
	 cube.style.WebkitTransform += 'rotateX(90deg)'; 
}

check[1].onclick= function () {
	 ul.style.left=  -1892 +'px';
	  cube.style.WebkitTransform += 'rotateX(90deg)'; 
}
check[2].onclick= function () {
	 ul.style.left=  -3793 +'px';
	  cube.style.WebkitTransform += 'rotateX(90deg)'; 
}
check[3].onclick= function () {
	 ul.style.left=  -5695 +'px';
	  cube.style.WebkitTransform += 'rotateX(90deg)'; 
}
check[4].onclick= function () {
	 ul.style.left=  -7593 +'px';
	  cube.style.WebkitTransform += 'rotateX(90deg)'; 
}



Prev.onclick=function(){
	  if(ul.style.left===  -7593 +'px'){
	  	ul.style.left=  -5695 +'px';
	  	check[3].checked=true;
	  	 cube.style.WebkitTransform += 'rotateY(90deg)';  
	  	
	  }else if (ul.style.left===  -5695 +'px'){
	  	ul.style.left=  -3793 +'px';
	  	check[2].checked=true;
	  	 cube.style.WebkitTransform += 'rotateY(90deg)'; 
	  	
	  }
	  else if (ul.style.left===  -3793 +'px'){
	  	 ul.style.left=  -1892 +'px';
	  	 check[1].checked=true;
	  	  cube.style.WebkitTransform += 'rotateY(90deg)'; 
	  	
	  }
	  else if (ul.style.left===  -1892 +'px'){
	  	 ul.style.left=  4 +'px';
	  	 check[0].checked=true;
	  	  cube.style.WebkitTransform += 'rotateY(90deg)'; 
	  	

	  }
	  else if (ul.style.left===  4 +'px'){
	  	 ul.style.left= -7593 +'px';
	  	  check[4].checked=true;
	  	   cube.style.WebkitTransform += 'rotateY(90deg)'; 
	  }


	}


	Next.onclick=function(){
	  if(ul.style.left===  4 +'px'){
	  	ul.style.left=  -1892 +'px';
	  	check[1].checked=true;
	  	cube.style.WebkitTransform += 'rotateY(-90deg)';
	  	
	  }else if (ul.style.left===  -1892 +'px'){
	  	ul.style.left=  -3793 +'px';
	  	check[2].checked=true;
	  	cube.style.WebkitTransform += 'rotateY(-90deg)';
	  	
	  }
	  else if (ul.style.left===  -3793 +'px'){
	  	 ul.style.left=  -5695 +'px';
	  		check[3].checked=true;
	  	cube.style.WebkitTransform += 'rotateY(-90deg)';
	  	
	  }
	  else if (ul.style.left===  -5695 +'px'){
	  	 ul.style.left= -7593 +'px';
	  	 check[4].checked=true;
	  	cube.style.WebkitTransform += 'rotateY(-90deg)';

	  }
	  else if (ul.style.left=== -7593 +'px'){
	  	 ul.style.left= 4 +'px';
	  	  check[0].checked=true; 
	  	  cube.style.WebkitTransform += 'rotateY(-90deg)';

	  }


	}	

	var minislide = document.getElementById('slidemini');
	console.log(minislide);
	
	var  prev =document.getElementById('prev2');
	var  next=document.getElementById('next2');
    minislide.style.left =  -440 +'px';
prev.onclick=function ( ){ 
		     if(minislide.style.left===  -440 +'px'){
		     minislide.style.left =  -560 +'px';
		     }
            else if(minislide.style.left===  -560 +'px'){
            	minislide.style.left =  -750 +'px';
            }
              else if(minislide.style.left===  -750 +'px'){
            	minislide.style.left =  -880 +'px';
            }
             else if(minislide.style.left===  -880 +'px'){
            	minislide.style.left =  -440 +'px';
            }
            else if(minislide.style.left===  -210 +'px'){
		     minislide.style.left =  -440 +'px';
		     }
              else if(minislide.style.left===  -30 +'px'){
            	minislide.style.left =  -210 +'px';
            }
            else if(minislide.style.left===  -440 +'px'){
            	minislide.style.left =  -30 +'px';
            }
}
next.onclick=function ( ){ 
		     if(minislide.style.left===  -440 +'px'){
		     minislide.style.left =  -210 +'px';
		     }
            else if(minislide.style.left===  -210 +'px'){
            	minislide.style.left =  -30 +'px';
            }
              else if(minislide.style.left===  -30 +'px'){
            	minislide.style.left =  -440 +'px';
            }
            else if(minislide.style.left===  -560 +'px'){
		     minislide.style.left =  -440 +'px';
		     }
             else if(minislide.style.left===  -750 +'px'){
            	minislide.style.left =  -560 +'px';
            }
             else if(minislide.style.left===  -880 +'px'){
            	minislide.style.left =  -750 +'px';
            }

}
	



 
 
    
    





  
/*var chisla= $(document).ready(function (){

   $(window).scroll(function(){
     
$('.number').each(function (){
        $(this).prop('.releitive ul',0).animate({
          number:$(this).text()   
        },{
          duration: 5000,
          easing:'swing',
          step:function(now){
            $(this).text(Math.ceil(now));
          }
        })
      })

   });

});*/


 
	

	

	$(window).scroll(function() {
  // действия при скроллинге страницы...
  if ($(this).scrollTop()>1800) {
    $(".style1").addClass("animstyle1");
    $(".style2").addClass("animstyle2");
    $(".style3").addClass("animstyle3");
    $(".style4").addClass("animstyle4");
    $(".li1").addClass("animli");
    $(".li2").addClass("animli2");
    $(".li3").addClass("animli3");
    $(".li4").addClass("animli4");
   
  } else {
     $(".style1").removeClass("animstyle1");
    $(".style2").removeClass("animstyle2");
    $(".style3").removeClass("animstyle3");
    $(".style4").removeClass("animstyle4");
    $(".li1").removeClass("animli");
    $(".li2").removeClass("animli2");
    $(".li3").removeClass("animli3");
    $(".li4").removeClass("animli4");
   
  }

  
});


	
	
   

   