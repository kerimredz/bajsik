import React, { useEffect, useState } from 'react';
import {Route, Link} from 'react-router-dom';

import '../nobotop/nobotop.css';

import {NOBORadijatori} from './nobo-top-list';

const Nobotop = (props) => {

  const [iden, setId] = useState({
    id: 1
  })


  const [vrijednostSlidera, setVrijednostSlidera] = useState({
    slider: 1
  });


  const [potrebnaSnaga, setPotrebnaSnaga] = useState({
    snaga: 0.5
  });

  const [pomocnaSnaga, setPomocnaSnaga] = useState({
    snaga: 0
  })


  const[allproducts, setProduct] = useState({
    products: NOBORadijatori.NOBOTOP
  });


  const[cart,setCart] = useState({
    cartItems:[],
    snagKartice: 0
  })

  async function addItem (product) {
    setCart({
      cartItems:[... cart.cartItems,
      {
        cartID: iden.id+1,
        cartName: product.name,
        cartValue: product.value,
        cartLink: product.link    
      }],
      snagKartice: pomocnaSnaga.snaga + product.value
    })
     setPomocnaSnaga({
      snaga: cart.snagKartice
    })
    setPotrebnaSnaga({
      snaga: potrebnaSnaga.snaga - cart.snagKartice
    })
    setId({
      id: iden.id+1
    })
    console.log(potrebnaSnaga.snaga, pomocnaSnaga.snaga, cart.snagKartice)
  }

  React.useEffect(() => console.log("The value after update", cart), [cart]);

  const handleChange = (event) => {
    setVrijednostSlidera({
      slider: event.target.value
    })
    let brojac = 0;
    let osnovnaSnaga = 2;
    if(event.target.value >= 1 && event.target.value <=30){
      brojac = 0;
    }
    if(event.target.value >= 31 && event.target.value <=60){
      brojac = 1;
    }
    if(event.target.value >= 61 && event.target.value <=90){
      brojac = 2;
    }
    if(event.target.value >=91  && event.target.value <=100){
      brojac = 3;
    }
    if (event.target.value <= 9+(brojac*30)){
      setPotrebnaSnaga({
        snaga: (brojac*osnovnaSnaga)+0.5-cart.snagKartice
      })
    }
    if (event.target.value>9+(brojac*30) && event.target.value <= 12+(brojac*30)){
      setPotrebnaSnaga({
        snaga: (brojac*osnovnaSnaga)+0.75-cart.snagKartice
      })
    } 
    if (event.target.value>12+(brojac*30) && event.target.value <= 15+(brojac*30)){
      setPotrebnaSnaga({
        snaga: (brojac*osnovnaSnaga)+1-cart.snagKartice
      })
    } 
    if (event.target.value>15+(brojac*30) && event.target.value <= 19+(brojac*30)){
      setPotrebnaSnaga({
        snaga: (brojac*osnovnaSnaga)+1.25-cart.snagKartice
      })
    } 
    if (event.target.value>19+(brojac*30) && event.target.value <= 23+(brojac*30)){
      setPotrebnaSnaga({
        snaga: (brojac*osnovnaSnaga)+1.5-cart.snagKartice
      })
    } 
    if (event.target.value>23+(brojac*30) && event.target.value<=30+(brojac*30)){
      setPotrebnaSnaga({
        snaga: (brojac*osnovnaSnaga)+2-cart.snagKartice
      })
    } 
  };

  return (
    <div className = "nobotop">
      <div className = "nobotop-sadrzaj">
        <div className = "nobotop-sadrzaj-logo">
          <div className = "nobotop-sadrzaj-logo-slika"></div>
        </div>
        <div className = "nobotop-sadrzaj-uputa">
          <p>Molimo Vas da pomjerite slider na kvadraturu Vašeg objekta (1 - 100 m^2):</p>
        </div>
        <div className = "nobotop-sadrzaj-slider">
          <input 
            className="slider"
            id="typeinp" 
            type="range" 
            min="1"
            max="100"
            defaultValue={vrijednostSlidera.slider}
            step="1"
            onChange = {(event) => handleChange(event)}
          />
        </div>
        <div className = "nobotop-sadrzaj-infoholder">  
          <div className = "nobotop-sadrzaj-kvadratura">
            <h5>Vaša trenutna unesena kvadratura objekta iznosi:</h5>
            <div className = "nobotop-sadrzaj-kvadratura-info">
                <h3>{vrijednostSlidera.slider}</h3>
                <h4>m^2</h4>
            </div>
          </div>
          <div className = "nobotop-sadrzaj-kvadratura">
          <h5>Potrebna snaga za zagrijavanje Vaše prostroije iznosi:</h5>
            <div className = {potrebnaSnaga.snaga<=0 ? "green" : "nobotop-sadrzaj-kvadratura-info"}>
              <h3>
                {
                  potrebnaSnaga.snaga<0 ? 0 : potrebnaSnaga.snaga
                }
              </h3>
              <h4>kW</h4>
            </div>
        </div>
        </div>
        <div className = "nobotop-sadrzaj-proizvodi">
          <div className = "nobotop-sadrzaj-proizvodi-naslov">
            <h1>Naši NOBO Top radijatori: </h1>
            <p>Dodavanjem proizvoda u izabrane proizvode smanjujete broj potrebne snage(kW) za Vaše prostorije</p>
          </div>
          <div className = "nobotop-sadrzaj-proizvodi-spisak">
          {
            allproducts.products.map((product,index) => {
              return(
                <div key={index} className = "product">
                  <img src={product.img} />
                  <div className = "product-text">
                    <h4 className = "product-text-h5">{product.name}</h4>
                    <div className = "product-text-button" onClick={() => addItem(product)}><h2>+</h2></div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
        <div className = "nobotop-sadrzaj-korpa">
          <h1>Vaši izabrani proizvodi: </h1>
          <div className = "nobotop-sadrzaj-korpa-izabrano">
            {
              cart.cartItems.map((product, index) => {
                return(
                  <div key={index} className = "test">
                    <p>{product.name}</p>
                    <p>{product.value}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nobotop; 