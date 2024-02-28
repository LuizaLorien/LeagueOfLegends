fetch('https://ddragon.leagueoflegends.com/cdn/14.4.1/data/pt_BR/champion.json')

  .then(response => response.json())
  .then(data => {


    // extrair os dados dos campeões da resposta da api
    const champions = data.data;

    // Crie uma lista não ordenada que exibe os dados do campeãof
    const championList = document.createElement('ul');

    //cria um item de lista para cada campeao
    for (const id in champions) {

      const champion = champions[id];
      const Listaritem = document.createElement('li');
      Listaritem.className = 'championContainer';

      const championimg = document.createElement('img');
      championimg.className = 'championimg';
      championimg.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;
      Listaritem.appendChild(championimg);

      const championName = document.createElement('div')
      championName.className = 'championName';
      championName.innerHTML = champion.name;
      Listaritem.appendChild(championName);

      const championLink = document.createElement('link');
      championLink.rel = 'stylesheet';
      championLink.href = `https://example.com/champion-styles/${champion.id}.css`;
      document.head.appendChild(championLink);

      championList.appendChild(Listaritem);
    }

    // adiciona personagens na página
    const championContainer = document.getElementById('championData');
    championContainer.appendChild(championList);


  })

  .catch(error => {
    console.error('Ocorreu um erro ao carregar os dados', error);

  });