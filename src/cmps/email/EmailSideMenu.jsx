import { NavLink } from "react-router-dom"

export const EmailSideMenu = () => {
  return (
    <section className='email-side-menu flex column'>
      <h1>this is side menu</h1>
      <NavLink replace to={'/email/compose'}>
        Compose
      </NavLink>
      <span className="tab inbox-tab">Inbox</span>
      <span className="tab starred-tab">Starred</span>
      <span className="tab sent-tab">Sent</span>
      <span className="tab draft-tab">Draft</span>
    </section>
  )
}
