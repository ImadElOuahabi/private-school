const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: 'public/images',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, uniqueSuffix + fileExtension);
  }
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('avatar'), (req, res) => {
  // Handle the uploaded file here
  console.log(req.file);

  // Send the uploaded image URL as a response
  const imageUrl = '/images/' + req.file.filename;
  res.json({ imageUrl });
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
