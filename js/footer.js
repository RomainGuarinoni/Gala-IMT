class PageFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <div class="footer-container">
      <div class="footer-logo">
        <img src="../assets/logos/simple_logo.png">
      </div>
      <div class="blocLeft"></div>
      <div class="footer-social-media">
        <p>Suivez nous sur les réseaux sociaux!</p> 
        <div class="logoReseaux">
          <a href="https://www.facebook.com/gala.imtnordeurope" target="_blank"><i class="fa fa-facebook-square"></i></a>
          <a href="https://www.instagram.com/gala_imtnordeurope/" target="_blank"><i class="fa fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/gala-imt-nord-europe/" target="_blank"><i class="fa fa-linkedin"></i></a>
          <a href="#" target="_blank"><i class="fa fa-youtube"></i></a>
        </div>
      </div>
      <div class="footer-info">
        <div class="text1">
          <p>Le Comité du Gala 2022</p>
          <p>IMT Nord Europe</p>
        </div>
        <div class="text2">
          <p>Rendez-vous le 05 Février 2022</p>
          <p>Au Casino de Saint-Amand-Les-Eaux</p>
        </div>
      </div>
      <div class="blocRight"></div>
      <div class="footer-sponsors">
        <img src="../assets/logos/edf_white.webp">
      </div>
    </div>
      `;
  }
}

class PageFooterHome extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <div class="footer-container">
      <div class="footer-logo">
        <img src="assets/logos/simple_logo.png">
      </div>
      <div class="blocLeft"></div>
      <div class="footer-social-media">
        <p>Suivez nous sur les réseaux sociaux!</p> 
        <div class="logoReseaux">
          <a href="https://www.facebook.com/gala.imtnordeurope" target="_blank"><i class="fa fa-facebook-square"></i></a>
          <a href="https://www.instagram.com/gala_imtnordeurope/" target="_blank"><i class="fa fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/gala-imt-nord-europe/" target="_blank"><i class="fa fa-linkedin"></i></a>
          <a href="#" target="_blank"><i class="fa fa-youtube"></i></a>
        </div>
      </div>
      <div class="footer-info">
        <div class="text1">
          <p>Le Comité du Gala 2022</p>
          <p>IMT Nord Europe</p>
        </div>
        <div class="text2">
          <p>Rendez-vous le 05 Février 2022</p>
          <p>Au Casino de Saint-Amand-Les-Eaux</p>
        </div>
      </div>
      <div class="blocRight"></div>
      <div class="footer-sponsors">
        <img src="assets/logos/edf_white.webp">
      </div>
    </div>
      `;
  }
}

// Define the new element
customElements.define("page-footer", PageFooter);
customElements.define("page-footer-home", PageFooterHome);
