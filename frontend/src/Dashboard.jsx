import React from 'react'
import './dashboard.scss'
const Dashboard = () => {
    return (
      <>
            <div class="container">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h1>HTML Tables</h1>
                </div>
                <div class="panel-body">
                    <table class="table-latitude">
                        <caption>Employee Information</caption>
                        <thead>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>E-mail</th>
                        </thead>
                        <tfoot>
                            <tr>
                                <td>Contact details for the Knowledge and Development Team</td>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <th>Robyn</th>
                                <td>Technical Writer</td>
                                <td>robyn@example.com</td>
                            </tr>
                            <tr>
                                <th>Mandy</th>
                                <td>Technical Writer</td>
                                <td>mandy@example.com</td>
                            </tr>
                            <tr>
                                <th>Kate</th>
                                <td>Communications Leader</td>
                                <td>kate@example.com</td>
                            </tr>
                            <tr>
                                <th>Steven</th>
                                <td>Technical Writer</td>
                                <td>steven@example.com</td>
                            </tr>
                            <tr>
                                <th>Sophie</th>
                                <td>Technical Writer</td>
                                <td>sophie@example.com</td>
                            </tr>
                            <tr>
                                <th>Ashur</th>
                                <td>Intranet Administrator</td>
                                <td>ashur@example.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</>
  )
}

export default Dashboard