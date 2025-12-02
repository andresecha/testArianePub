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
            <header class="bg-gray-200 md:w-3/5 lg:w-2/5 border-r border-arianBord">
                <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <div class="text-center sm:text-left">
                            <h2 class="text-2xl font-light font-jura text-gray-900 sm:text-3xl">
                                {titre}
                            </h2>
                            <p class="font-thin mt-1.5 text-xl text-arianBord font-jura ">
                                {theme}
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </Transition>
    )
}