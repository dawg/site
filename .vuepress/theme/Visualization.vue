<template>
  <div class="player-controls playing">
    <span class="play"></span>
    <span class="pause"></span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Visualization',
}
</script>

<style scoped>
.player-controls {
  color: #FFF;
  display: block;
  font-size: 250px;
  height: 1em;
  position: relative;
  text-decoration: none;
  width: 1em;
  transition: transform 0.25s ease-in-out;
}

.player-controls .play::before,
.player-controls .pause::before,
.player-controls .play::after,
.player-controls .pause::after {
  border-radius: 1000px;
  content: "";
  display: block;
  position: absolute;
  height: 1em;
  right: 0;
  top: 0;
  width: 1em;
  z-index: 0;
}

.player-controls .play::before {
  box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  transition: all 0.25s linear;
}

.player-controls.playing .pause::before {
  animation: audio1 1.5s infinite ease-in-out;
}

.player-controls.playing .pause::after {
  animation: audio2 2.2s infinite ease-in-out;
}

.player-controls:hover {
  transform: scale(1.1);
}

.player-controls:hover .play::before {
  box-shadow: 0 0 12px rgba(255, 238, 125, 0.8);
}

@keyframes audio1 {
  0%,
  100% {
    box-shadow: 0 0 0 calc(0.4em / 4) rgba(255, 255, 255, 0.4);
  }
  25% {
    box-shadow: 0 0 0 calc(0.15em / 4) rgba(255, 255, 255, 0.15);
  }
  50% {
    box-shadow: 0 0 0 calc(0.55em / 4) rgba(255, 255, 255, 0.55);
  }
  75% {
    box-shadow: 0 0 0 calc(0.25em / 4) rgba(255, 255, 255, 0.25);
  }
}

@keyframes audio2 {
  0%,
  100% {
    box-shadow: 0 0 0 calc(0.25em / 3) rgba(255, 255, 255, 0.15);
  }
  25% {
    box-shadow: 0 0 0 calc(0.4em / 3) rgba(255, 255, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 0 calc(0.15em / 3) rgba(255, 255, 255, 0.05);
  }
  75% {
    box-shadow: 0 0 0 calc(0.55em / 3) rgba(255, 255, 255, 0.45);
  }
}

</style>