const logo = document.querySelector(".logo");
const footerYear = document.querySelector(".footer-year");
const accordions = document.querySelectorAll(".accordion");
const accordionHeader = document.querySelectorAll(".accordion--header");
const accordionContent = document.querySelectorAll(".accordion--content");
const accordionIconOpen = document.querySelectorAll(".accordion--icon-open");
const accordionIconClose = document.querySelectorAll(".accordion--icon-close");

accordions.forEach((_, i) => {
  accordionHeader[i].addEventListener("click", (e) => {
    accordionContent[i].classList.toggle("accordion--content-active");

    if (accordionContent[i].classList.contains("accordion--content-active")) {
      accordionIconOpen[i].classList.toggle("accordion--icon-active");
      accordionIconClose[i].classList.toggle("accordion--icon-active");
    } else {
      accordionIconOpen[i].classList.toggle("accordion--icon-active");
      accordionIconClose[i].classList.toggle("accordion--icon-active");
    }
  });
});

footerYear.textContent =
  new Date().getFullYear() == 2023
    ? "2023"
    : `2023 - ${new Date().getFullYear()}`;

function typingEffectWordsAnimation(className, newWords) {
  const spanElement = document.querySelector(`.${className}`);

  if (spanElement) {
    const wordsArray = newWords;
    let currentIndex = 0;

    function animateWord(index) {
      let word = wordsArray[index];
      let partialWord = "";

      for (let i = 0; i < word.length; i++) {
        setTimeout(() => {
          partialWord += word[i];
          spanElement.textContent = partialWord;
        }, i * 100);
      }

      setTimeout(
        () => {
          currentIndex = (currentIndex + 1) % wordsArray.length;
          animateWord(currentIndex);
        },
        word.length * 100 + 3000,
      );
    }

    // Start the animation
    animateWord(currentIndex);
  }
}

const words = [
  "Mercy.",
  "Forgiveness.",
  "Reflection.",
  "Gratitude.",
  "Devotion.",
  "Unity.",
  "Blessings.",
  "Empathy.",
  "Sympathy.",
  "Compassion.",
  "Patience.",
  "Renewal.",
];

typingEffectWordsAnimation("words", words);
