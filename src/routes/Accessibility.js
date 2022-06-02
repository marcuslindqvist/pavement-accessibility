import React from 'react';
import './Accessibility.css';
export default function Accessibility() {
    return (
        <div className="access-page">
            <div className="page-header">
                <h1>Tillgänglighet</h1>
            </div>

            <div className="page-main">
                {' '}
                <section>
                    <h2>Tillgänglighet</h2>
                    <p>
                        Digital tillgänglighet innebär att ingen ska hindras
                        från att få tillgång till digital offentlig service
                        såsom tjänster och information på webbplatser och
                        applikationer. Tillgänglighet i detta sammanhang betyder
                        inte att något ska vara åtkomligt utan det betyder att
                        information och tjänster ska kunna användas av alla
                        människor oavsett funktionsnedsättning eller bredast
                        möjliga spektrum av egenskaper och förmågor.
                    </p>
                </section>
                <section>
                    <h2>Designa för alla</h2>
                    <p>
                        Ett bra sätt att förhindra att funktionshinder uppstår
                        är att utgå från den breda variation som finns mellan
                        olika människors förmågor och egenskaper, snarare än att
                        designa för en genomsnittlig användare. Ett sådant
                        förhållningssätt kallas för design för alla eller
                        universell utformning. Det handlar inte bara om
                        funktionsnedsättningar utan om hela den mångfald som
                        präglar användarnas behov, förmågor och egenskaper.
                        Ibland är särlösningar nödvändiga, men så långt som
                        möjligt bör de ordinarie lösningarna fungera för alla.
                        Det blir mer inkluderande och ofta billigare och bättre
                        för alla.
                    </p>
                </section>
            </div>
        </div>
    );
}
