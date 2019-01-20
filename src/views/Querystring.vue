<template>
  <div>
    <h2>Definition:</h2>
    <p>Accepts and exposes data passed through URL <b>QUERYSTRING</b></p>
    <h2>View:</h2>
    <code>
      <pre>{{ $route.query }}</pre>
    </code>
  </div>
</template>

<script>
export default {
  name: 'Querystring'
}
</script>
