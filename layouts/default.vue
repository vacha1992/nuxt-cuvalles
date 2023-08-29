<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="logout">
          <v-list-item-action>
            <v-icon>
              mdi-logout
            </v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>
              Cerrar sesión
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      
      <v-toolbar-title>{{ this.$store.state.title }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-snackbar v-model="snackbar" :color="snackbarColor">{{snackbarMessage}}</v-snackbar>
  </v-app>
</template>

<script lang="ts"> 
export default {
  name: 'DefaultLayout',
  data() {
    return {
      snackbarColor: '',
      snackbarMessage: '',
      snackbar: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Inicio',
          to: '/',
        },
        {
          icon: 'mdi-google-classroom',
          title: 'Laboratorios',
          to: '/laboratorios',
        },
        {
          icon: 'mdi-account-school',
          title: 'Alumnos',
          to: '/alumnos',
        },
        {
          icon: 'mdi-account-tie',
          title: 'Asesores',
          to: '/asesores',
        },
        {
          icon: 'mdi-account-plus',
          title: 'Usuarios',
          to: '/usuarios',
        },
      ],
    }
  },

  beforeMount(){
    //******* OYENTE o LISTENER */
    //Aqui se crea este evento, listener, oyente como sea, se asigna un nombre y se pone lo que va a ejecutar
    //Esto es el oyente(como listener en java) de nuestro evento de snackbar
    //Se manda el mensaje y luego de ejecuta la funcion deseada en este caso fue showSnackbar
    this.$nuxt.$on('show-snackbar', this.showSnackbar)

    //Las siguientes dos lineas se borraron pero yo las deje
    //this.showSnackbar('red', 'Algo fallo!')
    //this.showSnackbar('green', 'Todo salio bien!')
  },

  methods: {
    showSnackbar(color: string, message: string){
      this.snackbar=true
      this.snackbarColor = color
      this.snackbarMessage = message
    },

    //Este metodo es para cerrar sesion
    async logout(){
      this.$auth.logout()
      this.$router.push('/login')
    }
  },

}
</script>
