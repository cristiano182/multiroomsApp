import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#a10cf2','#6b0bba'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
})`
  flex: 1;
`;