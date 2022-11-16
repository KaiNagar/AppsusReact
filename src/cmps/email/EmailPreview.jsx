import { Link } from 'react-router-dom'
import { emailService } from '../../services/email/email.service'

export const EmailPreview = ({ email, onUpdateEmail }) => {
  const formattedTime = () => {
    return emailService.formattedTime(email.sentAt)
  }

  const onReadEmail = () => {
    email.isRead = true
    onUpdateEmail(email)
  }

  return (
    <Link
      to={'/email/' + email._id}
      onClick={() => {
        onReadEmail()
      }}
      className={'email-preview ' + (email.isRead ? 'is-read' : 'bold')}
    >
      <span className='email-username'>{email.userName}</span>
      <span className='email-subject'>{email.subject}</span>
      <span className='email-body'>{email.body}</span>
      <span className='email-labels'>
        {email.labels ? email.labels[0] : ''}
      </span>
      <span className='email-time'>{formattedTime()}</span>
    </Link>
  )
}
