import '../css/reset.css';
import '../css/style.css';
import '../css/timeline_style.css';


//Needs  to be removed after development 
require('../index.html')



window.onscroll = (event)=>{
	//Check scroll up or down 
	var elements = document.querySelectorAll(".content");
	for (var i = 0; i < elements.length; ++i) {
		  var el = elements[i]
    	if(_isVisible(el)){
    		el.style["overflow-y"] = "scroll";
    	}else{

    		el.style["overflow-y"] = "hidden";
    	}
	}
};

	// grab elements as array, rather than as NodeList
var elements = document.querySelectorAll(".content");
for (var i = 0; i < elements.length; ++i) {
    elements[i].onscroll = (event)=>{
		var el = event.target;
		var elemTop = el.getBoundingClientRect().top;
    	var elemBottom = el.getBoundingClientRect().bottom;
		if(elemTop < window.innerHeight && elemBottom >= 0 ){
			//el.parentElement.scrollIntoView( {behavior :"auto", block: "start", inline: "nearest"});
			window.scrollTo({
				'behavior': 'smooth',
				'left': 0,
				'top': el.parentElement.offsetTop
			  });
    	}
    };
}


var _isVisible = (el)=>{
	   var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    // Only completely visible elements return true:
   // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}


var elements = document.querySelectorAll(".pages");
for (var i = 0; i < elements.length; ++i) {
 elements[i].style["min-height"] =window.innerHeight + "px"	;
   
}

var arrowElement = document.querySelectorAll(".arrow")[0];
arrowElement.onclick= (event) =>{ 
	window.scrollTo({
		'behavior': 'smooth',
		'left': 0,
		'top': document.getElementById("about_page").offsetTop
	  });
}
