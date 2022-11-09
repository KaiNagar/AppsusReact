import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { EmailList } from '../../cmps/email/EmailList'
import { loadEmails, setFilterBy } from '../../store/actions/emailActions'

export const EmailApp = () => {
  const { emails } = useSelector((state) => state.emailModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadEmails())
  }, [])

  // const onChangeFilter = (filterBy) => {
  //   dispatch(setFilterBy(filterBy))
  //   dispatch(loadEmails())
  // }

  if (!emails) return <div>Loading...</div>
  return (
    <section className='email-app'>
      <NavLink replace to={'/email/compose'}>
        Compose
      </NavLink>
      <EmailList emails={emails} />
      <Outlet />
    </section>
  )
}
