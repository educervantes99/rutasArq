import {sites} from '../utils/sitesData';

export const getStateData = (  id  ) =>{

    return sites.filter(elemento => elemento.id.split('-')[0] === id);
   
}