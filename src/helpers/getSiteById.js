import {sites} from '../utils/sitesData';

export const getSiteById = (  id  ) =>{

    const buscarObjetoPorId = (array, id) => {
        return array.find(objeto => objeto.id === id) || null;
    }
    let site = buscarObjetoPorId(sites, id);

    return site;
}