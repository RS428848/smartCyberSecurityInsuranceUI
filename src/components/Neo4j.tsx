import React from 'react';

export default class Neo4j extends React.Component<any,any> {
    constructor(props:any) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      //fetch("https://eb6rhw9arf.execute-api.us-east-1.amazonaws.com/Prod/neo4j/")
      fetch("https://pukufcpom1.execute-api.us-east-1.amazonaws.com/Prod/neo4j/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
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
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map((item:any) => (
              <li key="{item}">
                {item}
              </li>
            ))}
          </ul>
        );
      }
    }
  }