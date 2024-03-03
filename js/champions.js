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
      championimg.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`;
      Listaritem.appendChild(championimg);

      const championName = document.createElement('div')
      championName.className = 'championName';
      championName.innerHTML = champion.name;
      Listaritem.appendChild(championName);

      championContainers.push(Listaritem);
      championList.appendChild(Listaritem);
    }
    const championContainer = document.getElementById('championData');
    championData.innerHTML = '';
    championContainer.appendChild(championList);
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
    ///////////////
  })
  .catch(error => {
    console.error('Ocorreu um erro ao carregar os dados do campeão', error);
  });
