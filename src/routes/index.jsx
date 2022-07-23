import Home from '../pages/Home'
import Menu from '../pages/Menu'
import Signup from '../components/Signup'

//Public routes
export const publicRoutes = [
    
        { path:'/',component: Home},
        { path:'/menu',component: Menu},
        { path:'/signup',component: Signup},
        
   
]
export const privateRoutes = []