export default function Accueil() {
    return (
        <section class="bg-white dark:bg-gray-900" id="accueil">
            <div>
                <div
                    class="container flex flex-col   w-full min-h-screen px-6 py-10 mx-auto  lg:inset-x-0">
                    <section class=" bg-gray-100/60 border-t border-arianBord shadow-sm p-8 mb-5">
                        <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-start lg:items-center">
                            <div class="sm:col-span-3 lg:col-span-1">
                                <img
                                    alt="logo ariane"
                                    src={process.env.PUBLIC_URL + "logos/ariane.png"}
                                    class="rounded-lg object-cover"
                                />
                            </div>
                            <div class="sm:col-span-3 lg:col-span-2">
                                <blockquote>
                                    <p class="text-xl font-medium text-gray-600 font-jura">
                                        Le Consortium-HN ARIANE (Analyses, Recherches, Intelligence Artificielle et Nouvelles Editions numériques) a été labellisé par
                                        Huma-Num le 18/01/2023 pour une période de 4 ans.
                                        <br /> <br />
                                        ARIANE réunit des spécialistes du texte
                                        (littéraires, linguistes, historiens…) et de l'informatique en vue de créer un espace de dialogue scientifique véritablement interdisciplinaire
                                        entre ces deux communautés.
                                        <br /> <br />
                                        L’objectif du consortium ARIANE est de progresser ensemble dans la connaissance et le raffinement des méthodes informatiques
                                        appliquées aux objets et données des sciences humaines (et, plus particulièrement, des sciences du texte).
                                        <br /> <br />
                                        Le consortium se veut un espace de discussion portant sur l’interprétation des résultats obtenus à l’aide de méthodes (semi)automatiques d’analyses des textes,
                                        il vise également à faciliter l’accès de la communauté aux algorithmes, scripts et chaînes de traitement qui simplifient la manipulation et l’enrichissement
                                        des textes et à stimuler la création de nouvelles connaissances à leur sujet et sur leurs contextes.
                                        <br /> <br />
                                        Au sein d’Huma-Num,
                                        le consortium veut également contribuer à la réflexion sur le développement de nouveaux outils, plateformes, services et interfaces.

                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </section>
                    <section class="bg-gray-100/60 border-t border-arianBord shadow-sm p-8">
                        <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-start lg:items-center">
                            <div class="sm:col-span-3 lg:col-span-2">
                                <blockquote>
                                    <p class="text-xl font-medium font-jura text-gray-600">
                                        L’'IR* Huma-Num vise à construire, avec les communautés, et à partir d’un pilotage scientifique,
                                        une infrastructure numérique de niveau international (nœud français des ERIC DARIAH et CLARIN) pour les SHS.
                                        <br /> <br />

                                        Elle vise à structurer, par l’intermédiaire de consortiums regroupant des acteurs des communautés scientifiques et d’un réseau
                                        de points de présence dans les maisons des sciences de l’Homme (MSH), l’accompagnement des communautés scientifiques SHS en matière
                                        d’infrastructure numérique pour les données de la recherche.
                                        <br /> <br />
                                        Elle met en œuvre une infrastructure numérique permettant aux communautés SHS de développer, de réaliser et de préserver sur le long
                                        terme les programmes de recherche leurs données et outils dans un contexte de science ouverte et de partage des données.

                                    </p>
                                </blockquote>
                            </div>
                            <div class="sm:col-span-3 lg:col-span-1">
                                <img
                                    alt="Man"
                                    src={process.env.PUBLIC_URL + "logos/huma.svg"}
                                    class="rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}