import { useEffect, useState } from "react";
import { getSiteById } from "../helpers/getSiteById";

export const useFetchSiteById = (id) => {

    const [site, setSite] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async() => {
        const newSite =  await getSiteById( id );
        setSite(newSite);
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    return {
        site,
        isLoading
    }
}