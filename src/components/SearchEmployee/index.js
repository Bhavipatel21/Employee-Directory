import React from 'react'
import { Form,Button,Container} from 'semantic-ui-react'


const SearchEmployee = (props) => {


    return (
 <Container  textAlign='center'>
        <Form className="w-64 text-center">
        <Form.Field>
          <label> Search Employee</label>
          <input 
          type="search" 
          value={props.search}
          onChange={props.handleInputChange}
          /> 
            
        </Form.Field>
      
      </Form>
      </Container>
      
        
    )

}

export default SearchEmployee


