import {
    StackNavigator,
} from 'react-navigation';
import List from './pages/List';
import Detail from './pages/Detail';

const MyApp = StackNavigator({
    List: {screen: List},
    Detail: {screen: Detail},
},{
    headerMode:'screen'
});

export default MyApp;