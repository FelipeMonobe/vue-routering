<template>
  <div>
    <h2>Definition:</h2>
    <p>Redirect changes the accessed route to the target route</p>
    <p>Alias keeps the accessed route URL and renders the configured one</p>
    <h2>View:</h2>
    <ul>
      <li>
        <router-link :to="{ name: 'redirect', params: { data: 'shouldBePassedToo' } }">
          Go to /redirect and get redirected to /params preserving data
        </router-link>
      </li>
      <li>
        <router-link :to="{ path: 'qs', query: { data: 'shouldBePassedToo' } }">
          Go to /qs that acts as /querystring
        </router-link>
      </li>
      <li>
        <router-link :to="{ path: 'q', query: { data: 'shouldBePassedToo' } }">
          Go to /q that acts as /querystring
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Redirect',
}
</script>
