
document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a Ajax e imprimir resultados
function cargarNombres(e) {
     e.preventDefault();

     // Leer las variables
     const apikey = '53ae89eb5f3cd54814a53cc2d9085fc4';

     const origen = document.getElementById('origen');
     const origenSeleccionado = origen.options[origen.selectedIndex].value;

     let url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${origenSeleccionado}&api_key=${apikey}&format=json`;


     // crear fetch
     fetch(url)
          .then(function(res){
               return res.json();
     })
     .then(function(origen){
          let htmlNombres = `<h2>Top de artistas</h2> `;
          htmlNombres += `<ul class="lista"> `;
          origen.topartists.artist.forEach(function(artista) {
               htmlNombres += ` 
                    <li><a href= '${artista.url}' target="_blank">${artista.name}</a></li>
                    `;
          })
          htmlNombres += ` </ul> `;
          document.querySelector('#resultado').innerHTML = htmlNombres;
     })
     .catch(function(error){
          console.log(error);
     })
}