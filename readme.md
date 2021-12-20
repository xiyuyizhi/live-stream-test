```javascript

docker pull dockerdaitu/live-st:1.0

docker pull dockerdaitu/vod-asserts:1.0

docker run -idp 6660:80 dockerdaitu/live-st:1.0

docker run -idp 7660:80 dockerdaitu/vod-asserts:1.0

hosts:

127.0.0.1 api.xiyuyizhi.xyz
127.0.0.1 live.xiyuyizhi.xyz
127.0.0.1 asserts.xiyuyizhi.xyz

http://api.xiyuyizhi.xyz:6660/startLive
ffplay http://live.xiyuyizhi.xyz:6660/live/test.flv

ffplay http://asserts.xiyuyizhi.xyz:7660/hls_master/master.m3u8

```
