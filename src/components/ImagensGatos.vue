<template>
    <div class="containerImagem">
            <img src="@/assets/eah.jpg" class="imagemUnicaAltura400px">
        </div>

        <br>
        <div class="containerImagem">

        <div class="divImagemMeiaTela">
            <img src="@/assets/cat1.jpg" alt="" style="min-width: 100%;">
        </div>

        <div class="divImagemMeiaTela">
            <img src="@/assets/cat2.jpg" alt=""  style="max-width: 100%;">
        </div>

        </div>
    
    
</template>

<script>
export default {
  name: 'ImagensGatos',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1 {
  color: blueviolet;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


.containerImagem {
  display: flex;
  min-width: 100%;
  border: 2px solid purple;
}

.imagemUnicaAltura400px {
  width: 100%;
  height: 400px;
}
.divImagemMeiaTela {
  min-width: 49%;
  border: 2px solid purple;
}


</style>
