<template>
  <div>
    <h2>Definition:</h2>
    <p>Having multiple views within a single view</p>
    <h2>View:</h2>
    Parent view
    <router-view name="red"></router-view>
    <router-view name="green"></router-view>
  </div>
</template>

<script>
export default {
  name: 'NamedNested',
}
</script>
