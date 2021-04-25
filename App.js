import React from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import ContactPage from './components/ContactPage';
import { Container, Header, Content, Card, CardItem, Body, Item } from 'native-base';
import Forms from './components/Forms';
import { Provider } from 'react-redux'
import store from './app/store'
import { useSelector } from 'react-redux'
import Cards from './components/Cards';
const App = () => {
  const data = useSelector((state) => state.contact.contact);
  const user=useSelector((state)=>state.authentication.authentication)
  return (
    <Container>
      <StatusBar backgroundColor={'#fff'} />
      <Content>
        <Forms />
        <View>
          {data.length==0?<Cards user={user}/>:null}
          <FlatList
          data={data}
          keyExtractor={(item,index)=> index.toString()}
          renderItem={({item})=><ContactPage item={item}/>}
          />
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {

  }
});

export default App;
