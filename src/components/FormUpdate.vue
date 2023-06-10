<template>
  <div>
    <h2>JSON Page</h2>
    <textarea v-model="jsonData" rows="10" cols="50"></textarea>
    <button @click="createJSONFile">Create JSON File</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      jsonData: '',
    };
  },
  methods: {
    createJSONFile() {
      console.log(this.jsonData)
      let config = {
  method: 'post',
  url: 'https://all-is-well.azurewebsites.net/api/store',
  data : this.jsonData
};

      // POST the FormData to your Pi endpoint
      axios.request(config)
        .then(response => {
          console.log('File uploaded successfully:', response);
          console.log(response)
        })
        .catch(error => {
          console.error('Error uploading file:', error);
        });
    },
  },
};
</script>
