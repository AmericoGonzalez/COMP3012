const axios = require('axios');
const fs = require('fs/promises');

async function fetchData() {
  try {
    const response = await axios.get('https://dummyjson.com/products?limit=10');
    const data = response.data;

    // Save the JSON response to a file called "products.json"
    await fs.writeFile('products.json', JSON.stringify(data, null, 2));
    
    console.log('Data has been collected and saved to products.json');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
