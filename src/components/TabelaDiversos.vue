<template>
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
                <td> <img src=" Fotos/monster.jpg" alt="" style="min-width: 50%;"></td>
            </tr>
            <tr>
                <td data-label="Item">2</td>
                <td data-label="Personagem ">Ben10</td>
                <td>
                    <img src="Fotos/ben.jpg" alt="" style="min-width: 50%;" >
                </td>
            </tr>
            
            <tr>
                <td data-label="Item">3</td>
                <td data-label="Personagem ">Max Steel</td>
                <td ><img src="Fotos/Max.png" alt="" style="max-width: 50%;">
                </td>
            </tr>
        </tbody>
    </table>

</template>

<script>

export default {
    name: 'TabelaDiversos',
    props: {
        msg: String
    }

}

</script>
<style scoped></style>