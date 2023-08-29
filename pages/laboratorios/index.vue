<template>
    <v-container>
        <v-row>
            <v-spacer />
            <!--La propiedad "to" es para mandar a otra pagina-->
            <v-btn to="/laboratorios/create">Registrar laboratorio</v-btn>
        </v-row>

        <v-card>
            <v-data-table :items="laboratorios" :headers="headers">
                <template v-slot:item.actions="{ i, item }">
                    <v-btn v-text="'Editar'" color="blue" text small :to="`/laboratorios/${item.id}`" />

                    <!--Esto es un dialogo, es como un alert y sirve para notificar al usuario de algo-->
                    <v-dialog v-model="deleteDialog" persistent>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn v-text="'Eliminar'" color="red" text small v-bind="attrs" v-on="on" />
                        </template>

                        <!--Esto es el contenido del dialog-->
                        <v-card>
                            <v-card-title>
                                ¿Deseas continuar?
                            </v-card-title>

                            <v-card-text>
                                ¿Estas seguro de querer eliminar el laboratorio: "{{ item.nombre }}"? esta acción no se
                                podra deshacer.
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer />
                                <v-btn v-text="'Cancelar'" text small @click="deleteDialog = false" />
                                <v-btn v-text="'Confirmar'" color="red" text small @click="eliminarLaboratorio(i, item)" />
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </template>
            </v-data-table>
        </v-card>

    </v-container>
</template>

<script lang="ts">
import Laboratorio from '@/types/laboratorio'

export default {
    name: 'Laboratorios',

    //El middleware es para proteger la pagina y obligar a loguearse
    middleware: 'auth',

    data: () => ({
        deleteDialog: false,
        laboratorios: [],
        headers: [
            { text: 'ID', value: 'id' },
            { text: 'Nombre', value: 'nombre' },
            { text: 'Edificio', value: 'edificio' },
            { text: 'Capacidad', value: 'capacidad' },
            { text: 'Acciones', value: 'actions' },

            //Asi puedo agregar mas configuraciones a los headers
            {
                //aling: 'start',
                //sortable: false,
            },
        ]
    }),

    async beforeMount() {
        //Aqui asigno el titulo que tendra esta pagina y que se muestra en la barra principal
        this.$store.commit('setTitle', 'Laboratorios')

        try {
            const response = await this.$axios.get('/laboratorios')
            this.laboratorios = response.data.data
        } catch (error) {

        }
    },

    methods: {
        //Se uso el tipado que se hizo en una iterface que esta en types
        async eliminarLaboratorio(index: number, laboratorio: Laboratorio) {
            try {
                //alert(`¿Estas seguro que quieres eliminar el laboratorio ${laboratorio.nombre}?`)
                const response = await this.$axios.delete(`/laboratorios/${laboratorio.id}`)
                this.laboratorios.pop(index)

                this.$nuxt.$emit('show-snackbar', 'green', response.data.message)

                //Aqui cierro el dialog
                this.deleteDialog = false

            } catch (error) {
                this.$nuxt.$emit('show-snackbar', 'red', error.message)
            }
        }
    },

}
</script>