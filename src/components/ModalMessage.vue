<template>
  <transition name="modal-msg">
    <div class="modal-msg__overlay" @click.self="$emit('close')">
      <div class="modal-msg__container">
        <h2 class="modal-msg__title">
          {{ `Товар добавлен в ${msgTitle}` }}
        </h2>
        <p class="modal-msg__info">Наименование: {{ productName }}</p>
        <p class="modal-msg__info">Количество: {{ productQuantity }}</p>
        <p class="modal-msg__info">
          Цена:
          {{ productPrice * productQuantity }}
        </p>
        <button class="modal-msg__button button" @click="$emit('close')">
          Оформить заказ</button
        ><button class="modal-msg__button button" @click="$emit('close')">
          Продолжить покупки
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalMessage",
  props: {
    msgTitle: String,
    productName: String,
    productQuantity: Number,
    productPrice: Number,
  },
};
</script>
