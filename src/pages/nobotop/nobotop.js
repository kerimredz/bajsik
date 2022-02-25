import React, { useEffect, useState } from 'react';
import {Route, Link} from 'react-router-dom';
 
import '../nobotop/nobotop.css';
 
import Product from '../../compontents/product/product';
import Cart from '../../compontents/cart/cart';
import {NOBORadijatori} from './nobo-top-list';
 
const Nobotop = (props) => {

  /*--------------- DODAVANJE ITEMA ---------------- */
  const handleClick= (product) => {
    let istiid = false;
 
    if(!cart.cartItems.length){
      cart.cartItems.push(product);
      cart.snagKartice = product.value;
      cart.ukupnaSnaga = cart.ukupnaSnaga + product.value;
      setCart({
        cartItems: cart.cartItems,
        snagKartice: product.value,
        ukupnaSnaga: cart.ukupnaSnaga
      })
      setPotrebnaSnaga({
        snaga: potrebnaSnaga.snaga - product.value
      })
    } else {
      cart.cartItems.map((radijator,index) => {
        if(radijator.id == product.id){
          cart.cartItems[index].quantity = cart.cartItems[index].quantity + 1 ;
          istiid=true;
          cart.ukupnaSnaga = cart.ukupnaSnaga + product.value
          setCart({
            cartItems: cart.cartItems,
            snagKartice: product.value,
            ukupnaSnaga: cart.ukupnaSnaga
          })
          setPotrebnaSnaga({
            snaga: potrebnaSnaga.snaga - product.value
          })
        }
      })
      if(!istiid){
        cart.cartItems.push(product);
        cart.snagKartice = product.value;
        cart.ukupnaSnaga = cart.ukupnaSnaga + product.value;
        setCart({
          cartItems: cart.cartItems,
          snagKartice: product.value,
          ukupnaSnaga: cart.ukupnaSnaga
        })
        setPotrebnaSnaga({
          snaga: potrebnaSnaga.snaga - product.value
        })
      }
    }
  }

  /*--------------- BRISANJE ITEMA ---------------- */

  const RemoveItem = (index) => {
    console.log(cart);
    let quantity = cart.cartItems[index].quantity;
    cart.cartItems[index].quantity = 1;
    console.log(quantity);
    console.log("Snaga obrisane: ", cart.cartItems[index].value)
    let obrisanaSnaga = cart.cartItems[index].value*quantity
    cart.cartItems.splice(index, 1)

    if(quantity == 0){
      setCart({
        cartItems: cart.cartItems,
        snagKartice: 0,
        ukupnaSnaga: cart.ukupnaSnaga - obrisanaSnaga
      })
      setPotrebnaSnaga({
        snaga: potrebnaSnaga.snaga + obrisanaSnaga
      })
    }
    else {
      setCart({
        cartItems: cart.cartItems,
        snagKartice: 0,
        ukupnaSnaga: cart.ukupnaSnaga - obrisanaSnaga
      })
      setPotrebnaSnaga({
        snaga: potrebnaSnaga.snaga + obrisanaSnaga
      })
    }
  }
 
  const [vrijednostSlidera, setVrijednostSlidera] = useState({
    slider: 50
  });
 
  const [potrebnaSnaga, setPotrebnaSnaga] = useState({
    snaga: 3.5
  });
 
  const[cart,setCart] = useState({
    cartItems:[],
    snagKartice: 0,
    ukupnaSnaga:0
  })
 
  const[allproducts, setProduct] = useState({
    products: NOBORadijatori.NOBOTOP
  });
 
  /*--------------- VRIJEDNOSTI SLIDERA ---------------- */
  const handleChange = (event) => {
    setVrijednostSlidera({
      slider: event.target.value
    })
    let brojac = 0;
    let osnovnaSnaga = 2;
    if(event.target.value >= 1 && event.target.value <=27){
      brojac = 0;
    }
    if(event.target.value >= 28 && event.target.value <=54){
      brojac = 1;
    }
    if(event.target.value >= 55 && event.target.value <=81){
      brojac = 2;
    }
    if(event.target.value >=82  && event.target.value <=100){
      brojac = 3;
    }
    if (event.target.value <= 9+(brojac*30)){
      setPotrebnaSnaga({
        snaga: (brojac*osnovnaSnaga)+0.5-cart.ukupnaSnaga
      })
    }
    if (event.target.value>9+(brojac*27) && event.target.value <= 12+(brojac*27)){
      setPotrebnaSnaga({
        snaga: (brojac*osnovnaSnaga)+0.75-cart.ukupnaSnaga
      })
    } 
    if (event.target.value>12+(brojac*27) && event.target.value <= 15+(brojac*27)){
      setPotrebnaSnaga({
        snaga: (brojac*osnovnaSnaga)+1-cart.ukupnaSnaga
      })
    } 
    if (event.target.value>15+(brojac*27) && event.target.value <= 19+(brojac*27)){
      setPotrebnaSnaga({
        snaga: (brojac*osnovnaSnaga)+1.25-cart.ukupnaSnaga
      })
    } 
    if (event.target.value>19+(brojac*27) && event.target.value <= 23+(brojac*27)){
      setPotrebnaSnaga({
        snaga: (brojac*osnovnaSnaga)+1.5-cart.ukupnaSnaga
      })
    } 
    if (event.target.value>23+(brojac*27) && event.target.value<=27+(brojac*27)){
      setPotrebnaSnaga({
        snaga: (brojac*osnovnaSnaga)+2-cart.ukupnaSnaga
      })
    } 
  };
 
  return (
    <div className = "nobotop">
      <div className = "nobotop-sadrzaj">
        <div className = "nobotop-sadrzaj-logo" >
          <div className = "nobotop-sadrzaj-logo-slika" onClick={() => window.open("https://www.bajsik.com.ba", "_self")}></div>
        </div>
        <div className = "nobotop-sadrzaj-uputa">
          <p>Molimo Vas da pomjerite slider na kvadraturu Vaše prostorije (1 - 100 m^2):</p>
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
            <h5>Vaša trenutna unesena kvadratura prostorije iznosi:</h5>
            <div className = "nobotop-sadrzaj-kvadratura-info">
                <h3>{vrijednostSlidera.slider}</h3>
                <h4>m^2</h4>
            </div>
          </div>
          <div className = "nobotop-sadrzaj-kvadratura">
          <h5>Potrebna snaga za zagrijavanje Vaše prostorije iznosi:</h5>
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
            allproducts.products.map((product) => {
              return <Product key={product.id} id={product.id} name={product.name} img={product.img} cart={cart} setCart={setCart} handleClick={() => handleClick(product)}/>
            })
          }
          </div>
        </div>
        <div className = "nobotop-sadrzaj-korpa">
          <h1>Vaši izabrani proizvodi: </h1>
          <div className = "nobotop-sadrzaj-korpa-izabrano">
          {
            cart.cartItems.map((item, index) => {
              return <Cart
                key = {item.id}
                id = {item.id}
                quantity = {item.quantity}
                name = {"Nobo TOP Radijator"}
                value = {item.value}
                link = {item.link}
                quantity = {item.quantity}
                removeitem={() => RemoveItem(index)}
              />
            })
          }
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Nobotop;