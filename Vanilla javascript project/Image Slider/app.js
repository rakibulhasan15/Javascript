const sliderImage = ['img/slider-01.png', 'img/slider-02.png', 'img/slider03.png', 'img/slider04.png', 'img/slider04.png', 'img/slider-05.png'];

const imgTag = document.querySelector('img');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

let count = 0;

nextBtn.addEventListener('click', () => {
  count++;
  if(count >= sliderImage.length) {
     count = 0;
     imgTag.src = sliderImage[count];
  } else {
    imgTag.src = sliderImage[count];
  }
});

prevBtn.addEventListener('click', () => {
  count--;
  if (count < 0) {
    count = sliderImage.length - 1;
    imgTag.src = sliderImage[count];
  } else {
    imgTag.src = sliderImage[count];
  }

});
