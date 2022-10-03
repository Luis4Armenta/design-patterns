import ThirdPartyYouTubeClass from "./ThirdPartyYouTubeClass";
import ThirdPartyYouTubeLib from "./ThirdPartyYouTubeLib";
import Video from "./Video";

export default class YouTubeCacheProxy implements ThirdPartyYouTubeLib {
  private youtubeService: ThirdPartyYouTubeLib;
  private cachePopular: Map<string, Video> = new Map<string, Video>();
  private cacheAll: Map<string, Video> = new Map<string, Video>();

  public constructor() {
    this.youtubeService = new ThirdPartyYouTubeClass();
  }
  public popularVideos(): Map<string, Video> {
    if(this.cacheAll.size == 0) {
      this.cachePopular = this.youtubeService.popularVideos();
    } else {
      console.log('Retrieved list from cache.');
    }
    return this.cacheAll;
  }

  public getVideo(videoId: string): Video {
    let video = this.cacheAll.get(videoId);

    if(video == undefined) {
      video = this.youtubeService.getVideo(videoId);
      this.cacheAll.set(videoId, video);
    } else {
      console.log(`Retrieved video '${videoId}' from cache.`);
    }
    return video;
  }

  public reset(): void {
    this.cachePopular.clear();
    this.cacheAll.clear();
  }
}