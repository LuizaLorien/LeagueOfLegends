fetch('https://ddragon.leagueoflegends.com/cdn/14.4.1/data/pt_BR/champion.json')
  .then(response => response.json())
  .then(data => {

    const champions = data.data;

    const championList = document.createElement('ul');
    const championContainers = [];

    for (const id in champions) {

      const champion = champions[id];
      const Listaritem = document.createElement('li');
      Listaritem.className = 'championContainer';
      Listaritem.dataset.id = champion.id;

      const championimg = document.createElement('img');
      championimg.className = 'championimg';
      championimg.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;
      Listaritem.appendChild(championimg);

      const championName = document.createElement('div')
      championName.className = 'championName';
      championName.innerHTML = champion.name;
      Listaritem.appendChild(championName);

      championContainers.push(Listaritem);
      championList.appendChild(Listaritem);
    }

    // Selecione o botão de pesquisa e o campo de entrada de texto
    const searchButton = document.querySelector('#searchButton');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', () => {
      const searchTerm = searchInput.value.toLowerCase();

      const filteredChampions = championContainers.filter(champion =>
        champion.querySelector('.championName').textContent.toLowerCase().includes(searchTerm)
      );
      championList.innerHTML = '';

      filteredChampions.forEach(champion => championList.appendChild(champion));
    });

      // Adicione a lista de campeões à página
      const championContainer = document.getElementById('championData');
      championData.innerHTML = '';
      championContainer.appendChild(championList);

      championContainers.forEach(championContainer => {
        championContainer.addEventListener('click', () => {
          const championId = championContainer.querySelector('.championName').dataset.id;
          redirectToChampionPage(championId);
        });
      });

  })
  .catch(error => {
    console.error('Ocorreu um erro ao carregar os dados do campeão', error);
  });

function generateChampionPage(champion) {
  const championPage = document.createElement('div');
  championPage.className = 'championPage';

  const champNameHeader = document.createElement('h1');
  champNameHeader.className = 'champNameHeader';
  champNameHeader.textContent = champion.name;
  championPage.appendChild(champNameHeader);

  const champImage = document.createElement('img');
  champImage.className = 'champImage';
  champImage.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;
  championPage.appendChild(champImage);

  const champDetails = document.createElement('div');
  champDetails.className = 'champDetails';

  const champLore = document.createElement('p');
  champLore.className = 'champLore';
  champLore.textContent = champion.lore;
  champDetails.appendChild(champLore);

  const champAbilities = document.createElement('div');
  champAbilities.className = 'champAbilities';

  for (const abilityId in champion.spells) {
    const ability = champion.spells[abilityId];
    const champAbility = document.createElement('p');
    champAbility.className = 'champAbility';
    champAbility.textContent = `${ability.name}: ${ability.description}`;
    champAbilities.appendChild(champAbility);
  };
}
