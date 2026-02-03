import React, { useState, useRef, useEffect, type FormEvent, type ChangeEvent } from 'react'; 

interface props {
    isStateSuccess: (newState: boolean) => void;
}

const ContactForm = (props: props) => {

    const form = useRef<HTMLFormElement | null>(null);  

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    async function sendEmail(e : FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setButtonDisabled(true);

        try {
            const res = await fetch("https://api.lpnabytok.sk/sendmail.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, tel, message }),
            });

            if (!res.ok) throw new Error("Request failed");

            setStatus(true);
            props.isStateSuccess(true);

            // reset form fields
            setName("");
            setEmail("");
            setTel("");
            setMessage("");
        } catch (err) {
            console.error(err);
            setStatus(false);
            props.isStateSuccess(false);
            // tu si môžeš dať toast / error hlášku
        } finally {
            setButtonDisabled(false);
        }
    }

    useEffect(() => {
        if(status){
            props.isStateSuccess(true);
        }
        return () => {
            setStatus(false);
        }

    }, [status])

    return (
       <div className='w-full mt-10 lg:w-9/12 xl:w-[800px] rounded-lg border-2 border-gray-600 bg-white lg:rounded-2xl z-30'>
            <form ref={form} onSubmit={sendEmail}>
                <div className='block mt-10 lg:flex lg:justify-evenly lg:mt-16'>
                    <div className='flex flex-col items-center'>
                        <input 
                            name="name"
                            type="text"
                            className="h-10 w-11/12 lg:w-80 bg-gray-600 rounded-xl mb-5 p-4 text-white shadow-lg shadow-gray-600"
                            id="name"
                            placeholder="Meno" 
                            value={name}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                            required
                        />
                        <input 
                            name="email"
                            type="email"
                            className="h-10 w-11/12 lg:w-80 bg-gray-600 rounded-xl mb-5 p-4 text-white shadow-lg shadow-gray-600"
                            id="email"
                            placeholder="E-mail" 
                            value={email}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            required
                        />
                        <input 
                            name="tel"
                            type="tel"
                            className="h-10 w-11/12 lg:w-80 bg-gray-600 rounded-xl mb-10 p-4 text-white shadow-lg shadow-gray-600"
                            id="tel"
                            placeholder="Telefón"
                            maxLength={13}
                            value={tel}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setTel(e.target.value)} 
                            required
                        />
                    </div>
                    <div>
                        <textarea 
                            name="message"
                            className="h-40 w-11/12 lg:w-80 bg-gray-600 rounded-xl mb-10 p-4 text-white shadow-lg shadow-gray-600 resize-none"
                            id="textarea"
                            placeholder="Správa"
                            value={message}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}  
                            required
                        />
                    </div>     
                </div>
                <div className='flex flex-col text-center items-center justify-center lg:flex-row lg:justify-evenly xl:justify-center'>
                    <p className='text-xs w-11/12 lg:w-[450px] lg:mb-10'>
                        Kliknutím na tlačidlo ODOSLAŤ súhlasíte so spracovaním Vami zadaných údajov za účelom zodpovedania otázky či podnetu adresátom správy, ktorým je spoločnosť LPnábytok. Bližšie informácie o spracovaní a ochrane osobných údajov nájdete v sekcii "GDPR - Ochrana osobných údajov".  
                    </p>
                    <button
                        type="submit"
                        className={`w-56 h-12 rounded-xl mt-5 mb-10 text-white bg-red-600 font-bold transform-all duration-200 
                                ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:transform-all hover:duration-200 hover:bg-red-700 hover:shadow-red-700 hover:shadow-xl'}
                        `}
                        disabled={isButtonDisabled}
                    >
                        ODOSLAŤ
                    </button>
                </div>
            </form>
       </div> 
    )
}

export default ContactForm;
