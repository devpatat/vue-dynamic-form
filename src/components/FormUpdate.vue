<template>
  <div class="content">
    <form @submit="handleSubmit">
      <div v-for="field in formFields_local" :key="field.name" class="form-field">
        <label :for="field.name" class="form-label">{{ field.label }}</label>
       
        <div v-if="field.type === 'text' || field.type === 'email'">
        <input :type="field.type" :name="field.name" v-model="formData_local[field.name]" :placeholder="field.place" class="form-input">
      </div>
        <template v-else-if="field.type === 'select'">
        <select v-model="formData_local['ops']" class="form-select">
          <option v-for="option in field.options" :value="option.value" :key="option.value">{{ option.label }}</option>
        </select>
      </template>
      </div>
      <button type="submit" class="form-button">Update Form</button>
    </form>
  </div>
  </template>
  
  <script>
  import api from '../api';
  
  export default {
    data() {
      return {
        formFields_local: [
    
          { name: 'name', label: 'Name', type: 'text', place :'Input field name' },
          { name: 'label', label: 'Label', type: 'text',place :'Input label name'  },
          { name: 'type', label: 'Type', type: 'text', place :'Data Type {text/email}'  },
          { name: 'action', label: 'Action', type: 'select' ,  options: [
                                                        { value: 'add', label: 'Add' },]},
          
        ],
        formData_local: {},
      };
    },
    methods: {
      handleSubmit(event) {
        event.preventDefault();
        api.updateForm(this.formData_local)
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
      this.formData_local = {}; // Clear the form data object
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