import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import "./navabar.css"

export default function Navbar() {
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() => {
        // Mettez à jour la valeur de isShowing après que le composant ait été monté
        setIsShowing(true);
    }, []);
    return (
        <header className="bg-arianGrayBg relative border-b-4 border-arianRed font-jura shadow-sm" id="background">
            <div className="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-start">
                    {/* Logos Alineados a la Izquierda */}
                    <Transition
                        show={isShowing}
                        enter="transition-transform duration-500"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-transform duration-500"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="flex items-center gap-4 lg:gap-8">
                            <img
                                className="h-12 lg:h-16"
                                src={process.env.PUBLIC_URL + "/logos/ariane.png"}
                                alt="Ariane logo"
                            />
                            <div className="w-px h-12 lg:h-16 bg-gray-400"></div>
                            <img
                                className="h-10 lg:h-14"
                                alt="Huma-Num logo"
                                src={process.env.PUBLIC_URL + "/logos/humaNoir.png"}
                            />
                        </div>
                    </Transition>
                </div>
            </div>
        </header>
    )
}