/**
 * AppDine app
 * Copyright © 2017 by Alphonsus C. Coyote
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TabBar from 'react-native-xtabbar';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TabBar
		    style={styles.content}
		    onItemSelected={(index) => {console.log(`current item's index is ${index}`);}}
		>
		    <TabBar.Item
		        icon={require('../image/home.png')}
		        selectedIcon={require('../image/home_selected.png')}
		        onPress={() => {
		            // do sth
		        }}
		        title='Home'>
		        <View style={styles.text}>
		            <Text style={{fontSize: 18}}>Home</Text>
		        </View>
		    </TabBar.Item>

		    <TabBar.Item
		        icon={require('../image/book.png')}
		        selectedIcon={require('../image/book_selected.png')}
		        title='My Bookings'>
		        <View style={styles.text}>
		            <Text style={{fontSize: 18}}>Location</Text>
		        </View>
		    </TabBar.Item>

		    <TabBar.Item
		        icon={require('../image/request.png')}
		        selectedIcon={require('../image/request_selected.png')}
		        title='My Request'>
		        <View style={styles.text}>
		            <Text style={{fontSize: 18}}>Find</Text>
		        </View>
		    </TabBar.Item>

		    <TabBar.Item
		        icon={require('../image/ticket.png')}
		        selectedIcon={require('../image/ticket_selected.png')}
		        title='My Vouchers'>
		        <View style={styles.text}>
		            <Text style={{fontSize: 18}}>Me</Text>
		        </View>
		    </TabBar.Item>

		    <TabBar.Item
		        icon={require('../image/message.png')}
		        selectedIcon={require('../image/message_selected.png')}
		        title='Messages'>
		        <View style={styles.text}>
		            <Text style={{fontSize: 18}}>Me</Text>
		        </View>
		    </TabBar.Item>

		</TabBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default HomeScreen