import { useEffect, useState } from 'react';
import { Container, Card, CardBody, CardTitle, CardText, Alert } from 'reactstrap';

function App() {
  const [salud, setSalud] = useState('Consultando el API...');
  const [errorSalud, setErrorSalud] = useState(false);
  const [mensaje, setMensaje] = useState('Consultando información...');
  const [integrantes, setIntegrantes] = useState([]);
  const [errorInfo, setErrorInfo] = useState(false);

  useEffect(() => {
    async function cargarSalud() {
      try {
        const respuesta = await fetch('/api/health');
        if (!respuesta.ok) {
          throw new Error('Error al consultar el API.');
        }
        const datos = await respuesta.json();
        setSalud(datos.mensaje);
      } catch (error) {
        setErrorSalud(true);
        setSalud('No se pudo conectar con el API.');
      }
    }

    async function cargarInfo() {
      try {
        const respuesta = await fetch('/api/info');
        if (!respuesta.ok) {
          throw new Error('Error al consultar la información.');
        }
        const datos = await respuesta.json();
        setMensaje(datos.mensaje);
        setIntegrantes(datos.integrantes);
      } catch (error) {
        setErrorInfo(true);
        setMensaje('No se pudo cargar la información.');
      }
    }

    cargarSalud();
    cargarInfo();
  }, []);

  return (
    <Container className="pagina">
      <h1>Taller IV</h1>
      <section className={errorSalud ? 'estado estado-error' : 'estado'}>
        <div>
          <h4>Estado del API</h4>
          <p role="status">{salud}</p>
        </div>
      </section>
      <section className="informacion">
        <h2>Información de los integrantes</h2>
        <Alert color={errorInfo ? 'danger' : 'info'}>{mensaje}</Alert>
        {integrantes.map((integrante, indice) => (
          <Card key={indice} className="mb-3">
            <CardBody>
              <CardTitle tag="h4">Integrante {indice + 1}</CardTitle>
              <CardText><strong>Carnet:</strong> {integrante.carnet}</CardText>
              <CardText><strong>Ciudad de origen:</strong> {integrante.ciudadOrigen}</CardText>
              <CardText><strong>Carrera:</strong> {integrante.carrera}</CardText>
              <CardText><strong>Proyectos realizados:</strong> {integrante.proyectosRealizados}</CardText>
            </CardBody>
          </Card>
        ))}
      </section>
    </Container>
  );
}

export default App;
