const axios  = require('axios');

axios.defaults.headers.post['Ocp-Apim-Subscription-Key'] = 'f6b55b4ff4214bf6b28ba29e72e34a82';

let endPoint = 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?';
axios.post (endPoint,{
    url:"http://hd.wallpaperswide.com/thumbs/dr_house_hugh_laurie-t2.jpg"
}).then((res)=>{
    console.log(res.data)
}).catch((err)=>{
    console.log(err);
})

//test