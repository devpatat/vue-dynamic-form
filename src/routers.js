import Form from './components/Form'
import FormUpdate from './components/FormUpdate'
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        name:'Form',
        component:Form,
        path:'/form'
    },
    {
        name:'FormUpdate',
        component:FormUpdate,
        path:'/formUpdate'
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;