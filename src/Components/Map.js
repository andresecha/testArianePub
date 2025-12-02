import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import data from '../data.json'; // Remplacez le chemin par le chemin vers votre fichier data.json

const MapComponent = () => {
    const mapContainer = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibGVsaWFzaW1wbG9uIiwiYSI6ImNreWU5OGxwazAwcWEycGxnOTZobTN1aDIifQ.xHqgEeiv-to4-vhnu0o2EQ';

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v11',
            center: [2.349014, 48.864716],
            zoom: 3,
        });

        // Créez un objet pour suivre les coordonnées déjà utilisées
        const usedCoordinates = {};

        // Parcourir les données et ajouter un marqueur pour chaque ville
        data.forEach((item, index)=> {
            const { Ville, coordonnees, Labo, Prenom, Nom } = item;

            if (Ville && coordonnees) {
                // Vérifiez si ces coordonnées ont déjà été utilisées
                const coordinateKey = coordonnees.join('|');
                if (usedCoordinates[coordinateKey]) {
                        // Si oui, ajoutez un petit décalage
                    const offset = 0.0002 * (index + 1); // Ajustez le décalage selon vos besoins
                    coordonnees[0] += offset;
                    coordonnees[1] += offset;
                }

                // Marquez ces coordonnées comme utilisées
                usedCoordinates[coordinateKey] = true;

                const popupContainer = document.createElement('div');
                popupContainer.innerHTML = `
                    <h3>${Prenom}</h3>
                    <h3>${Nom.toUpperCase()}</h3>
                    <p>${Labo == null ? "" : Labo}</p>
                `;

                // Créez le popup et associez-le au marqueur
                const popup = new mapboxgl.Popup({
                    offset: 50, // Ajustez le décalage du popup par rapport au marqueur
                }).setDOMContent(popupContainer);

                const marker = new mapboxgl.Marker({ "color": "#8F0006" })
                    .setLngLat(coordonnees)
                    .setPopup(popup)
                    .addTo(map);
            }
        });

        // Ajouter un contrôleur de zoom
        const navControl = new mapboxgl.NavigationControl();
        map.addControl(navControl);

        return () => map.remove();
    }, []);

    return <div id='membres' className='mt-10 border-l border-r border-arianBord' ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default MapComponent;
