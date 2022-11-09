import { Link } from "react-router-dom"
import { emailService } from "../../services/email/email.service"

export const EmailPreview = ({email})=>{

    const formattedTime = ()=>{
        return emailService.formattedTime(email.sentAt)
    }
    const shortBody = ()=>{
        return email.body.slice(0,70) + '...'
    }

    return (
        <Link to={"/email/"+email._id} className="email-preview">
            <span className="email-username">{email.userName}</span>
            <span className="email-subject">{email.subject}</span>
            <span className="email-body">{shortBody()}</span>
            <span className="email-labels">{email.labels[0]}</span>
            <span className="email-time">{formattedTime()}</span>
        </Link>
    )
}