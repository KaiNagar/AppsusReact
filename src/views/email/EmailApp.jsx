import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { EmailList } from '../../cmps/email/EmailList'
import { loadEmails } from '../../store/actions/emailActions'

export const _EmailApp = (props) => {
  useEffect( () => {
    props.loadEmails()
  }, [])

  
const {emails} = props
if(!emails) return <div>Loading...</div>
  return (
    <section className='email-app'>
      <Link to={"/email/compose"}>Compose</Link>
      <EmailList emails={emails} />
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
