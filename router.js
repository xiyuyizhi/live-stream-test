const {spawn} = require('child_process');
const Router = require('koa-router');
const ffmpegPath = require('./config')
const router = new Router();

let FFMPEG_ARGS = `-re -i ./assert/1.mp4 -c copy -f flv rtmp://localhost/live/test`;

let liveInProcess = false;

router.get('/reset', (ctx) => {
  liveInProcess = false;
  ctx.body = {
    code: 0,
    data: 'ok'
  }
})

router.get('/startLive', async(ctx) => {

  if (liveInProcess) {
    ctx.body = {
      code: 0,
      data: {
        ts: 'http://live.xiyuyizhi.xyz/live/test/index.m3u8',
        flv: 'http://live.xiyuyizhi.xyz/live/test.flv'
      }
    }
    return;
  }

  liveInProcess = true;

  console.log('开始生产直播流');

  let child = spawn(ffmpegPath, FFMPEG_ARGS.split(' '), {
    cwd: process.cwd()
  })

  // ffmpeg output to stderr
  child
    .stderr
    .on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

  child.on('close', code => {
    console.log(`child process exited with code ${code}`);
    liveInProcess = false;
    if (code === 0) 
      return;
    ctx.body = {
      code: 1,
      msg: '推流操作失败,稍后重试'
    }
  })

  //wait a little time,prevent there may error occur on child process
  await new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 500);
  })

  if (!liveInProcess) 
    return;
  
  ctx.body = {
    code: 0,
    data: {
      ts: 'http://live.xiyuyizhi.xyz/live/test/index.m3u8',
      flv: 'http://live.xiyuyizhi.xyz/live/test.flv'
    }
  }

})

module.exports = router;