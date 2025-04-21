fetch("http://testzin.fwh.is/config.json")
  .then(response => response.json())
  .then(config => {
    // Modificar os elementos da página com base no config
  })
  .catch(error => {
    console.error("Erro ao carregar o config:", error);
  });
