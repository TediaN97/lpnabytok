import React from 'react';
import ContactForm from './ContactForm.tsx';
import Footer from './Footer.tsx';

const Contact = () => {

    return (
        <div>
            <div className="h-[300px] font-inter mt-20 ml-96 mr-20 flex items-center justify-between" id="contact">
                <p className='text-3xl font-bold'>
                    OZVITE SA NÁM
                </p>
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}

export default Contact;