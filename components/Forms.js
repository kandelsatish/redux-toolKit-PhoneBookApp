import React, { useState } from 'react'
import { Input, Item, Form, Card, Button } from 'native-base'
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import { addContact, deleteContact } from '../app/contactSlice'
import { useSelector, useDispatch } from 'react-redux'
export default function Forms() {
  const [user, setUser] = useState({
    username: '',
    phonenumber: null
  });
  const contact = useSelector(state => state.contact.contact);
  const dispach = useDispatch();
  const handelAdd = () => {
    if (user.username != "" && user.phonenumber != "") {
      dispach(addContact(user));
      setUser({ username: '', phonenumber: null });
    }else{
      alert("Some fields are empty");
    }
  }
  return (
    <Card style={styles.container}>
      <Form>
        <Item>
          <Input placeholder="Username"
            onChangeText={(val) => setUser({ ...user, username: val })}
            value={user.username} />
        </Item>
        <Item last>
          <Input placeholder="Phone Number" keyboardType="numeric"
            onChangeText={(val) => setUser({ ...user, phonenumber: val })}
            value={user.phonenumber} />
        </Item>
        <TouchableOpacity style={styles.btn} onPress={() => handelAdd()}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Add</Text>
        </TouchableOpacity>
      </Form>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 7
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: 'grey',
    width: 100,
    height: 30,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  }
})


