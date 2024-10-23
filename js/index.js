
        const apiKey = 'TU_CLAVE_DE_API';
        const spreadsheetId = '18Rf0-3sREFosw__tQYaUmtzJNL3M-PLsm-HIqENf2Yw';
        let range = 'Hoja1!A1:D10'; 
        range = 'Hoja1!A1:D10';
        let url = "https://docs.google.com/spreadsheets/d/18Rf0-3sREFosw__tQYaUmtzJNL3M-PLsm-HIqENf2Yw/edit?pli=1&gid=0#gid=0"
        //const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
        
url = 'https://opensheet.elk.sh/18Rf0-3sREFosw__tQYaUmtzJNL3M-PLsm-HIqENf2Yw/Comunidades'+'!A1:A50'
        fetch(url)
          .then(response => response.json())
          .then(data => {
            console.log('Datos obtenidos:', data);
            // Aquí puedes procesar los datos obtenidos
          })
          .catch(error => {
            console.error('Error al obtener los datos:', error);
          });

