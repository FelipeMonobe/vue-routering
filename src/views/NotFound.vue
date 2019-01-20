<template>
  <div>
    <h2>Definition:</h2>
    <p>Wildcard route to catch any unmatched URL</p>
    <h2>View:</h2>
    <p>Path {{ $route.params.pathMatch }} not found</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>
