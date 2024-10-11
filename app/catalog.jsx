import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Use o hook do react-navigation
// Adapte o caminho para a logo se necessário

const Gerenciamento = () => {
    const navigation = useNavigation();

    const [produtos, setProdutos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [pesquisa, setPesquisa] = useState('');

    useEffect(() => {
        const categoriasExemplo = [
            { id: 1, nome: 'Mouse' },
            { id: 2, nome: 'Teclado' },
            { id: 3, nome: 'Monitor' },
        ];

        const marcasExemplo = [
            { id: 1, nome: 'Logitech', info: 'Marca de periféricos nacional' },
            { id: 2, nome: 'Corsair', info: 'Marca de hardware gamer' },
            { id: 3, nome: 'Samsung', info: 'Marca de eletrônicos' },
        ];

        const produtosExemplo = [
            { id: 1, nome: 'Mouse Gamer', valor: 150, qtdeAtual: 20, foto: null, categoria_id: 1, marca_id: 1, statusProduto: 'ATIVO' },
            { id: 2, nome: 'Teclado Mecânico', valor: 300, qtdeAtual: 10, foto: null, categoria_id: 2, marca_id: 2, statusProduto: 'ATIVO' },
            { id: 3, nome: 'Monitor LED', valor: 1000, qtdeAtual: 5, foto: null, categoria_id: 3, marca_id: 3, statusProduto: 'INATIVO' },
        ];
    }, []);

    const adicionarProduto = () => {

        };




    const renderItem = () => (
        <View style={styles.itemContainer}>
            <Text>ID:</Text>
            <Text>Nome: </Text>
            <Text>Quantidade:</Text>
            <Text>Valor: R$ </Text>
            <Text>Categoria: </Text>
            <Text>Marca: </Text>
            <Text>Status: </Text>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.desativarButton}>
                    <Text style={styles.buttonText}>Desativar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.excluirButton}>
                    <Text style={styles.buttonText}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
              
                <View style={styles.logoText}>
                    <Text style={styles.mainText}>StockTech</Text>
                    <Text style={styles.subText}>Technology</Text>
                </View>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Pesquisar por nome, categoria ou marca"
                value={pesquisa}
                onChangeText={setPesquisa}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 50,
        height: 50,
    },
    logoText: {
        marginLeft: 10,
    },
    mainText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 16,
    },
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    itemContainer: {
        padding: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    actions: {
        flexDirection: 'row',
        marginTop: 10,
    },
    editButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginRight: 5,
    },
    desativarButton: {
        backgroundColor: '#FFC107',
        padding: 10,
        borderRadius: 5,
        marginRight: 5,
    },
    excluirButton: {
        backgroundColor: '#F44336',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Gerenciamento;
