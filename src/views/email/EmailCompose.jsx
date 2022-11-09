import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { emailService } from '../../services/email/email.service'

export const EmailCompose = () => {
  const [email, setEmail] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    loadEmail()
  }, [])

  const onCloseCompose = () => {
    navigate('/email')
  }

  const loadEmail = () => {
    const newEmail = emailService.getEmptyEmail()
    setEmail(newEmail)
  }
  const onMinimizeCompose = () => {}

  return (
    <section className='email-compose'>
      <div className='head-tab flex space-between'>
        <button onClick={() => onCloseCompose()}>X</button>
        <button onClick={() => onMinimizeCompose()}>-</button>
      </div>
      <form className='flex column'>
        <input type='text' placeholder='To' />
        <input type='text' placeholder='Subject' />
        <textarea
          className='textarea-compose'
          name=''
          id=''
          placeholder='Enter email body here'
          cols='30'
          rows='30'
        ></textarea>
      </form>
    </section>
  )
}
