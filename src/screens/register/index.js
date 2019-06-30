import React, { Component } from 'react';
import { setUser } from '../../redux/actions/index'
import { connect } from 'react-redux'
import axios from 'axios'
import {Text, TextInput} from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
import { SERVER_URL, APP_NAME } from 'react-native-dotenv'
import {Container, View1, Text1, View2, View3, View4, Button1} from './styles'

class Registrar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoading: false,
            name: '',
            password: '',
            confirmPassword: '',
            error: ''
        }
    }
    componentWillUnmount() {
        this.setState({})
    }
    _onPress = async () => {
        this.setState({ showLoading: true })
        const { name, password, confirmPassword } = this.state
        this.setState({ error: '' })
        const user = { name, password }
        if (name && password && confirmPassword) {
            if (password === confirmPassword) {
                const res = await axios.post(`${SERVER_URL}/register`, user)
                if (res.status === 201) {
                    await this.props.dispatch(setUser(res.data))
                    this.props.navigation.navigate('App')
                }
                else {
                    this.setState({ error: res.data })
                    this.setState({ showLoading: false })
                }
            }
            else {
                this.setState({ error: 'Passwords diferentes' })
                this.setState({ showLoading: false })
            }
        }
        else {
            this.setState({ error: 'Preencha todos os campos' })
            this.setState({ showLoading: false })
        }
    }
    render() {
        return (
            <Container>
                <View1><Text1> {APP_NAME}</Text1></View1>
                <Spinner visible={this.state.showLoading} textContent={'Loading...'} textStyle={{ color: 'white' }} />
                <Text style={{color: 'white'}}> {this.state.error && this.state.error} </Text>
                <View2>
                    <View3>
                        <Text style={{ color: '#ddd', marginBottom: 5 }} >Escolha um nickname</Text>
                        <TextInput
                            value={this.state.name}
                            onChangeText={text => this.setState({ name: text })}
                            placeholderTextColor='white'
                            selectionColor='white'
                            style={{ height: 40,width: '100%', borderWidth: 0.3,  borderColor: 'white', borderRadius: 20, textAlign: 'center' }}
                            placeholder="  ..."
                        />
                        <Text style={{ color: '#ddd', marginBottom: 5 }} >Escolha uma senha</Text>
                        <TextInput
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={text => this.setState({ password: text })}
                            placeholderTextColor='white'
                            style={{ height: 40, width: '100%', borderWidth: 0.3, borderColor: 'white' , borderRadius: 20, textAlign: 'center' }}
                            placeholder="  ..."
                        />
                        <Text style={{ color: '#ddd', marginBottom: 5 }} >Confirme sua senha</Text>
                        <TextInput
                            secureTextEntry
                            value={this.state.confirmPassword}
                            onChangeText={text => this.setState({ confirmPassword: text })}
                            placeholderTextColor='white'
                            style={{ height: 40, width: '100%', borderWidth: 0.3, borderColor: 'white',  borderRadius: 20, textAlign: 'center' }}
                            placeholder="  ..."
                        />
                    </View3>
                    <View4>
                        <Button1 onPress={() => this._onPress()}  ><Text style={{ color: '#ddd' }} >Entrar</Text></Button1>
                    </View4>
                </View2>
            </Container>
        )
    }
}
const mapStateToProps = store => ({})
export default connect(mapStateToProps)(Registrar);