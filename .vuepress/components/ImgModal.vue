<template>
  <div>
    <img class="source" :src="src" :alt="alt" @click="open = true">
    <div id="myModal" class="modal" v-if="open" @click="open = false">
      <img class="modal-content" :src="src" :alt="alt">
      <div class="caption">{{ caption }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    alt: { type: String },
    caption: { type: String },
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    close() {
      this.open = false;
    }
  },
  mounted() {
    window.addEventListener('keydown', this.close);
  },
  destroyed() {
    window.removeEventListener('keydown', this.close);
  }
}
</script>

<style scoped>
.source {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.source:hover {
  opacity: 0.7;
}

.modal {
  position: fixed; /* Stay in place */
  z-index: 10; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (Image) */
.modal-content {
  margin: auto;
  display: block;
  max-width: 90%!important;
}

.caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

.modal-content, .caption { 
  animation-name: zoom;
  animation-duration: 0.3s;
}

@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}
</style>