function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga a seção no console para fins de depuração

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se o campoPesquisa for uma string sem nada 
   if (!campoPesquisa){
     section.innerHTML = "<p>Nenhum Resultado Foi Encontrado. Você precisa digita um nome de um site ou uma referência sobre</p>"
      return
   }

   campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa)
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {

      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

      // Se titula includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

      // Constrói o HTML para cada item do resultado da pesquisa,
      // Cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>`;
      }
      
      
    }

    if (!resultados) {
      resultados = "Nenhum Resultado Foi Encontrado"

    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }