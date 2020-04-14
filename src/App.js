import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
//import data from './data.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columnDefs: [
        {headerName: 'Name', field: 'name', sortable: true, filter: true, resizable: true, 
         getQuickFilterText: function(params) {
          return params.value.name;
      }},
        {headerName: 'Roll No', field: 'rollNo', sortable: true, filter: true, resizeable: true},
        {headerName: 'Date of Birth', field: 'dateOfBirth', sortable: true, filter: true, resizable: true},
        {headerName: 'Contact', field: 'contact', sortable: true, filter: true, resizable: true},
        {headerName: 'Email', field: 'email', sortable: true, filter: true, resizeable: true},
        {headerName: 'Actions', field: 'value', cellRenderer: 'actionRenderer' ,resizeable: true}
      ],
      rowData: [
        {
            name: "Sweta Kumari",
            rollNo: 101,
            dateOfBirth: "01-11-1997",
            contact: 9893475684,
            email: "swetakumari@rapidops.com"    
        },
        {
            name: "Anshu Beniwal",
            rollNo: 102,
            dateOfBirth: "12-04-1998",
            contact: 8983245671,
            email: "anshubeniwal@rapidops.com"    
        },
        {
            name: "Seenam bee",
            rollNo: 103,
            dateOfBirth: "19*02-1998",
            contact: 7000688994,
            email: "seenambee@rapidops.com"    
        },
        {
            name: "Shubham Muley",
            rollNo: 104,
            dateOfBirth: "15-06-1998",
            contact: 8866992351,
            email: "shubhammuley@rapidops.com"    
        },
        {
            name: "Ravi Patekar",
            rollNo: 105,
            dateOfBirth: "02-02-1999",
            contact: 9663477850,
            email: "ravipatekar@rapidops.com"    
        },
        {
            name: "Jatin Saraf",
            rollNo: 106,
            dateOfBirth: "21-06-1997",
            contact: 8832260014,
            email: "jatinsaraf@rapidops.com"    
        },
        {
            name: "Dhoop Soni",
            rollNo: 107,
            dateOfBirth: "23-08-1999",
            contact: 9987336540,
            email: "dhoopsoni@rapidops.com"    
        },
        {
            name: "Ravindra Singh",
            rollNo: 108,
            dateOfBirth: "10-08-1998",
            contact: 6204158793,
            email: "ravindrasingh@rapidops.com"    
        },
        {
            name: "Darshan Vesatiya",
            rollNo: 109,
            dateOfBirth: "13-07-1998",
            contact: 8978518691,
            email: "darshanvesatiya@rapidops.com"    
        },
        {
            name: "Hardik Motwani",
            rollNo: 110,
            dateOfBirth: "25-03-1998",
            contact: 7756861233,
            email: "hardikmotwani@rapidops.com"    
        },
        {
            name: "Dhairya Shah",
            rollNo: 111,
            dateOfBirth: "01-11-1997",
            contact: 896933678,
            email: "dhairyashah@rapidops.com"    
        },
        {
            name: "Sweta Kumari",
            rollNo: 112,
            dateOfBirth: "01-11-1997",
            contact: 9893475684,
            email: "swetakumari@rapidops.com"    
        },
        {
            name: "Shubham Muley",
            rollNo: 113,
            dateOfBirth: "15-08-1997",
            contact: 365863153,
            email: "shubhammul@rapidops.com"    
        },
        {
            name: "Anshu Kapoor",
            rollNo: 114,
            dateOfBirth: "16-01-1996",
            contact: 8660564849,
            email: "anshukapoor@rapidops.com"    
        },
        {
            name: "Hardik Shah",
            rollNo: 115,
            dateOfBirth: "01-10-1997",
            contact: 9893584784,
            email: "hardikshah@rapidops.com"    
        },
        {
            name: "Sarang Jain",
            rollNo: 116,
            dateOfBirth: "20-11-1997",
            contact: 2251645684,
            email: "sarangjain@rapidops.com"    
        },
        {
            name: "Meet Shah",
            rollNo: 117,
            dateOfBirth: "01-11-1998",
            contact: 9893472224,
            email: "meetshah@rapidops.com"    
        },
        {
            name: "Jemin Kothadia",
            rollNo: 118,
            dateOfBirth: "15-07-1997",
            contact: 2283475684,
            email: "jeminkothadia@rapidops.com"    
        },
        {
            name: "Jemin Bhut",
            rollNo: 119,
            dateOfBirth: "22-09-1999",
            contact: 3365700136,
            email: "jeminbhut@rapidops.com"    
        },
        {
            name: "Ravi Bhut",
            rollNo: 120,
            dateOfBirth: "19-05-1998",
            contact: 8888475684,
            email: "ravibhut@rapidops.com"    
        },
    ],
    components: {
      actionRenderer: function() {
        return '<button> Edit </button>'
      }
    }
    
    }
  }

  filter = () => {
    this.gridApi.setQuickFilter(document.getElementById('filter-text-box').value)
  }

  

    render() {
      return (
        
        <div
          className='ag-theme-balham'
          style={{
            marginTop: 5,
            width: 800,
            height: 600
          }}
          >
            <div>
        <input type="text" placeholder= "filter" id="filter-text-box" style={{marginBottom: '10px',marginLeft: '10px', width: '250px'}} onChange={this.filter}/>
        </div>

        {/* components: {
          actionRenderer: Action
        } */}

            
  
            <AgGridReact
            columnDefs = {this.state.columnDefs}
            rowData={this.state.rowData}
            pagination = 'true'
            enableRangeSelection = 'true'
            onGridReady={params => this.gridApi = params.api}
            />
        </div>
      )
    }
  }
  

export default App;
