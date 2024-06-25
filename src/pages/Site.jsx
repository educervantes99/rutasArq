import { useParams } from 'react-router-dom';
import { useFetchSiteById } from '../hooks/useFetchSiteById';

export const Site = () => {

    const { id } = useParams();
    const { site } = useFetchSiteById(id);

    return (
      <div className='siteContainer'>
        <h1 className='siteName'>{site?.nombre}</h1>
        <div className='siteContent'>
            <div className='siteContentImage'>
                <img className='siteImage' src={site?.foto} alt="" />
            </div>
            <div className='siteContentInfo'>
                <p><b>Descripcion: </b>{site?.resumen}</p>
                <p><b>Direccion: </b>{site?.ubicacion_fisica}</p>
                <p><b>Estado: </b>{site?.estado}</p>
                <p><b>Condicion: </b>{site['condiciÃ³n']}</p>
                <p><b>Responsable: </b>{site?.responsable}</p>
                

            </div>
        </div>
        

        <iframe src={site?.link}></iframe>

      </div>
    );
  };