let tvLigada = false;
    let canalAtual = 1;
    let volumeAtual = 10;

    const canalSpan = document.getElementById('canal');
    const volumeSpan = document.getElementById('volume');
    const statusSpan = document.getElementById('status');

    const ligarDesligarButton = document.getElementById('ligarDesligar');
    const canalAnteriorButton = document.getElementById('canalAnterior');
    const proximoCanalButton = document.getElementById('proximoCanal');
    const aumentarVolumeButton = document.getElementById('aumentarVolume');
    const diminuirVolumeButton = document.getElementById('diminuirVolume');
    const infoCanalButton = document.getElementById('infoCanal');

    ligarDesligarButton.addEventListener('click', function() {
      tvLigada = !tvLigada;
      statusSpan.textContent = tvLigada ? 'Ligada' : 'Desligada';
    });

    canalAnteriorButton.addEventListener('click', function() {
      if (tvLigada && canalAtual != 1) {
        canalAtual = Math.max(1, canalAtual - 1);
        canalSpan.textContent = canalAtual;
      }else if(tvLigada && canalAtual == 1){
        canalAtual = 10;
        canalSpan.textContent = canalAtual;
      }
    });

    proximoCanalButton.addEventListener('click', function() {
      if (tvLigada && canalAtual != 10) {
        canalAtual = Math.min(10, canalAtual + 1);
        canalSpan.textContent = canalAtual;
      }else if(tvLigada && canalAtual == 10){
        canalAtual = 1;
        canalSpan.textContent = canalAtual;
      }
    });

    aumentarVolumeButton.addEventListener('click', function() {
      if (tvLigada) {
        volumeAtual = Math.min(20, volumeAtual + 1);
        volumeSpan.textContent = volumeAtual;
      }
    });

    diminuirVolumeButton.addEventListener('click', function() {
      if (tvLigada) {
        volumeAtual = Math.max(0, volumeAtual - 1);
        volumeSpan.textContent = volumeAtual;
      }
    });

    infoCanalButton.addEventListener('click', function() {
      if (tvLigada) {
        alert(`Canal ${canalAtual}: Canal Livre Para Todos os Publicos`);
      }
    });