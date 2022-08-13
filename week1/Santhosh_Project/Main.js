(function ($) {

 // Navbar on scrolling
	 $(window).scroll(function () {
		 if ($(this).scrollTop() > 200) {
		 $('.navbar').fadeIn('slow').css('display', 'flex');
		 } else {
		 $('.navbar').fadeOut('slow').css('display', 'none');
		 }
	 });
	 
	 
	
})(jQuery);

function onHomeClick() {
var my_element = document.getElementById("about");
my_element.scrollIntoView({
  behavior: "smooth",
  block: "start",
  inline: "nearest"
});
}
 function onSkillClick() {
var my_element = document.getElementById("skill");
my_element.scrollIntoView({
  behavior: "smooth",
  block: "start",
  inline: "nearest"
});
}
 function onPortfolioClick() {
var my_element = document.getElementById("products");
my_element.scrollIntoView({
  behavior: "smooth",
  block: "start",
  inline: "nearest"
});
}
 function onContactClick() {
var my_element = document.getElementById("contact");
my_element.scrollIntoView({
  behavior: "smooth",
  block: "start",
  inline: "nearest"
});
}
 function onQualityClick() {
var my_element = document.getElementById("Achievements");
my_element.scrollIntoView({
  behavior: "smooth",
  block: "start",
  inline: "nearest"
});
}