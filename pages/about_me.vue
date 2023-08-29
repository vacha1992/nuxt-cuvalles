<!--El Template es basicamente como el HTML, en donde puedes ir poniendo componentes, todo con etiqyuetas-->
<template>
  <!--Se utiliza Vuetify-->
  <v-container>
    
    <!--Esta etiqueta es para crear una tarjeta-->
    <v-card>

      <!--Esta etiqueta es para poner el titulo de la tarjeta-->
      <v-card-title>Salvador Curiel Hernández {{ counter }} </v-card-title>
    
      <v-card-text>
      <!--Esta etiqueta es para poner el contenido de la tarjeta-->
      Lorem ipsum es el texto que se usa habitualmente en diseño gráfico 
      en demostraciones de tipografías o de borradores de diseño para probar 
      el diseño visual antes de insertar el texto final.

      <br>
      {{ counter }}
      <br>
      {{ counterAndName }}

      <br>
      {{ $t('help') }}

      <v-card-actions>
        <v-spacer/> <!--Esta etiqueta (etiqueta colapsada, se usa solo cerrandola) manda al boton a la derecha-->
        <v-btn variant="tonal" @click="sumOneToCounter(10)"> Clic!! </v-btn>
      </v-card-actions>

    </v-card-text>

    </v-card>
    <br>
    

  </v-container>
</template>
  
<script lang="ts">
  export default {
    name: 'AboutMe',

    data: ()=>({
      counter: 1
    }),

    watch: {
      counter(){

      }
    },

    computed:{
      counterAndName(){
        return this.counter + " Chava"
      }
    },

    //Esta funcion se ejecuta cuando carga la pagina (creo xD)
    beforeMount(){
      this.counter++
    },

    methods:{
      sumOneToCounter(numToAdd: number){
        this.counter = this.counter + numToAdd
      }
    }
  }
</script>

<i18n lang="json">
{
  "es": {
    "help": "Ayuda"
  },

  "en": {
    "help": "help"
  }
}
</i18n>