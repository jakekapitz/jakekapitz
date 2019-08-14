<template>
  <div>
    <no-ssr>
      <vue-particles
        class="absolute w-full h-full z-minus"
        color="#8e54e9"
        :particle-opacity="0.5"
        :particles-number="60"
        shape-type="circle"
        :particle-size="5"
        lines-color="#4776e6"
        :lines-width="0.75"
        :line-linked="true"
        :line-opacity="0.6"
        :lines-distance="150"
        :move-speed="6"
        :hover-effect="true"
        hover-mode="repulse"
        :click-effect="false"
      ></vue-particles>
    </no-ssr>
    <div class="container mx-auto p-4">
      <div>
        <header-bar></header-bar>
        <p
          class="font-mono font-weight-bold text-3xl black-blue bg-clip-text text-fill-transparent text-center leading-relaxed align-middle mt-8 p-4"
        >
          Hi there. I'm a freelance front-end developer and management
          consultant based in Melbourne, Australia.<br /><br />
          Full site currently under construction!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '~/components/HeaderBar.vue'

export default {
  components: {
    HeaderBar
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.z-minus {
  z-index: -1;
}
</style>
