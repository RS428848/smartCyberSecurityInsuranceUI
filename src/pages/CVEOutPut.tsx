import React, { Component } from "react";
import './ALLCVE.css'

class CVEOutPut extends Component {

  render() {
        return (
            <section>
            <h2>Security Information in Blockchain</h2>
            <table>
                <tbody>
                    <tr>
                        <th>CVE ID</th>
                        <th>Vendor Name</th>
                        <th>Product Name</th>
                        <th>Version Affected</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td></td>
                    </tr>
            </tbody>
            </table>
            </section>
        );
  }
}

export default CVEOutPut;