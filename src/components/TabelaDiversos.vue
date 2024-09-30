<template>
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

</template>

<script>

</script>

<style>
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