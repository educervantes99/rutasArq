import '../App.css'


export const About = () => {
  return (
    <div className='siteContainer'>
      <h1 className="siteName">About</h1>

      <div className="siteContent">
        <div className="aboutContentInfo">

          <div className='aboutIt'>
            <p>
              México es un país con una rica herencia cultural y arqueológica, albergando más de 200 zonas arqueológicas abiertas al público, que representan el legado de antiguas civilizaciones como los mayas, aztecas, olmecas, zapotecas y mixtecas. La diversidad y dispersión geográfica de estos sitios presentan un desafío logístico significativo tanto para los turistas como para los investigadores que desean explorar múltiples ubicaciones en un tiempo limitado.
              El objetivo de este proyecto es desarrollar una solución eficiente para determinar la ruta más corta que permita visitar todos los sitios arqueológicos en México. Este proyecto busca proporcionar una herramienta que optimice el tiempo y los recursos necesarios para recorrer estas maravillas culturales.
            </p>
            <img className="itzamna" src="https://www.jaguarstones.com/maya/images/mayagods/shape_pic-39.png" alt="itzamna" />

          </div>
          <p>Este sitio fué elaborado con las siguientes herramientas: </p>

          <li><a className='aboutLink' href="https://www.sigmajs.org">SigmaJS</a>: Para la visualizacion del grafo</li>
          <li><a className='aboutLink' href="graphology.github.io">Graphology</a>: Para la creacion del grafo y uso de Dijkstra</li>
          <li><a className='aboutLink' href="https://es.react.dev">React + Vite</a>: Para la construccion del sitio</li>
          <li><a className='aboutLink' href="https://www.google.com.mx/maps/preview">Google maps</a>: Para el calculo de las distancias</li>
          
          <p>Toda la informacion fue recopilada del sitio del <a className='aboutLink' href="https://lugares.inah.gob.mx/es/">INAH</a></p>

          <div style={{display: 'grid'}}>
            <img className="eduardo" src="https://media.licdn.com/dms/image/D4E03AQEouQp9MkhSPw/profile-displayphoto-shrink_800_800/0/1688360524483?e=1724889600&v=beta&t=QnB6t4TH4V2i5S7d_L0NBm5aziRtRZuFjs0LLaJRFbQ" alt="" />
            <p ><a className='aboutLink' href="https://www.linkedin.com/in/cervantes-eduardo/">Eduardo Itzamna Cervantes</a></p>
          </div>

        </div>

        <br />


      </div>


    </div>
  );
};