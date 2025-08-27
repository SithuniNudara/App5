import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [getMobile,setMobile] = React.useState(' ');
  const [getFirstName, setFirstName] = React.useState(' ');
  const [getLastName, setLastName] = React.useState(' ');
  const [getCompanyName, setCompanyName] = React.useState(' ');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Book</Text>
      <Text style={styles.subTitle}>Create a New Contact</Text>

      <TextInput style={styles.input} placeholder='Enter Mobile Number' onChangeText={setMobile} />
      <TextInput style={styles.input} placeholder='Enter First Name' onChangeText={setFirstName}/>
      <TextInput style={styles.input} placeholder='Enter Last Name' onChangeText={setLastName}/>
      <TextInput style={styles.input} placeholder='Enter Company Name' onChangeText={setCompanyName} />

      <Button title='Save New Contact' onPress={async () => {

        const contact = {
          Mobile: getMobile,
          FirstName: getFirstName,
          LastName: getLastName,
          Company: getCompanyName,
        }

        const ContactJSON = JSON.stringify(contact);

        const response = await fetch(
          "https://7f9dbf3c2226.ngrok-free.app/Web5/SaveContact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: ContactJSON,
          }
        );

        if (response.ok) {
          Alert.alert("Success!");

        } else {
          Alert.alert("Error!");
        }

      }} />

      <StatusBar style="auto" />
    </View>
  );
}

function m() {
  Alert.alert("Successfully Saved!");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 700,
    color: "#00b8f6ff",
    textAlign: "center"
  },

  subTitle: {
    fontSize: 18,
    fontStyle: "italic",
    marginVertical: 10
  },

  input: {
    width: 300,
    borderWidth: 1,
    fontSize: 18,
    marginVertical: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#fff"
  },


});
