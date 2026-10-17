(function () {
  var images = document.querySelectorAll("img");
  images.forEach(function (image) {
    var removeBrokenImage = function () {
      image.remove();
    };

    image.addEventListener("error", removeBrokenImage, { once: true });
    if (image.complete && image.naturalWidth === 0) removeBrokenImage();
  });

  document.getElementById("y").textContent = new Date().getFullYear();
})();
