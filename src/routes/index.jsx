import Home from '../pages/Home'
import Signup from '../components/Signup'
import HappySummer from '../pages/HappySummer'
import Combo from '../pages/Combo'
import Kidsbox from '../pages/Kidsbox'
import Mybox from '../pages/Mybox'
import Buy1Get3 from '../pages/Buy1Get3'
import Pizza from '../pages/Pizza'

//Public routes
export const publicRoutes = [
    
        { path:'/',component: Home},
        { path:'/signup',component: Signup},
        { path:'/combo',component: Combo},
        { path:'/kidsbox',component: Kidsbox},
        { path:'/mybox',component: Mybox},
        { path:'/by1get3',component: Buy1Get3},
        { path:'/pizza',component: Pizza},
        { path:'/happysummer',component: HappySummer},
   
]
export const privateRoutes = []