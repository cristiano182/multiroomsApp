import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#a10cf2','#6b0bba'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button1 = styled.TouchableOpacity`
width: 200;
background-color: #540a82;
height: 40;
justify-content: center;
align-items: center;
border-radius: 20;
elevation: 20;
`;
export const ButtonMap = styled.View`
width: 100%;
justify-content: center;
align-items: center;
margin-bottom: 10;
`;
