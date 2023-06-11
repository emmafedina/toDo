import { StyleSheet, View,  FlatList } from 'react-native';
import React, {useState} from 'react';
import Header from './components/header';
import TodoItem from './components/toDoItem';
import AddToDo from './components/addTodo'; 

export default function App() {
 const [todo, setTodo] = useState([
  {text: 'buy coffee', key: 1},
  {text: 'create an app', key: 2},
  {text: 'buy Nastya a gift', key:3}
 ]);


 const pressHandler = (key) => {
  setTodo((prevTodo)=>{
    return prevTodo.filter(todo => todo.key != key);
  });
 };

 const submitHandler = (text)=>{
  setTodo((prevTodo) => {
    return [
      {text: text, key: Math.random().toString() },
      ...prevTodo
    ]
  })
 }

  return(
    <View style = {styles.container}>
      <Header/>
        <View style = {styles.content}>
          <AddToDo submitHandler ={submitHandler}/>
            <View style = {styles.list}> 
               <FlatList 
                data={todo}
                renderItem = {({item})=> (
                  <TodoItem item = {item} pressHandler = {pressHandler} />
              )}
          />
        </View>
      </View>
    </View>
  );
  
   
  }






const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  content:{
    padding: 50,
  },

  list:{
    marginTop:20,
  },

  item:{
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },

  buttonContainer:{
    marginTop: 20,
  },

  header: {
    backgroundColor: 'pink',
    padding: 20,

  },

  boldText: {
    fontWeight:'bold',
  },

  body: {
    backgroundColor:'yellow',
    padding:20,
  },
  input:{
    borderWidth: 1,
    borderColor:'#777',
    padding: 8,
    margin: 10,
    width: 200 ,
  }

});
