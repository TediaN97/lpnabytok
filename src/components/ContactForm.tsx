import React from 'react';

const ContactForm = () => {

    return (
       <div className='h-96 w-[800px] border-2 border-gray-700 bg-white ml-52 rounded-2xl mt-36'>
            <form>
                <div className='flex justify-evenly mt-16'>
                    <div className='flex flex-col '>
                        <input 
                            type="text"
                            className="h-10 w-72 bg-gray-700 rounded-xl mb-5"
                            id="name"
                            placeholder="Meno" 
                            required
                        />
                        <input 
                            type="email"
                            className="h-10 bg-gray-700 rounded-xl mb-5"
                            id="email"
                            placeholder="E-mail" 
                            required
                        />
                        <input 
                            type="tel"
                            className="h-10 bg-gray-700 rounded-xl mb-10"
                            id="phone"
                            placeholder="Telefón"
                            pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" 
                            required
                        />
                    </div>
                    <div>
                        <input 
                            type="textarea"
                            className="h-40 w-80 bg-gray-700 rounded-xl mb-10"
                            id="textarea"
                            placeholder="Správa" 
                            required
                        />
                    </div>     
                </div>
                <div className='flex items-center justify-center'>
                    <p className='text-xs w-[450px]'>
                        Kliknutím na tlačidlo ODOSLAŤ súhlasíte so spracovaním Vami zadaných údajov za účelom zodpovedania otázky či podnetu adresátom správy, ktorým je spoločnosť LPnábytok s. r. o. Bližšie informácie o spracovaní a ochrane osobných údajov nájdete v sekcii "GDPR - Spracovanie osobných údajov".  
                    </p>
                    <button
                        type="button"
                        className='w-56 h-12 rounded-xl text-white bg-red-600 font-bold'
                    >
                        ODOSLAŤ
                    </button>
                </div>
            </form>
       </div> 
    )
}

export default ContactForm;