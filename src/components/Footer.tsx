import { LogoRocket } from "./LogoRocket";

export function Footer() {
    return (
        <header className="w-full h-[90px]  px-5 items-center justify-between  flex bg-gray-900 ">
            <div className="w-full h-full flex flex-col sm:flex-row items-center gap-5 justify-between border-t border-gray-600 ">
                <div className="flex flex-col sm:flex-row items-center gap-5 justify-between mt-5 sm:mt-0">
                    <LogoRocket/>
                    <span className="text-gray-300">Rocketseat - Todos os direitos reservados</span>
                </div>
                <span className="text-gray-300 pb-5 sm:pb-0">Políticas de privacidade</span>
            </div>

        </header>
    )
}