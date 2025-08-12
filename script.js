fetch('games.json')
  .then(res => res.json())
  .then(games => {
    const grid = document.getElementById('game-grid');
    games.forEach(game => {
      const card = document.createElement('div');
      card.className = 'game-card';
      card.innerHTML = `
        <img src="${game.thumbnail}" alt="${game.title}">
        <h4>${game.title}</h4>
      `;
      card.onclick = () => window.location.href = game.url;
      grid.appendChild(card);
    });
  });
