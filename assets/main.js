var grid = document.querySelector('.grid');
var masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 15,
});

const sortOptions = document.querySelectorAll('.sort-option');

sortOptions.forEach(option => {
  const subOptions = option.querySelector('.sub-sort-options');

  option.addEventListener('click', () => {
    subOptions.classList.toggle('show');
  });
});

var zoomLevel = 100;
var zoomImage = document.getElementById("zoom-image");

function zoomIn() {
  zoomLevel += 10;
  zoomImage.style.transform = "scale(" + zoomLevel / 100 + ")";
}

function zoomOut() {
  zoomLevel -= 10;
  zoomImage.style.transform = "scale(" + zoomLevel / 100 + ")";
}

const categories = document.querySelectorAll('#categories a');
const images = document.querySelectorAll('#image-gallery .image');

categories.forEach(category => {
  category.addEventListener('click', event => {
    event.preventDefault();
    const categoryId = event.target.getAttribute('data-category');
    console.log(`Category ${categoryId} clicked`);

    images.forEach(image => {
      if (categoryId === 'all') {
        image.style.display = 'block';
      } else if (image.classList.contains(categoryId)) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  });
});