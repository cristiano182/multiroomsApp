import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import { SERVER_URL } from 'react-native-dotenv'

const tron = Reactotron.configure({ host: '192.168.0.107' })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

tron.clear();

console.tron = tron;
