import Accordeon from "../Components/Accordeon";
import Accueil from "../Components/Accueil";
import Axes from "../Components/Axes";
import Headers from "../Components/Headers";
import Mapi from "../Components/Map";
import Outils from "../Components/Outils";

export default function HomePage() {
    return (
        <article>
            <Headers titre={"Présentation"} theme={"Analyses, Recherches, Intelligence Artificielle et Nouvelles Editions numériques"} />
            <Accueil />
            <section >
                <Headers titre={"Les Axes"} theme={"Le Consortium Ariane vise à créer une synergie entre les sciences humaines et de l'informatique en vue de développer l'analyse semi-automatisée des textes. En favorisant une communauté scientifique active et ouverte à la collaboration interdisciplinaire"} />
                <Axes />
                <Headers titre={"L'Agenda"} theme={"L'Agenda d'activités du Consortium Ariane est élaboré par ses membres et groupes de travail. Cet agenda présente toute la variété d'activités du Consortium. "} />
                <div className="flex justify-center p-5 md:15 lg:mx-20" id="agenda">
                    <iframe src="https://calendar.google.com/calendar/embed?src=consortium.ariane%40gmail.com&ctz=Europe%2FParis"
                        width="100%"
                        height="600"
                        title="agenda de Ariane" ></iframe>
                </div>
                <Headers titre={"Les Groupes de travail"} theme={"Les groupes de travail du Consortium ARIANE sont portés par ses membres mais sont ouverts à des compétences variées. En lien avec le programme scientifique du Consortium, ils ont pour mission principale de se concentrer sur des aspects techniques et scientifiques et de relever des défis particuliers liés aux axes de recherches du Consortium. Ils collaborent également avec d'autres consortiums d'Huma-Num dans le cadre de travaux inter-consortiums."} />
                <Accordeon />
                <Headers titre={"Les Outils"} theme={"Le développement d'outils informatiques au service de la recherche est une démarche technologique qui fait partie des travaux scientifiques du Consortium Ariane. Grâce aux ingénieurs, programmeurs et aux chercheurs membres du consortium, la création d'applications spécifiques, de logiciels, de systèmes de gestion de données et d'interfaces permet de faire avancer ses réflexions"} />
                <Outils />
            </section>
            <Headers titre={"Les Membres"} theme={"Les membres du Consortium Ariane sont des chercheurs, enseignants-chercheurs et ingénieurs issus de différentes institutions internationales. Leur participation active au sein de ce consortium illustre l'ampleur de ses collaborations dans le domaine des Humanités numériques des textes. Venant de diverses institutions académiques, ces membres contribuent, grâce à la richesse et à la variété de leurs expertises, à atteindre les objectifs du Consortium."} />
            <div className="md:mx-15 lg:mx-20 mb-2 ">
                <Mapi />
            </div>
        </article>
    )
}