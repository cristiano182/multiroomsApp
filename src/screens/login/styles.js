import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#a10cf2', '#6b0bba'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const View1 = styled.View`
margin-top: 40;
padding-bottom: 40;
`;

export const View2 = styled.View`
width: 100%;
height: 60%;
justify-content: center;
align-items: center;
`;
export const View3 = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-around;
`;




export const Text1 = styled.Text`
font-size: 25;
font-style: italic;
font-weight: bold;
font-family: 'Roboto';
color: white
`;

export const Button1 = styled.TouchableOpacity`
background-color: #540a82;
width: 70;
height: 30
justify-content: center
align-items: center
border-radius: 10
`;

export const Button2 = styled.TouchableOpacity`
background-color: #540a82;
width: 80;
height: 30;
justify-content: center;
align-items: center;
border-radius: 10;
`;

export const ViewPassword = styled.View`
width: 100%;
padding-horizontal: 20;
margin-bottom: 60;
margin-top: 20;
justify-content: center;
align-items: center;
`;

export const ViewNickname = styled.View`
width: 100%;
padding-horizontal: 20;
justify-content: center;
align-items: center;
`;


