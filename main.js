$(document).ready(function () {
  // Show the first tab and hide the rest
  $("#tabs-nav li:first-child").addClass("active");
  $(".tab-content").hide();
  $(".tab-content:first").show();

  // Click function
  $("#tabs-nav li").click(function () {
    $("#tabs-nav li").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").hide();

    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });

  var typed = new Typed(".auto-type", {
    strings: ["Graphic designer", "Animator"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  });

  const header = document.querySelector(".page-header");
  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
      header.classList.add("is-sticky");
    } else {
      header.classList.remove("is-sticky");
    }
  });

  $(".scrollTo").click(function () {
    var getElem = $(this).attr("href");

    var targetDistance = 10;

    if ($(getElem).length) {
      var getOffset = $(getElem).offset().top;

      $("html").animate(
        {
          scrollTop: getOffset - targetDistance,
        },
        500
      );
    }
    return false;
  });

  $("body").append('<a href="#work" class="back-to-top">Back to Top</a>');
  var amountScrolled = $(window).height();
  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $("a.back-to-top").fadeIn("slow");
    } else {
      $("a.back-to-top").fadeOut("slow");
    }
  });
  $("a.back-to-top").click(function () {
    $("html").animate({ scrollTop: 0 }, 500);
    return false;
  });

  $(".scrollTo").click(function () {
    // this is a getter variable.
    // We're getting the current value of the href attribute of each element with a class "scrollTo".
    var getElem = $(this).attr("href");
    // This is a variable containing an integer value.
    var targetDistance = 10;
    // Checking If the element exists on the page or not.
    if ($(getElem).length) {
      // getting the top offset of the targetted element.
      var getOffset = $(getElem).offset().top;
      // Now We can animate to our desired section using the html element.
      $("html").animate(
        {
          scrollTop: getOffset - targetDistance,
        },
        500
      );
    }
    // returning false performs three tasks when called:
    // event.preventDefault();
    // event.stopPropagation();
    // Stops callback execution and returns immediately when called.
    return false;
  });

  // slick sliders init
  $('.slick-slider-01').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    arrows: true,
    centerMode: false,
  });
  $('.slick-slider-02').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    arrows: true,
    centerMode: false,
  });
});
