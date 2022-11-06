export const EmailPreview = ({email})=>{
    return (
        <section className="email-preview">
            <h1>{email.subject}</h1>
        </section>
    )
}