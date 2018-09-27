import { createStackNavigator } from 'react-navigation';
import ExchangeRatesComponent  from './features/foreign_exchange/components/exchange-rates.component';
import { HomeComponent } from './home.component';
import StockTrendsComponent from './features/stock_trends/components/stock-trends.component';

export const Router =  createStackNavigator({
    Home: HomeComponent,
    ExchangeRates: {
        screen: ExchangeRatesComponent,
        navigationOptions: {
            title: "Exchange Rates"
        }
        
    },
    StockTrends: {
        screen: StockTrendsComponent,
        navigationOptions: {
            title: 'Stock Trends'
        }
    }
  }, {
      initialRouteName: 'Home',
      navigationOptions: {
          title: 'Forex Viewer'
      }
  })