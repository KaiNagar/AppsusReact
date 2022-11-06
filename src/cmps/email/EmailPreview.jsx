import { Link } from "react-router-dom"

export const EmailPreview = ({email})=>{
    return (
        <Link to={"/email/"+email._id} className="email-preview">
            <h1>{email.subject}</h1>
        </Link>
    )
}