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
            temp_kf: number
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

}