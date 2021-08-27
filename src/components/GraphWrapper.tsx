import { Graph } from "react-d3-graph";

import React from "react"

  // the graph configuration, just override the ones you need

  const myConfig = {
    // nodeHighlightBehavior: true,
    automaticRearrangeAfterDropNode: false,
  collapsible: false,
  directed: true,
  focusAnimationDuration: 0.75,
  focusZoom: 1,
  freezeAllDragEvents: false,
  height: 400,
  highlightDegree: 1,
  highlightOpacity: 1,
  linkHighlightBehavior: false,
  maxZoom: 8,
  minZoom: 0.1,
  nodeHighlightBehavior: true,
  panAndZoom: false,
  staticGraph: false,
  staticGraphWithDragAndDrop: false,
  width: 800,
  d3: {
    alphaTarget: 0.05,
    gravity: -100,
    linkLength: 100,
    linkStrength: 1,
    disableLinkForce: false
  },
    node: {
      color: "blue",
      size: 190,
      fontSize: 15,
      highlightStrokeColor: "blue",
    },
    link: {
      // highlightColor: "lightblue",
      highlightColor: "red",
      color: "lightgreen",
      strokeWidth: 2
    },
  };
  
  // const onClickNode = function(nodeId: any) {
  //   window.alert(`Clicked node ${nodeId}`);
  // };
  
  // const onClickLink = function(source: any, target: any) {
  //   window.alert(`Clicked link between ${source} and ${target}`);
  // };

export default class GraphWrapper extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: {
        nodes: [],
        links: []
     }
    };
  }
  
  componentDidMount() {
    fetch(`https://t0stjoqn32.execute-api.us-east-1.amazonaws.com/Prod/neo4j?firstname=${this.props.firstname}&tree=true`)
    // fetch(`http://localhost:3000/neo4j?firstname=John&tree=true`)
    .then(res => res.json())
    .then(
      (result) => {
        const nodeList:any = []
        const linkList:any = []
        const inputData = {
          nodes: nodeList,
          links: linkList
        }
        result.forEach((items:any) => {
          items.forEach((item:any) => {
            linkList.push({source: item[0], target: item[1]})
            item.forEach((data:any) => {
              if (!nodeList.find((o:any) => o.id === data)) nodeList.push({id: data})
            })
          })
        })
        console.log(inputData)

        this.setState({
          isLoaded: true,
          data: inputData
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, data } = this.state;
    return (
      <div className="App">
        <Graph id="graph-id" // id is mandatory
               data={data}
               config={myConfig}
              // onClickNode={onClickNode}
              // onClickLink={onClickLink}
        />
      </div>
    )
  }
}

