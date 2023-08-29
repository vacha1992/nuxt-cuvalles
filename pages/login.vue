<template>
    <v-container>
        <!--El arroba submit.prevent sirve ara ejecutar al hacer clic en el boton de tipo submit-->
        <v-form v-model="validForm" ref="form" @submit.prevent="loginUser">
            <v-alert v-show="hasError" color="error" icon="$error">
                Usuario o contraseña incorrecto
            </v-alert>
            <v-card>
                <v-card-title>
                    Bienvenidos
                </v-card-title>

                <v-card-text>
                    <v-text-field v-model="login.email" label="Correo:" color="green" :rules="[$validations.notEmpty, $validations.isValidEmail]"/>
                    <v-text-field v-model="login.password" type="password" color="green" label="Contraseña:" :rules="[$validations.notEmpty]"/>
                </v-card-text>

                <v-card-actions>
                    <v-spacer />
                    <v-btn type="submit">Ingresar</v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-container>
</template>

<script lang="ts">
import validations from '~/plugins/validations'

export default {

    name: "Login",

    //Con esta propiedad le digo que no es necesario estar logeado para ver esta pagina
    auth: 'guest',

    layout: 'login',

    data: () => ({
        validForm: true,

        //Esto es para mostrar el error o alert en login
        hasError: false,

        login: {
            email: "",
            password: ""
        }
    }),

    watch: {
        login: {
            deep: true,
            //Esta funcion es para mostrar o no el alert de error en el login
            handler(){
                this.hasError=false
            }
        }
    },

    beforeMount() {
        //Esto sirve para ver si estan logeados
        if (this.$auth.loggedIn) {
            this.router.push('/')
        }
    },

    methods: {
        async loginUser() {
            //Esto es para validar que el formulario del login no este vacio
            this.$refs.form.validate()
            if(!this.validForm) return

            try {
                //Aqui es para validar que si exista un usuario
                const response = await this.$auth.loginWith('local', { data: this.login })
                this.$router.push('/')
            } catch (error) {
                //Aqui si no ingresan las credenciales correctas la propiedad hasError cambia a true
                //y el alerta se muestra
                this.hasError = true
            }
        },
    }
}
</script>