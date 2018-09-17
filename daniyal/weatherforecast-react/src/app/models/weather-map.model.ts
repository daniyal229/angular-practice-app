


export class WeatherMap {
    cod: string
    message: string
    cnt: string 
    list: {
        dt: string,
        main: {
            temp: number
            temp_min: number
            temp_max: number
            temp_kf: number,
            humidity: number,
            pressure: number,
            grnd_level: number,
            sea_level: number
        },
        dt_txt: string
    }[]
    city: {
        id: string,
        name: string,
        coord: {
            lat: number,
            lon: number
        },
        country: string,
        population: number
    }

    constructor(data: WeatherMap) {
        this.cod = data.cod;
        this.message = data.message;
        this.cnt = data.cnt;
        this.list = data.list;
        this.city = data.city;
    }

    getCity(): string {
        return this.city.name;
    }

    private getReadingForListEntry(index: number, param: string){
        switch (param) {
            case 'temperature':
                return this.list[index].main.temp
            case 'humidity':
                return this.list[index].main.humidity;
            case 'pressure':
                return this.list[index].main.pressure;
        }
    }

    getCoords(): {lat: number, lng: number} {
        return {
            lat: this.city.coord.lat,
            lng: this.city.coord.lon
        }
    }

    getAverageFor(param: string) {
        let values: number[] = this.getValuesFor(param)
        let sum: number = 0.0;
        for(let value of values) {
            sum = sum + value;
        }
        return (values.length > 0)? Math.floor(sum / values.length) : 0;
    }

    getValuesFor(param: string): number[] {
        let values: number[] = [];
        for(let entry in this.list) {
            values.push(this.getReadingForListEntry(parseInt(entry),param))
        }
        return values;
    }

    getIntervalAveragesFor(param: string = 'temperature',n: number = 1): number[]{
        let values = [];
        let sets: number = Math.floor( this.list.length / n )
        let sindex: number = 0;
        let eindex: number = sindex + n;
        for(let i = 0; i < sets; i = i + 1){
            let value: number = 0.0;
            while(sindex < eindex) {
                value = value + this.getReadingForListEntry(sindex, param);
                sindex = sindex + 1
            }
            value = Math.floor(value / n);
            values.push(value);
            sindex = sindex + 1;
            if((sindex + n) > this.list.length - 1) {
                eindex = this.list.length
            } else {
                eindex = sindex + n
            }
        }
        return values;
    }

}