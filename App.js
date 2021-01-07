var axios = require('axios'),
fs = require('fs');
module.exports = async (key) => {
var data = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key||'DEMO_KEY'}`),
image = await axios.get(data.data.url, {responseType: 'arraybuffer'})
fs.writeFileSync('./astro.png', image.data, (err) => {
    if (err) throw err;
})
return data.data
}