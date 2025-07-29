function App() {
  return (
    <main id="container">
      <h1>ENTILABS</h1>
      <p>Especialistas en desarrollo de aplicaciones, automatización de procesos críticos y agentes de IA.</p>
      <p className="tagline">Aplicamos la seguridad en todas las fases del desarrollo.</p>
      <p className="launch">¡Lanzamiento próximamente!</p>
      <p>Contacto: <a href="mailto:mpajuelo35@gmail.com">mpajuelo35@gmail.com</a></p>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
