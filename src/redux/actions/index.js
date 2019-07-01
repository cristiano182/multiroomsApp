import { GET_DATA, GET_DATA_ERROR, SEND_DATA, PAGINATION_DATA, RESET_SKIP, GET_USER_POSITION, GET_MARKERS_AND_ONLINE_USERS, SET_USER, GET_NUMBER_MESSAGES } from './action.js'
import io from 'socket.io-client'
import { SERVER_URL } from 'react-native-dotenv'


const socket = io(SERVER_URL)

export const listeningNumberMessages = () => {
    return async dispatch => {
        try {
            socket.on('numberMessages', (numberMessages) => {
                dispatch({
                    type: GET_NUMBER_MESSAGES,
                    payload: numberMessages
                })
            })
        } catch (error) {
            dispatch({
                type: GET_DATA_ERROR,
            })
        }
    }
}
export const setUser = (data) => {
    return async dispatch => {
        try {
            dispatch({
                type: SET_USER,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: GET_DATA_ERROR,
            })
        }
    }
}
export const listeningUsersConnected = () => {
    return async dispatch => {
        try {
            socket.on('userConnected', (markers) => {
                if (markers)
                    dispatch({
                        type: GET_MARKERS_AND_ONLINE_USERS,
                        payload: markers
                    })
            })
        } catch (error) {
            dispatch({
                type: GET_DATA_ERROR,
            })
        }
    }
}
export const getCurrentPosition = () => {
    return async dispatch => {
        try {
            await navigator.geolocation.getCurrentPosition(
                ({ coords: { latitude, longitude } }) => {
                    region = { longitude, latitude, latitudeDelta: 0.0143, longitudeDelta: 0.134 }
                    location = { latitude, longitude }
                    dispatch({
                        type: GET_USER_POSITION,
                        payload: region
                    })
                    socket.emit('userConnected', location)
                },
                (error) => {
                    socket.emit('userConnected', location = null)
                    dispatch({
                        type: GET_DATA_ERROR,
                    })
                },
                {
                    timeout: 2000,
                    enableHighAccuracy: true,
                    maximumAge: 2000,
                }
            )
        } catch (error) {
            dispatch({
                type: GET_DATA_ERROR,
            })
        }
    }
}
export const resetSkip = () => {
    return async dispatch => {
        dispatch({
            type: RESET_SKIP,
        })
    }
}
export const paginationData = (skip, room) => {
    return async dispatch => {
        try {
            socket.emit('pagination', skip, room)
        } catch (error) {
            alert('Tente novamente')
        }
    }
}
export const getData = () => {
    return async dispatch => {
        try {
            socket.on('messages', (msg, skip, room, initialGet) => {
                if (!skip)
                    dispatch({
                        type: GET_DATA,
                        payload: msg,
                        room: room,
                        initialGet
                    })
                else
                    dispatch({
                        type: PAGINATION_DATA,
                        payload: msg,
                        room: room,
                        skip: skip
                    })
            })
        } catch (error) {
            dispatch({
                type: GET_DATA_ERROR,
                payload: []
            })
        }
    }
}
export const sendData = (message, room) => {
    return async dispatch => {
        try {
            await socket.emit('messages', message[0], room);
            dispatch({
                type: SEND_DATA,
                payload: message,
                room: room
            })
        } catch (error) {
            dispatch({
                type: GET_DATA_ERROR,
                payload: 'error'
            })
        }
    }
}
