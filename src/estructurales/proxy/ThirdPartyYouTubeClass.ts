import ThirdPartyYouTubeLib from "./ThirdPartyYouTubeLib";
import Video from "./Video";

export default class ThirdPartyYouTubeClass implements ThirdPartyYouTubeLib {
  public popularVideos(): Map<string, Video> {
    this.connectToServer('http://www.youtube.com');
    return this.getRandomVideos();
  }

  getVideo(videoId: string): Video {
    this.connectToServer('http://www.youtube.com' + videoId);
    return this.getSomeVideo(videoId);
  }
  private random(min: number, max: number): number {
    return Math.round(min + (Math.random() * (max - min + 1)));
  }
  
  private experienceNetworkLatency(): void {
    let randomLatency: number = this.random(5, 10);

    for (let i = 0; i < randomLatency; i++) {
      setTimeout(() => {
        
      }, 100);
    }
  }

  private connectToServer(server: string): void {
    console.log(`Connection to ${server} ...`);
    this.experienceNetworkLatency();
    console.log(`Connected!\n`);
  }

  private getRandomVideos(): Map<string, Video> {
    console.log('Downloading populars...');

    this.experienceNetworkLatency();
    let hmap: Map<string, Video> = new Map<string, Video>();

    hmap.set("catzzzzzzzzz", new Video("sadgahasgdas", "Catzzzz.avi"));
    hmap.set("mkafksangasj", new Video("mkafksangasj", "Dog play with ball.mp4"));
    hmap.set("dancesvideoo", new Video("asdfas3ffasd", "Dancing video.mpq"));
    hmap.set("dlsdk5jfslaf", new Video("dlsdk5jfslaf", "Barcelona vs RealM.mov"));
    hmap.set("3sdfgsd1j333", new Video("3sdfgsd1j333", "Programing lesson#1.avi"));

    console.log('Done! \n');
    return hmap;
  }

  private getSomeVideo(videoId: string): Video {
    console.log('Dowloading video...');

    this.experienceNetworkLatency();
    const video: Video = new Video(videoId, 'Some video title');

    console.log('Done!');
    return video;
  }
}