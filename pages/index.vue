<template>
  <div>
    <no-ssr>
      <vue-particles
        :particles-config="particlesConfig"
        class="absolute w-full h-full z-minus"
      ></vue-particles>
    </no-ssr>
    <div class="container mx-auto p-4">
      <div>
        <header-bar></header-bar>
        <p
          class="font-mono font-weight-bold text-3xl black-blue bg-clip-text text-fill-transparent text-center leading-normaal align-middle mt-4 lg:mt-8 p-4"
        >
          Hi there. I'm a freelance front-end developer and management
          consultant based in Melbourne, Australia.
          <br />
          <br />Full site currently under construction!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '~/components/HeaderBar'
import json from '~/assets/particlesjs-config.json'

export default {
  components: {
    HeaderBar
  },
  head: {
    title:
      'Jake Kapitz |  Front End Web Developer & Business Optimisation Specialist'
  },
  data() {
    return {
      particlesConfig: json
    }
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
