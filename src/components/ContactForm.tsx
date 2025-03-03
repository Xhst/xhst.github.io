import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]: any = useState(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    emailjs.sendForm('service_43mcwjo', 'template_lm4xl3j', e.target, '5oPrRbcgB-DUSLy2I')
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
        setIsLoading(false);
      }, (error) => {
        console.log(error.text);
        setError("Oops! Something went wrong. Please try again later.");
        setIsLoading(false);
      });
  };

  if (isSent) {
    return <p style={{color: "#fff"}}>Thanks, you will receive a reply soon!</p>;
  }
  
  return (
    <form className="px-md-3 px-lg-5" onSubmit={handleSubmit}>
        <div className="row g-md-3 g-lg-5 mb-md-2 mb-lg-4 row-cols-1 row-cols-md-2">
            <div className="col">
                <div className="form-floating mb-3">
                    <input name="name" type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <label>Name</label>
                </div>
            </div>
            <div className="col">
                <div className="form-floating mb-3">
                    <input name="mail" type="email" className="form-control" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label>Email address</label>
                </div>
            </div>
        </div>
        <div className="form-floating">
            <textarea name="message" className="form-control" placeholder="Leave a message here" style={{height: "140px"}} value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            <label>Message</label>
        </div>

      <button type="submit" className="btn py-3 px-5 mt-5" disabled={isLoading} style={{
        backgroundColor: isLoading ? '#ccc' : "#fafafa",
        borderColor: "rgba(0, 0, 0, 0.4)",
        fontSize: "1.2rem",
      }}>
        {isLoading ? 'Sending...' : 'Send'}
      </button>

      {error && <div className="alert alert-danger mt-3">{error.text}</div>}
    </form>
  );
}

export default ContactForm;