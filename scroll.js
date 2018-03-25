
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
       $('.header-container').addClass('fixed-header');
       console.log("inside");
    }
    else {
       $('.header-container').removeClass('fixed-header');
    console.log("inside else");
    }
});

