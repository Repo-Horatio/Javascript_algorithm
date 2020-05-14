class Graph {   // undirected
    constructor() {
      this.nodes = {};
    }
  
    addNode(node) {
      this.nodes[node] = this.nodes[node] || [];
    }
  
    contains(node) {
      if (node in this.nodes) {
        return true;
      } else {
        return false;
      }
    }
  
    removeNode(node) {
      if (!this.nodes[node]) {
        return false;
      } else {
        let nodeArray = [...this.nodes[node]];
        for (let i = 0; i < nodeArray.length; i++) {
          this.removeEdge(node, nodeArray[i]);
        }
        delete this.nodes[node];
      }
    }
  
    hasEdge(fromNode, toNode) {
      if (
        this.nodes[fromNode].includes(toNode) &&
        this.nodes[toNode].includes(fromNode)
      ) {
        return true;
      } else {
        return false;
      }
    }
  
    addEdge(fromNode, toNode) {
      this.nodes[fromNode].push(toNode);
      this.nodes[toNode].push(fromNode);
    }
  
    removeEdge(fromNode, toNode) {
      let fromIdx = this.nodes[fromNode].indexOf(toNode);
      let toIdx = this.nodes[toNode].indexOf(fromNode);
  
      if (fromIdx !== -1 && toIdx !== -1) {
        this.nodes[fromNode].splice(fromIdx, 1);
        this.nodes[toNode].splice(toIdx, 1);
      } else {
        return false;
      }
    }
}