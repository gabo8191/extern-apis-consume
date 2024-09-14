document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/datos')
    .then(response => response.json())
    .then(data => {
      // Logo
      document.getElementById('logo-image').src = data.logotype.logo;
      document.getElementById('logo-image').alt = data.logotype.name;
      document.getElementById('logo-title').textContent = data.logotype.name;
      document.getElementById('logo-description').textContent = data.logotype.example_description;

      // Anime
      document.getElementById('anime-image').src = data.anime.data.images.jpg.image_url;
      document.getElementById('anime-image').alt = data.anime.data.title;
      document.getElementById('anime-title').textContent = data.anime.data.title;
      document.getElementById('anime-synopsis').textContent = `Sinopsis: ${data.anime.data.synopsis}`;
      document.getElementById('anime-episodes').textContent = `Episodios: ${data.anime.data.episodes}`;
      document.getElementById('anime-aired').textContent = `Emitido: ${data.anime.data.aired.string}`;
    })
    .catch(error => {
      console.error('Error:', error);
      const errorDiv = document.createElement('div');
      errorDiv.classList.add('col-12', 'text-center', 'text-danger');
      errorDiv.textContent = 'Error al cargar los datos';
      document.getElementById('app').appendChild(errorDiv);
    });
});
