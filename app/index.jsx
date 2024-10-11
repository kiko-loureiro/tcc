import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UsuarioService from '../services/UsuarioService.js';
import stockLogo from './assets/images/StockLogo.png'; // Certifique-se de que a imagem está no caminho correto

const LoginTeste = () => {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({ email: '', senha: '' });
    const [message, setMessage] = useState('');

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        if (formData.email && formData.senha) {
            UsuarioService.signin(formData.email, formData.password)
                .then(() => {
                    const userJson = localStorage.getItem('user');
                    const user = JSON.parse(userJson || '{}');
                    if (user.statusUsuario === 'ATIVO') {
                        navigation.navigate('Produto');
                    } else if (user.statusUsuario === 'TROCAR_SENHA') {
                        navigation.navigate('NewPass', { id: user.id });
                    }
                })
                .catch((error) => {
                    const respMessage =
                        (error.response && error.response.data && error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(respMessage);
                });
        } else {
            setMessage('Por favor, preencha todos os campos.');
        }
    };

    return (
        <View style={styles.container}>
            <Image source={stockLogo} style={styles.logo} />
            <Text style={styles.title}>Login</Text>
            {message ? <Text style={styles.errorMessage}>{message}</Text> : null}
            <TextInput
                placeholder="Email"
                style={styles.input}
                value={formData.email}
                onChangeText={(value) => handleChange('email', value)}
            />
            <TextInput
                placeholder="Senha"
                secureTextEntry
                style={styles.input}
                value={formData.senha}
                onChangeText={(value) => handleChange('senha', value)}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    button: {
        width: '100%',
        padding: 15,
        backgroundColor: '#0288D1',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    errorMessage: {
        color: 'red',
        marginBottom: 10,
    },
});

export default LoginTeste;
