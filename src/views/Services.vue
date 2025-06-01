<template>
  <section class="services">
    <h2>SERVICES</h2>
    <hr />
    <div class="engagements">
      <h3>NOS ENGAGEMENTS</h3>
      <p>
        À toutes les étapes de votre projet, Studio Fabian s’engage à réaliser vos exigences.<br /><br />
        On vous accompagne dans tous vos choix et nous vous aidons à réaliser vos intérieurs du debut du projet à sa livraison.<br /><br />
        Nous travaillons en collaboration avec des professionnels soigneusement sélectionnés et des artisans qualifiés afin de vous offrir les meilleurs prestations possibles.
      </p>
      <h3>NOS ACCOMPAGNEMENTS</h3>
      <ul class="accompagnements">
        <li>
          <strong>Visite conseil et consultation initiale</strong><br />
          Un service 100% personnalisé pour partir sur des bonnes bases.
        </li>
        <li>
          <strong>Décoration de votre espace</strong><br />
          Accompagnement dans la recherche du style, les choix des matériaux et meubles ainsi que la réalisation de la décoration.
        </li>
        <li>
          <strong>Etude de conception</strong><br />
          Mise en place du dossier de conception avec les inspirations, le chois des matériaux, meuble et les plans techniques.
        </li>
        <li>
          <strong>Suivi de chantier</strong><br />
          Pas de stress, nous gérons vos travaux de le debut à la fin. Nous serons presents tout au long de cette phase pour coordonner les différents intervenants afin de vous garantir les meilleurs résultats.
        </li>
      </ul>
      <div class="contact-block">
        <h3>VOUS SOUHAITEZ NOUS CONFIER UN PROJET ?</h3>
        <p>NOTRE ÉQUIPE EST DISPONIBLE DU LUNDI AU VENDREDI POUR RÉPONDRE À VOS INTERROGATIONS</p>
        <router-link class="contact-btn" to="/contact">CONTACTEZ-NOUS</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  text-align: center;
  margin-top: 4rem;
}
hr {
  width: 70%;
  margin: 1rem auto;
}
.engagements {
  background-color: #d9c5ad;
  padding: 2rem;
  margin: 2rem auto;
  width: 80%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.engagements h3 {
  margin-bottom: 1rem;
  border-bottom: 1px solid #bfa77a;
  display: inline-block;
  padding-bottom: 0.3rem;
  text-transform: uppercase;
}
.engagements p {
  margin-top: 1rem;
  margin-bottom: 2rem;
  max-width: 700px;
}
.accompagnements {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  max-width: 700px;
  text-align: left;
}
.accompagnements li {
  margin-bottom: 1.5rem;
  background: #f3e8da;
  border-radius: 6px;
  padding: 1rem;
}
.contact-block {
  margin-top: 2rem;
  text-align: center;
}
.contact-btn {
  display: inline-block;
  margin-top: 1rem;
  background: #bfa77a;
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 1px;
  transition: background 0.2s;
}
.contact-btn:hover {
  background: #a68b5b;
}
</style>
