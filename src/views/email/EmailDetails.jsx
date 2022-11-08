import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { emailService } from '../../services/email/email.service'

export const EmailDetails = () => {
  const [email, setEmail] = useState({})
  const params = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    loadEmail()
  }, [params.id])

  const loadEmail = async () => {
    const { emailId } = params
    const currEmail = await emailService.getById(emailId)
    setEmail(currEmail)
  }
  const onBack = () => {
    navigate('/email')
  }
  return (
    <section className='email-details'>
      {JSON.stringify(email)}
      <button onClick={() => onBack()}>Back</button>
    </section>
  )
}
