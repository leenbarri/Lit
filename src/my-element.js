import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

import './components/navBar.js';  
import './components/StatisticsCard.js'
import './components/ExpertsTeacher.js'
import './components/ClientMatters.js'
import './components/PopularCourses.js'
import './components/MostPopularCourses.js'
import './components/TestimonialsSection.js'
import './components/TeamMembers.js'
import './components/NewsletterSubscription.js'
import './components/FooterSection.js'
import './components/FooterComponen.js'


export class MyElement extends LitElement {
  render() {
    return html`
      <my-navbar></my-navbar> 
      <statistics-card></statistics-card>
      <experts-teacher></experts-teacher>
      <client-matters></client-matters>
      <popular-courses></popular-courses>
      <most-popular-courses> </most-popular-courses>
      <testimonials-section></testimonials-section>
      <team-members></team-members>
      <newsletter-subscription></newsletter-subscription>
      <footer-section></footer-section>
      <footer-component></footer-component>
     
    `;
  }
}

window.customElements.define('my-element', MyElement); 

