import { Slide } from 'react-awesome-reveal'
import { useRef } from 'react'
import React from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = "service_0irou2a"
const TEMPLATE_ID = "template_ghgdaas"
const PUBLIC_KEY = "RYcasxNP6ytKvM22E"

function Contact() {
    const form = useRef<HTMLFormElement>(null);


    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                console.log("Message sent")
                alert("Message sent")
            }, (error) => {
                console.log(error.text);
            });
        }

    };

    return (
        <section>
            <div className="min-h-[100vh] bg-ctm-light-purple flex flex-col justify-center items-center">
                <Slide cascade direction="down" duration={1300} triggerOnce>
                    <div className="text-center mt-12 mb-12 px-4">
                        <h1 className="text-[30px] md:text-[40px] font-bold">Write me a Message</h1>
                        <p className="text-[16px] md:text-[20px] text-wrap">
                            Got a question? I'd love to hear from you. Send me a message and I'll respond ASAP.
                        </p>
                    </div>
                </Slide>
                <form ref={form} onSubmit={sendEmail} className="w-full max-w-[400px] px-4">
                        <div className="flex flex-col justify-center mb-3">
                            <label htmlFor="name" className="text-[20px] font-semibold mb-1">Name</label>
                            <input 
                            className="w-full shadow text-[18px] text-ctm-black focus:outline-none focus:ring-2 focus:ring-ctm-pink-base p-4"
                            type="text"
                            name="user_name"
                            placeholder="ex. John Doe"
                            required
                            />
                        </div>
                        <div className="flex flex-col justify-center mb-3">
                            <label htmlFor="email" className="text-[20px] font-semibold mb-1">Email</label>
                            <input 
                            className="w-full shadow text-[18px] text-ctm-black focus:outline-none focus:ring-2 focus:ring-ctm-pink-base p-4"
                            type="email"
                            name="user_email"
                            placeholder="ex. johndoe@example.com"
                            required
                            />
                        </div>
                        <div className="flex flex-col justify-center mb-3">
                            <label htmlFor="message" className="text-[20px] font-semibold mb-1">Message</label>
                            <textarea required name="message" id="message" rows={5} placeholder="Your message" className="text-[18px] text-ctm-black focus:outline-none focus:ring-2 focus:ring-ctm-pink-base p-4"/>
                        </div>

                        <div className="w-full mt-8">
                            <button type="submit" value="Send" className="w-full text-4xl text-ctm-yellow-base border-2 border-ctm-yellow-base hover:text-ctm-pink-base hover:border-ctm-pink-base hover:bg-ctm-yellow-base ease-in duration-150 p-2.5">
                                Send Message
                            </button>
                        </div>
                </form>
            </div>
        </section>
    )
}

export default Contact