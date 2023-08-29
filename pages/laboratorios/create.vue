<template>
    <v-container>
        <v-form @submit.prevent="guardar">
            <v-card>
                <v-card-title>
                    Crear laboratorio
                </v-card-title>
                <v-card-text>
                    <v-text-field v-model="laboratorio.nombre" label="Nombre:"></v-text-field>
                    <v-text-field v-model="laboratorio.edificio" label="Edificio:"></v-text-field>
                    <v-text-field v-model="laboratorio.capacidad" label="Capacidad:" type="number"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn type="submit">
                        Guardar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-container>
</template>

<script lang="ts">
export default {
    name: 'LaboratoriosCreate',

    //El middleware es para proteger la pagina y obligar a loguearse
    //middleware: 'auth',

    data: () => ({
        laboratorio: {
            nombre: "",
            edificio: "",
            capacidad: "",
            usuario_codigo: 1,
        }
    }),

    methods: {
        async guardar() {
            try {
                const response = await this.$axios.post('/laboratorios', this.laboratorio)

                //*****ESTO ES UN EVENTO */
                //Aqui primero va el nombre del evento y despues los parametros que recibe la funcion
                //Lo puedo poner donde quiera para mostrar un mensaje ya sea error o algo bueno xD
                this.$nuxt.$emit('show-snackbar', 'green', response.data.message)

                //Aqui se re direcciona a la pagina laboratorios
                this.$router.push('/laboratorios')
            } catch (error) {

            }
        },
    }

}
</script>