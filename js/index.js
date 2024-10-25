import {dtoComunidades,fonctionComunidades} from './dto.js'

const spreadsheetId = '18Rf0-3sREFosw__tQYaUmtzJNL3M-PLsm-HIqENf2Yw';

let range = '!A1:D10';

const hojas = ["Comunidades", "Otras (Medios, etc.)", "Dropdowns", "Sobre esta iniciativa"];

/**
 * 
 * @param {*} hoja : Dato para conectarnos y saber a que  hoja pertenecen esos datos.
 * @param {*} action : function para modificar los datos.
 */
const conection = (hoja,action)=>{
const url = `https://opensheet.elk.sh/${spreadsheetId}/${hoja}`;
fetch(url)
  .then(response => response.json())
  .then(data => action(data))
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });

}



//test
conection(hojas[0],fonctionComunidades);