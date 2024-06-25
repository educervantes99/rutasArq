import { useEffect, useState } from "react";

import {RutArq} from './RutArq';

export const App =()=> {

      const [windowSize, setWindowSize] = useState(window.innerWidth);
      const [windowSizeHeight, setWindowSizeHeight] = useState(window.innerHeight);

    
  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize(window.innerWidth);
      setWindowSizeHeight(window.innerHeight);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, [windowSize]);

    return (       
        <RutArq width={windowSize} height={windowSizeHeight}/>      
    )
}
