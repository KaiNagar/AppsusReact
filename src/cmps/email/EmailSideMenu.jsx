import { NavLink } from "react-router-dom"

export const EmailSideMenu = () => {

const onSetCrateria = (crateria)=>{
    console.log(crateria);
}

  return (
    <section className='email-side-menu flex column'>
      <NavLink replace to={'/email/compose'}>
        Compose
      </NavLink>
      <span onClick={()=>onSetCrateria('inbox')} className="tab inbox-tab">Inbox</span>
      <span onClick={()=>onSetCrateria('starred')} className="tab starred-tab">Starred</span>
      <span onClick={()=>onSetCrateria('sent')} className="tab sent-tab">Sent</span>
      <span onClick={()=>onSetCrateria('draft')} className="tab draft-tab">Draft</span>
    </section>
  )
}
