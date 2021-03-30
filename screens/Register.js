import React from 'react';
import {Text, View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {StatusBar} from 'expo-status-bar';

const Register = ({navigation}) => {
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />

            <Text>
                REGISTER
            </Text>
        </KeyboardAvoidingView>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {}
});


