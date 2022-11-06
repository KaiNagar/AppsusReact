import { useEffect } from 'react'
import { useState } from 'react'
import { emailService } from '../../services/email/email.service'

export const EmailCompose = () => {
  const [email, setEmail] = useState({})

  useEffect(()=>{
    loadEmail()
  },[])

  const loadEmail = ()=>{
    const newEmail = emailService.getEmptyEmail()
    setEmail(newEmail)
  }
  console.log('bla');
  return <section className='email-compose'>
    {JSON.stringify(email)}
  </section>
}
