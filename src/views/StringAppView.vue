<template>

 <center><v-card
    class="ma-15 pa-5"
    max-width="544"
    elevation = "11"
 >
<img src="../assets/text-logo.png" width="70" height="70">
  <v-card-title> String Manipulator </v-card-title>

   <v-text-field label="Enter a String" v-model="stringInput"></v-text-field>

   <v-btn class="ma-2" color="primary" @click="doCountVowel">
        Manipulate
   </v-btn>
   <v-btn class="ma-2" color="error" @click="resetValue">
        Reset
   </v-btn>

   <br/><span><br/>Vowels: {{ vowelCount }}</span><br>
     <span>Number of Characters: {{ count }}</span><br>
     <span>Consonants: {{ conso }}</span><br>
     <span>Vowel to *:<br/>{{ con }}</span><br><br/>
 </v-card>  </center>

</template>

<script setup>
import {ref} from 'vue'

const stringInput = ref('')
const vowelCount = ref(0)
const count = ref(0)
const conso = ref(0)
const con = ref('')

function doCountVowel () {
     vowelCount.value = stringInput.value.match(/[aeiouAEIOU]/gi).length;
     count.value = stringInput.value.match(/[a-zA-z]/gi).length;
     conso.value = stringInput.value.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
     con.value = stringInput.value.replace(/[aeiouAEIOU]/gi,'*');
}

function resetValue(){
     stringInput.value = '';
     vowelCount.value = 0;
     count.value = 0;
     conso.value = 0;
     con.value = '';
}

</script>