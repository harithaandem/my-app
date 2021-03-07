import React,{ Component } from "react";
import './App.css';
import { forwardRef } from 'react';
import MaterialTable from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };


class  App extends Component {

  constructor(props){
      super(props);
      this.state ={
        data: [{
          coordId : "0587956-191021133539902-oozie-oozi-C",
          appName: "xyz",
          status: "SUCCEEDED",
          freq: 1,
          unit: "DAY",
          started: " 2021-03-04 10:47",
          nextMaterialized: " 2021-03-05 10:47",
          user: "alex"
        },
        {
          coordId : "0597956-191021133539902-oozie-oozi-C",
          appName: "abc",
          status: "RUNNNING",
          freq: 10,
          unit: "DAY",
          started: "2021-03-05 10:47",
          nextMaterialized: "2021-03-06 10:47",
          user: "john"
        },
        {
          coordId : "0587956-191021133539902-oozie-oozi-C",
          appName: "xyz",
          status: "SUCCEEDED",
          freq: 1,
          unit: "DAY",
          started: " 2021-03-04 10:47",
          nextMaterialized: " 2021-03-05 10:47",
          user: "alex"
        },
        {
          coordId : "0597956-191021133539902-oozie-oozi-C",
          appName: "abc",
          status: "RUNNNING",
          freq: 10,
          unit: "DAY",
          started: "2021-03-05 10:47",
          nextMaterialized: "2021-03-06 10:47",
          user: "john"
        },{
          coordId : "0587956-191021133539902-oozie-oozi-C",
          appName: "xyz",
          status: "SUCCEEDED",
          freq: 1,
          unit: "DAY",
          started: " 2021-03-04 10:47",
          nextMaterialized: " 2021-03-05 10:47",
          user: "alex"
        },
        {
          coordId : "0597956-191021133539902-oozie-oozi-C",
          appName: "abc",
          status: "RUNNNING",
          freq: 10,
          unit: "DAY",
          started: "2021-03-05 10:47",
          nextMaterialized: "2021-03-06 10:47",
          user: "john"
        }],
        columns: [{ title: 'Job ID', field: 'coordId' },
        { title: 'USER', field: 'user' },
        { title: 'Started', field: 'started'},
        { title: 'App Name', field: 'appName'},
        { title: 'Status', field: 'status'},
        { title: 'Frequency', field: 'freq'},
        { title: 'Unit', field: 'unit'},
        { title: 'Next Materialized', field: 'nextMaterialized'}
      ]
      }
  }

  componentDidMount() {
    axios.get('https://localhost:4500/getdetails')
      .then(res => {
        const data = res.data;
        this.setState({ data: data });
      })
  }

  render(){
  return (
    <MaterialTable
    icons={tableIcons}
    columns={this.state.columns}
    data={this.state.data}
    options={{
      search: false,
      thirdSortClick: false
    }}
  />
  );
  }
}

export default App;
