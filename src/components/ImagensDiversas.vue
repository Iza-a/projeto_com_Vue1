<template>
    <h1 class="p">Imagens</h1>
      <p class="p">Essas imagens representam personagens de desenho animado </p>
        <div class="containerImagem">
            <img src="@/assets/monster.jpg" class="imagemUnicaAltura400px">
        </div>

        <br>
        <div class="containerImagem">

        <div class="divImagemMeiaTela">
            <img src="@/assets/ben.jpg" alt="" style="min-width: 100%;" >
        </div>

        <div class="divImagemMeiaTela">
            <img src="@/assets/Max.png" alt="" style="max-width: 100%;">
        </div>

        </div>
</template>
<script>

export default {
    name: 'ImagensDiversas',
    props: {
        msg: String
    }

}

</script>
<style scoped></style>





