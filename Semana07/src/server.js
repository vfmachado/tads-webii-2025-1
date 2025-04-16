
import express from 'express';
// import path from 'path';
import formidable from 'formidable';

import { uploadToS3 } from './utils/s3/uploadS3.js';

const app = express();

// OBIVAMENTE ESTAMOS SÓ TESTANDO E POR ISSO ESTÁ DESSA MANEIRA
const images = [];

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.get('/', (req, res) => {
    res.render('template', { images: images, currentPage: 1, totalPages: 5});
})

app.post('/api/upload', (req, res, next) => {
    const form = formidable({
        uploadDir: 'public',
        keepExtensions: true,
        maxFiles: 10,   // no maximo 10 arquivos
//        filter: function ({name, originalFilename, mimetype}) {
//            // keep only images
//            return mimetype && mimetype.includes("image");
//          }
    });
  
    form.parse(req, async (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      console.log({ file: files.photo[0]})
      //await uploadToS3(files.photo[0]);
      images.push({
        title: fields.title[0],
        filename: files.photo[0].newFilename
        // url: 'https://tads-2025-webii.s3.us-east-1.amazonaws.com/' + files.photo[0].newFilename
      })
      console.log({ images })
      res.json({ fields, files });
    });
});



app.listen(3000);