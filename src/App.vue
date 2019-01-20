<template>
  <div id="app">
    <div style="margin: 50px; padding: 3px 15px; border: 1px solid black">
      <h3>Vue routerizando</h3>
      <ul>
        <li><router-link to="/">Ordinary</router-link></li>
        <li><router-link to="/querystring?someData=abc&someMoreData=123">Querystring</router-link></li>
        <li><router-link to="/params/someData">Params (single)</router-link></li>
        <li><router-link to="/params/someData/112151">Params (multi - valid)</router-link></li>
        <li><router-link to="/params/someData/someMoreData">Params (regex - invalid)</router-link></li>
        <li><router-link to="/params/someData/112151/someMoreData">Params (multi - valid - optional)</router-link></li>
        <li><router-link to="/nested/a">Nested (A)</router-link></li>
        <li><router-link to="/nested/b">Nested (B)</router-link></li>
        <li><router-link to="/invalid">Catch-all</router-link></li>
        <li><router-link to="/programmatic">Programmatic</router-link></li>
        <li><router-link to="/named">Named</router-link></li>
        <li><router-link to="/namedNested">Named nested</router-link></li>
        <li><router-link to="/redirectAlias">Redirect & Alias</router-link></li>
        <li><router-link to="/props">Props</router-link></li>
        <li><router-link to="/guards">Guards</router-link></li>
        <li><router-link to="/scrolling">Scrolling</router-link></li>
        <li><router-link to="/lazy">Lazy</router-link></li>
      </ul>
    </div>
    <div style="margin: 0px 50px">
      <transition name="slide-fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>