
import Graph from 'graphology';
import dijkstra from 'graphology-shortest-path/dijkstra';


export const ggP = ()=> {

    const graph = new Graph();
    
    
    // Adding some nodes
    graph.addNode('John');
    graph.addNode('Martha');
    graph.addNode('Jule');
    graph.addNode('Mike');
    
    // Adding an edge
    graph.addEdge('John', 'Martha', {weight: 3});
    graph.addEdge('John', 'Jule', {weight: 1});
    graph.addEdge('Martha', 'Mike', {weight: 3});
    graph.addEdge('Jule', 'Mike', {weight: 1});
    
    // // Displaying useful information about your graph
    // console.log('Number of nodes', graph.order);
    // console.log('Number of edges', graph.size);
    
    // // Iterating over nodes
    // graph.forEachNode(node => {
    //   console.log(node);
    // });

    const path = dijkstra.bidirectional(graph, 'John', 'Mike');
    console.log(path)

    }
