export const buscarObjetoPorId = (array, id) => {
    return array.find(objeto => objeto.id === id) || null;
}