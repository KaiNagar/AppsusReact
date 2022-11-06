import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { emailService } from "../../services/email/email.service"

export const EmailDetails = ()=>{
    const [email,setEmail] = useState({})
    const params = useParams()
    useEffect(()=>{
        loadEmail()
    },[params.id])

    const loadEmail = async ()=>{
        const {emailId} = params
        const currEmail = await emailService.getById(emailId)
        setEmail(currEmail)
    }
    return (
        <section className="email-details">{JSON.stringify(email)}</section>
    )
}