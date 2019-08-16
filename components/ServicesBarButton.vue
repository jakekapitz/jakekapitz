<template>
  <div>
    <a
      :class="[
        service.colorClass,
        'flex flex-col wrap text-white justify-center items-center w-24 h-24 md:w-32 md:h-32 rounded-lg shadow-lg hover:shadow-xl transition-shadow animated-gradient-bg'
      ]"
    >
      <fa :icon="['fal', service.icon]" size="3x" />
      <span
        class="text-center text-xl lg:text-3xl font-mono font-medium lowercase subpixel-antialiased"
        >{{ service.ref }}</span
      >
    </a>
  </div>
</template>

<script>
export default {
  name: 'ServicesBarButton',
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
@keyframes rotate-scale-up-ver {
  0% {
    -webkit-transform: scale(1) rotateY(0);
    transform: scale(1) rotateY(0);
  }
  50% {
    -webkit-transform: scale(2) rotateY(180deg);
    transform: scale(2) rotateY(180deg);
  }
  100% {
    -webkit-transform: scale(1) rotateY(360deg);
    transform: scale(1) rotateY(360deg);
  }
}
</style>
