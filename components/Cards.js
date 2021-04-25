import React from 'react'
import {StyleSheet} from 'react-native'
import {Card,Text} from 'native-base'
export default function Cards({user}) {
    return (
        <Card style={{height:100,width:'95%',marginTop:50,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
            <Text>{user.username} we have nothing to show ! Add some contact</Text>
        </Card>
    )
}
