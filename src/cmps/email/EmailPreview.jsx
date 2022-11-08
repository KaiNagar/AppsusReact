import { Link } from "react-router-dom"
import { emailService } from "../../services/email/email.service"

export const EmailPreview = ({email})=>{

    const formattedTime = ()=>{
        return emailService.formattedTime(email.sentAt)
    }

    return (
        <Link to={"/email/"+email._id} className="email-preview">
            <span>{email.userName}</span>
            <span>{email.subject}</span>
            <span>{email.labels[0]}</span>
            <span>{formattedTime()}</span>
        </Link>
    )
}