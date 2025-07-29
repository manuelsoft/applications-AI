function App() {
  return (
    <main>
      <section>
        <h1>Próximo lanzamiento</h1>
        <p>Nuestro sitio web estará disponible pronto. Estamos desarrollando soluciones inteligentes para empresas modernas.</p>
      </section>

      <section>
        <h2>¿Qué hacemos?</h2>
        <ul>
          <li>Desarrollo de aplicaciones seguras y escalables</li>
          <li>Automatización de procesos críticos</li>
          <li>Agentes de inteligencia artificial personalizados</li>
        </ul>
      </section>

      <section>
        <h2>Contáctanos</h2>
        <p>Escríbenos a <a href="mailto:contacto@tudominio.com">contacto@tudominio.com</a></p>
      </section>

      <footer>
        © 2025 Entilabs. Todos los derechos reservados.
      </footer>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
