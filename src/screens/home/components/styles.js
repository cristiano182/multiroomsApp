import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled.View`
margin-vertical: 5;
width: 100%;
`;
export const View= styled.View`
width: 100%;
flex-direction: row;
justify-content: center;
align-items: center;
height: 35;
padding-right: 10;
padding-left:12;
`;
export const Button = styled.TouchableOpacity`
elevation: 20;
 width: 100%;
`;
export const Right = styled(LinearGradient).attrs({
    colors: ['#a10cf2','#6b0bba'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
})`
justify-content: center;
align-items: center;
height: 100%;
width: 40%;
border-left-width: 3;
border-left-color: transparent;
border-top-right-radius: 30;
border-bottom-right-radius: 30;
elevation: 5;
`;
export const Left = styled(LinearGradient).attrs({
    colors: ['#6b0bba', '#a10cf2'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
})`
justify-content: space-between;
flex-direction: row;
align-items: center;
height: 100%;
width: 60%;
border-top-left-radius: 30;
border-bottom-left-radius: 30;
elevation: 5;
`;