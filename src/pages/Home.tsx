import React from 'react'
import GraphWrapper from "../components/GraphWrapper"
import './Home.css'

export default class HomePage extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      cveID: "",
      vendorName: "",
      productName: "",
      versionAffected: "",
      impactScore: "",
      timeStamp: "",
      error: null,
      isLoaded: false,
      displayGraph: false
    };
  }

  resetState = () => {
    this.state ={
      cveID: "",
      vendorName: "",
      productName: "",
      versionAffected: "",
      impactScore: "",
      timeStamp: "",
      error: null,
      isLoaded: false,
      displayGraph: false
    }
  }

  mySubmitHandler = (event: any) => {
    event.preventDefault();

    this.setState({displayGraph: true});
    console.log("hello")
    console.log(this.state.timeStamp);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cveID: this.state.cveID,vendorName: this.state.vendorName,productName: this.state.productName,versionAffected: this.state.versionAffected, impactScore: this.state.impactScore, timeStamp: this.state.timeStamp })
    };
    fetch(`http://localhost:8080/persistCVE`, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));

  }
  myChangeHandler = (event: any) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    this.setState({displayGraph: false})
  }
  render() {
    // const { username,error, isLoaded, items } = this.state;
    const username = this.state.username;

    let graph:any = '';
    if (this.state.displayGraph) {
      graph = <ul><GraphWrapper firstname={username}/></ul>;
    } else {
      graph = '';
    }
    return (
    <section>
      <form onSubmit={this.mySubmitHandler}>
      {/* <h1>Find all contacts of {this.state.username} </h1> */}
      <fieldset>
      <legend>Publish Security Information</legend>
      <p></p>
      <label>CVE ID   </label>
      <input type='text' name='cveID' onChange={this.myChangeHandler}/>
      <p></p>
      <label>Vendor Name   </label>
      <input type='text' name='vendorName' onChange={this.myChangeHandler}/>
      <p/>
      <label>Product Name   </label>
      <input type='text' name='productName' onChange={this.myChangeHandler}/>
      <p/>
      <label> Version Affected  </label>
      <input type='text' name='versionAffected' onChange={this.myChangeHandler}/>
      <p/>
      <label> Impact Score  </label>
      <input type='text' name='impactScore' onChange={this.myChangeHandler}/>
      <p/>
      <label> Time Stamp  </label>
      <input type='text' name='timeStamp' onChange={this.myChangeHandler}/>
      <p/>
      <input type='submit' />
      </fieldset>
      </form>
      {/* <ul>
          {items.map((item:any) => (
              <li key={item}>
                {item}
              </li>
            ))}
      </ul> */}
      {graph}
    </section>
    );
  }
}
