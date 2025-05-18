
export default class Graph {
  constructor() {
    this.nodes = [];
    this.adjList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjList[node.id] = [];
  }

  addEdge(node1, node2) {
    this.adjList[node1.id].push(node2.id);
    this.adjList[node2.id].push(node1.id);
  }

  getPeopleByCity(cityId) {
    return this.nodes.filter(n => n.type === "person" && n.city === cityId);
  }

  toD3GraphFormat() {
    const links = [];
    for (const [source, targets] of Object.entries(this.adjList)) {
      for (const target of targets) {
        if (!links.some(link => link.source === target && link.target === source)) {
          links.push({ source, target });
        }
      }
    }

    return {
      nodes: this.nodes.map(n => ({
        id: n.id,
        label: n.label,
        color: n.type === "city" ? "skyblue" : "orange",
      })),
      links,
    };
  }
}
