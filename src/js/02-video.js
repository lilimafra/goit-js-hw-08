import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new VimeoPlayer('vimeo-player');

player.on('timeupdate', throttle(updateCurrentTime, 1000));

function updateCurrentTime(event) {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime.toString());
}

document.addEventListener('DOMContentLoaded', () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(parseFloat(currentTime));
  }
});
