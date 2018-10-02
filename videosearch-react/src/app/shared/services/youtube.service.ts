var YTSearch = require('youtube-api-search');
import * as Promise from 'promise';
import { environment } from '../../environments/environment';
import { YoutubeVideo } from '../models/youtube_video.model';

export class YoutubeService {
    public static getVideos(term: string = ''): Promise<any> {
        return new Promise<any>(
            (resolve, reject) => {
                try {
                    YTSearch({key: environment.youtube.key, term: term}, (data: YoutubeVideo[]) => {
                        let videos: YoutubeVideo[] = [];
                        for(let video of data){
                            videos.push(new YoutubeVideo(video))
                        }
                        resolve(videos)
                    })
                } catch (error) {
                    reject(error)
                }
                
            }
        )
    }
}