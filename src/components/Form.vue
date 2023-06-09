<template>
  <div class="content">
    <form @submit="handleSubmit">
      <div v-for="field in formFields" :key="field.name" class="form-field">
        <label :for="field.name" class="form-label">{{ field.label }}</label>
        <input :type="field.type" :name="field.name" v-model="formData[field.name]">
      </div>
      <button type="submit" class="form-button">Submit</button>
    </form>
  </div>
  </template>
  
  <script>
  import api from '../api';
  
  export default {
    data() {
      return {
        formFields: [],
        formData: {},
      };
    },
    created() {
      this.fetchFormFields();
    },
    methods: {
      fetchFormFields() {
        api.getFormFields()
          .then(response => {
            this.formFields = response.data;
          })
          .catch(error => {
            console.error('Failed to fetch form fields:', error);
          });
      },
      handleSubmit(event) {
        event.preventDefault();
        api.submitForm(this.formData)
          .then(() => {
            // Handle successful form submission
            console.log('Form submitted successfully!');
            this.clearFormFields();
          })
          .catch((error) => {
            // Handle form submission error
            console.error('Form submission error:', error);
          });
   
    },
    clearFormFields() {
      this.formData = {}; // Clear the form data object
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
        height: 100vh;
        background-color: #f2f2f2;
        
      }
    </style>