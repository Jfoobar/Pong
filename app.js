const express = require('express');

const app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  }); 

app.use(function(req, res, next) {
    res.status(404)
      .type('text')
      .send('Not Found');
  });
  
  const portNum = process.env.PORT || 3000;
  
app.listen(portNum, () => {
    console.log(`Listening on port ${portNum}`);
  });
  