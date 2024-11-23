import React from 'react'
import footerLogo from "../assets/logo3.png"

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='footer-poolini'>
                <img src={footerLogo} alt='پولینو'/>
                <p>
                همتا، هسته مرکزی تراکنش های الکترونیکی در حوزه مالی و بانکی و پرداخت های هوشمند و توزیع کننده دستگاه های کش لس، کارتخوان، خودپرداز، صندوق فروشگاهی و خدمات سوئیچ بانکی از طریق شبکه گسترده نمایندگی در سراسر کشور
                </p>
                <p>
                تهران، میرزای شیرازی، کوچه شهدا، پلاک 23، واحد 4.
                </p>
                <p>
                کلیه حقوق این سایت متعلق به شرکت آمیتیس همتا میباشد.
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

            </div>
        </div>
    </div>
  )
}

export default Footer