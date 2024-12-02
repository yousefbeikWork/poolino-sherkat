import React from 'react'
import footerLogo from "../assets/logo3.png"
import './Footer.css'
import { IoLocationOutline } from "react-icons/io5";
import { LiaTelegram } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiAiohttp } from "react-icons/si";



const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='footer-section'>
             <div className='footer_poolino'>
                 <img src={footerLogo} alt='پولینو'/>
                 <p>
                 همتا، هسته مرکزی تراکنش های الکترونیکی در حوزه مالی و بانکی و پرداخت های هوشمند و توزیع کننده دستگاه های کش لس، کارتخوان، خودپرداز، صندوق فروشگاهی و خدمات سوئیچ بانکی از طریق شبکه گسترده نمایندگی در سراسر کشور
                 </p>
                 <p>
                 <IoLocationOutline  style={{ color : "red" }}/>
                 تهران، میرزای شیرازی، کوچه شهدا، پلاک 23، واحد 4.
                 </p>
                 
             </div>
             <div className='footer-resource'>
                 <h2>منابع</h2>
                 <ul>
                     <li><a href='https://www.hamtasb.com/'>آمیتیس همتا</a></li>
                     <li><a href='https://shop.hamtasb.com/'>همتاشاپ</a></li>
                     <li><a href='https://shop.hamtasb.com/products'>محصولات</a></li>
                     <li><a href='https://www.hamtasb.com/contact'>تماس با ما</a></li>
                 </ul>
             </div>
             <div className='footer-service'>
             <h2>خدمات مشتریان</h2>
                 <ul>
                     <li><a href='/'>هایپرپوز پولینو</a></li>
                     <li><a href='/'>باشگاه پذیرندگی</a></li>
                     <li><a href='/'>سرویس کارت مشتریان</a></li>
                 </ul>
             </div>
             <div className='footer-social'>
                 <a href='/'><button><SiAiohttp /></button></a>
                 <a href='https://t.me/amitishamta'><button><LiaTelegram /></button></a>
                 <a href='https://www.instagram.com/amitishamta/'><button><FaInstagram /></button></a>
                 <a href='https://chat.whatsapp.com/F4fd5jfCNqPAvoQNox2O64'><button><FaWhatsapp /></button></a>
                < a href='https://maps.app.goo.gl/nBzypXpxFx9DJwiG9'><button><IoLocationOutline /></button></a>
             </div>
             </div>
             <div className='footer-bottom'>
                 <p>
                     کلیه حقوق این سایت متعلق به شرکت آمیتیس همتا میباشد.
                 </p>
             </div>
        </div>
    </div>
  )
}

export default Footer