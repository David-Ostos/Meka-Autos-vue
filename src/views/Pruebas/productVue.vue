<template>
  <HeaderVue />
  <div style="height: 133px"></div>
  <div class="container mx-auto my-8 font-roboto">
    <!-- row -->
    <div class="flex mt-0 mx-[calc(1.5rem/-2)]">
      <!-- Product main img -->
      <div class="md:w-5/12 md:left-[16.66667%] px-[calc(1.5rem/2)]">
        <div id="product-main-img">
          <div class="product-preview">
            <img src="../../img/carro/carro5.jpeg" class="w-full" alt="" />
          </div>
        </div>
      </div>
      <!-- /Product main img -->

      <!-- Product thumb imgs -->
      <div class="md:w-1/6 right-[41.66666667%] px-[calc(1.5rem/2)]">
        <div class="overflow-hidden max-h-[390px]">
          <div id="product-imgs">
            <div class="">
              <img
                class="m-[0_5px] border-[1px] border-solid border-[#E4E7ED]"
                src="../../img/carro/carro5.jpeg"
                alt=""
              />
            </div>

            <div class="">
              <img
                class="m-[0_5px] border-[1px] border-solid border-[#E4E7ED]"
                src="../../img/carro/carro5.jpeg"
                alt=""
              />
            </div>

            <div class="">
              <img
                class="m-[0_5px] border-[1px] border-solid border-[#E4E7ED]"
                src="../../img/carro/carro5.jpeg"
                alt=""
              />
            </div>

            <div class="">
              <img
                class="m-[0_5px] border-[1px] border-solid border-[#E4E7ED]"
                src="../../img/carro/carro5.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <!-- /Product thumb imgs -->

      <!-- Product details -->
      <div class="md:w-5/12 px-[calc(1.5rem/2)]">
        <div class="product-details">
          <h2 class="product-name">EL NOMBRE DEL PRODUCTO VA AQUÍ</h2>
          <div>
            <div class="product-rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <a class="review-link" href="#">10 Reseña(s) | Agrega tu evaluación</a>
          </div>
          <div>
            <h3 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h3>
            <span class="product-available">En Stock</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div class="product-options">
            <label>
              Tamaño
              <select class="input-select">
                <option value="0">X</option>
              </select>
            </label>
            <label>
              Color
              <select class="input-select">
                <option value="0">Rojo</option>
              </select>
            </label>
          </div>

          <div class="add-to-cart">
            <div class="qty-label">
              Cantidad
              <div class="input-number">
                <input type="number" />
                <span class="qty-up">+</span>
                <span class="qty-down">-</span>
              </div>
            </div>
            <button class="add-to-cart-btn">
              <i class="fa fa-shopping-cart"></i> Agregar al Carrito
            </button>
          </div>

          <ul class="product-btns">
            <li>
              <a href="#"><i class="fa fa-heart-o"></i> añadir a la lista de deseos</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-exchange"></i> Añadir a comparar</a>
            </li>
          </ul>

          <ul class="product-links">
            <li>Categoria:</li>
            <li><a href="#">Auriculares</a></li>
            <li><a href="#">Accesorios</a></li>
          </ul>

          <ul class="product-links">
            <li>Compartir:</li>
            <li>
              <a href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-google-plus"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-envelope"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <!-- /Product details -->
    </div>
    <!-- /row -->
  </div>

  <ProductSlider title="Top en Ventas" />
  <FooterPrincipal />
</template>

<script setup lang="ts">
import FooterPrincipal from '../components/footerPrincipal.vue';
import HeaderVue from '../components/headerVue.vue';

import ProductSlider from '../home/productSlider.vue';
</script>

<style scoped lang="scss">
/* @import '../../css/mdb.min.css';
@import '../../style/style.css'; */
.product-name {
  text-transform: uppercase;
  font-size: 18px;
  color: #2b2d42;
  font-weight: 700;
  margin: 0 0 10px;
}
.review-link {
  font-size: 12px;
}
.product-rating > i {
  color: #e4e7ed;
}
.product-rating > i.fa-star {
  color: #0078d4;
}
.product-price {
  display: inline-block;
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 15px;
  color: #0078d4;
  font-weight: 700;
  line-height: 1.2;
}
.product-old-price {
  font-size: 70%;
  font-weight: 400;
  color: #8d99ae;
}
.product-details .review-link {
  font-size: 12px;
}
.product-details .product-available {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  margin-left: 30px;
  color: #0078d4;
}
.product-details {
  color: #2b2d42c7;
  /*   font-family: Segoe UI Local, 'Segoe UI Web (West European)'; */
  .product-rating {
    display: inline-block;
    margin-right: 15px;
    color: #0078d4;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    border: none;
  }
  a {
    color: #2b2d42c7;
    font-weight: 500;
    -webkit-transition: 0.2s color;
    transition: 0.2s color;
    text-decoration: none;
  }
  p {
    line-height: 1.33em;
    color: #7e7e7e;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 14px;
  }
}
.product-options {
  margin-top: 30px;
  margin-bottom: 30px;
  label {
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 15px;
    margin-bottom: 0px;
  }
}
.input-select {
  width: 90px;
  padding: 0px 15px;
  background: #fff;
  border: 1px solid #e4e7ed;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  margin-right: 15px;
}
.add-to-cart {
  margin-bottom: 30px;
}
.qty-label {
  display: inline-block;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 15px;
  margin-bottom: 0px;
}
.input-number {
  width: 90px;
  display: inline-block;
  position: relative;
}
input[type='number'] {
  -moz-appearance: textfield;
  height: 40px;
  width: 100%;
  border: 1px solid #e4e7ed;
  background-color: #fff;
  padding: 0px 35px 0px 15px;
}
.qty-up {
  right: 0;
  top: 0;
  border-bottom: 0px;
}
.input-number .qty-down {
  right: 0;
  bottom: 0;
}
.add-to-cart-btn {
  position: relative;
  border: 2px solid transparent;
  height: 40px;
  padding: 0 30px;
  background-color: #ef233c;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 40px;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
  cursor: pointer;
  > i {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    line-height: 38px;
    color: #0078d4;
    opacity: 0;
    visibility: hidden;
  }
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
.product-btns li {
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
}
.product-btns li + li {
  margin-left: 15px;
}
.product-links {
  margin-top: 15px;
}
.product-details .product-links li {
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
}
.product-links li + li {
  margin-left: 10px;
}
.input-number .qty-up,
.input-number .qty-down {
  position: absolute;
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #e4e7ed;
  background-color: #fff;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>

<!-- 
  Si el valor de `anchoDiv` es 0, es posible que se deba a que se está intentando acceder al ancho de la div antes de que se haya renderizado. En ese caso, puedes utilizar el gancho de ciclo de vida `onUpdated()` para asegurarte de que la div se haya renderizado antes de acceder a su ancho. Por ejemplo:

```html
<template>
  <div ref="miDiv"></div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';

export default {
  setup() {
    const miDiv = ref(null);
    const anchoDiv = ref(0);

    onMounted(() => {
      anchoDiv.value = miDiv.value.offsetWidth;
    });

    onUpdated(() => {
      anchoDiv.value = miDiv.value.offsetWidth;
    });

    return {
      miDiv,
      anchoDiv,
    };
  },
};
</script>
```

Espero que esto te ayude. ¿Hay algo más en lo que pueda ayudarte?
 -->
