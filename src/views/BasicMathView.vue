<template>
<center><v-card 
    class="ma-15 pa-5"
    max-width="344"
    elevation = "11"
    >
    <img src="../assets/calculator-logo.png" width="120" height="120">
    <v-container fluid>
      <v-text-field label="First Input" v-model.number="fNumber"></v-text-field>
      <v-text-field label="Second Input" v-model.number="sNumber"></v-text-field>
      
      <v-btn class="ma-2" color = "primary" @click="doSum">Compute</v-btn>
      <v-btn class="ma-2" color = "error" @click="resetValue">Reset</v-btn><br/><br/>
 
      <p>Sum: {{sum}}</p>
      <p>Difference: {{difference}}</p>
      <p>Product: {{product}}</p>
      <p>Quotient: {{quotient}}</p>
      <p>Average: {{average}}</p>
    </v-container>
  </v-card></center>
</template>

<script setup>
  import {ref} from 'vue'

  const fNumber=ref('')
  const sNumber=ref('')
  const sum = ref(0)
  const difference = ref(0)
  const product = ref(0)
  const quotient = ref(0)
  const average = ref(0)

  function doSum(){
    sum.value = fNumber.value + sNumber.value;
    difference.value = fNumber.value - sNumber.value;
    product.value = fNumber.value * sNumber.value;
    quotient.value = fNumber.value / sNumber.value;
    average.value = (fNumber.value + sNumber.value)/2;
  }

  function resetValue(){
    fNumber.value = '';
    sNumber.value = '';
    sum.value = 0;
    difference.value = 0;
    product.value = 0;
    quotient.value = 0;
    average.value = 0;
  }
</script>


