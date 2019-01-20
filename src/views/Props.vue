<template>
  <div>
    <h2>Definition:</h2>
    <p>Pass data to the view/component <b>WITHOUT COUPLING</b> it to a route (like params or query)</p>
    <p>can also be set as boolean, object and function mode</p>
    <h2>View:</h2>
    <code>
      <pre>{{ info }}</pre>
    </code>
  </div>
</template>

<script>
export default {
  name: 'Querystring',
  props: ['info']
}
</script>
