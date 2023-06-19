const zoneName = 'Europe/Paris'; // Fuseau horaire de la localisation souhaitée
const country = 'FR'; // Fuseau horaire de la localisation souhaitée
const apiKey = 'MO61NMLM6SEL'; // Remplacez par votre clé d'API

const apiUrl = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=${zoneName}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const currentTime = new Date().getTime(); // Heure actuelle en millisecondes depuis l'Unix Epoch
    const offsetSeconds = (data.gmtOffset - 7200) ; // Décalage horaire en secondes par rapport à l'UTC
    const localTime = new Date(currentTime + offsetSeconds * 1000); // Ajouter le décalage horaire à l'heure actuelle
    console.log(localTime);
    console.log(data.formatted)




  })
  .catch(error => {
    console.log('Une erreur s\'est produite :', error);
  });






