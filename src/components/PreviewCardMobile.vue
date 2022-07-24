<script setup></script>

<template>
  <div class="preview-card">
    <div class="product-image">
      <img
        src="../assets/image-product-mobile.jpg"
        width="343"
        height="240"
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
  width: 343px;
  height: 611px;
}
.product-image {
  height: 240px;
}
.product-image img {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.product-information {
  padding: 24px;
}
.product-type {
  margin-bottom: 12px;
}
.product-header {
  height: 64px;
  margin-bottom: 16px;
}
.product-description {
  margin-bottom: 24px;
}
.price-row {
  margin-bottom: 20px;
}
</style>
