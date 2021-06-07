import React from 'react'
import { Header, Icon, Container } from 'semantic-ui-react';
import SearchBar from '../SearchEmployee';

const AppHeader = () => (
<Container  textAlign='center'>
    <div>
         <Header as='h2' icon textAlign='center' className="bg-red-100 border-pink-600">
            <Icon name='users' circular className="bg-purple-100" />
            <Header.Content className='text-purple-500' >Employee Directory</Header.Content>
        </Header>
      </div>
    </Container>

)

export default AppHeader
