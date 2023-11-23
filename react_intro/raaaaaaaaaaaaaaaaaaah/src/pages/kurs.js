import { useParams } from "react-router-dom"

const alleKurs = {
    kroppsoving: {
        innhold: (
           
           
           <p id="gymside" >
                Her pumper vi jern

                <img id="mentzer" src="https://thebarbell.com/wp-content/uploads/2023/02/Mike-Mentzer-workout-4.jpg" alt="arnold"/>


                
    
            </p>
                
                
                
        ),
    },



    
    norsk: {
        innhold: (
            <>
             Norsk
            </>
        ),
    },
    heimkunnskap: {
        innhold: (
            <>
               bak brød eller no
            </>
        ),
    },
    datakunnskap: {
        innhold: (
            <>
                lær hacking
            </>
        ),
    },
}

export default function Kurs() {
    const { kursId } = useParams();
    return alleKurs[kursId].innhold;
}