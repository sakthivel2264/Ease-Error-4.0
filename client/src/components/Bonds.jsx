import React,{useRef,useEffect} from 'react'
const data ={
    "Political_Parties": [
      {
        "ID": 1,
        "Party": "BHARATIYA JANATA PARTY (BJP)",
        "Amount_Encashed": "₹60,60,51,11,000.00"
      },
      {
        "ID": 2,
        "Party": "ALL INDIA TRINAMOOL CONGRESS",
        "Amount_Encashed": "₹16,09,53,14,000.00"
      },
      {
        "ID": 3,
        "Party": "PRESIDENT, ALL INDIA CONGRESS COMMITTEE",
        "Amount_Encashed": "₹14,21,86,55,000.00"
      },
      {
        "ID": 4,
        "Party": "BHARAT RASHTRA SAMITHI",
        "Amount_Encashed": "₹12,14,70,99,000.00"
      },
      {
        "ID": 5,
        "Party": "BIJU JANATA DAL",
        "Amount_Encashed": "₹7,75,50,00,000.00"
      },
      {
        "ID": 6,
        "Party": "DMK PARTY IN PARLIAMENT",
        "Amount_Encashed": "₹6,39,00,00,000.00"
      },
      {
        "ID": 7,
        "Party": "YSR CONGRESS PARTY (YUVAJANA SRAMIKA R",
        "Amount_Encashed": "₹3,37,00,00,000.00"
      },
      {
        "ID": 8,
        "Party": "TELUGU DESAM PARTY",
        "Amount_Encashed": "₹2,18,88,00,000.00"
      },
      {
        "ID": 9,
        "Party": "SHIVSENA (POLITICAL PARTY)",
        "Amount_Encashed": "₹1,58,38,14,000.00"
      },
      {
        "ID": 10,
        "Party": "RASTRIYA JANTA DAL",
        "Amount_Encashed": "₹72,50,00,000.00"
      },
      {
        "ID": 11,
        "Party": "AAM AADMI PARTY",
        "Amount_Encashed": "₹65,45,00,000.00"
      },
      {
        "ID": 12,
        "Party": "JANATA DAL ( SECULAR )",
        "Amount_Encashed": "₹43,50,00,000.00"
      },
      {
        "ID": 13,
        "Party": "SIKKIM KRANTIKARI MORCHA",
        "Amount_Encashed": "₹36,50,00,000.00"
      },
      {
        "ID": 14,
        "Party": "NATIONALIST CONGRESS PARTY PARLIAMENT OF",
        "Amount_Encashed": "₹30,50,00,000.00"
      },
      {
        "ID": 15,
        "Party": "JANASENA PARTY",
        "Amount_Encashed": "₹21,00,00,000.00"
      },
      {
        "ID": 16,
        "Party": "ADYAKSHA SAMAJVADI PARTY",
        "Amount_Encashed": "₹14,05,00,000.00"
      },
      {
        "ID": 17,
        "Party": "BIHAR PRADESH JANTA DAL(UNITED)",
        "Amount_Encashed": "₹14,00,00,000.00"
      },
      {
        "ID": 18,
        "Party": "JHARKHAND MUKTI MORCHA",
        "Amount_Encashed": "₹13,50,00,000.00"
      },
      {
        "ID": 19,
        "Party": "SHIROMANI AKALI DAL",
        "Amount_Encashed": "₹7,26,00,000.00"
      },
      {
        "ID": 20,
        "Party": "ALL INDIA ANNA DRAVIDA MUNNETRA KAZHAGAM",
        "Amount_Encashed": "₹6,05,00,000.00"
      },
      {
        "ID": 21,
        "Party": "SIKKIM DEMOCRATIC FRONT",
        "Amount_Encashed": "₹5,50,00,000.00"
      },
      {
        "ID": 22,
        "Party": "RASHTRIYA JANTA DAL",
        "Amount_Encashed": "₹1,00,00,000.00"
      },
      {
        "ID": 23,
        "Party": "SHIVSENA",
        "Amount_Encashed": "₹1,00,00,000.00"
      },
      {
        "ID": 24,
        "Party": "MAHARASHTRAWADI GOMNTAK PARTY",
        "Amount_Encashed": "₹55,00,000.00"
      },
      {
        "ID": 25,
        "Party": "NATIONALIST CONGRESS PARTY MAHARASHTRA PRADESH",
        "Amount_Encashed": "₹50,00,000.00"
      },
      {
        "ID": 26,
        "Party": "JAMMU AND KASHMIR NATIONAL CONFERENCE",
        "Amount_Encashed": "₹50,00,000.00"
      },
      {
        "ID": 27,
        "Party": "GOA FORWARD PARTY",
        "Amount_Encashed": "₹35,00,000.00"
      }
    ]
  }
const Bonds= () => {
    const sliderRef = useRef(null);

    useEffect(() => {
      const slider = sliderRef.current;
      let index = 0;
  
      const interval = setInterval(() => {
        index = (index + 1) % data.Political_Parties.length;
        slider.scrollLeft = index * (slider.offsetWidth + 1); 
      }, 3000); 
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        <>
         <h2 className='text-4xl text-white text-center p-28'>Existing Bonds Data</h2>
      <div className="w-full overflow-hidden h-[500px]" style={{ scrollBehavior: 'smooth' }} ref={sliderRef} >
          
        <div className="flex flex-row gap-20">
         
          {data.Political_Parties.map((party) => (
            <div key={party.ID} className="bg-transparent  shadow-md rounded-lg p-4 ml-4 border flex justify-center align-middle flex-col" style={{ minWidth: '300px' }}>
              <h3 className="text-xl font-bold mb-2 text-center">{party.Party}</h3>
              <p className="text-gray-700 text-center ">{party.Amount_Encashed}</p>
            </div>
          ))}
        </div>
      </div>
      </>
    );
}

export default Bonds