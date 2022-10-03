import Video from "./Video";

export default interface ThirdPartyYouTubeLib {
  popularVideos(): Map<string, Video>; 
  getVideo(videoId: string): Video;
}
