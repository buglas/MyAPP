import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import List from './pages/List';
import Detail from './pages/Detail';
import Cinemas from './pages/Cinemas';
import MyMovies from './pages/MyMovies';

const MyTab=TabNavigator({
    List: {screen: List},
    Cinemas: {screen: Cinemas},
    MyMovies: {screen: MyMovies},
},{
    tabBarPosition:'bottom',
    tabBarOptions: {
        activeTintColor: '#fff',
        inactiveTintColor: '#ddd',
        labelStyle: {
            fontSize: 14,
            marginBottom: 18
        },
        style: {
            backgroundColor: '#333'
        }
    }
})

const MyApp = StackNavigator({
    MyTab: {screen: MyTab},
    Detail: {screen: Detail},
});

export default MyApp;