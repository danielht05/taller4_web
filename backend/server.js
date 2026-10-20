import express from 'express';

const app = express();

app.get('/api/health', (req, res) => {
  res.json({ estado: 'ok', mensaje: 'El API está funcionando.' });
});

app.get('/api/info', (req, res) => {
  res.json({
    mensaje: 'El API está funcionando.',
    integrantes: [
      { carnet: '', ciudadOrigen: '', carrera: '', proyectosRealizados: null },
      { carnet: '', ciudadOrigen: '', carrera: '', proyectosRealizados: null }
    ]
  });
});

app.listen(3001, () => {
  console.log('API iniciada en http://localhost:3001');
});
