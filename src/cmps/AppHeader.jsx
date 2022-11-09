import { Link, NavLink } from 'react-router-dom'

export const AppHeader = () => {
  return (
    <section className='app-header flex space-between'>
      <div className='app-logo'>Appsus</div>
      <div className='app-navigation flex align-center'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/email'>Email</NavLink>
      </div>
    </section>
  )
}
