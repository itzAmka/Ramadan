const logo = document.querySelector(".logo");
const footerYear = document.querySelector(".footer-year");

// colors
const secondaryClr = "#52b788";
const accentClr = "#e21818";

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
