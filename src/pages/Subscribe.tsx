import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { useMyMutationMutation } from "../graphql/generated";


export function Subscribe() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading } ] = useMyMutationMutation()

    async function handleSubscribe(event: FormEvent) {
        event?.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        setName('');
        setEmail('');
        navigate('/event')
        
    }
    return (
        <>
            <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
                <div className="w-full max-w-[1100px] flex flex-col sm:flex-row sm:items-center justify-between mt-20 mx-auto">
                    <div className="max-w-[640px] px-6 sm:px-0 flex flex-col justify-center items-center sm:items-start">
                        <Logo/>
                        <h1 className="mt-8 text-3xl sm:text-[2.5rem] text-center sm:text-left leading-tight">
                            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
                        </h1>
                        <p className="mt-4 text-sm sm:text-base text-center sm:text-left text-gray-200 leading-relaxed mb-8">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                        </p>
                    </div>

                    <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                        <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

                        <form onSubmit={handleSubscribe} action="" className="flex flex-col gap-2 w-full">
                            <input 
                                className="bg-gray-900 rounded px-5 h-14"
                                type="text"
                                placeholder="Seu nome completo"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <input 
                                className="bg-gray-900 rounded px-5 h-14"
                                type="email"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <button
                                className="mt-4 bg-green-500 uppercase py-4 rounded font-blod text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                                disabled={loading}
                                type="submit"
                            >
                                garantir minha vaga
                            </button>
                        </form>
                    </div>
                </div>
                <img src="/src/assets/Group.png" alt="" className="mt-10 max-w-[95%] sm:max-w-[100%]" />
            </div>
            <Footer/>
        </>
    )
}