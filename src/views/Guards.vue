<template>
  <div>
    <h2>Definition:</h2>
    <p>Guards are functions defined at <b>GLOBAL</b>, <b>ROUTE</b> or <b>COMPONENT</b> levels</p>
    <p>at <b>BEFORE</b>, <b>RESOLVE</b> or <b>AFTER</b> navigation phases</p>
    <p>to <b>CANCLE</b>, <b>REDIRECT</b> or <b>ALLOW</b> navigation</p>
    <h2>View:</h2>
      <ul>
        <li><button @click="nav('shouldRedir')">Go to /shouldRedir should redirect to /</button></li>
        <li><button @click="nav('shouldError')">Go to /shouldError should throw an error and cancel route</button></li>
        <li><button @click="nav('shouldCancel')">Go to /shouldCancel should just cancel</button></li>
        <li>Anything else should navigate accordingly</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Guards',
  methods: {
    nav(route) {
      this.$router.push(route)
    }
  }
}
</script>
