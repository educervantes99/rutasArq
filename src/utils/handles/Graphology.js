
import Graph from 'graphology';
import dijkstra from 'graphology-shortest-path/dijkstra';
import {arcos, nodos} from '../arcos'


export const ggP = (origen, destino)=> {

    const graph = new Graph();
    
    
    // Adding some nodes
    for (let index = 0; index < nodos.length; index++) {
        graph.addNode(nodos[index]);        
    }
    
    // Adding an edge

    for (let i = 0; i < arcos.length; i++) {
        graph.addEdge(arcos[i].o,arcos[i].d, {weight: arcos[i].w});
        
    }
    // // Displaying useful information about your graph
    // console.log('Number of nodes', graph.order);
    // console.log('Number of edges', graph.size);
    
    // // Iterating over nodes
    // graph.forEachNode(node => {
    //   console.log(node);
    // });

    const path = dijkstra.bidirectional(graph, origen, destino);
    console.log('aaaaa', path)
    return path;
    }
