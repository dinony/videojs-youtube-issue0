import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
import 'videojs-youtube'

const player = videojs('player', {
  preload: 'auto',
  controls: true,
  autoplay: true,
  techOrder: ['html5', 'youtube']
})

player.src({type: 'video/youtube', src: 'https://www.youtube.com/watch?v=80N-dyGIkTE'})

// player.on('ready', () => {
//   console.log('ready')
// })

player.on('durationchange', () => {
  console.log('durationchange', player.duration())
})

player.on('loadedmetadata', () => {
  console.log('loadedmetadata', player.duration())
})

player.on('timeupdate', () => {
  console.log('timeupdate', player.currentTime())
})

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

btn1.addEventListener('click', () => {
  console.log('JMP 1', 60)
  player.currentTime(60)
})

btn2.addEventListener('click', () => {
  console.log('JMP 2', 120)
  player.currentTime(120)
})
