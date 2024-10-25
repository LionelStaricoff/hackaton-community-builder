import {dtoComunidades} from './dto.js'

const spreadsheetId = '18Rf0-3sREFosw__tQYaUmtzJNL3M-PLsm-HIqENf2Yw';

let range = '!A1:D10';

const hojas = ["Comunidades", "Otras (Medios, etc.)", "Dropdowns", "Sobre esta iniciativa"];

const conection = (hoja,action)=>{
const url = `https://opensheet.elk.sh/${spreadsheetId}/${hoja}`;
fetch(url)
  .then(response => response.json())
  .then(data => action(data))
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });

}

const fonctionComunidades = (data)=>{
  
 const datosMapedDto = data.map(m =>  dtoComunidades(m) );
 console.log('Datos obtenidos:', datosMapedDto);
}
//test
conection(hojas[0],fonctionComunidades)