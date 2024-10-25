
/**
 * 
 * @param {*} param0 : parametros necesarios para sacar los datos.
 * @returns : objeto mapeado.
 */
export const dtoComunidades = ({Comunidad='',Estado='',Info_de_contacto='',Miniatura='',Temas='',Tipo_de_comunidad = '',
     Tipo_de_eventos='', URL_Comunidad='', Ubicación_habitual='', Última_revisión=''})=>{
    return {
        Comunidad : Comunidad,
        Estado: Estado,
        Info_de_contacto: Info_de_contacto,
        Miniatura: Miniatura,
        Temas: Temas,
        Tipo_de_comunidad: Tipo_de_comunidad,
        Tipo_de_eventos: Tipo_de_eventos,
        URL_Comunidad : URL_Comunidad,
        Ubicación_habitual : Ubicación_habitual,
        Última_revisión : Última_revisión
    }
  }


  /**
   * 
   * @param {*} data : datos a ser tratados.
   */
  export const fonctionComunidades = (data)=>{
    const datosMapedDto = data.map(m =>  dtoComunidades(m) );
    console.log('Datos obtenidos:', datosMapedDto);
   }

