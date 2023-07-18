<template>
  <div class="cerrarNav" id="cerrarNav">
    <div class="exit" @click="emit('activeNav')">

    </div>
    <div id="responsive-nav" class="responsive-nav px-4 w-screen md:w-2/5 max-w-md">
      <div class="container-logo">
        <img src="../../img/user.png" alt="Foto del usuario" width="64" height="64" />
        <div class="">
          <a class="btn-exit " href="#"><i @click="emit('activeNav')" class="icon-exit fas fa-times "></i></a>
        </div>
      </div>

      <hr />
      <h2 class="nav-title">Abrahan Pulido</h2>
      <hr />
      <div class="scrollable-list scrollbar-cyan">
        <ul class="list-unstyled">
          <li>
            <button 
              data-te-ripple-init 
              data-te-ripple-color="light"
              class="btn-categoria btn-primary">
                <i class="fas fa-home"></i> Inicio
            </button>
          </li>
          <li>
            <button 
              data-te-ripple-init 
              data-te-ripple-color="light"
              class="btn-categoria btn-dark">
                <i class="fas fa-bell"></i> Notificaciones
            </button>
          </li>
          <li>
            <button 
              data-te-ripple-init 
              data-te-ripple-color="light"
              class="btn-categoria btn-dark">
                <i class="fas fa-envelope"></i> Mensajes
            </button>
          </li>
          <hr />
          <h2 class="nav-title">MekAuto</h2>
          <li>
            <button 
              data-te-ripple-init 
              data-te-ripple-color="light"
              class="btn-categoria btn-dark">
                <i class="fas fa-star"></i> Lista de favoritos
            </button>
          </li>
          <li>
            <button 
              data-te-ripple-init 
              data-te-ripple-color="light"
              class="btn-categoria btn-dark">
                <i class="fas fa-bookmark"></i> Guardados
            </button>
          </li>
          <li>
            <button 
              data-te-ripple-init 
              data-te-ripple-color="light"
              class="btn-categoria btn-dark">
                <i class="fas fa-history"></i> Comprar otra vez
            </button>
          </li>
          <li>
            <button 
              data-te-ripple-init 
              data-te-ripple-color="light"
              class="btn-categoria btn-dark">
                <i class="fas fa-shopping-bag"></i> Compras
            </button>
          </li>
          <li>
            <button 
              data-te-ripple-init 
              data-te-ripple-color="light"
              class="btn-categoria btn-dark">
                <i class="fas fa-gavel"></i> Subastas y Ofertas
            </button>
          </li>
          <li>
            <button 
              data-te-ripple-init 
              data-te-ripple-color="light"
              class="btn-categoria btn-dark">
                <i class="fas fa-dollar-sign"></i> Ventas
            </button>
          </li>
          <hr />
          <li>
            <button 
              data-te-ripple-init 
              data-te-ripple-color="light"
              class="btn-categoria btn-dark">
                <i class="fas fa-list"></i> Categorías
            </button>
          </li>
          <li>
            <button 
              data-te-ripple-init 
              data-te-ripple-color="light"
              class="btn-categoria btn-dark">
                <i class="fas fa-tags"></i> Ofertas
            </button>
          </li>
          <li>
            <button 
              data-te-ripple-init 
              data-te-ripple-color="light"
              class="btn-categoria btn-dark">
                <i class="fas fa-cog"></i> Configuración
            </button>
          </li>
          <li>
            <button 
              data-te-ripple-init 
              data-te-ripple-color="light"
              class="btn-categoria btn-dark">
                <i class="fas fa-question-circle"></i> Ayuda
            </button>
          </li>
        </ul>
      </div>

      <footerPrincipal />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import footerPrincipal from './footerPrincipal.vue';
import {
  Ripple,
  initTE,
} from "tw-elements";
onMounted(() =>{
  initTE({ Ripple });
})
const emit = defineEmits(['activeNav'])

</script>

<style scoped lang="scss">
/* ===== Scrollbar CSS ===== */
/* Firefox */
#responsive-nav {
  scrollbar-width: auto;
  scrollbar-color: #beb3c1 #ffffff;
}

/* Chrome, Edge, and Safari */
#responsive-nav::-webkit-scrollbar {
  width: 0px;
}

#responsive-nav::-webkit-scrollbar-track {
  background: #ffffff;
}

#responsive-nav::-webkit-scrollbar-thumb {
  background-color: $primary-color;
  border-radius: 10px;
  border: 0px solid #ffffff;
}

hr {
  margin: 1rem 0;
  height: 1px;
  color: white;
  background-color: currentColor;
  opacity: 0.25;
}

.cerrarNav {
  position: fixed;
  -webkit-transform: translateX(-100vw);
  -ms-transform: translateX(-100vw);
  transform: translateX(-100vw);
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
  z-index: 5;
}

.exit {
  width: 100vw;
  height: 100vh;
  position: fixed;
}

#responsive-nav {
  position: relative;
  left: 0;
  top: 0px;
  background: #15161d;
  height: 100vh;
  overflow: hidden;
  z-index: 2;
  padding-top: 20px;

  /*max-height: 60vh;*/
  overflow-y: auto;


}

.responsive-nav {
  display: flex;
  flex-direction: column;

}

.container-logo {
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    border-radius: 50%;
  }

  .btn-exit {

    .icon-exit {
      display: flex;
      background-color: white;
      border-color: white;
      color: #0078d4;
      border: 2px solid;
      height: 2.5rem;
      width: 2.5rem;
      /* text-align: center; */
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      transition: all .5s;
      transform-origin: center;
    }
  }

  .icon-exit:hover {
    transform: rotate(180deg);
    background-color: #f3f3f3;
  }

  .icon-exit:active {
    transition: all .1s;
    background-color: #aaaaaa;
  }
}


.nav-title {
  color: white;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
}

.btn-primary {
  color: #fff;
  background-color: #0062ae;
  border-color: #0062ae;
}

.btn-categoria {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  margin-bottom: 0.25rem;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  text-decoration: none;
  text-overflow: ellipsis;
  padding: 0.5rem 1.5rem;
  font-size: .875rem;
  line-height: 1.3;
  font-weight: 600;
  border-radius: 20px;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
}

.btn-dark {
  color: #fff;
  background-color: #201f1e;
  border-color: #201f1e;

  :hover {
    background-color: #0c0c0b;
  }
}

#navigation {
  background: #fff;
  border-bottom: 2px solid #e4e7ed;
  border-top: 3px solid #0078d4;
}



@media screen and (max-width: 5991px) {
  /*-------------scroll---------------*/

  .cerrarNav.active {
    -webkit-transform: translateY(0%);
    -ms-transform: translateY(0%);
    transform: translateY(0%);
    width: 100%;
  }
}

@media screen and (max-width: 450px) {
  #responsive-nav {
    max-width: 100%;
  }

  #responsive-nav::-webkit-scrollbar {
    display: none;
  }
}
</style>
