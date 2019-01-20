<template>
  <div>
    <h2>Definition:</h2>
    <p></p>
    <h2>View:</h2>

<div>
    <label>Route name:</label>
    <input type="text" v-model="url" :disabled="mode !== 'normal'">
</div>
<div>
    <label>Route data:</label>
    <input type="text" v-model="data" :disabled="mode === 'normal'">
</div>
<div>
    <label>Route type:</label>
    <input type="radio" v-model="mode" value="normal">
    <input type="radio" v-model="mode" value="query">
    <input type="radio" v-model="mode" value="params">
    {{mode}}
</div>

    <button @click="navigateBack()">Back</button>
    <button @click="navigate(url, mode, data)">Navigate</button>
  </div>
</template>

<script>
export default {
  name: 'Programmatic',
  data: () => ({
    url: '',
    mode: 'normal',
    data: 'something',
  }),
  methods: {
    navigate(name, mode = 'normal', data) {
      if (mode === 'normal') this.$router.push({ name })
      else if (mode === 'query') this.$router.push({ name: 'querystring', query: { data } })
      else this.$router.push({ name: 'paramsSingle', params: { data } })
    },

    navigateBack() {
      this.$router.go(-1)
    }
  }
}
</script>
