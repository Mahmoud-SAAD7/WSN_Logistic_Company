import React, { useRef, useState } from 'react'
import { motion } from "framer-motion"
import { fadeIn } from '../../variants'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };
        const serviceId = 'service_yc7xjcl'
        const templateId = 'template_dqwfl66'
        const publicKey = 'BhM5gogdQ19vawnbN'

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then(
                (res) => {
                    console.log('SUCCESS!', res);
                    setName('');
                    sendEmail('');
                    setMessage('');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }
    return (
        <>
            <section id='contact' className='section bg-gray-900'>
                <div className='container mx-auto'>
                    <div className='flex flex-col lg:flex-row'>
                        <motion.div
                            variants={fadeIn("right", 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className='flex-1 flex justify-start items-center'
                        >
                            <div >
                                <h4 className='text-5xl uppercase text-white font-medium mb-6 tracking-wide'>
                                    تواصل معنا
                                </h4>
                                <h2 className='text-4xl lg:text-6xl leading-none text-white'>
                                    لنعمل <br /> معنا
                                </h2>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeIn("left", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className='flex-1 lg:mt-0 mt-8 border rounded-2xl flex flex-col gap-y-5 pb-24 p-6 items-start '
                        >
                            <form onSubmit={(e) => sendEmail(e)}>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type='text'
                                    name="user_name"
                                    className='bg-transparent border rounded py-4 p-3 mb-3 border-white text-white outline-none w-full placeholder:text-red focus:border-sky-500 transition-all duration-300'
                                    placeholder='Enter a name'
                                />
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type='email'
                                    name="user_email"
                                    className='bg-transparent border rounded py-4 p-3 mb-3 text-white border-white outline-none w-full placeholder:text-white focus:border-sky-500 transition-all duration-300'
                                    placeholder='Enter an Email'
                                />
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    name="message"
                                    cols="30"
                                    rows="5"
                                    className='bg-transparent border rounded py-3 p-3 text-white outline-none w-full placeholder:text-white focus:border-sky-500 transition-all duration-300 resize-none'
                                    placeholder='Enter a message'
                                ></textarea>
                                <button type="submit" className='btn btn-lg'>Send message</button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
            <div className='container flex items-center justify-center img-fluid'>
                <img className=' flex items-center justify-centerw-[100%] h-[800px]' src='https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1707664623~exp=1707665223~hmac=dac3425caf52928a81b42eddff62328f10c33937062c325a7bb38d3b7117826f' />
            </div>
        </>
    )
}

export default Contact