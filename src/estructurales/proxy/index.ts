import ThirdPartyYouTubeClass from "./ThirdPartyYouTubeClass";
import YouTubeCacheProxy from "./YouTubeCacheProxy";
import YouTubeDownloader from "./YouTubeDownloader";

function test(downloader: YouTubeDownloader): number {
  const start = Date.now();

  downloader.renderPopularVideos();
  downloader.renderVideoPage('catzzzzzzzzz');
  downloader.renderPopularVideos();
  downloader.renderVideoPage('dancesvideoo');

  downloader.renderVideoPage("catzzzzzzzzz");
  downloader.renderVideoPage("someothervid");

  const end = Date.now();

  const estimetedTime = start - end;
  console.log(`Time elapsed: ${estimetedTime}ms \n`);
  return estimetedTime;
}

const nativeDownloader = new YouTubeDownloader(new ThirdPartyYouTubeClass());
const smartDownloader = new YouTubeDownloader(new YouTubeCacheProxy());

const native = test(nativeDownloader);
const smart = test(smartDownloader);

console.log(`The saved by caching proxy: ${native - smart} ms`);