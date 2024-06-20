import { useParams } from 'react-router-dom';
import { useFetchStateById } from '../hooks/useFetchStateById';
import { StateItem } from "../components/StateItem/StateItem";

export const State = () => {

    const { id } = useParams();
    const { state, isLoading } = useFetchStateById(id);

    console.log('hey', state);
    console.log('is', isLoading);


    return (

        <>
            {isLoading && (<h2>Cargando...</h2>)}
        
            <div className='siteContainer'>           
                <h1 className='siteName'>
                    {state[0]?.estado}
                </h1>
                
                <div className="card-grid">


                {state.map(({ id, foto, nombre }) => {
                    return (
                        <StateItem
                            key={id}
                            id={id}
                            foto={foto}
                            nombre = {nombre}
                        />
                    )
                })}
            
                </div>
            </div>
        </>
        
    );
  };