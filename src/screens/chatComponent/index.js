import React from 'react'
import { GiftedChat, Bubble, LoadEarlier } from 'react-native-gifted-chat'
import dismissKeyboard from 'dismissKeyboard';
import { Container } from './styles'

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_loading: false,
            showFooter: false
        }
       
    }
    onSend = (messages = []) => {
        dismissKeyboard();
        this.props.dispatch(this.props.sendData(messages, this.props.room))
    }

    renderBubble = (props) => {
        if (props.currentMessage.user.name === this.props.user.name)
            return (
                <Bubble {...props}
                    position="right"
                    wrapperStyle={
                        {
                            left: {
                                backgroundColor: '#ddd',
                                marginLeft: 14,
                            },
                            right: {
                                backgroundColor: '#540a82',
                                marginRight: 14,
                            }
                        }} />
            )
        else
            return (
                <Bubble {...props}

                    position="left"
                    wrapperStyle={
                        {
                            left: {
                                backgroundColor: '#ddd',

                                marginLeft: 14
                            },
                            right: {
                                backgroundColor: '#540a82',
                                marginRight: 14,

                            }
                        }} />
            )
    }
    onLoadEarlier = async () => {
        this.setState({ is_loading: true })
        try {
            this.props.dispatch(this.props.paginationData(this.props.skip, this.props.room))
        } catch (error) {
            alert('Erroree!', 'Can not load more messalertage.');
        } finally {
            await this.setState({
                is_loading: false,
            });
        }
    }
    renderLoadEarlier = (props) => {
        return (
            <LoadEarlier {...props}
                wrapperStyle={{ backgroundColor: '#540a82' }}
                activityIndicatorColor='white'
                label='Carregar mais'
                textStyle={{ color: 'white' }} />
        );
    }
    render() {
        return (
            <Container>
                <GiftedChat
                    renderUsernameOnMessage={true}
                    renderAvatar={null}
                    isLoadingEarlier={this.state.is_loading}
                    loadEarlier={true}
                    onLoadEarlier={this.onLoadEarlier}
                    renderLoadEarlier={props => this.renderLoadEarlier(props)}
                    scrollToBottom={true}
                    alwaysShowSend={true}
                    renderBubble={props => this.renderBubble(props)}
                    messages={this.props.messages}
                    onSend={messages => this.onSend(messages)}
                    user={this.props.user}
                />
            </Container>
        )
    }
}

