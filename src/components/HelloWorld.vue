<template>
  <div class="hello">
     
    <h1> Bem-vinde ao Primeiro Projeto Fron-End - Desenvolvimento Responsivo</h1>


<h1>AAAAAAAAAAAAAAAAAA</h1>
<h2>aaaaaaaaaaaaaaa</h2>
 

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
    
    <div class="content">
      <table class="rTable">
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome_produto</th>
            <th>Imagem</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>x</td>
            <td>
              <div class="divImagemTabela">
                <img src="@/assets/eah.jpg" class="imagemTabela">
              </div>

            </td>

          </tr>

          <tr>
            <td>2</td>
            <td>y</td>
            <td>
              <div class="divImagemTabela">
                <img src="@/assets/cat2.jpg" alt="" class="imagemTabela">
              </div>
            </td>

          </tr>

          <tr>
            <td>3</td>
            <td></td>
            <td></td>

          </tr>

          <tr>
            <td>4</td>
            <td></td>
            <td></td>


          </tr>

        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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



.divImagemTabela {
  min-width: 49%;
  border: 2px solid purple;
}

.imagemTabela {
  width: 20%;
  height: 50px;
}



* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  display: flex;
  margin: auto;
}

.rTable {
  width: 100%;
  text-align: center;
}

.rTable thead {
  background: black;
  font-weight: bold;
  color: #fff;
}

.rTable tbody tr:nth-child(2n) {
  background: #ccc;
}

.rTable th,
.rTable td {
  padding: 7px 0;
}

@media screen and (max-width: 480px) {
  .content {
    width: 94%;
  }

  .rTable thead {
    display: none;
  }

  .rTable tbody td {
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (min-width: 1200px) {
  .content {
    width: 100%;
  }

  .rTable tbody tr td:nth-child(1) {
    width: 10%;
  }

  .rTable tbody tr td:nth-child(2) {
    width: 30%;
  }

  .rTable tbody tr td:nth-child(3) {
    width: 20%;
  }

  .rTable tbody tr td:nth-child(4) {
    width: 10%;
  }

  .rTable tbody tr td:nth-child(5) {
    width: 30%;
  }
}
</style>
