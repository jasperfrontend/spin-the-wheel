<template>
  <span class="loading">
    <span class="one">.</span>
    <span class="two">.</span>
    <span class="three">.</span>
  </span>
</template>

<style>
.loading {
  color: #fff;
}
.loading .one {
  animation: dot 1.3s infinite;
  animation-delay: 0s;
}
.loading .two {
  animation: dot 1.3s infinite;
  animation-delay: 0.2s;
}
.loading .three {
  animation: dot 1.3s infinite;
  animation-delay: 0.3s;
}

@keyframes dot {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
