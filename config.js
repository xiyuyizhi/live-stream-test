let ffmpegPath;

if (process.env.NODE_ENV === 'production') {
  ffmpegPath = '/root/ffmpeg/ffmpeg'
} else {
  ffmpegPath = '/usr/local/bin/ffmpeg';
}

module.exports = ffmpegPath;