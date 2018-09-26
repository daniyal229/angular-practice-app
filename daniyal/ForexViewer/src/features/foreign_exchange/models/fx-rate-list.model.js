import moment  from 'moment';

export class FxRateList {
    
    constructor(obj){
        for(key of Object.keys(obj)){
            this[key] = obj[key]
        }
    }

    getDataForChart() {
        data = this["Time Series FX (Daily)"]
        values = []
        for(key of Object.keys(data)) {
            values.unshift([moment.valueOf(key),parseFloat(data[key]["4. close"])])
        }
        return values;
    }

    getTableData(){
        data = this["Time Series FX (Daily)"]
        values = []
        for(key of Object.keys(data)) {
            values.push({
                Date: key,
                Rate: parseFloat(data[key]["4. close"])
            })
        }
        return values
    }

}