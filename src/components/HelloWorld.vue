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
        <table>
        
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Personagem</th>
                    <th>Imagem</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Item">1</td>
                    <td data-label="Personagem">Monster High</td>
                    <td> <img src="@/assets/monster.jpg" alt="" style="min-width: 50%;"></td>
                </tr>
                <tr>
                    <td data-label="Item">2</td>
                    <td data-label="Personagem ">Ben10</td>
                
                    <td>
                        <img src="@/assets/ben.jpg" alt="" style="min-width: 50%;" >
                    </td>
                
                </tr>
                
                <tr>
                    <td data-label="Item">3</td>
                    <td data-label="Personagem ">Max Steel</td>
                    
                    <td ><img src="@/assets/Max.png" alt="" style="max-width: 50%;">
                    </td>
                
                </tr>
            </tbody>
        </table>

 
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
 .containerImagem{
    display: flex;
    max-width: 100%;
    border: 2px solid purple;
    }
    .imagemUnicaAltura400px{
     width: 100%;
     height: 400px;
    } 
    .divImagemMeiaTela{
        min-width: 49%;
        border: 2px solid purple;
    }
    
    @media screen and (max-width:900px){
      .p{
        font-size: 2rem;
      }
    }
    @media screen and (min-width:400px){
      .p{
        font-size: 1rem;
      }
    }
    html{
        font-size: 30px;
    }
    h1{
        font-size: 2rem;
    }
    p{
        font-size: 2rem;
    }
    table {
        width: 100%;
        border-collapse: collapse;

    }
    th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }
    @media only screen and (max-width: 600px) {
        th, td {
            padding: 4px;
        }
        table {
            border: 0;
            
        }

        table caption {
            font-size: larger;
        }
        table thead {
            display: none;
        }
        table tr {
            border-bottom: 2px solid #dddddd;
            display: block;
            margin-bottom: .625em;
        }
        table td {
            border-bottom: none;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 1em;
            padding-bottom: 1em;
        }
        table td::before {
            content: attr(data-label);
            font-weight: bold;
            text-transform: uppercase;
        }
    }

</style>
