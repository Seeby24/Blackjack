import {use, useEffect, useState} from "react";

export default function Blackjack() {
    const initialKarten = [
        {id: 1, name: "Pik As", wert: 11, symbol: "♠A"},
        {id: 2, name: "Pik 2", wert: 2, symbol: "♠2"},
        {id: 3, name: "Pik 3", wert: 3, symbol: "♠3"},
        {id: 4, name: "Pik 4", wert: 4, symbol: "♠4"},
        {id: 5, name: "Pik 5", wert: 5, symbol: "♠5"},
        {id: 6, name: "Pik 6", wert: 6, symbol: "♠6"},
        {id: 7, name: "Pik 7", wert: 7, symbol: "♠7"},
        {id: 8, name: "Pik 8", wert: 8, symbol: "♠8"},
        {id: 9, name: "Pik 9", wert: 9, symbol: "♠9"},
        {id: 10, name: "Pik 10", wert: 10, symbol: "♠10"},
        {id: 11, name: "Pik Bube", wert: 10, symbol: "♠J"},
        {id: 12, name: "Pik Dame", wert: 10, symbol: "♠Q"},
        {id: 13, name: "Pik König", wert: 10, symbol: "♠K"},
        {id: 14, name: "Herz As", wert: 11, symbol: "♥A"},
        {id: 15, name: "Herz 2", wert: 2, symbol: "♥2"},
        {id: 16, name: "Herz 3", wert: 3, symbol: "♥3"},
        {id: 17, name: "Herz 4", wert: 4, symbol: "♥4"},
        {id: 18, name: "Herz 5", wert: 5, symbol: "♥5"},
        {id: 19, name: "Herz 6", wert: 6, symbol: "♥6"},
        {id: 20, name: "Herz 7", wert: 7, symbol: "♥7"},
        {id: 21, name: "Herz 8", wert: 8, symbol: "♥8"},
        {id: 22, name: "Herz 9", wert: 9, symbol: "♥9"},
        {id: 23, name: "Herz 10", wert: 10, symbol: "♥10"},
        {id: 24, name: "Herz Bube", wert: 10, symbol: "♥J"},
        {id: 25, name: "Herz Dame", wert: 10, symbol: "♥Q"},
        {id: 26, name: "Herz König", wert: 10, symbol: "♥K"},
        {id: 27, name: "Karo As", wert: 11, symbol: "♦A"},
        {id: 28, name: "Karo 2", wert: 2, symbol: "♦2"},
        {id: 29, name: "Karo 3", wert: 3, symbol: "♦3"},
        {id: 30, name: "Karo 4", wert: 4, symbol: "♦4"},
        {id: 31, name: "Karo 5", wert: 5, symbol: "♦5"},
        {id: 32, name: "Karo 6", wert: 6, symbol: "♦6"},
        {id: 33, name: "Karo 7", wert: 7, symbol: "♦7"},
        {id: 34, name: "Karo 8", wert: 8, symbol: "♦8"},
        {id: 35, name: "Karo 9", wert: 9, symbol: "♦9"},
        {id: 36, name: "Karo 10", wert: 10, symbol: "♦10"},
        {id: 37, name: "Karo Bube", wert: 10, symbol: "♦J"},
        {id: 38, name: "Karo Dame", wert: 10, symbol: "♦Q"},
        {id: 39, name: "Karo König", wert: 10, symbol: "♦K"},
        {id: 40, name: "Kreuz As", wert: 11, symbol: "♣A"},
        {id: 41, name: "Kreuz 2", wert: 2, symbol: "♣2"},
        {id: 42, name: "Kreuz 3", wert: 3, symbol: "♣3"},
        {id: 43, name: "Kreuz 4", wert: 4, symbol: "♣4"},
        {id: 44, name: "Kreuz 5", wert: 5, symbol: "♣5"},
        {id: 45, name: "Kreuz 6", wert: 6, symbol: "♣6"},
        {id: 46, name: "Kreuz 7", wert: 7, symbol: "♣7"},
        {id: 47, name: "Kreuz 8", wert: 8, symbol: "♣8"},
        {id: 48, name: "Kreuz 9", wert: 9, symbol: "♣9"},
        {id: 49, name: "Kreuz 10", wert: 10, symbol: "♣10"},
        {id: 50, name: "Kreuz Bube", wert: 10, symbol: "♣J"},
        {id: 51, name: "Kreuz Dame", wert: 10, symbol: "♣Q"},
        {id: 52, name: "Kreuz König", wert: 10, symbol: "♣K"}
    ];

    const [deck, setDeck] = useState(initialKarten);
    const [spielerKarten, setSpielerKarten] = useState([]);
    const [dealerKarten, setDealerKarten] = useState([]);
    const [spielerPuntke, setSpielerPunkte] = useState(0);
    const [dealerPuntke, setDealerPunkte] = useState(0);
    const [start, setStart] = useState(false);
    const [standpressed,setStandpressed] = useState(false)
    const [money,setMoney] = useState(1000)
    const [bet,setBet] = useState(0)


    function karteZiehen(dran) {
        if (deck.length === 0) return;

        const index = Math.floor(Math.random() * deck.length);
        const gezogene = deck[index];

        const neuesDeck = [...deck];
        neuesDeck.splice(index, 1);
        setDeck(neuesDeck);

        if (dran === "spieler") {
            setSpielerKarten(prev => [...prev, gezogene]);
            setSpielerPunkte(prev => prev + gezogene.wert);
        } else if (dran === "dealer") {
            setDealerKarten(prev => [...prev, gezogene]);
            setDealerPunkte(prev => prev + gezogene.wert);
        }
    }

    function handleStand(){
        setStandpressed(true)
    }



    function resetSpiel() {
        setDeck(initialKarten);
        setSpielerKarten([]);
        setDealerKarten([]);
        setDealerPunkte(0);
        setSpielerPunkte(0);
        setStart(false)
        setStandpressed(false)
    }

    function spielStarten() {
        resetSpiel();
        setStart(true)
        setTimeout(() => {
            karteZiehen("spieler");
            setTimeout(() => {
                karteZiehen("dealer");
            }, 200);
        }, 200);
    }
    // Dealer zieht karten
    useEffect(() => {
        if (standpressed && dealerPuntke <= 16) {
            const timeout = setTimeout(() => {
                karteZiehen("dealer");
            }, 700);
            return () => clearTimeout(timeout);
        }

        if (standpressed && dealerPuntke > 16) {
            setTimeout(() => entscheideGewinner(), 800);
        }
    }, [standpressed, dealerPuntke]);


    function  entscheideGewinner(){
            if (dealerPuntke > 21) {
                alert("Du hast gewonnen!");
                setMoney()
            } else if (dealerPuntke > spielerPuntke) {
                alert("Dealer gewinnt!");
            } else if (dealerPuntke === spielerPuntke) {
                alert("Spieler gewinnt");
            } else {
                alert("Du hast gewonnen!");
            }
            resetSpiel();

    }
  // Checke auf Gewinn
    useEffect(() => {
        if (spielerPuntke > 21) {
            setTimeout(() => {
                alert("Du hast verloren");
                resetSpiel();
            }, 300);
        } else if (spielerPuntke === 21) {
            setTimeout(() => {
                alert("Du hast gewonnen");
                resetSpiel();
            }, 300);
        } else if (dealerPuntke > 21) {
            setTimeout(() => {
                alert("Du hast gewonnen");
                resetSpiel();
            }, 300);
        }
    }, [spielerPuntke,dealerPuntke]);


    return (
        <div>
            <h1>Blackjack</h1>
            <h3>Geld:{money}</h3>
            <input type="number"/>
            <div>
                <button onClick={spielStarten} disabled={start}>Starten</button>
                <button onClick={resetSpiel}>Spiel zurücksetzen</button>
                <button onClick={() => karteZiehen("spieler")} disabled={!start || standpressed}>Hit</button>
                <button onClick={handleStand} disabled={!start || standpressed}>Stand</button>
            </div>

            <h2>Spieler {spielerPuntke}</h2>
            <div style={{display: "flex", gap: "10px", flexWrap: "wrap"}}>
                {spielerKarten.map((karte) => (
                    <div key={karte.id} style={{border: "1px solid white", padding: "5px"}}>
                        <strong>{karte.symbol}</strong>


                    </div>
                ))}
            </div>

            <h2>Dealer {dealerPuntke}</h2>
            <div style={{display: "flex", gap: "10px", flexWrap: "wrap"}}>
                {dealerKarten.map((karte) => (
                    <div key={karte.id} style={{border: "1px solid white", padding: "5px"}}>
                        <strong>{karte.symbol}</strong>

                    </div>
                ))}
            </div>

            {deck.length === 0 && <p>Alle Karten wurden gezogen!</p>}
        </div>
    );
}
