import React, {useState} from 'react';
import {Text, View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';

const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {

    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />

            <Image
                source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_Signal..png'}}
                style={{width: 200, height: 200}}
            />

            <View style={styles.inputContainer}>
                <Input
                    placeholder='Email'
                    autoFocus
                    type='email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />

                <Input
                    placeholder='Password'
                    autoFocus
                    secureTextEntry
                    type='password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
            </View>

            <Button
                containerStyle={styles.button}
                title='Login'
                onPress={signIn}
            />

            <Button
                containerStyle={styles.button}
                type='outline'
                title='Register'
                onPress={() => navigation.navigate('Register')}
            />

            <View style={{height: 100}} />

        </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        backgroundColor: '#fff'
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
})
