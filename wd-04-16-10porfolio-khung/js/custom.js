// JavaScript Document
$(document).ready(function(){
	$(".navbar-toggle").click(function(){
		$(".menu").slideToggle()
	})
})

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//-------------========================
$('#sp').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('#banner').owlCarousel({
    loop:true,
	items:1,   
    nav:true,
   
})
$('#skill-chay').owlCarousel({
    loop:true,
    margin:30,
    nav:true,

    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollRreveal({
    distance: '90px',
    duration: 3000
})
sr.reveal(`.text-content`,{origin:'top',delay:400})


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


