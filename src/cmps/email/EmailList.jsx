import { EmailPreview } from "./EmailPreview"

export const EmailList = (emails) => {
    console.log(emails);
  return (
    <section className='email-list'>
      {/* {emails.map((email) => (
         <EmailPreview key={email._id} email={email} />
      ))} */}
    </section>
  )
}
