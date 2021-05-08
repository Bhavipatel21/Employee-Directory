import React from "react";
import API from "../../utils/API";
import { Table, Header, Image } from "semantic-ui-react";

class EmployeeTable extends React.Component {
    state = {
        results: [],
        sortOrder: "",
        search: "",
    };

    // When the component mounts, get a list of all available Employee
    componentDidMount() {
        API.getEmployeeList().then((res) =>
            this.setState({ results: res.data.results }))
            .catch(err => console.log(err))
        console.log("Employee Data ==>", this.state.results);
    }

    handleInputChange = (event) => {
        this.setState({ search: event.target.value });
    };

    render() {
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Image</Table.HeaderCell>
                        <Table.HeaderCell>FirstName</Table.HeaderCell>
                        <Table.HeaderCell>LastName</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {this.state.results.map((items) => (
                    <Table.Body>
                        <Table.Row key={items.uuid}> 
                            <Table.Cell><Image src={items.picture.thumbnail} rounded size='mini' /></Table.Cell>
                            <Table.Cell>{items.name.first}</Table.Cell>
                            <Table.Cell>{items.name.last}</Table.Cell>
                            <Table.Cell>{items.phone}</Table.Cell>
                            <Table.Cell>{items.email}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                ))}
            </Table>
        );
    }
}

export default EmployeeTable;
