<template>
<center><v-card 
    class="ma-10 pa-5"
    max-width="344"
    elevation = "11"
    >
    <h1>Axios Demo Activity</h1><br>
    <v-btn color="primary" @click="getQuestions">Show</v-btn>
  </v-card></center>


  <center><v-card
  class="ma-10 pa-5"
  max-width="800"
  elevation = "11">
  <table class="table">
    <thead>
      <tr>
        <th scope="col"><h2>Questions</h2></th><h3>&nbsp;</h3>
        <th scope="col"><h2>Answers</h2></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="question in questions" :key="question.id">
        <td>{{ replaceValue(question.question) }}</td>
        <h3>&#x2192;</h3>
        <td>{{ replaceValue(question.correct_answer) }}</td>
      </tr>
    </tbody>
  </table></v-card></center>
 
</template>

<script setup>
  import { ref } from 'vue';
  import axios from 'axios';

  const questions = ref([])
  const quest = ref('')

  async function getQuestions(){
    axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple').then( response =>{
      questions.value=(response.data.results)
    } )
  }

  function replaceValue(str) {
    return str
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, "\"")
      .replace(/&#039;/g, "'");
}

  


</script>


<style>
  table, th, td{
    align-content: center;
    padding: 10px;
    border: 1px solid black; 
    border-collapse: separate;
    border-radius: 5px;
    margin-top: 10px;
    border-spacing: 10px;
  }
  th{
    background-color: #6404ec;
    color:beige;
  }
  tr:hover{
    background-color:#6404ec;
    color:white;
  }
  h3{
    align-content: center;
    padding: 20px;
  }
</style>