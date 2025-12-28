<template>
  <div class="audio-player" dir="ltr">
    <div class="audio-title" v-if="title">{{ title }}</div>
    <audio ref="audio" :src="src" @timeupdate="updateTime" @loadedmetadata="onLoad"></audio>
    
    <div class="controls">
      <button @click="togglePlay" class="play-btn">
        <svg v-if="!isPlaying" viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M8 5v14l11-7z"/>
        </svg>
        <svg v-else viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
        </svg>
      </button>
      
      <div class="progress-container">
        <input 
          type="range" 
          min="0" 
          :max="duration" 
          v-model="currentTime" 
          @input="seek"
          class="progress-bar"
        >
        <div class="time">
          <span>{{ formatTime(currentTime) }}</span>
          <span>{{ formatTime(duration) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  src: String,
  title: String
});

const audio = ref(null);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);

const togglePlay = () => {
  if (isPlaying.value) {
    audio.value.pause();
  } else {
    audio.value.play();
  }
  isPlaying.value = !isPlaying.value;
};

const updateTime = () => {
  currentTime.value = audio.value.currentTime;
};

const onLoad = () => {
  duration.value = audio.value.duration;
};

const seek = (e) => {
  audio.value.currentTime = e.target.value;
};

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};
</script>

<style scoped>
.audio-player {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  max-width: 600px;
  direction: ltr;
}

.audio-title {
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 12px;
  color: var(--vp-c-text-1);
  text-align: left;
}

.controls {
  display: flex;
  align-items: center;
  gap: 15px;
}

.play-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: var(--vp-c-brand);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  flex-shrink: 0;
  padding: 0;
}

.play-btn:hover {
  background: var(--vp-c-brand-dark);
  transform: scale(1.05);
}

.play-btn:active {
  transform: scale(0.95);
}

.play-btn svg {
  display: block;
}

.progress-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.progress-bar {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--vp-c-divider);
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
}

.progress-bar::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--vp-c-brand);
  cursor: pointer;
  transition: all 0.2s;
}

.progress-bar::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}

.progress-bar::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--vp-c-brand);
  cursor: pointer;
  border: none;
  transition: all 0.2s;
}

.progress-bar::-moz-range-thumb:hover {
  transform: scale(1.2);
}

.time {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--vp-c-text-2);
}
</style>
