import { Header} from 'react-native-elements';
import React from 'react';
export const AppHeader = (props) => {

    return (
        <Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    )

} //()=>{return}