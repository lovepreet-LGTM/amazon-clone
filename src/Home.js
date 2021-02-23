import React from 'react';
import "./Home.css";
import AliceCarousel from 'react-alice-carousel';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div    className="home__container">
                
            <img
          className="home__image"
          src="https://www.istockphoto.com/resources/images/PhotoFTLP/Essentials-619068028.jpg"
          alt=""
        />
            <div className="home__row">
                {/* product */}
                <Product 
                id=""
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={30}
                image="https://media.istockphoto.com/photos/leopard-cat-eye-sunglasses-isolated-on-white-picture-id1302229615?k=6&m=1302229615&s=612x612&w=0&h=7b994TAo_2v2TOo1X9cXfo1ARwMKym6wRHmJp_qi2RU="
                rating={5}
                />
                  {/* product */}
                  <Product
            id=""
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://media.istockphoto.com/photos/red-horn-rimmed-sunglasses-isolated-on-white-picture-id1302229787?k=6&m=1302229787&s=612x612&w=0&h=gq9jmfRVQ22Lgt_wh0VKuAnI6SYYWH47bZ1mipQoJBc="
          />
            </div>
            <div className="home__row">
                {/* product */}
                <Product
            id=""
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://media.istockphoto.com/photos/blue-horn-rimmed-sunglasses-isolated-on-white-picture-id1302229770?k=6&m=1302229770&s=612x612&w=0&h=Mb_5m-FRM-42reBEEXMlrCFQXH38IE8oVU7XRh6geb0="
          />
          <Product
            id=""
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.istockphoto.com/photos/beautiful-portrait-young-asian-woman-wear-hat-and-holding-sunglasses-picture-id1299969442?k=6&m=1299969442&s=612x612&w=0&h=mChRi1nf2cjV3KCiOgRH2MOkiTfdu1c5G4FoxMkkRLE="
          />
          <Product
            id=""
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://media.istockphoto.com/photos/young-women-exercising-on-gymnastic-mat-in-front-of-laptop-picture-id1299974795?k=6&m=1299974795&s=612x612&w=0&h=UdCzon2MTm7HLbJcrSKSDkDn28UsvuwZhDHjWKiF6_A="
          />
                  {/* product */}
                  {/* product */}
            </div>
            <div className="home__row">
                {/* product */}
                <Product
            id=""
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://media.istockphoto.com/photos/panoramic-view-of-relaxed-smiling-asian-fitness-runner-woman-music-picture-id1300691015?k=6&m=1300691015&s=612x612&w=0&h=q_ygw7YCXQRiHzDm8zLupHZxK6NLN7E48SraRpfwEhk="
          />
                  
            </div>

            </div>

            
        </div>
    )
}

export default Home
