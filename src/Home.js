import React from 'react'
import './Home.css';
import Product from './Product'
import Carousel from 'react-bootstrap/Carousel';
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MmY4MTZlYmMt/MmY4MTZlYmMt-MTg4NDhhYmUt-w1500._CB670024865_.jpgg"
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/TV/B2CS_S1_GWBleedingHero_1500x600_POST_noLocale_PVD7038._CB667981821_.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>


            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NmY1NTA5NmIt/NmY1NTA5NmIt-ZWUwMjdiM2Et-w1500._CB670182954_.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="home__row">
          <Product
            id="12321341"
            title="Ethiopian/Eritrean Traditional Coffee Set Sábá ሳባ Edition. Full Set"
            price={108.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61qscYvyjyL._AC_SL1000_.jpg"
          />
          <Product
            id="49538094"
            title= "Christopher Knight Home 312592 Cayuse Indoor/Outdoor Wicker Tear Drop Hanging Chair (Stand Not Included), Multi-Brown and Tan"
            price={191.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81w05-SWGIL._AC_SY450_.jpg"
            />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Mirror Surface Decorative Clock 3D DIY Wall Clock for Living Room Bedroom Office Hotel Wall Decoration (Black)"
            price={19.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51E44cbFyuL._AC_SX522_.jpg"
          />
          <Product
            id="23445930"
            title="Logitech HD Webcam C310, Standard Packaging - Black"
            price={39.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61Lq4wSqFnL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="Filimin Friendship Lamp - Classic Design - Set of 2"
           
            price={170.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81tAvCf6IdL._SY500_.jpg"
            
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Morden Fort Couches for Living Room, Sofas for Living Room Furniture Sets, Sofa, Fabric, Velvet Beige"
            price={709.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/718RLRmZRDL._AC_SY355_.jpg"
          />
         </div>
         <div className="home__row">
          <Product
            id="12321341"
            title="Nevel Harp With Case"
            price={263.20}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71imp4cjfzL._AC_SL1269_.jpg"
          />
          <Product
            id="49538094"
            title="Masticating Juicer, Sboly Juicer Machines Easy to Clean with Brush, Cold Press Juicer with 2 Speed Modes, Reverse Function & Quiet Motor, Juice Recipes for Vegetables and Fruits"
            
            price={87.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71cS31VhK9S._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home;
