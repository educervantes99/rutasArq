import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Graph from "graphology";
import {  SigmaContainer, 
          useLoadGraph,
          ControlsContainer, 
          ZoomControl, 
          FullScreenControl,
          useRegisterEvents
        } from "@react-sigma/core";

import "@react-sigma/core/lib/react-sigma.min.css";

import {positions} from "./utils/grafo";
import {arcos} from "./utils/arcos";
import {Inputs} from './components/Inputs/Inputs';
import {Route} from './components/Route/Route';
import './App.css'

// Component that load the graph
export const LoadGraph = () => {

  const navigate = useNavigate();
  const loadGraph = useLoadGraph();
  const registerEvents = useRegisterEvents();

  useEffect(() => {
    const graph = new Graph();
    
    for (let index = 0; index < positions.length; index++) {
      graph.addNode(positions[index].id, { ...positions[index].info});
    }

    for (let index = 0; index < arcos.length; index++) {
      graph.addEdge(arcos[index].o, arcos[index].d, { label: arcos[index].w ?? 'unknown', size: 1, color: "grey" });
    }
    
    
    loadGraph(graph);
  }, [loadGraph]);

  useEffect(() => {
    registerEvents({
      clickNode: (event) => {
        // console.log("clickNode", event.node)
        let n = event.node.search("-");
        console.log('event',event)

        if (n > - 1 ) {
          console.log('es sitio', event.node, n)
          navigate(`/site/${event.node}`);

        }else{
          console.log('es estado', event.node, n);
          navigate(`/state/${event.node}`);
        }
      }
    });
  }, [registerEvents, navigate])

  return null;

};

// Component that display the graph
export const RutArq = ({width, height}) => {

  const sigmaStyle = { 
    height: `${height - height/2.5}px `, 
    width: `${width - width/15}px `,
    border: "2px solid black",
    backgroundRepeat: "no-repeat",
    backgroundSize: "1100px 500px"
  };

  const [aRoute, setARoute] = useState([]);
  const res = (a) => { setARoute(a) };

  const settings = useMemo(
    () => ({
      allowInvalidContainer: true,
      renderEdgeLabels: true,
      
    }),
    [],
  );

  useEffect(() => {

    if (aRoute?.length < 1) {
      setARoute(localStorage.getItem('route')?.split(','))
    }

  }, [aRoute])
  

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Dijkstra Archaeological Routes</h1>
      <Inputs answer={res}/>
      <div className="grafoContainer" style={{left: '50%', position: 'absolute', transform: 'translate(-50%, 0)'}}>
        <SigmaContainer style={sigmaStyle} settings={settings}>
          <LoadGraph />
          <ControlsContainer position={"top-left"}>
          <ZoomControl />
          <FullScreenControl />
          </ControlsContainer>
        </SigmaContainer>
      </div>            
      <Route route={aRoute}/>
    </div>
  );
};