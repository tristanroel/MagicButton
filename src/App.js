import React, { useState } from 'react';


function App() {
  let cpt = 0;
  let [cl, Setcl] = useState("rgb(000,000,000)");

    function returnRandomNumber(){
          let nbr = Math.trunc(Math.random()* (255 - 0) + 0)
          // .trunc : retourne un nombre sans tenir compte des nombres apres la virgule
          return nbr
    }


    function changeColor(){
          let colorcode = 0;
          colorcode = "rgb("+returnRandomNumber()+","+returnRandomNumber()+","+returnRandomNumber()+")";
          cpt = cpt + 1;
          document.getElementById('bckgrndbtn').style.backgroundColor=colorcode
          console.log(""+colorcode+"");
          Setcl(colorcode)
    }


  return (
        <div className='bckGrnd' id='bckgrndbtn'>
            <div className='infoColor' >{cl}</div>
            <div className='magicbutton'>
                <button id='LeBouton' onClick={changeColor}>CLICK !</button>
            </div> 
        </div>
  );
};

export default App;
