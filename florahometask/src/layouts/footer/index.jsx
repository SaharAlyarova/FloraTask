import React from 'react'
import { Input } from 'antd';
const Footer = () => {
  return (
    <div className='container'>
        <div className='footerImage'>
<div className='footerfourdiv'>
    <div className='form__group'>
        <img className='imgmary' src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
      <div style={{display:"flex"}}>
      <Input placeholder="piqo@mailinator.com" className='form__field' />
    <button style={{color:"#25705C", backgroundColor:"#D8E3D5" ,padding:"15px 25px", border:"0"}}>Send</button>
      </div>
    </div>
    <div>
    



        <h2 style={{color:"#25705C"}}>About</h2>
        <p className='parag'>About Us</p>
        <p className='parag'>Our Partners</p>
        <p className='parag'>Our Services</p>
    </div>
    <div>
    



    <h2 style={{color:"#25705C"}}>Contact</h2>
    <p className='parag'>Contact Us</p>
    <p className='parag'>FAQ Page</p>
    <p className='parag'>About Me</p>
</div>
<div>
    <h2 style={{color:"#25705C"}}>
    Follow Us
    </h2>
</div>

</div>
        </div>
    </div>
  )
}

export default Footer