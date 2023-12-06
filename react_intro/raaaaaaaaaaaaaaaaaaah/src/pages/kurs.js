import { useParams } from "react-router-dom"
//import { useState} from 'react'
    
/*export function confirmSignUp() {
    const [KursM, setKursM] = useState("Meld meg på")
    return(<button id="myButton" onClick={(e) => {
        setKursM("meld meg av")
    }}>{KursM}</button>)

 }*/

    

const alleKurs = {
    kroppsoving: {
        innhold: (
            <>
            
           
           <p id="gymside" >

            <confirmSignUp />

            <h1 id="mentzer">    Du er nå meldt på! Kroppsøving er mye mer enn bare fysisk aktivitet – det er en utforskning av kroppens potensial, bevegelsesmønstre og helse. I dette kurset vil vi utforske hvordan kroppen fungerer og utvikler, seg gjennom ulike former for trening og aktivitet. Vi vil se på både teoretiske og praktiske aspekter av kroppsøving, inkludert anatomi, idrettslige ferdigheter, helsefordeler og metoder for å  </h1>
                
                <img id="mentzer" src="https://pngimg.com/d/dumbbell_PNG16376.png" alt="arnold"/>
                 </p>


                 </>
                 ),
                 
    },
    
    norsk: {
        innhold: (
            
            
            <h1 id="norsktekst">
                
    
             Du er nå meldt på!
             
             <img id="norskbok" src="https://res-3.cloudinary.com/forlagshuset/image/upload/c_fit,q_auto:best,w_300/9788211042224" alt="arnold"/>
            </h1>
            
        ),
    },
    heimkunnskap: {
        innhold: (
            <>
               <p id="heim"> 
<p id="hovedskrift"> Du er nå meldt på! </p>Heimkunskap, også kjent som husholdningskunnskap eller hjemmeøkonomi, er et fagområde som fokuserer på praktiske ferdigheter og kunnskap som er viktige for å kunne håndtere ulike aspekter av dagliglivet. Dette kan inkludere alt fra matlaging, renhold og personlig økonomi til husstell, klespleie og ernæring.

En introduksjon til heimkunskap kan inneholde:

Matlaging: Grunnleggende matlagingsferdigheter, forståelse av ulike matvarer, kostholdsinformasjon og sunne matvaner.

Husstell: Rengjøringsteknikker, organisering av hjemmet, vedlikehold av møbler og generell husholdningspleie.

.</p>

<p id="hei"> Personlig økonomi: Budsjettlegging, sparing, forståelse av økonomiske begreper og ansvarlig pengebruk.

Klespleie: Vasking, stryking, enkel reparasjon av klær og forståelse av materialer.

Ernæring: Grunnleggende kunnskap om næringsstoffer, viktigheten av balansert kosthold og hvordan lage sunne måltider.

En heimkunskapskurs kan være praktisk rettet, med fokus på hands-on øvelser og demonstrasjoner for å lære disse ferdighetene. Det kan også inkludere teoretisk kunnskap om forskjellige emner relatert til hjemmeøkonomi.

Det er ofte en nyttig ressurs for alle, uavhengig av alder eller erfaring, da det gir praktiske ferdigheter som er viktige for å kunne leve selvstendig og effektivt.  </p>


<img id="mat" src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180323163421/Ramen.jpg" alt="mat"/>



               
            </>
        ),
    },
    datakunnskap: {
        innhold: (
            <>
            <h1 id="data"> Du er nå meldt på! </h1> 
           
                <img id="retro" src="https://i.pinimg.com/originals/83/d5/e0/83d5e040af429fd72ba7b57924fd3d3b.jpg" alt="pc"/>

            </>
        ),
    },
}

export default function Kurs() {
    const { kursId } = useParams();
    return alleKurs[kursId].innhold;
}