import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { EmailList } from '../../cmps/email/EmailList'
import { loadEmails } from '../../store/actions/emailActions'

export const _EmailApp = (props) => {
    
    
    const [emails,setEmails] = useState([])
    useEffect(()=>{
        loadEmailsToStore()
    })
    const loadEmailsToStore = async ()=>{
        await props.loadEmails()
        setEmails(props.emails)

    }

   
  return (
    <section className='email-app'>
      <h1>this is email app</h1>
      <EmailList emails={emails}/>
    </section>
  )
}

const mapStateToProps = (storeState) => {
  return {
    emails: storeState.emailModule.emails,
  }
}

const mapDispatchToProps = {
  loadEmails,
}

export const EmailApp = connect(mapStateToProps, mapDispatchToProps)(_EmailApp)
