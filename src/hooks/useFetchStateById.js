import { useEffect, useState } from "react";
import { getStateData } from "../helpers/getStateData";

export const useFetchStateById = (id) => {

    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async() => {
        const newSite =  await getStateData( id );
        setState(newSite);
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    return {
        state,
        isLoading
    }
}