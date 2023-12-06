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
       <div className='h-96 w-[800px] border-2 border-gray-600 bg-white ml-52 rounded-2xl mt-36 '>
            <form onSubmit={handleSubmit} >
                <div className='flex justify-evenly mt-16'>
                    <div className='flex flex-col '>
                        <input 
                            name="name"
                            type="text"
                            className="h-10 w-72 bg-gray-600 rounded-xl mb-5 p-4 text-white shadow-lg shadow-gray-600"
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
                            className="h-10 bg-gray-600 rounded-xl mb-5 p-4 text-white shadow-lg shadow-gray-600"
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
                            className="h-10 bg-gray-600 rounded-xl mb-10 p-4 text-white shadow-lg shadow-gray-600"
                            id="tel"
                            placeholder="Telefón"
                            pattern="[0-9]{13}"
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
                            className="h-40 w-80 bg-gray-600 rounded-xl mb-10 p-4 text-white shadow-lg shadow-gray-600"
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
                <div className='flex items-center justify-center'>
                    <p className='text-xs w-[450px]'>
                        Kliknutím na tlačidlo ODOSLAŤ súhlasíte so spracovaním Vami zadaných údajov za účelom zodpovedania otázky či podnetu adresátom správy, ktorým je spoločnosť LPnábytok s. r. o. Bližšie informácie o spracovaní a ochrane osobných údajov nájdete v sekcii "GDPR - Spracovanie osobných údajov".  
                    </p>
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className='w-56 h-12 rounded-xl text-white bg-red-600 font-bold transform-all duration-200 hover:transform-all hover:duration-200 hover:bg-red-700 hover:shadow-red-700 hover:shadow-xl'
                    >
                        ODOSLAŤ
                    </button>
                </div>
            </form>
       </div> 
    )
}

export default ContactForm;
