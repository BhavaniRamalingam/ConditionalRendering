 import React from "react";
import { Text,View,StyleSheet } from "react-native";
    const users=[
      // { id: '1', firstName: 'Bhavani', lastName: 'Ramalingam ' },
      // { id: '2', firstName: 'Kavitha', lastName: 'Thangamani' },
    ]; 
    export default function App() {
      return (
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <Text>Hello Guys!</Text>
          <Text><List list={users} /></Text>
        </View>
      );
    }
    
    function List({ list }) {
      
        const isNotAvailable = !list;
        const isEmpty = !list.length;
      
        return (
          <Text>
            {isNotAvailable
              ? <Text >Sorry, the list is not there.</Text>
              : (isEmpty
                ? <Text>Sorry, the list is empty.</Text>
                : <Text>{list.map(item => <Item item={item} />)}</Text>
              )
            }
          </Text>
        );
      }
      // if (!list) {
      //   return null;

      // }
      // else{
      //   return (
      //    <Text>
      //      {list.map(item => (
      //         <Item key={item.id} item={item} />
      //        ))
      //       }
      //     </Text>
      //   );
      // }
      
    function Item({ item }) {
      return (
        <Text>
          {item.firstName} {item.lastName}
        </Text>
      )
    }
    //  const styles=StyleSheet.create(){

       
    //  };