import { Card, Container, Form, Input, Item } from 'native-base'
import React, { useState } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { login } from '../app/authenticationSlice'
export default function Login({ navigation }) {

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const dispach = useDispatch();

    const handelLogin = () => {
        if (user.username != "" && user.password != '') {
            dispach(login(user))
            navigation.navigate('App')
        }
        else{
            alert("Some fields are empty!")
        }

    }
    return (
        <Container style={styles.container}>
            <Text style={{alignSelf:'center',marginTop:30,fontSize:20,fontWeight:'bold'}}>Log In</Text>
            <Card style={styles.card}>
                <Form>
                    <Item>
                        <Input placeholder="Username"
                            onChangeText={(val) => setUser({ ...user, username: val })}
                            value={user.username} />
                    </Item>
                    <Item last>
                        <Input placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={(val) => setUser({ ...user, password: val })}
                            value={user.password} />
                    </Item>
                    <TouchableOpacity style={styles.btn} onPress={() =>handelLogin()}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Login</Text>
                    </TouchableOpacity>
                </Form>

            </Card>
        </Container>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 90,
        borderRadius: 10,
        height: 200
    },
    btn: {
        alignSelf: 'center',
        backgroundColor: 'grey',
        width: 100,
        height: 30,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    }

})
