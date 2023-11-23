let tvLigada = true;

function ligarDesligar() {
  const videoPlayer = document.getElementById('videoPlayer');
  const blackScreen = document.querySelector('.tv');

  if (tvLigada) {
    videoPlayer.style.display = 'none';
    blackScreen.style.backgroundImage = 'url("img/nada.jpg")';
    videoPlayer.volume = 0;
  } else {
    videoPlayer.style.display = 'block';
    blackScreen.style.backgroundImage = 'none';
  }

  tvLigada = !tvLigada;
}

function mudarVideo(caminho) {
  const videoPlayer = document.getElementById('videoPlayer');
  videoPlayer.src = caminho;
  videoPlayer.load();

  atualizarIndicadorImagem(caminho); // Chama a função para atualizar o indicador de imagem atual

}

function aumentarVolume() {
  const videoPlayer = document.getElementById('videoPlayer');
  if (videoPlayer.volume < 1.0) {
    videoPlayer.volume = Math.min(videoPlayer.volume + 0.1, 1.0);
    atualizarIndicadorVolume(videoPlayer.volume); // Chama a função para atualizar o indicador de volume
  }
}

function diminuirVolume() {
  const videoPlayer = document.getElementById('videoPlayer');
  if (videoPlayer.volume > 0.0) {
    videoPlayer.volume = Math.max(videoPlayer.volume - 0.1, 0.0);
    atualizarIndicadorVolume(videoPlayer.volume); // Chama a função para atualizar o indicador de volume
  }
}

// Função para atualizar o indicador de imagem atual
function atualizarIndicadorImagem(caminho) {
  const currentImageIndicator = document.getElementById('currentImageIndicator');
  const videoName = caminho.split('/').pop().split('.')[0]; // Extrai o nome do vídeo do caminho
  currentImageIndicator.textContent = videoName;
}

// Função para atualizar o indicador de volume
function atualizarIndicadorVolume(volume) {
  const currentVolumeIndicator = document.getElementById('currentVolumeIndicator');
  const volumePorcentagem = Math.round(volume * 100);
  currentVolumeIndicator.textContent = volumePorcentagem + '%';
}

document.addEventListener("DOMContentLoaded", function () {
  ligarDesligar();
});