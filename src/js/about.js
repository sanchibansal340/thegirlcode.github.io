import '../sass/about.scss';
import './nav';
import team from '../static/data/team.json';

function createCard(src, name, designation, description, member, tag) {
  // Filter src
  src = src.match(/https/g) ? src : `../${src}`;

  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <div class="img">
      <img src="${src}" alt="${name}">
    </div>
    <div class="info">
      <div class="name">${name}</div>
			<div class="designation">${
        tag
          ? member
            ? `<span class="member pill">Member</span> `
            : `<span class="intern pill">Intern</span> `
          : ''
      }${designation}</div>
      <div class="description">${description}</div>
    </div>
  `;

  return card;
}

function populateCards(el, cards, tag) {
  el.innerHTML = '';
  el.append(
    ...cards.map(({ img, name, designation, desc, member }) =>
      createCard(img, name, designation, desc, member, tag)
    )
  );
}

populateCards(
  document.querySelector('div.team div.cards'),
  team.filter(m => !m.past),
  true
);
populateCards(
  document.querySelector('div.past div.cards'),
  team.filter(m => m.past)
);
