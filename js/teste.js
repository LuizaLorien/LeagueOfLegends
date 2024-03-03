fetch('https://ddragon.leagueoflegends.com/cdn/14.4.1/data/pt_BR/champion.json')
  .then(response => response.json())
  .then(data => {
    const champions = data.data;
    // ...
    let filteredChampions = [];

    const championFilterButton = document.getElementById('championFilter');
    championFilterButton.addEventListener('click', () => {
    const searchTerm = document.getElementById('championSearch').value.toLowerCase();
    const selectedTags = document.querySelectorAll('input[name="championTag"]:checked');
    filteredChampions = [];

  for (const championId in champions) {
      const champion = champions[championId];

  if ((!searchTerm || champion.name.toLowerCase().includes(searchTerm)) && selectedTags.length === 0 || selectedTags.some(tag => championTags.includes(tag.value))) {
      filteredChampions.push(champion);
    }
  }

  renderChampionList(filteredChampions);
});
function renderChampionList(champions) {
  const championList = document.getElementById('championList');
  championList.innerHTML = '';

  for (const championId in champions) {
    const champion = champions[championId];
    const championListItem = document.createElement('li');
    championListItem.className = 'championContainer';

    const championImg = document.createElement('img');
    championImg.className = 'championimg';
    championImg.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`;
    championListItem.appendChild(championImg);

    const championName = document.createElement('div');
    championName.className = 'championName';
    championName.innerHTML = champion.name;
    championListItem.appendChild(championName);

    championList.appendChild(championListItem);
  }
}
  });
