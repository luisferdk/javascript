const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'images/' });

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

app.post('/', upload.single('image'), (req, res) => {
  console.log(req.file);
  console.log(req.body.username);
  res.status(200).json({
    mensaje: 'Subido exitosamente',
  });
});
app.listen(3000, () => {
  console.log('Corriendo en el puerto http://localhost:3000');
});
