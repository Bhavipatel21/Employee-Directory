import React from 'react'
import { Search } from 'semantic-ui-react'

const SearchBar = (props) => (
    <Search>
        <Search.Field>
            <label>Search...</label>
            <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="form-control"
                placeholder='Search directory for Employee'
                id="search"
            />
        </Search.Field>
    </Search>
)

export default SearchBar