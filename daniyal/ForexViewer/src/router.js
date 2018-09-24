import { createStackNavigator } from 'react-navigation';
import { ForexRatesComponent } from './features/foreign_exchange/components/forex-rates.component';
import { HomeComponent } from './home.component';

export const Router =  createStackNavigator({
    Home: HomeComponent,
    ForexRates: ForexRatesComponent
  }, {
      initialRouteName: 'Home'
  })