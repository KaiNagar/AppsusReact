import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { EmailFilter } from '../../cmps/email/EmailFilter'
import { EmailList } from '../../cmps/email/EmailList'
import { EmailFolderList } from '../../cmps/email/EmailFolderList'
import {
  loadEmails,
  setCriteria,
  setFilterBy,
  updateEmail,
} from '../../store/actions/emailActions'

export const EmailApp = () => {
  const { emails, criteria } = useSelector((state) => state.emailModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadEmails())
  }, [criteria])

  const onUpdateEmail = (email) => {
    dispatch(updateEmail(email))
  }

  // const onChangeFilter = (filterBy) => {
  //   dispatch(setFilterBy(filterBy))
  //   dispatch(loadEmails())
  // }

  const onChangeStatus = (status) => {
    criteria.status = status
    dispatch(setCriteria(criteria))
  }

  if (!emails) return <div>Loading...</div>
  return (
    <section className='email-app flex space-between'>
      <EmailFolderList onChangeStatus={onChangeStatus} />
      <div className='email-main-content'>
        <EmailFilter />
        <EmailList emails={emails} onUpdateEmail={onUpdateEmail} />
        <Outlet />
      </div>
    </section>
  )
}
