    // Fetch dados dos campeões da api
    fetch('https://ddragon.leagueoflegends.com/cdn/14.4.1/data/en_US/champion.json')
    .then(response => response.json())
    .then(data => {

    // extrair os dados dos campeões da resposta da api
    const champions = data.data;

    // Crie uma lista não ordenada que exibe os dados do campeãof
    const championList = document.createElement('ul');

    //cria um item de lista para cada campeao
    for (const id in champions) {
      const champion = champions[id];
      const listItem = document.createElement('li');
      listItem.textContent = `${champion.id}: ${champion.name}`;
      championList.appendChild(listItem);
    }

    // adiciona pra pagina de personagem aaaaaa
    const championContainer = document.getElementById('championData');
    championContainer.appendChild(championList);
    })
    .catch(error => {
        console.error('Error fetching champion data:', error);
    });