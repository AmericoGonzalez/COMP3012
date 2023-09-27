const fs = require('fs/promises');

async function readData() {
  try {
    const data = await fs.readFile('products.json', 'utf8');
    const jsonData = JSON.parse(data);

    // Check if the JSON data is an array
    if (Array.isArray(jsonData)) {
      // Assuming jsonData is an array of products
      jsonData.forEach(product => {
        console.log(product.title);
      });
    } else if (jsonData.products) {
      // Assuming jsonData has a "products" property containing an array of products
      jsonData.products.forEach(product => {
        console.log(product.title);
      });
    } else {
      console.error('Data format is not as expected.');
    }
  } catch (error) {
    console.error('Error reading data:', error);
  }
}

readData();

