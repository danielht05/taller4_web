import express from 'express';

const app = express();

app.get('/api/health', (req, res) => {
  res.json({ estado: 'ok', mensaje: 'El API está funcionando.' });
});

app.get('/api/info', (req, res) => {
  res.json({
    mensaje: 'El API está funcionando.',
    integrantes: [
            { carnet: '00012325', ciudadOrigen: 'San Salvador', carrera: 'Ingeniería Informática', proyectosRealizados: 4 },
      { carnet: '00045625', ciudadOrigen: 'Santa Tecla', carrera: 'Ingeniería Informática', proyectosRealizados: 3 }
    ]
  });
});

app.listen(3001, () => {
  console.log('API iniciada en http://localhost:3001');
});
