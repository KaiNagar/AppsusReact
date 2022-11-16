import { EmailPreview } from "./EmailPreview"

export const EmailList = ({emails,onUpdateEmail}) => {
  return (
    <section className='email-list'>
      {emails.map((email) => (
         <EmailPreview key={email._id} email={email} onUpdateEmail={onUpdateEmail} />
      ))}
    </section>
  )
}
