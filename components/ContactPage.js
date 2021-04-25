import React from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Icon } from 'native-base';
import { View, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import { Avatar } from 'react-native-paper'
import {deleteContact} from '../app/contactSlice'
import {useDispatch} from 'react-redux'
export default function ContactPage({item}) {
    const dispach=useDispatch();
    return (
        <Card style={styles.card}>
            <View style={{ margin: 10 }}>
                <Avatar.Image size={60} source={require('../assets/avatar.png')} style={{backgroundColor:'grey'}}/>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', height: '100%' }}>
                <View style={styles.contactInfo}>
                    <View style={styles.infoContainer}>
                        <Icons name='account-circle' size={30} color={'grey'}/>
                        <Text style={styles.text}>{item.username}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Feather name="phone-call" size={25} color={'grey'}/>
                        <Text style={styles.text}>{item.phonenumber}</Text>
                    </View>

                </View>
                <TouchableOpacity style={styles.icon} onPress={()=>dispach(deleteContact(item))}>
                    <Icons name="delete-forever" size={30} color={'grey'}/>
                </TouchableOpacity>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 90,
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10
    },
    infoView: {
        flex: 1,
        borderLeftWidth: 1,
        height: '100%'
    },
    contactInfo: {
        flex: 1,
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 20
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        padding:7
    },
    infoContainer:{
        flexDirection:'row',
        alignItems:'center',
        padding:5,
        justifyContent:'space-around'
    }
})