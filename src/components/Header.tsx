import { List } from "phosphor-react";
import { Logo } from "./Logo";


export function Header() {
    return (
        <header className="w-full py-5 px-5 items-center justify-between sm:justify-center flex bg-gray-700 border-b border-gray-600">
            <Logo/>
            <List size={32} className="sm:hidden"/>
        </header>
    )
}