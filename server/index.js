import cors from 'cors'
import express from 'express'

import { download } from './download.js'

const app = express();
app.use(cors())

app.get("/summary/:id", (request, response) => {
  const { id } = request.params;
  download(id);
  response.json({ result: "Download do vídeo realizado com sucesso! "});
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})