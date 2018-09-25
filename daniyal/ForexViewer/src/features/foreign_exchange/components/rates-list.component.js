import * as React from 'react';
import Table from 'react-native-simple-table';
import { Text } from 'react-native';

const columns = [
    {
      title: 'Date',
      dataIndex: 'Date',
      width: 150
    },
    {
      title: 'Rate',
      dataIndex: 'Rate',
      width: 250
    }
  ];

export class RatesListComponent extends React.Component {
    constructor(props){
        super(props)
    }
    

    render(){
        if(!!this.props.rates){
            return (
                <Table height={320} columnWidth={60} columns={columns} dataSource={this.props.rates.getTableData()} />
            );
        } else {
            return null;
        }
    }
}