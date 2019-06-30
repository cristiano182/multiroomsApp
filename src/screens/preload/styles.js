import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'


export const Container = styled(LinearGradient).attrs({
    colors: ['#6b0bba', '#a10cf2'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title= styled.Text`
color: white;
font-size: 25;
font-style: italic;
font-weight: bold;
`;