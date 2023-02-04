import React from 'react'
import { Button, Space } from 'antd';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Helmet} from "react-helmet"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import YouTube from 'react-youtube';


// import required modules
import { Navigation } from "swiper";
import DataSection from './datasection';
import YoutubeEmbed from '../../companents/toutube';

const HomePage = () => {
  
  return (
    <div className='container'>
        <  YoutubeEmbed/>
   
           <Helmet>
                <meta charSet="utf-8" />
                <title>My Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="google-map-code">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"  width="100%" height="450" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

    </div>
    
<div>
    <div>
    <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='imgdiv1'>
<div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", padding:"190px"}}>
<h4 style={{color:"#25705C"}}>Floral</h4>
<h2 style={{color:"#25705C"}}>Excellent bouquets for you</h2>
</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='imgdiv2'>
<div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", padding:"190px"}}>
<h4 style={{color:"#25705C"}}>Fixed-Height Slider</h4>
<h2 style={{color:"#25705C"}}>Excellent bouquets for you</h2>
</div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='imgdiv3'>
<div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", padding:"190px"}}>
<h4 style={{color:"#25705C"}}>Floral</h4>
<h2 style={{color:"#25705C"}}>Excellent bouquets for you</h2>
</div>
            </div>

        </SwiperSlide>
        
      </Swiper>
    </div>
</div>
<div className='backgroundSectionImage'>
<div style={{backgroundColor:"#25705C", width:"40%",height: "80vh",display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", }}>
    <h1 style={{color:"white"}}>Our Mission</h1>
    <p style={{color:"white"}}>Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore dicunt an, ea civibus.</p>
    <Button ghost>Read more</Button>
</div>
<div className='backgroundimg'>

</div>
</div>
<div>
    <DataSection/>
</div>
<div>
    <div className='backroundImageEventsPricing'>
<div className='style'>
    <p>Devoted to wonderful beauty</p>
    <h2>Events Pricing</h2>
</div>
<div className='threeDivContainer'>
<div className='containerdiv' style={{display:"flex", alignItems:"center",backgroundColor:"#FEF1E6", justifyContent:"center", color:"#25705C", flexDirection:"column", border:"2px solid #25705C",width:"390px", height:"330px"}}>
<div><h1>$16 </h1><span>per table</span> </div>
<div><h4>Birthday Events</h4></div>
<div>
<p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
</div>
<div><button style={{color:"#25705C", backgroundColor:"#D8E3D5" ,padding:"15px 25px", border:"0"}}>Shop Now</button></div>
</div>
<div className='containerdiv' style={{display:"flex",backgroundColor:"#FEF1E6", alignItems:"center", justifyContent:"center", color:"#25705C", flexDirection:"column", border:"2px solid #25705C",width:"390px", height:"330px"}}>
<div><h1>$31 </h1><span>per table</span> </div>
<div><h4>Wedding Events</h4></div>
<div>
<p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
</div>
<div><button style={{color:"#25705C", backgroundColor:"#D8E3D5" ,padding:"15px 25px", border:"0"}}>Shop Now</button></div>
</div>
<div className='containerdiv' style={{display:"flex", alignItems:"center",backgroundColor:"#FEF1E6", justifyContent:"center", color:"#25705C", flexDirection:"column", border:"2px solid #25705C",width:"390px", height:"330px"}}>
<div><h1>$52 </h1><span>per table</span> </div>
<div><h4>Party Events</h4></div>
<div>
<p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
</div>
<div><button style={{color:"#25705C", backgroundColor:"#D8E3D5" ,padding:"15px 25px", border:"0"}}>Shop Now</button></div>
</div>
</div>
    </div>
</div>
<div className='ourTeamContainer'>
<div className='ourTeam'>
<p>Contacts</p>
<h2>Our Team</h2>
</div>
<div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
<div className='imgDivOne'>
<div className='biologist'>
    <div><img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" /></div>
<div><h3>Velva Kopf</h3></div>
<div><p>Biologist</p></div>
</div>
</div>
<div className='imgDivTwo'>
<div >
    <div><img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" /></div>
<div><h3>Sarah Palmer</h3></div>
<div><p>Florist
</p></div>
</div>
</div>
<div className='imgDivThree'>
<div >
    <div><img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" /></div>
<div><h3>Jessica Swift</h3></div>
<div><p>Photographer
</p></div>
</div>
</div>
</div>
</div>
    </div>
  )
}

export default HomePage