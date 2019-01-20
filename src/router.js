import Vue from 'vue';
import Router from 'vue-router';
import Guards from './views/Guards.vue';
import Named from './views/Named.vue';
import NamedNested from './views/NamedNested.vue';
import NestedChildA from './views/NestedChildA.vue';
import NestedChildB from './views/NestedChildB.vue';
import NestedGreen from './views/NestedGreen.vue';
import NestedParent from './views/NestedParent.vue';
import NestedRed from './views/NestedRed.vue';
import NotFound from './views/NotFound.vue';
import Ordinary from './views/Ordinary.vue';
import Params from './views/Params.vue';
import Programmatic from './views/Programmatic.vue';
import Props from './views/Props.vue';
import Querystring from './views/Querystring.vue';
import RedirectAlias from './views/RedirectAlias.vue';
import Scrolling from './views/Scrolling.vue';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { name: 'ordinary', path: '/', component: Ordinary },
    { name: 'querystring', path: '/querystring', component: Querystring, alias: ['/q', '/qs'] },
    { name: 'paramsMulti', path: '/params/:data/:numberData(\\d+)/:moreData?', component: Params },
    { name: 'paramsSingle', path: '/params/:data', component: Params },
    { name: 'nested', path: '/nested', component: NestedParent, children: [
      { path: 'a', component: NestedChildA },
      { path: 'b', component: NestedChildB }
    ] },
    { name: 'programmatic', path: '/programmatic', component: Programmatic },
    { name: 'named', path: '/named', component: Named },
    { name: 'redirectAlias', path: '/redirectAlias', component: RedirectAlias },
    { name: 'redirect', path: '/redirect/:data', redirect: { name: 'paramsSingle' } },
    { name: 'props', path: '/props', component: Props, props: { info: 123 } },
    { name: 'guards', path: '/guards', component: Guards },
    { name: 'scrolling', path: '/scrolling', component: Scrolling },
    { name: 'lazy', path: '/lazy', component: () => import('./views/Lazy.vue') },
    { name: 'namedNested', path: '/namedNested', component: NamedNested, children: [
      { path: '', components: { red: NestedRed, green: NestedGreen } },
    ] },
    { name: 'notFound', path: '*', component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)  return savedPosition

    let delay = to.hash === '#checkpointDelayed' ? 1500 : 0
    let position = to.hash ? { selector: to.hash } : { x: 0, y: 0 }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(position)
      }, delay)
    })
  }
})

router.beforeEach((to, from, next) => {
  const navMap = {
    '/shouldRedir': nextFn => nextFn({ name: 'ordinary' }),
    '/shouldError': nextFn => nextFn(new Error('Error route')),
    '/shouldCancel': nextFn => nextFn(false)
  }

  console.log(`[${from.name}] -> [${to.name}]`)

  navMap[to.path] ? navMap[to.path](next) : next()
})

export default router
