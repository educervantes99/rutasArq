
import { useEffect } from "react";
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
// import {ggP} from "./utils/handles/Graphology";
import './App.css'

const sigmaStyle = { 
  height: "400px", 
  width: "950px",
  border: "2px solid black",
  backgroundRepeat: "no-repeat",
  backgroundSize: "1100px 500px"
};

// Component that load the graph
export const LoadGraph = () => {

  const navigate = useNavigate();

  // ggP(); //graphology
  const loadGraph = useLoadGraph();
  const registerEvents = useRegisterEvents();


  useEffect(() => {
    const graph = new Graph();
    
    for (let index = 0; index < positions.length; index++) {
      graph.addNode(positions[index].id, { ...positions[index].info});
    }

    for (let index = 0; index < arcos.length; index++) {
      graph.addEdge(arcos[index].o, arcos[index].d, { size: 1, color: "grey" });
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
export const RutArq = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Dijkstra Archaeological Routes</h1>
      <div className="grafoContainer" style={{left: '50%', position: 'absolute', transform: 'translate(-50%, 0)'}}>
        <SigmaContainer style={sigmaStyle}>
          <LoadGraph />
          <ControlsContainer position={"bottom-right"}>
          <ZoomControl />
          <FullScreenControl />
          </ControlsContainer>
          <ControlsContainer position={"top-right"}>
          </ControlsContainer>
        </SigmaContainer>
      </div>
    </div>
  );
};