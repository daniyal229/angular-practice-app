import { createStackNavigator } from 'react-navigation';
import { HomeComponent } from './components/home.component';
import RecipesComponent from './components/recipes.component';

export const Router = createStackNavigator({
    Home: {
        screen: HomeComponent, navigationOptions: {
            header: null
        }
    },
    Recipes: { 
        screen: RecipesComponent , navigationOptions: {
            header: null
        }
    }
}, {
        initialRouteName: 'Home'
    })