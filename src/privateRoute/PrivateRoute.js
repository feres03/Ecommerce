import jwtDecode from 'jwt-decode'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const isExpired = (token) => {
    let decoded = jwtDecode(token)
    return decoded.exp < Math.floor(Date.now() / 1000)
}

const PrivateRoute = ({ children }) => {
    let token = localStorage.getItem('token')
    let expired = isExpired(token)
    if (token) {
        if (expired) {
            toast.error('Token expired!')
            return <Navigate to='/login' />
        } else {
            return children
        }
    } else {
        return <Navigate to='/login' />
    }
}

export default PrivateRoute