<template>
    <center><v-card
    class="ma-15 pa-5"
    max-width="800"
    elevation = "11"
    style="background-color: #003865;">
    <div id="app">
      <h1 style="color: #FEB139; font-family: Feather; font-size: 50px; margin-bottom: -20px;">Quiz App</h1>
      <quiz style="color: white; font-family:Feather; font-size: 14px;" @quiz-completed="handleQuizCompleted" :key="quizKey" />
      <custom-modal
        v-show="showModal"
        header="Congratulations!"
        subheader="You've completed your Quiz!"
        :score="score"
        @reload="updateQuiz"
        @close="showModal = false"
      />
    </div>
    </v-card></center>
  </template>
  
  <script>
  import CustomModal from "../components/CustomModal.vue";
  import Quiz from "../components/Quiz.vue";
  export default {
    components: { Quiz, CustomModal },
    name: "App",
    data() {
      return {
        quizKey: 0,
        showModal: false,
        score: {
          allQuestions: 0,
          answeredQuestions: 0,
          correctlyAnsweredQuestions: 0,
        },
      };
    },
    methods: {
      handleQuizCompleted(score) {
        this.score = score;
        this.showModal = true;
      },
      updateQuiz() {
        this.showModal = false;
        this.quizKey++;
      },
    },
  };
  </script>
  
  <style>
  * {
    box-sizing: border-box;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    line-height: 1.6;
  }
  @font-face {
  font-family: "Feather";
  src: local("Feather"),
   url(../assets/feather.ttf) format("truetype");
}
  </style>