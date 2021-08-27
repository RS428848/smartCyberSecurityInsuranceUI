import React from 'react'
import GraphWrapper from "../components/GraphWrapper"
import './ALLCVE.css'
import CVEOutPut from './CVEOutPut'

export default class ALLCVE extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      cveID: "",
      output: "",
      error: null,
      isLoaded: false,
      isDisplay: false
    };
  }

  resetState = () => {
    this.state ={
      cveID: "",
      output: "",
      error: null,
      isLoaded: false,
      isDisplay: false
    }
  }

  mySubmitHandler = (event: any) => {
    event.preventDefault();

    console.log("hello")

    fetch(`http://localhost:8080/getCVE?id=${this.state.cveID}`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      })
        .then(response => {
            return response.text();
            // response.json();
        })
        .then(data => {
            this.setState({output: data});
            this.setState({isDisplay: true});
        });

  }
  myChangeHandler = (event: any) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    this.setState({isDisplay: false});
  }
  render() {

    let myResult: any ='';
    if(this.state.isDisplay){
        myResult = 
        <section>
        <h2>Security Information in Blockchain</h2>
        <table>
            <tbody>
                <tr>
                    <th>CVE ID</th>
                    <th>Vendor Name, Producvt Name, Version Affecvted</th>
                </tr>
                <tr>
                    <td>{this.state.cveID}</td>
                    <td>{this.state.output}</td>
                </tr>
        </tbody>
        </table>
        </section>;
    } else {
        myResult ='';
    }

    return (
    <section>
      <form onSubmit={this.mySubmitHandler}>
      <fieldset>
      <legend>Retrieve Security Information</legend>
      <p></p>
      <label>CVE ID   </label>
      <input type='text' name='cveID' onChange={this.myChangeHandler}/>
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
      
      {myResult}
    </section>
    );
  }
}
