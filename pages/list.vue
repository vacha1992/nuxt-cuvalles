<template>
    <v-container>
        <!--el model es para que valide el formulario-->
        <!--En @submit se usa el operador ternario que es como un if-->
        <v-form v-model="validForm" ref="form" @submit.prevent="(editIndex !== null) ? editElement() : saveElements()">
            <v-column>
            <v-row>
                <v-text-field label="Nombre..." color="purple" v-model="nuevoIngrediente.name" :rules ="[$validations.notEmpty]"/>
                <v-switch label="Obligatorio" color="success" v-model="nuevoIngrediente.mandatory"/>
                <v-switch label="Borrable" color="red" v-model="nuevoIngrediente.showDelete"/>
            </v-row>
            <v-row>
                <v-spacer/>
                <v-btn text v-text="'Guardar'" class="ma-3" color="green" type="submit"/>
            </v-row>
        </v-column>
        </v-form>
        
        <!--v-card class="ma-4" v-for="ingrediente in ingredientes" :key="ingrediente.name"-->
        <v-card class="ma-2" v-for="(ingrediente, i) in ingredientes" :key="i">
            <v-card-title v-text="ingrediente.name"/>

            <v-card-text v-if="ingrediente.mandatory">Obligatorio</v-card-text>
            <v-card-text v-else="ingrediente.mandatory">Opcional</v-card-text>

            <!--Esto agrega un boton para eliminar ingrediente-->
            <!--En este caso mostrara solo los botones donde la propiedad showDelete sea verdadero-->
            <v-card-actions>
                <v-spacer/>
                <v-btn color="blue" text v-text="'Editar'" @click="editIndex=i, nuevoIngrediente = Object.assign({}, ingrediente)"/>
                <v-btn v-show="ingrediente.showDelete" color="red" text v-text="'Eliminar'" @click="deleteElement(i)"/>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script lang="ts">
export default ({
    name: "list",
    
    data: ()=>({
        editIndex: null,
        validForm: false,

        nuevoIngrediente: {
            name: '',
            mandatory: false,
            showDelete: false
        },

        ingredientes: [
            {
                name: 'Huevo',
                mandatory: true,
                showDelete: true
            },
            {
                name: 'Leche',
                mandatory: true,
                showDelete: true
            },
            {
                name: 'Azucar',
                mandatory: false,
                showDelete: false
            },
            {
                name: 'Canela',
                mandatory: true,
                showDelete: true
            },
            {
                name: 'Chocolate',
                mandatory: false,
                showDelete: true
            }
        ]
    }),


    methods: {
        deleteElement(index: number){
            this.ingredientes.splice(index, 1)
        },

        saveElements(){
            //Aqui se ejecuta la validacion usando la referencia del formulario en este caso form
            //El refs es por la referencia que tiene el componente que en este caso fue form
            this.$refs.form.validate()

            //Esto pregunta si ya se valido el formulario, si si continua con lo demas si no truena
            if(!this.validForm) return

            this.ingredientes.push(this.nuevoIngrediente)
            
            //Esto borra el formulario despues de guardar el ingrediente
            this.nuevoIngrediente = {
                name: '',
                mandatory: false,
                showDelete: false
            }

            //Y esto truena la validacion para que no se valide hasta ingresar otro ingrediente
            this.$refs.form.resetValidation()
        },

        editElement(){
            //Aqui se ejecuta la validacion usando la referencia del formulario en este caso form
            //El refs es por la referencia que tiene el componente que en este caso fue form
            this.$refs.form.validate()

            //Esto pregunta si ya se valido el formulario, si si continua con lo demas si no truena
            if(!this.validForm) return

            this.ingredientes[this.editIndex] = this.nuevoIngrediente

            //Esto borra el formulario despues de guardar el ingrediente
            this.nuevoIngrediente = {
                name: '',
                mandatory: false,
                showDelete: false
            }

            this.editIndex = null

        }

        
    }
})
</script>

<i18n lang="json">
{
    "es": {},
    "en": {}
}
</i18n>