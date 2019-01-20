<template>
  <div>
    <h2>Definition:</h2>
    <p>Accepts and exposes data passed through URL <b>COMPONENT</b></p>
    <h2>View:</h2>
    <code>
      <pre>{{ $route.params }}</pre>
    </code>
  </div>
</template>

<script>
export default {
  name: 'Params'
}
</script>
