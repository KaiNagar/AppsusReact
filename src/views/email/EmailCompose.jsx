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
  
  return (
    <section className='email-compose'>
      {JSON.stringify(email)}
      <button onClick={() => onCloseCompose()}>X</button>
    </section>
  )
}
