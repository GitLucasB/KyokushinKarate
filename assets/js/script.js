//  window.onscroll = function() {scrollFunction()};

//  function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//      document.getElementById("navScroll").style.height = "70px";
    
//    } else {
//      document.getElementById("navScroll").style.height = "auto";
//    }
//  }
$("nav ul a").on("click", function (e) {
  // 1
  e.preventDefault();
  // 2
  const href = $(this).attr("href");
  // 3
  $("html, body").animate({ scrollTop: $(href).offset().top }, 600);
});

AOS.init({
  duration: 600,
});
