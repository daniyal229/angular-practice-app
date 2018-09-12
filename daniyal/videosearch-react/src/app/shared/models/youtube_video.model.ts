import { environment } from "../../environments/environment";

export class YoutubeVideo {
    etag: string
    id: {kind: string, videoId: string}
    kind: string 
    snippet: {
        channelId: string,
        channelTitle: string,
        description: string,
        liveBroadcastContent: string,
        publishedAt: string,
        thumbnails: {
            default: { 
                url: string,
                width: number,
                height: number
            },
            high: { 
                url: string,
                width: number,
                height: number
            },
            medium: { 
                url: string,
                width: number,
                height: number
            }
        },
        title: string
    }

    constructor(object: YoutubeVideo) {
        this.etag = object.etag;
        this.id = object.id;
        this.kind = object.kind;
        this.snippet = object.snippet;
    }

    getDescription(): string {
        return this.snippet.description;
    }

    getThumbnail(res: string = ''){
        switch (res) {
            case 'high':
                return this.snippet.thumbnails.high.url;
            case 'medium':
                return this.snippet.thumbnails.medium.url; 
            default:
                return this.snippet.thumbnails.default.url;
        }
    }

    getTitle(): string{
        return this.snippet.title;
    }

    getEtag(): string {
        return this.etag;
    }

    getUrl(): string {
        debugger;
        return `${environment.youtube.embedBaseUrl}${this.id.videoId}`
    }

}