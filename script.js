const btnDraw = document.querySelector('#btnDraw');
const outputSection = document.querySelector('#output-section');

btnDraw.addEventListener('click', async (e) => {
  try {
    const response = await fetch(
      'https://deckofcardsapi.com/api/deck/new/draw?count=1'
    );
    const data = await response.json();

    cardWrapper = document.createElement('div');
    cardWrapper.className = 'card-wrapper';

    cardImage = data.cards[0].image;
    img = document.createElement('img');
    img.src = cardImage;

    cardWrapper.appendChild(img);

    outputSection.innerHTML = '';
    outputSection.appendChild(cardWrapper);
  } catch (e) {}
});
