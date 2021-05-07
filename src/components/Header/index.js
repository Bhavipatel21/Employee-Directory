import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const AppHeader = () => (
    <div>
        <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>Employee Directory</Header.Content>
         </Header>
         <Header as='h5' textAlign='center'><p> Seach Employee from Employee Directory</p>
         </Header>
    
    </div>
)

export default AppHeader
