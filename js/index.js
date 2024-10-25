

const spreadsheetId = '18Rf0-3sREFosw__tQYaUmtzJNL3M-PLsm-HIqENf2Yw';

let range = '!A1:D10';

const hojas = ["Comunidades", "Otras (Medios, etc.)", "Dropdowns", "Sobre esta iniciativa"];

const url = `https://opensheet.elk.sh/${spreadsheetId}/${hojas[3]}`;
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('Datos obtenidos:', data);
    // Aquí puedes procesar los datos obtenidos
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });

