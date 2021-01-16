<template>
  <div>
    明细,{{ this.$route.params.id }}
  </div>
</template>

<script>
import { getById } from '@/api/journey'

export default {
  name: 'Detail',
  data() {
    return {
      journey: {}
    }
  },
  created() {
    this.fetchExplore()
  },
  methods: {
    fetchExplore() {
      getById(this.$route.params.id).then(value => {
        const { data } = value
        this.journey = data
      })
    }
  }
}
</script>

<style scoped>

</style>
