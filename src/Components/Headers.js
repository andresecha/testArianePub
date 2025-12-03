import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";



export default function Headers({ titre, theme }) {
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() => {
        // Mettez à jour la valeur de isShowing après que le composant ait été monté
        setIsShowing(true);
    }, []);
    return (
        <Transition
            show={isShowing}
            enter="transition-transform duration-500"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform duration-500"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
        >
            <header className="bg-arianGrayBg md:w-3/5 lg:w-2/5 border-l-4 border-arianRed rounded-r-lg shadow-md">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">
                            <h2 className="text-2xl font-semibold font-jura text-gray-900 sm:text-3xl">
                                {titre}
                            </h2>
                            <p className="font-normal mt-1.5 text-lg text-gray-700 font-jura">
                                {theme}
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </Transition>
    )
}