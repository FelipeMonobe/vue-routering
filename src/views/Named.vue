<template>
  <div>
    <h2>Definition:</h2>
    <p>Navigating through UI to named routes passing data</p>
    <h2>View:</h2>
    <ul>
      <li>
        <router-link :to="{ name: 'querystring', query: { source: 'fromNamed' } }">
          Go to querystring
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'paramsSingle', params: { data: 'fromNamed' } }">
          Go to params
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Named',
}
</script>
