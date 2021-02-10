const express = require('express')
const app = express();

const port = process.env.PORT || 3000;

//app.set('view engine', 'ejs');
//app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.render("index", {titulo: "my app dinamic"})
})

app.get('/servicios', (req, res) => {
  res.render("servicios", {tituloServicios: "Test dinamic services"})
})

app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "Titulo del sitio web"
  })
})

app.listen(port, () => {
  console.log('servidor a su servicio en el puerto', port)
})