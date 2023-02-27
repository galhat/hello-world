console.log("Hello Ganesh");
//import axios from 'axios';
const axios = require('axios');
const prompt = 'Hello, how are you doing today?';
const model = 'text-davinci-002'; // the name of the model to use
axios({
    method: 'post',
    url: 'https://api.openai.com/v1/engines/' + model + '/completions',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY, // your OpenAI API key
    },
    data: {
      'prompt': prompt,
      'max_tokens': 100,
      'n': 1,
      'stop': ''
    }
})
.then(function(response){
    console.log("Entered in function");
     console.log(response.data.choices[0]);
})