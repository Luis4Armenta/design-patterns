import ThirdPartyYouTubeLib from "./ThirdPartyYouTubeLib";
import Video from "./Video";

export default class YouTubeDownloader {
  private api: ThirdPartyYouTubeLib;

  public constructor(api: ThirdPartyYouTubeLib) {
    this.api = api;
  }

  public renderVideoPage(videoId: string): void {
    const video: Video = this.api.getVideo(videoId);

    console.log(`\n--------------------------------------`);
    console.log('Video page (imagine fancy HTML)');
    console.log(`ID: ${video.id}`);
    console.log(`Title: ${video.title}`);
    console.log(`Video: ${video.data}`);
    console.log(`\n--------------------------------------\n`);
  }

  public renderPopularVideos(): void {
    const list: Map<string, Video> = this.api.popularVideos();

    console.log(`\n--------------------------------------`);
    console.log(`Most popular videos on YouTube (imagine fancy HTML)`);
    list.forEach(video => {
      console.log(`ID: ${video.id} | Title: ${video.title}`);
    })
    console.log(`--------------------------------------\n`);
  }
}
