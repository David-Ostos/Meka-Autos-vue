<template>
      <!-- SECTION -->
  <div class="section">
    <!-- container -->
    <div class="container">
      <!-- row -->
      <div class="">
        <div class="container-product">
  
          <!-- Product main img -->
          <div class="img-show">
            <div id="product-main-img">
              <div class="product-preview">
                <img src="../../img/carro/carro5.jpeg" alt="" />
              </div>
            </div>
          </div>
          <!-- /Product main img -->
    
          <!-- Product thumb imgs -->
          <div class="img-secondary">
            <div id="product-imgs">
              <div class="product-preview">
                <img src="../../img/carro/carro5.jpeg" alt="" />
              </div>
    
              <div class="product-preview">
                <img src="../../img/carro/carro5.jpeg" alt="" />
              </div>
    
              <div class="product-preview">
                <img src="../../img/carro/carro5.jpeg" alt="" />
              </div>
    
              <div class="product-preview">
                <img src="../../img/carro/carro5.jpeg" alt="" />
              </div>
            </div>
          </div>
          <!-- /Product thumb imgs -->
        </div>

        <!-- Product details -->
        <div class="col-md-5">
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
    <!-- /container -->
  </div>
  <!-- /SECTION -->
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">

.container-product{
  display: flex;
  
}
.img-show{
  width: 41%;
}
.img-secondary{
  width: 16%;
}
#product-imgs{
  overflow: hidden;
  height: 459px;
}


</style>