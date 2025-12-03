export default function Axes() {
    return (
        <section className="mx-10" id="axes">
            <div className="mx-auto w-full px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 font-jura">
                    <article className="bg-arianGrayBg p-4 hover:-skew-y-3 shadow-md border-l-4 border-arianRed transition-transform duration-300 sm:p-6 lg:p-8 rounded-lg">
                        <div>
                            <strong className="inline-block rounded bg-arianRed px-6 py-1.5 text-[16px] font-medium text-white">
                                Axe 1
                            </strong>

                            <h3 className="mt-4 text-2xl sm:text-xl font-semibold text-gray-800">
                                <p>Éditions numériques de qualité</p>
                            </h3>
                            <br />

                            <p className="mt-1 text-xl text-gray-700 tracking-wider font-jura">
                                Les travaux entrepris dans le cadre de cet axe prolongeront en partie les travaux d'acquisition des textes en formats
                                numériques dynamiques, entrepris par exemple (mais pas exclusivement) dans le cadre de CAHIER.
                            </p>
                        </div>
                    </article>
                    <article className="bg-arianGrayBg p-4 skew-y-3 hover:skew-y-0 shadow-md border-l-4 border-arianRed transition-transform duration-300 sm:p-6 lg:p-8 rounded-lg">
                        <div>
                            <strong className="inline-block rounded bg-arianRed px-6 py-1.5 text-[16px] font-medium text-white">
                                Axe 2
                            </strong>

                            <h3 className="mt-4 text-2xl sm:text-xl font-semibold text-gray-800">
                                <p>Deep reading</p>
                            </h3>
                            <br />

                            <p className="mt-1 text-xl text-gray-700 tracking-wider font-jura">
                                Cet axe se concentre sur l'épistémologie, les outils et les méthodes de la fouille de données et de métadonnées. <br /> <br />
                                L'objectif est de contribuer à la création de nouvelles connaissances en histoire et histoire de la littérature, théorie littéraire, stylistique et poétique, <br />
                                que ce soit à partir de (grands) corpus, de collections constituées selon une norme explicite, ou de textes individuels.
                            </p>
                        </div>
                    </article>
                    <article className="bg-arianGrayBg p-4 hover:-skew-y-3 shadow-md border-l-4 border-arianRed transition-transform duration-300 sm:p-6 lg:p-8 rounded-lg">
                        <div>
                            <strong className="inline-block rounded bg-arianRed px-6 py-1.5 text-[16px] font-medium text-white">
                                Axe 3
                            </strong>

                            <h3 className="mt-4 text-2xl sm:text-xl font-semibold text-gray-800">
                                <p>Problématiques transversales</p>
                            </h3>
                            <br />

                            <p className="mt-1 text-xl text-gray-700 tracking-wider font-jura">
                                Des problématiques et questions transversales aux deux axes seront également traitées et donneront lieu
                                à des travaux de l'ensemble des membres du consortium.
                                <br /> <br />
                                Deux sujets ont déjà été identifiés par les membres,
                                ils concernent les questions juridiques et les questions d'éthique de la numérisation et de la mise en ligne.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}