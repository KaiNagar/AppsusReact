import { NavLink } from 'react-router-dom'

export const EmailFolderList = ({ onChangeStatus }) => {

  
  return (
    <section className='email-folder-list flex column'>
      <NavLink
        className='compose-btn flex aling-center'
        replace
        to={'/email/compose'}
      >
        <span className='edit-img'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/1250/1250615.png'
            alt='Edit Compose'
          />
        </span>
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
