<template>
ola
<ImagemPrincipal/>
<br>
<VideoUnico/>
<br>
<TabelasDiversos/>
<br>

</template>

<script>
import ImagemPrincipal from '@/components/ImagensDiversas.vue'
import VideoUnico from './VideoUnico.vue'
export default {
    name: 'PaginaPrincipal',
    components: {
        ImagemPrincipal, VideoUnico,
    },
}
</script>