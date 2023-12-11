import React, { useEffect } from 'react'; 
import { useForm, ValidationError } from '@formspree/react';

interface props {
    isStateSuccess: (newState: boolean) => void;
}

const ContactForm = (props: props) => {

    const [state, handleSubmit] = useForm("xbjvnlaz");

    useEffect(() => {
        if(state.succeeded){
            props.isStateSuccess(true);
        }
        return () => {
            state.succeeded = false;
        }

    }, [state.succeeded])

    return (
       <div className='w-full mt-10 lg:w-9/12 xl:w-[800px] rounded-lg border-2 border-gray-600 bg-white lg:rounded-2xl'>
            <form onSubmit={handleSubmit}>
                <div className='block mt-10 lg:flex lg:justify-evenly lg:mt-16'>
                    <div className='flex flex-col items-center'>
                        <input 
                            name="name"
                            type="text"
                            className="h-10 w-11/12 lg:w-80 bg-gray-600 rounded-xl mb-5 p-4 text-white shadow-lg shadow-gray-600"
                            id="name"
                            placeholder="Meno" 
                            required
                        />
                        <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                        />
                        <input 
                            name="email"
                            type="email"
                            className="h-10 w-11/12 lg:w-80 bg-gray-600 rounded-xl mb-5 p-4 text-white shadow-lg shadow-gray-600"
                            id="email"
                            placeholder="E-mail" 
                            required
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                        <input 
                            name="tel"
                            type="tel"
                            className="h-10 w-11/12 lg:w-80 bg-gray-600 rounded-xl mb-10 p-4 text-white shadow-lg shadow-gray-600"
                            id="tel"
                            placeholder="Telefón"
                            maxLength={13} 
                            required
                        />
                        <ValidationError 
                            prefix="Tel" 
                            field="tel"
                            errors={state.errors}
                        />
                    </div>
                    <div>
                        <textarea 
                            name="message"
                            className="h-40 w-11/12 lg:w-80 bg-gray-600 rounded-xl mb-10 p-4 text-white shadow-lg shadow-gray-600 resize-none"
                            id="textarea"
                            placeholder="Správa" 
                            required
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                    </div>     
                </div>
                <div className='flex flex-col text-center items-center justify-center lg:flex-row lg:justify-evenly xl:justify-center'>
                    <p className='text-xs w-11/12 lg:w-[450px] lg:mb-10'>
                        Kliknutím na tlačidlo ODOSLAŤ súhlasíte so spracovaním Vami zadaných údajov za účelom zodpovedania otázky či podnetu adresátom správy, ktorým je spoločnosť LPnábytok s. r. o. Bližšie informácie o spracovaní a ochrane osobných údajov nájdete v sekcii "GDPR - Spracovanie osobných údajov".  
                    </p>
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className='w-56 h-12 rounded-xl mt-5 mb-10 text-white bg-red-600 font-bold transform-all duration-200 hover:transform-all hover:duration-200 hover:bg-red-700 hover:shadow-red-700 hover:shadow-xl'
                    >
                        ODOSLAŤ
                    </button>
                </div>
            </form>
       </div> 
    )
}

export default ContactForm;
