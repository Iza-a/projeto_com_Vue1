<template>
    <img v-lazy="src" :alt="alt" class="lazy-image" />
  </template>
  
  <script>
  export default {
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        default: ''
      }
    }
  }
  </script>
  
  <style scoped>
  .lazy-image {
    display: block;
    width: 100%;
    height: auto;
  }
  </style>
  

  <template>
    <div>
      <LazyImage src="/path/to/image.jpg" alt="Descrição da imagem" />
    </div>
  </template>
  
  <script>
  import LazyImage from './components/LazyImage.vue';
  
  export default {
    components: {
      LazyImage
    }
  }
  </script>
   