window.onload = function() {
  var imageContainer = document.querySelector('.image-container');
  var images = imageContainer.getElementsByTagName('img');
  var currentIndex = 0;
  var interval = 3000; // Tempo de transição em milissegundos

  function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }

  setInterval(changeImage, interval);
};
