import Mapi from "./Map";

export default function Accueil() {
    return (
        <section className="bg-white" id="accueil">
            <div className="max-w-screen-2xl mx-auto px-4 py-6">
                {/* Main Asymmetric Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
                    {/* Left Column - Takes 60% (3 of 5 columns) */}
                    <div className="lg:col-span-3 flex flex-col gap-6">
                        {/* PRÉSENTATION - 80% height */}
                        <section className="bg-arianGrayBg border-t-4 border-arianRed shadow-md p-6 rounded-lg flex-grow" style={{minHeight: '500px'}}>
                            <h2 className="text-2xl font-bold font-jura text-gray-900 mb-6 pb-2 border-b-2 border-arianRed">
                                PRÉSENTATION
                            </h2>

                            {/* Parte ARIANE - Logo izquierda, texto derecha */}
                            <div className="mb-8">
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="md:w-1/4">
                                        <img
                                            alt="logo ariane"
                                            src={process.env.PUBLIC_URL + "/logos/ariane.png"}
                                            className="rounded-lg object-contain w-full"
                                        />
                                    </div>
                                    <div className="md:w-3/4">
                                        <p className="text-base font-jura text-gray-700 leading-relaxed mb-3">
                                            Le Consortium-HN ARIANE (Analyses, Recherches, Intelligence Artificielle et Nouvelles Editions numériques) réunit des spécialistes du texte
                                            (littéraires, linguistes, historiens…) et de l'informatique en vue de créer un espace de dialogue scientifique véritablement interdisciplinaire
                                            entre ces deux communautés.  <a href="#axes" className="inline-block text-arianRed font-medium hover:underline font-jura text-sm">
                                            Lire plus →
                                        </a>
                                        </p>
                                        
                                        {/* <p className="text-base font-jura text-gray-700 leading-relaxed mb-3">
                                            ARIANE 
                                        </p>
                                        <p className="text-base font-jura text-gray-700 leading-relaxed mb-3">
                                            L'objectif du consortium ARIANE est de progresser ensemble dans la connaissance et le raffinement des méthodes informatiques
                                            appliquées aux objets et données des sciences humaines (et, plus particulièrement, des sciences du texte).
                                        </p>
                                        <p className="text-base font-jura text-gray-700 leading-relaxed mb-3">
                                            Le consortium se veut un espace de discussion portant sur l'interprétation des résultats obtenus à l'aide de méthodes (semi)automatiques d'analyses des textes,
                                            il vise également à faciliter l'accès de la communauté aux algorithmes, scripts et chaînes de traitement qui simplifient la manipulation et l'enrichissement
                                            des textes et à stimuler la création de nouvelles connaissances à leur sujet et sur leurs contextes.
                                        </p>
                                        <p className="text-base font-jura text-gray-700 leading-relaxed mb-2">
                                            Au sein d'Huma-Num,
                                            le consortium veut également contribuer à la réflexion sur le développement de nouveaux outils, plateformes, services et interfaces.
                                        </p>*/}
                                        
                                    </div>
                                </div>
                            </div>

                            {/* Parte Huma-Num - Texto izquierda, logo derecha (invertido) */}
                            <div className="pt-6 border-t border-gray-300">
                                <div className="flex flex-col md:flex-row-reverse gap-4">
                                    <div className="md:w-1/4">
                                        <img
                                            alt="Huma-Num logo"
                                            src={process.env.PUBLIC_URL + "/logos/huma.svg"}
                                            className="rounded-lg object-contain w-full"
                                        />
                                    </div>
                                    <div className="md:w-3/4">
                                        <p className="text-base font-jura text-gray-700 leading-relaxed mb-3">
                                            L'IR* Huma-Num vise à construire, avec les communautés, et à partir d'un pilotage scientifique,
                                            une infrastructure numérique de niveau international (nœud français des ERIC DARIAH et CLARIN) pour les SHS.
                                        </p>
                                        {/* 
                                        <p className="text-base font-jura text-gray-700 leading-relaxed mb-3">
                                            Elle vise à structurer, par l'intermédiaire de consortiums regroupant des acteurs des communautés scientifiques et d'un réseau
                                            de points de présence dans les maisons des sciences de l'Homme (MSH), l'accompagnement des communautés scientifiques SHS en matière
                                            d'infrastructure numérique pour les données de la recherche.
                                        </p>
                                        <p className="text-base font-jura text-gray-700 leading-relaxed mb-2">
                                            Elle met en œuvre une infrastructure numérique permettant aux communautés SHS de développer, de réaliser et de préserver sur le long
                                            terme les programmes de recherche leurs données et outils dans un contexte de science ouverte et de partage des données.
                                        </p>*/}
                                        <a href="https://www.huma-num.fr" target="_blank" rel="noopener noreferrer" className="inline-block text-arianRed font-medium hover:underline font-jura text-sm">
                                            Lire plus →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* LES OUTILS - 20% height - Mismo patrón visual */}
                        <section className="bg-arianGrayBg border-t-4 border-arianRed shadow-md p-6 rounded-lg" id="outils">
                            <h2 className="text-2xl font-bold font-jura text-gray-900 mb-4 pb-2 border-b-2 border-arianRed">
                                LES OUTILS
                            </h2>
                            <div className="bg-white p-4 rounded-lg">
                                <p className="text-base font-jura text-gray-700 leading-relaxed mb-3">
                                    Le développement d'outils informatiques au service de la recherche est une démarche technologique qui fait partie des travaux scientifiques du Consortium Ariane.
                                </p>
                               {/*  <p className="text-base font-jura text-gray-700 leading-relaxed mb-2">
                                    Grâce aux ingénieurs, programmeurs et aux chercheurs membres du consortium, la création d'applications spécifiques, de logiciels, de systèmes de gestion de données et d'interfaces permet de faire avancer ses réflexions.
                                </p>*/}
                                {/* Caja de texto editable para añadir más contenido */}
                                {/* <div className="mt-3 p-3 bg-gray-50 border-2 border-dashed border-gray-300 rounded min-h-[60px]">
                                    <p className="text-sm text-gray-500 italic">Espacio editable para añadir más contenido sobre las herramientas...</p>
                                </div>*/}
                                <a href="#outils-section" className="inline-block mt-3 text-arianRed font-medium hover:underline font-jura text-sm">
                                    Lire plus →
                                </a>
                            </div>
                        </section>
                    </div>

                    {/* Right Column - Takes 40% (2 of 5 columns) - Full Height */}
                    <section className="lg:col-span-2 bg-arianGrayBg border-t-4 border-arianRed shadow-md p-6 rounded-lg" id="axes" style={{minHeight: '500px'}}>
                        <h2 className="text-2xl font-bold font-jura text-gray-900 mb-4 pb-2 border-b-2 border-arianRed">
                            LES AXES
                        </h2>

                        {/* INSERTAR IMAGEN DEL ENCABEZADO AQUÍ */}
                        <div className="mb-6">
                            <div className="h-32 bg-white rounded border-2 border-dashed border-gray-400 flex items-center justify-center mb-2">
                                <span className="text-sm text-gray-500 italic">Insertar imagen del encabezado de LES AXES aquí</span>
                            </div>
                            <p className="text-xs text-gray-600 font-jura italic">
                                Le Consortium Ariane vise à créer une synergie entre les sciences humaines et de l'informatique en vue de développer l'analyse semi-automatisée des textes.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* AXE 1 */}
                            <div className="bg-white p-4 rounded-lg border-l-4 border-arianRed shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex gap-3">
                                    {/* Espacio para imagen cuadrada del axe */}
                                    <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded border-2 border-dashed border-gray-400 flex items-center justify-center">
                                        <span className="text-xs text-gray-500 text-center">Img</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1 font-jura">Éditions numériques de qualité</h3>
                                        <p className="text-xs text-arianRed font-semibold font-jura mb-2">AXE 1</p>
                                        {/* Caja de texto editable para enlaces */}
                                        <div className="mt-2 p-2 bg-gray-50 border border-gray-300 rounded min-h-[40px]">
                                            <p className="text-xs text-gray-600 font-jura">Espacio editable para enlaces a contenido del Axe 1...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* AXE 2 */}
                            <div className="bg-white p-4 rounded-lg border-l-4 border-arianRed shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex gap-3">
                                    {/* Espacio para imagen cuadrada del axe */}
                                    <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded border-2 border-dashed border-gray-400 flex items-center justify-center">
                                        <span className="text-xs text-gray-500 text-center">Img</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1 font-jura">Deep reading</h3>
                                        <p className="text-xs text-arianRed font-semibold font-jura mb-2">AXE 2</p>
                                        {/* Caja de texto editable para enlaces */}
                                        <div className="mt-2 p-2 bg-gray-50 border border-gray-300 rounded min-h-[40px]">
                                            <p className="text-xs text-gray-600 font-jura">Espacio editable para enlaces a contenido del Axe 2...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* AXE 3 */}
                            <div className="bg-white p-4 rounded-lg border-l-4 border-arianRed shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex gap-3">
                                    {/* Espacio para imagen cuadrada del axe */}
                                    <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded border-2 border-dashed border-gray-400 flex items-center justify-center">
                                        <span className="text-xs text-gray-500 text-center">Img</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1 font-jura">Problématiques transversales</h3>
                                        <p className="text-xs text-arianRed font-semibold font-jura mb-2">AXE 3</p>
                                        {/* Caja de texto editable para enlaces */}
                                        <div className="mt-2 p-2 bg-gray-50 border border-gray-300 rounded min-h-[40px]">
                                            <p className="text-xs text-gray-600 font-jura">Espacio editable para enlaces a contenido del Axe 3...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Bottom Section - Agenda & Membres side by side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* NOS ACTIVITÉS / AGENDA */}
                    <section className="bg-arianGrayBg border-t-4 border-arianRed shadow-md p-6 rounded-lg" id="agenda">
                        <h2 className="text-2xl font-bold font-jura text-gray-900 mb-4 pb-2 border-b-2 border-arianRed">
                            NOS ACTIVITÉS
                        </h2>
                        <div className="bg-white rounded-lg p-4" style={{minHeight: '350px'}}>
                            <iframe
                                src="https://calendar.google.com/calendar/embed?src=consortium.ariane%40gmail.com&ctz=Europe%2FParis"
                                width="100%"
                                height="350"
                                frameBorder="0"
                                scrolling="no"
                                title="Agenda ARIANE"
                                className="rounded"
                            ></iframe>
                        </div>
                    </section>

                    {/* LES MEMBRES */}
                    <section className="bg-arianGrayBg border-t-4 border-arianRed shadow-md p-6 rounded-lg" id="membres">
                        <h2 className="text-2xl font-bold font-jura text-gray-900 mb-4 pb-2 border-b-2 border-arianRed">
                            LES MEMBRES
                        </h2>
                        <div className="bg-white rounded-lg overflow-hidden">
                            <Mapi />
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
