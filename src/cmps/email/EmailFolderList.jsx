import { NavLink } from 'react-router-dom'

export const EmailFolderList = ({ onChangeStatus }) => {
  return (
    <section className='email-side-menu flex column'>
      <NavLink replace to={'/email/compose'}>
        Compose
      </NavLink>
      <span onClick={() => onChangeStatus('inbox')} className='tab inbox-tab'>
        Inbox
      </span>
      <span
        onClick={() => onChangeStatus('starred')}
        className='tab starred-tab'
      >
        Starred
      </span>
      <span onClick={() => onChangeStatus('sent')} className='tab sent-tab'>
        Sent
      </span>
      <span onClick={() => onChangeStatus('draft')} className='tab draft-tab'>
        Draft
      </span>
    </section>
  )
}
