# videojs-youtube Issues

## durationchange / loadedmetadata: [Issue 450](https://github.com/videojs/videojs-youtube/issues/450), [Issue 414](https://github.com/videojs/videojs-youtube/issues/414)

1. Clone project
2. Open console and cd to directory
3. Checkout `issue-durationchange` [tag](https://github.com/dinony/videojs-youtube-issue0/releases/tag/issue-durationchange)
4. Run `npm i && npm run dev`
5. Open [browser](http://localhost:8080/)
6. Click `YouTube video` button and observe in console
  * durationchange 0 (EXPECTED: duration of video)
  * loadedmetadata 0 (EXPECTED: duration of video)
7. Click `Custom video`button and observe in console
  * durationchange NaN (Hmm, not expecting a NaN value here)
  * durationchange 42.562177 (Here duration is available)
  * loadedmetadata 42.562177 (Here duration is available)

## timeupdate: [Issue 480](https://github.com/videojs/videojs-youtube/issues/480)

1. Clone project
2. Open console and cd to directory
3. Checkout `issue-timeupdate` [tag](https://github.com/dinony/videojs-youtube-issue0/releases/tag/issue-timeupdate)
4. Run `npm i && npm run dev`
5. Open [browser](http://localhost:8080/)
6. Click `JMP 1` button and observe in console
  * timeupdate 0 until snapshot[t1]
  * JMP 1 60
  * timeupdate snapshot[t1] (EXPECTED: 60)
  * timeupdate snapshot[60+dt] (as expected)
