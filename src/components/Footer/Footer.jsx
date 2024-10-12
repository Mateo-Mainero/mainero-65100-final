import React from 'react';
import './Footer.module.scss';

function Footer() {
  return (
    <footer className=" text-light py-3">
      <div className="container">
        <div className="row">

          {/* Columna del mapa */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase mb-3">Encuéntranos</h5>
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509865!2d144.95373531550454!3d-37.81720974201552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1a56719%3A0x464552d5dbf6d041!2sFederation%20Square%2C%20Melbourne%20VIC%203001%2C%20Australia!5e0!3m2!1sen!2sus!4v1633333200631!5m2!1sen!2sus"
              width="100%" 
              height="150"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Columna de "Quiénes somos" */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase mb-3">Quiénes somos</h5>
            <p>Ofrecemos soluciones tecnológicas innovadoras para empresas. Nuestro objetivo es facilitar la transformación digital.</p>
          </div>

          {/* Columna de contacto y redes sociales */}
          <div className="col-md-4 mb-3">
          <h5 className="text-uppercase mb-3">
            <a href="https://www.instagram.com/benjamainero/" target="_blank" rel="noopener noreferrer">Contáctanos</a></h5>
            <ul className="list-unstyled">
              <li><i className="fas fa-envelope"></i> TheLordOfTheRings@outlook.com</li>
              <li><i className="fas fa-phone"></i> +54 11 1234 5678</li>
              <li><i className="fas fa-map-marker-alt"></i> Flia Bolson, La Comarca</li>
            </ul>
          </div>

        </div>

        {/* Fila de enlaces adicionales */}
        <div className="row mt-2">
          <div className="col text-center">
            <a href="/about" className="text-light me-4">Sobre nosotros</a>
            <a href="https://www.instagram.com/benjamainero/" target="_blank" rel="noopener noreferrer" className="text-light me-4">Contacto</a>
            <a href="/faq" className="text-light me-4">FAQs</a>
            <a href="https://es.wikipedia.org/wiki/Pol%C3%ADtica_de_privacidad" target="_blank" rel="noopener noreferrer" className="text-light me-4">Política de privacidad</a>
          </div>
        </div>
      </div>

      {/* Fila de copyright */}
      <div className="text-center py-2 mt-3" >
        <p className="mb-0">© 2024 Star-Lord. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

