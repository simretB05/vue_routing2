import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import  MenuPage from '@/views/MenuPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: HomePage,
    meta: [
      {
        title: `Home Page`
        
      },{
        name: `description`,
        content: `this is a home page`
        
      }
   
    ]
  },
  {
    path: "/menu",
    component: MenuPage,
    meta: [
      {
        title: `Menu Page`
        
      },{
        name: `description`,
        content: `this is a Menu page`
        
      }
   
    ]
   },

]

const router = new VueRouter({
  routes
})
 
router.beforeEach( ( to, from, next ) =>
{
  
  let current_meta_tags = document.querySelectorAll( `meta` );
  for ( let i = 0; i < current_meta_tags.length; i++ ) {
    current_meta_tags[i].remove()
  }
    let new_meta_tag = to[`meta`]
    document.querySelector(`title`)[`innerText`] = new_meta_tag[0][`title`]
    for ( let i = 0; i < new_meta_tag.length; i++ ){
      document.querySelector( `head` ).insertAdjacentHTML( `beforeend`, '<meta name="${new_meta_tag[i][`name]} content="${new_meta_tag[i][`content`]}">' )
    }
      document.querySelector( `head` ).insertAdjacentHTML( `afterbegin`,` <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">`)
    
    from;
    next()
    
  }

);
export default router
