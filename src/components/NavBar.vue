<template>
  <nav>
      <v-toolbar app color="primary" class="pa-3">
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <h2 class="font-weight-light mt-8">Vuetify</h2>
        <h3>Demo</h3>
      </v-toolbar-title>
      <img alt="Vue logo" class="logo" src="../assets/vuetify-logo.png" width="48" height="48"/>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="white"
          v-bind="props"
        ><h3>
          Menu</h3>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      
      
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" color="primary">
        <center><img src="../assets/mjm.png" width="70" height="70" class="ma-5"></center>
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/' },
           { title: 'Math', icon: 'mdi-plus-one', path: '/basicMath' },
           { title: 'String App', icon: 'mdi-clipboard-text', path: '/stringApp'},
           { title: 'About', icon: 'mdi-account', path: '/about'},
           { title: 'Research', icon: 'mdi-feature-search', path: '/research'},
           { title: 'Quiz App', icon: 'mdi-ab-testing', path: '/quizapp'},
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>