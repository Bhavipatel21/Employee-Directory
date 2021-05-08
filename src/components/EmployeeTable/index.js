import React from "react";
import API from "../../utils/API";
import SearchBar from "../SearchEmployee/index";
import { Table, Icon, Image } from "semantic-ui-react";

class EmployeeTable extends React.Component {
    state = {
        results: [],
        sortOrder: "",
        search: "",
    };

    // When the component mounts, get a list of all available Employee
    componentDidMount() {
        API.getEmployeeList()
            .then((res) => this.setState({ results: res.data.results }))
            .catch((err) => console.log(err));
        console.log("Employee Data ==>", this.state.results);
    }

    handleInputChange = (event) => {
        this.setState({ search: event.target.value });
    };

    handleSearch = (event) => {
        event.preventDefault();
        console.log(" search text ==>  " + this.state.search)
    }

    //sort employee by FirstName
    sortByFirstName = () => {
        const sortEmployee = this.state.results.sort((a, b) => {
            if (b.name.first > a.name.first) { return -1 }
            if (a.name.first > b.name.first) { return 1 }
            return 0;
        });
        if (this.state.sortOrder === "DESC") {
            sortEmployee.reverse();
            this.setState({ sortOrder: "ASC" });
        } else {
            this.setState({ sortOrder: "DESC" });
        }
        this.setState({ results: sortEmployee })
    }
    //sort employee by LastName
    sortByLastName = () => {
        const sortEmployee = this.state.results.sort((a, b) => {
            if (b.name.first > a.name.last) { return -1 }
            if (a.name.first > b.name.last) { return 1 }
            return 0;
        });
        if (this.state.sortOrder === "DESC") {
            sortEmployee.reverse();
            this.setState({ sortOrder: "ASC" });
        } else {
            this.setState({ sortOrder: "DESC" });
        }
        this.setState({ results: sortEmployee })
    }


    render() {
        return (

            <div>

                <SearchBar
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleSearch={this.handleSearch}
                />

                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Image</Table.HeaderCell>
                            <Table.HeaderCell>FirstName<Icon name="arrow circle up" onClick={this.sortByFirstName} /></Table.HeaderCell>
                            <Table.HeaderCell>LastName<Icon name="arrow circle down" onClick={this.sortByFirstName} /></Table.HeaderCell>
                            <Table.HeaderCell>Phone</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {this.state.results.map((items) => (
                        <Table.Body>
                            <Table.Row key={items.login.uuid}>
                                <Table.Cell>
                                    <Image src={items.picture.thumbnail} rounded size="mini" />
                                </Table.Cell>
                                <Table.Cell>{items.name.first}</Table.Cell>
                                <Table.Cell>{items.name.last}</Table.Cell>
                                <Table.Cell>{items.phone}</Table.Cell>
                                <Table.Cell>{items.email}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))}
                </Table>
            </div>
        );
    }
}

export default EmployeeTable;


