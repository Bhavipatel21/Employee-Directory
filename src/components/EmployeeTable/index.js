import React from 'react';
import API from '../../utils/API';
import { Item, ItemMeta, Table } from 'semantic-ui-react';



class EmployeeTable extends React.Component {

    state = {

        results: [],
        sortOrder: "",
        search: ""
    }

    // When the component mounts, get a list of all available Employee 
    componentDidMount() {
        API.getEmployeeList()
            .then(res => this.setState({ results: res.data.results }))
        console.log("Employee Data ==>", this.state.results)
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };


    render() {
        return (

            this.state.results.map(item =>

                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>{item.picture.Image}</Table.HeaderCell>
                            <Table.HeaderCell>{item.name.first}</Table.HeaderCell>
                            <Table.HeaderCell>{item.name.last}</Table.HeaderCell>
                            <Table.HeaderCell>{item.phone}</Table.HeaderCell>
                            <Table.HeaderCell>{item.email}</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
           
                </Table>
            ));
            
        }
    }

export default EmployeeTable

