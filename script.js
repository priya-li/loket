window.addEventListener('scroll', function() {
    var bottleImage = document.getElementById('homeImage');
    var scrollTop = window.scrollY;

    // Check if the scroll position is at a certain point
    if (scrollTop > 32) { // Adjust the scroll position as needed
      // Change the image source to the new image
      bottleImage.querySelector('img').src = "assets/hero-bottle-cut.avif";
    } else {
      // Change the image source back to the original image
      bottleImage.querySelector('img').src = "assets/hero-bottle.avif";
    }
  });



  window.addEventListener('scroll', function() {
    var s2Image = document.getElementById('s2Image');
    var bounding = s2Image.getBoundingClientRect();
    var scrollTop = window.scrollY || window.pageYOffset; // Use window.scrollY as a replacement
    var isVisible = bounding.top < window.innerHeight && bounding.bottom >= 0;

    if (isVisible) {
        s2Image.classList.add('animate');
    } else {
        s2Image.classList.remove('animate');
    }
});