<template>
    <v-app dark>
      <v-app-bar fixed app>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-app-bar>
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>
      <v-footer app>
      </v-footer>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'LoginLayout',

    data: () =>({
        title: 'Iniciar Sesión'
    })
   
  }
  </script>
  