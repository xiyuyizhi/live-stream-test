let ffmpegPath;
let streamAddress;
if (process.env.NODE_ENV === 'production') {
  ffmpegPath = '/usr/bin/ffmpeg'
  streamAddress = {
    ts: 'http://live.xiyuyizhi.xyz/live/test/index.m3u8',
    flv: 'http://live.xiyuyizhi.xyz/live/test.flv',
    wss: 'ws://live.xiyuyizhi.xyz/live/test.flv'
  }
} else {
  ffmpegPath = '/usr/local/bin/ffmpeg';
  streamAddress = {
    ts: 'http://localhost:7990/live/test/index.m3u8',
    flv: 'http://localhost:7990/live/test.flv',
    wss: 'ws://localhost:7990/live/test.flv'
  }
}

module.exports = {
  ffmpegPath,
  streamAddress
};