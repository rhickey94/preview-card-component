<script setup></script>

<template>
  <div class="preview-card">
    <div class="product-image">
      <img
        src="../assets/image-product-desktop.jpg"
        width="300"
        height="450"
        alt="weenus"
      />
    </div>
    <div class="product-information">
      <div class="product-type">Perfume</div>
      <div class="product-header">Gabrielle Essence Eau De Parfum</div>
      <div class="product-description">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </div>
      <div class="price-row">
        <span class="current-price">$149.99</span>
        <span class="original-price">$169.99</span>
      </div>
      <button class="add-cart">
        <div class="button-content">
          <img
            src="../assets/icon-cart.svg"
            height="16"
            width="14"
            alt="weenus"
          />
          <span class="button-text">Add to Cart</span>
        </div>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preview-card {
  background-color: var(--color-card);
  border-radius: 10px;
  width: 600px;
  height: 450px;
  display: flex;
}
.product-image img {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.product-information {
  padding: 32px;
}
.product-type {
  margin-bottom: 20px;
}
.product-header {
  height: 96px;
  margin-bottom: 24px;
}
.product-description {
  margin-bottom: 29px;
}
.price-row {
  margin-bottom: 30px;
}
.add-cart:hover {
  background-color: var(--color-button-hover);
}
</style>
