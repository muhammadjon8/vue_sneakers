import { ref } from "vue";

export const useIntro = () => {
  // Carousel Start

  const images = [
    "/intro_images/carousel.png",
    "/intro_images/carousel.png",
    "/intro_images/carousel.png",
  ];

  const currentIndex = ref(0);

  const prevSlide = () => {
    currentIndex.value =
      (currentIndex.value - 1 + images.length) % images.length;
  };

  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  };
};
