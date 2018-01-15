import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
import 'videojs-youtube'

const player = videojs('player', {
  preload: 'auto',
  controls: true,
  autoplay: false,
  techOrder: ['html5', 'youtube']
})

// player.on('ready', () => {
//   console.log('ready')
// })

player.on('durationchange', () => {
  console.log('durationchange', player.duration())
})

player.on('loadedmetadata', () => {
  console.log('loadedmetadata', player.duration())
})

const cBtn = document.getElementById('cVideo')
const ytBtn = document.getElementById('ytVideo')

cBtn.addEventListener('click', () => {
  console.log('SET CUSTOM VIDEO')
  player.src({type: 'video/mp4', src: 'http://dinony.com/projects/rv/Cars.mp4'})
})

ytBtn.addEventListener('click', () => {
  console.log('SET YT VIDEO')
  player.src({ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=80N-dyGIkTE"})
})
