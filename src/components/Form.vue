<template><h1>Dynamic Form via API</h1>
  <div class="content">
    
    <form @submit="handleSubmit">
      <div v-for="field in formFields" :key="field.key" class="form-field">
        <label :for="field.key" class="form-label">{{ field.label }}</label>
        <input :type="field.type" :key="field.key" v-model="formValues[field.key]">
      </div>
      <button type="submit" class="form-button">Submit</button>
    </form>
  </div>
  </template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formFields: [],
      formValues: {},
    };
  },
  mounted() {
    this.fetchFormData();
  },
  methods: {
    fetchFormData() {
      axios
        .get('https://all-is-well.azurewebsites.net/api/store') 
        .then(response => {
          this.formFields = response.data.content.fields;
          console.log(this.formFields)
          console.log(response)
        })
        .catch(error => {
          console.error('Error fetching form data:', error);
        });
    },
    submitForm() {
      // Handle form submission here
      console.log('Form values:', this.formsemdValues);
    },
  },
};
</script>
<style>
  .form-field {
    font-size: 20px;
    margin-bottom: 10px;
    }
    
    .form-label {
      font-size: 20px;
      display: block;
      font-weight: bold;
    }
    
    .form-input {
      font-size: larger;
  
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    
    .form-button {
      font-size: larger;
      padding: 10px 20px;
      background-color: blueviolet;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .content { 
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70vh;
        background-color: #f2f2f2;
        
      }
    </style>