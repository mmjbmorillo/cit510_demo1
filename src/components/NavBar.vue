<template>
  <nav>
      <v-toolbar app class="pa-2" style="background-color:#003865; color: white;">
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <h1 style="margin-right:500px; color: #FEB139; font-family: Feather; font-size: 27px;">Midterm Project</h1>
      </v-toolbar-title>
      <img alt="Vue logo" class="logo" src="../assets/vuetify-logo.png" width="48" height="48" style="margin-left: 200px;"/>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="white"
          v-bind="props"
        ><h2 style="color: #FEB139; font-family: Feather; font-size: 18px;">Menu</h2>
        </v-btn>
        <h3 style="font-family: Feather; font-size: 18px;"><a href="https://tip.edu.ph" style="color: #FEB139; text-decoration: none; font-weight: bold; margin-right: 20px;" target="_blank">TIP WEBSITE</a></h3>
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

     <v-navigation-drawer app v-model="drawer" style="background-color:#003865; color: white;">
        <center><img src="../assets/mjm.png" width="100" height="100" style="margin-top: 20px;"></center>
        <h3 style="color: #FEB139; font-family: Feather; font-size: 18px; margin-bottom: 20px;">Manuel James Morillo</h3>
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
           { title: 'About the Application', icon: 'mdi-view-dashboard', path: '/' },
           { title: 'Basic Calculator', icon: 'mdi-plus-one', path: '/basicMath' },
           { title: 'String Manipulator', icon: 'mdi-clipboard-text', path: '/stringApp'},
           { title: 'Quiz Application', icon: 'mdi-ab-testing', path: '/quizapplication'},
           { title: 'Vuetify Research', icon: 'mdi-feature-search', path: '/research'},
           { title: 'About the Creator', icon: 'mdi-account', path: '/about'},
           
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

</script>

<style>
</style>