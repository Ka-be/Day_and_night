const zoneName = 'Europe/Paris'; // Fuseau horaire de la localisation souhaitée
const country = 'FR'; // Fuseau horaire de la localisation souhaitée
const apiKey = 'MO61NMLM6SEL'; // Remplacez par votre clé d'API

const apiUrl = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=${zoneName}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const localTime = new Date(data.timestamp * 1000); // Convertir en objet Date local
    console.log(localTime); // Afficher l'heure locale
    const nightScene = document.querySelector('.night');
    console.log(data.formatted);



  })
  .catch(error => {
    console.log('Une erreur s\'est produite :', error);
  });






