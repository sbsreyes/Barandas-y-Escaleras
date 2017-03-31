'use strict';

const page = require('page'),
      yo = require('yo-yo');

var main = document.getElementById('main-container');

page('/', (ctx, next) =>{
  var main = document.getElementById('main-container');
  var el = yo`<div>
  <div class="portada">
    <div class="container">
      <div class="cover1">
        <p>Catálogo Online</p>
        <h3>Decoración</h3>
      </div>
      <div class="cover2">
        <i class="icon-cart"></i> <p class="price">Los mejores Precios</p> <br>
        <p>La mejor elección para tu hogar
          <br> y oficina</p>
      </div>
      <div class="cover3">
        <h3>
          Bienvenido a Barandas y Escaleras
        </h3>
        <p>
          Acá podrás ver todos los productos que ofrecemos y tomar una mejor decisión respecto a tu compra
        </p>
      </div>
      <div class= "cover4">
        <h1>Barandas y Escaleras</h1>
        <h5>Somos una empresa legalmente constituida,
        que comercializa, diseña, remodela, y crea productos
        elaborados en hierro, acero y bronce; propios de
        interiores de casa, apartamentos y oficinas.</h5>
      </div>
    </div>
  </div>
  <section id ="top-products" class="contenedor">
   <div class="row msg">
    <div class="col s12">
     <h5>Nuestros nuevos productos</h5>
    </div>
   </div>

   <div class="row">
    <div class = "col s12 m3">
        <div class="card high">
          <div class="card-image">
            <img src="images/23.jpg">
          </div>
          <div class="card-content">
            <p>Baranda de Acero</p>
            <p>$400.000</p>
          </div>
          <div class="card-action">
            <a class = "btn waves-effect waves-light">Comprar</a>
          </div>
        </div>
    </div>
      <div class = "col s12 m3">
        <div class="card">
          <div class="card-image">
            <img src="images/38.jpg">
          </div>
          <div class="card-content">
            <p>Baranda en Forja</p>
            <p>$400.000</p>
          </div>
          <div class="card-action">
            <a class = "btn waves-effect waves-light">Comprar</a>
          </div>
        </div>
    </div>
      <div class = "col s12 m3">
        <div class="card">
          <div class="card-image">
            <img src="images/24.jpg">
          </div>
          <div class="card-content">
            <p>Baranda en Forja</p>
            <p>$400.000</p>
          </div>
          <div class="card-action">
            <a class = "btn waves-effect waves-light">Comprar</a>
          </div>
        </div>
    </div>
     <div class = "col s12 m3">
        <div class="card">
          <div class="card-image">
            <img src="images/26.jpg">
          </div>
          <div class="card-content">
            <p>Baranda en Forja</p>
            <p>$400.000</p>
          </div>
          <div class="card-action">
            <a class = "btn waves-effect waves-light">Comprar</a>
          </div>
        </div>
    </div>
   </div>
  </section>
  <section id="special-products" class="contenedor">
   <div class ="row msg">
    <div class="col s12">
     <h3>Productos Especiales para ti cada semana</h3>
    </div>
   </div>
   <div class="row">
    <div class = "col s12 m2">
        <div class="card">
          <div class="card-image">
            <img src="images/233.jpg">
          </div>
          <div class="card-content">
            <p>Baranda en Forja</p>
            <p>$400.000</p>
          </div>
          <div class="card-action">
            <a class = "btn-small waves-effect waves-light">Comprar</a>
          </div>
        </div>
    </div>
    <div class = "col s12 m2">
        <div class="card">
          <div class="card-image">
            <img src="images/217.jpg">
          </div>
          <div class="card-content">
            <p>Baranda en Forja</p>
            <p>$400.000</p>
          </div>
          <div class="card-action">
            <a class = "btn-small waves-effect waves-light">Comprar</a>
          </div>
        </div>
    </div>
    <div class = "col s12 m2">
        <div class="card">
          <div class="card-image">
            <img src="images/219.jpg">
          </div>
          <div class="card-content">
            <p>Baranda en Forja</p>
            <p>$400.000</p>
          </div>
          <div class="card-action">
            <a class = "btn-small waves-effect waves-light">Comprar</a>
          </div>
        </div>
    </div>
    <div class = "col s12 m2">
        <div class="card">
          <div class="card-image">
            <img src="images/220.jpg">
          </div>
          <div class="card-content">
            <p>Baranda en Forja</p>
            <p>$400.000</p>
          </div>
          <div class="card-action">
            <a class = "btn-small waves-effect waves-light">Comprar</a>
          </div>
        </div>
    </div>
    <div class = "col s12 m2">
        <div class="card">
          <div class="card-image">
            <img src="images/231.jpg">
          </div>
          <div class="card-content">
            <p>Baranda en Forja</p>
            <p>$400.000</p>
          </div>
          <div class="card-action">
            <a class = "btn-small waves-effect waves-light">Comprar</a>
          </div>
        </div>
    </div>
    <div class = "col s12 m2">
        <div class="card">
          <div class="card-image">
            <img src="images/215.jpg">
          </div>
          <div class="card-content">
            <p>Baranda en Forja</p>
            <p>$400.000</p>
          </div>
          <div class="card-action">
            <a class = "btn-small waves-effect waves-light">Comprar</a>
          </div>
        </div>
    </div>
   </div>
  </section>
  <section id="top-products" class= "contenedor">
   <div class="row">
    <div class="col s12 m4">
     <h3>Productos TOP</h3>
    </div>
    <div class="col s12 m4">
     <h3>Productos TOP</h3>
    </div>
    <div class="col s12 m4">
     <h3>Productos TOP</h3>
    </div>
   </div>

   <div class="row">
    <div class="col s12 m4">
    <div class="card horizontal">
    <div class="card-image">
      <img src="images/11.jpg">
    </div>
    <div class="card-stacked">
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
   </div>
      <div class="col s12 m4">
    <div class="card horizontal">
    <div class="card-image">
      <img src="images/19.jpg">
    </div>
    <div class="card-stacked">
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
   </div>

  <div class="col s12 m4">
    <div class="card horizontal">
      <div class="card-image">
        <img src="images/22.jpg">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
   </div>
   <div class="row">
    <div class="col s12 m4">
      <div class="card horizontal">
        <div class="card-image">
          <img src="images/27.jpg">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col s12 m4">
      <div class="card horizontal">
        <div class="card-image">
          <img src="images/28.jpg">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col s12 m4">
      <div class="card horizontal">
        <div class="card-image">
          <img src="images/31.jpg">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
     </div>
    </div>
    <div class="row">
      <div class="col s12 m4">
        <div class="card horizontal">
          <div class="card-image">
            <img src="images/118.jpg">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card horizontal">
          <div class="card-image">
            <img src="images/212.jpg">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card horizontal">
        <div class="card-image">
          <img src="images/312.jpg">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
        </div>
      </div>
   </div>
  </section>
  </div>`;
  main.appendChild(el);
});

page();
