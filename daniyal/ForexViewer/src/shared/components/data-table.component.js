import * as React from 'react';
import Table from 'react-native-simple-table';
import { ScrollView } from 'react-native';

export class DataTableComponent extends React.Component {
    constructor(props){
        super(props)
    }
    

    render(){
        if(!!this.props.data){
            return (
                <ScrollView style={this.props.style || {}}>
                    <Table height={(!!this.props.style && !!this.props.style.height)? this.props.style.height : 320} columnWidth={60} columns={this.props.columns} dataSource={this.props.data} />
                </ScrollView>
            );
        } else {
            return null;
        }
    }
}