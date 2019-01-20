<template>
  <div>
    <h2>Definition:</h2>
    <p>Scrolling behavior defines where the browser scroll should go after navigation,</p>
    <p>whether it's by an <b>HTML ID</b>, previously <b>SAVED POSITION</b> or <b>X, Y</b> coordinates</p>
    <h2>View:</h2>
      <ul>
        <li><router-link to="/scrolling#checkpoint">Go Checkpoint</router-link></li>
        <li><router-link to="/scrolling#checkpointDelayed">Go Checkpoint (after 1.5s)</router-link></li>
      </ul>
      <div style="height: 1000px">SPACER</div>
      <div id="checkpoint">Checkpoint</div>
      <div style="height: 1000px">SPACER</div>
      <div id="checkpointDelayed">Checkpoint (delayed)</div>
  </div>
</template>

<script>
export default {
  name: 'Scrolling',
}
</script>
