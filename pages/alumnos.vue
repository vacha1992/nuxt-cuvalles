<template>
    <v-card>
        <v-title>
            Estas en Alumnos
        </v-title>
    </v-card>
</template>

<script lang="ts">
export default {
    beforeMount(){
        //Aqui asigno el titulo que tendra esta pagina y que se muestra en la barra principal
        this.$store.commit('setTitle', 'Alumnos')
    }
}
</script>
