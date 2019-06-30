import { GET_DATA, SEND_DATA, PAGINATION_DATA, RESET_SKIP, GET_USER_POSITION, GET_MARKERS_AND_ONLINE_USERS, SET_USER, GET_NUMBER_MESSAGES } from '../actions/action.js'
import { GiftedChat } from 'react-native-gifted-chat'

const initialState = {
    user: { name: '', _id: '' },
    token: '',
    userPosition: {
        latitude: -46.684084,
        longitude: -23.5864307,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.134,
    },
    markers: [],
    numberMessages: {},
    messages: {},
    skip: {},

}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            let aux = action.initialGet ? action.payload : [...action.payload, ...state.messages[action.room]]
            return {
                ...state,
                messages: { ...state.messages, [action.room]: aux }
            }
        case SEND_DATA:
            return {
                ...state,
                messages: { ...state.messages, [action.room]: GiftedChat.append(state.messages[action.room], ...action.payload) }
            }
        case PAGINATION_DATA:
            return {
                ...state,
                messages: { ...state.messages, [action.room]: state.messages[action.room].concat(...action.payload) },
                skip: { ...state.skip, [action.room]: state.skip[action.room] ? state.skip[action.room] + 20 : 40 }
            }
        case RESET_SKIP:
            return {
                ...state,
                markers: [],
                skip: {},
            }
        case GET_USER_POSITION:
            return {
                ...state,
                userPosition: action.payload
            }
        case GET_MARKERS_AND_ONLINE_USERS:
            return {
                ...state,
                markers: action.payload
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        case GET_NUMBER_MESSAGES:
            return {
                ...state,
                numberMessages: { ...state.numberMessages, [action.payload.room]: action.payload.qnt }
            }
        default:
            return initialState;
    }
}