import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const theme = createTheme({
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: '#0f0f3d',
                    width: '700px', // Set the width to 1200px
                    maxWidth: 'none', // Disable the maximum width
                    padding: '30px 30px',
                    position: "relative" ,// Add padding as needed
                    top : "20px",
                    right : "40px",
                    borderRadius: "8px",
                    


                },
                arrow: {
                    color: 'black',

                },
             
            },
        },
    },
});

const CustomTooltip = () => {
    return (
        <ThemeProvider theme={theme}>
            <Tooltip
                title={
                    <div>
                        <div class="container-fluid ">
                            <div class="row flex gap-x-8">
                                <div class="">
                                    <h3>
                                        <a href="/women/c-A20 " className='font-extrabold font-serif text-[15px]'> WOMEN</a> <hr className=' w-[60px] h-[1px] border-[1px]' />
                                    </h3>
                                    <ul className=' mt-3 mb-2'>
                                        <li className=' text-[13px]'><a href="/women-indianwear/c-A2010">Indian Wear</a></li>
                                        <li className=' text-[13px]'><a href="/women-westernwear/c-A2060">Western Wear</a></li>
                                        <li className=' text-[13px]'><a href="/women-lingerie-nightwear/c-A20110">Lingerie &amp; Night Wear</a></li>
                                        <li className=' text-[13px]'><a href="/women-footwear/c-A2030">Footwear</a></li>
                                        <li className=' text-[13px]'><a href="/women-watches/c-A2035">Watches</a></li>
                                        <li className=' text-[13px]'><a href="/beauty-fragrance-for-women/c-B1070">Fragrances</a></li>
                                        <li className=' text-[13px]'><a href="/women-bags-wallets/c-A2025">Bags &amp; Wallets</a></li>
                                        <li className=' text-[13px]'><a href="/women-sunglasses-frames/c-A2045">Sunglasses &amp; Frames</a></li>
                                        <li className=' text-[13px]'><a href="/women-jewellery/c-A2095">Jewellery</a></li>
                                        <li className=' text-[13px]'><a href="/women-accessories-travel/c-A202080">Travel</a></li>
                                    </ul>
                                </div>
                                <div class="">
                                    <h3>
                                        <a href="/men/c-A10 " className='font-extrabold font-serif text-[15px]'> MEN</a> <hr className=' w-[60px] h-[1px] border-[1px]' />
                                    </h3>
                                    <ul className=' mt-3'>
                                        <li className=' text-[13px]'><a href="">Clothing</a></li>
                                        <li className=' text-[13px]'><a href="/men-footwear/c-A1030">Footwear</a></li>
                                        <li className=' text-[13px]'><a href="/men-watches/c-A1080">Watches</a></li>
                                        <li className=' text-[13px]'><a href="/beauty-fragrance-for-men/c-B1080">Fragrances</a></li>
                                        <li className=' text-[13px]'><a href="/beauty-grooming-for-men/c-B1090">Grooming For Men</a></li>
                                        <li className=' text-[13px]'><a href="/men-sunglasses-frames/c-A1070">Sunglasses &amp; Frames</a></li>
                                        <li className=' text-[13px]'><a href="/men-accessories/c-A1020">Accessories</a></li>
                                        <li className=' text-[13px]'><a href="/men-jewellery/c-A10230">Jewellery</a></li>
                                    </ul>
                                </div>
                                <div class="">
                                    <h3>
                                        <a href="/kids/c-A40 " className='font-extrabold font-serif text-[15px]'> KIDS</a> <hr className=' w-[60px] h-[1px] border-[1px]' />
                                    </h3>
                                    <ul className=' mt-3'>
                                        <li className=' text-[13px]'><a href="/kids-boys/c-A4010">Boys</a></li>
                                        <li className=' text-[13px]'><a href="">Girls</a></li>
                                        <li className=' text-[13px]'><a href="/kids-infants/c-A4050">Infants</a></li>
                                        <li className=' text-[13px]'><a href="">Toys</a></li>
                                        <li className=' text-[13px]'><a href="">School Essential</a></li>
                                        <li className=' text-[13px]'><a href="/kids-footwear/c-A4045">Footwear</a></li>
                                        <li className=' text-[13px]'><a href="">Watches</a></li>
                                        <li className=' text-[13px]'><a href="/kids-accessories/c-A4055">Accessories</a></li>
                                    </ul>
                                </div>
                                <div class="">
                                    <h3>
                                        <a href="/beauty/c-B10 " className='font-extrabold font-serif text-[15px]'> BEAUTY</a> <hr className=' w-[60px] h-[1px] border-[1px]' />
                                    </h3>
                                    <ul className=' mt-3'>
                                        <li className=' text-[13px]'><a href="/beauty-make-up/c-B1010">Make Up</a></li>
                                        <li className=' text-[13px]'><a href="/beauty-skincare/c-B1020">Skincare</a></li>
                                        <li className=' text-[13px]'><a href="/beauty-bath-body/c-B1030">Bath &amp; Body</a></li>
                                        <li className=' text-[13px]'><a href="/beauty-nails/c-B1040">Nails</a></li>
                                        <li className=' text-[13px]'><a href="/beauty-haircare/c-B1050">Haircare</a></li>
                                        <li className=' text-[13px]'><a href="">Tools &amp; Accessories</a></li>
                                        <li className=' text-[13px]'><a href="/beauty-fragrance-for-women/c-B1070">Women's Fragrances</a></li>
                                        <li className=' text-[13px]'><a href="/beauty-fragrance-for-men/c-B1080">Men's Fragrances</a></li>
                                        <li className=' text-[13px]'><a href="/beauty-grooming-for-men/c-B1090">Grooming For Men</a></li>
                                    </ul>
                                </div>
                                <div class="">
                                    <h3>
                                        <a href="/homeware/c-A80 " className='font-extrabold font-serif text-[15px]'> HOMESTOP</a> <hr className=' w-[60px] h-[1px] border-[1px]' />
                                    </h3>
                                    <ul className=' mt-3'>
                                        <li className=' text-[13px]'><a href="/homeware-bedding/c-A8010">Bedding</a></li>
                                        <li className=' text-[13px]'><a href="">Bath</a></li>
                                        <li className=' text-[13px]'><a href="">Home Furnishing</a></li>
                                        <li className=' text-[13px]'><a href="/homeware-decor/c-A8070">Decor</a></li>
                                        <li className=' text-[13px]'><a href="/homeware-kitchen/c-A8020">Kitchen &amp; Dining</a></li>
                                        <li className=' text-[13px]'><a href="">Smart Home and Appliances</a></li>
                                        <li className=' text-[13px]'><a href="">Storage &amp; Organization</a></li>
                                    </ul>
                                </div>
                                <div class="">
                                    <h3>
                                        <a href="/lp-watches " className='font-extrabold font-serif text-[15px]'> WATCHES</a> <hr className=' w-[60px] h-[1px] border-[1px]' />
                                    </h3>
                                    <ul className=' mt-3'>
                                        <li className=' text-[13px]'><a href="https://www.shoppersstop.com/men-watches/c-A1080">Mens Watches</a></li>
                                        <li className=' text-[13px]'><a href="https://www.shoppersstop.com/women-watches/c-A2035">Women Watches</a></li>
                                        <li className=' text-[13px]'><a href="https://www.shoppersstop.com/kids-watches/c-A4065">Kids Watches</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="">
                                <div className=' mt-3'>
                                    <div class="content"><p className=' text-[13px]'> © 2023 My Store Ltd. All rights reserved</p><span><a href="/term-condition" target="_blank">Terms of Use </a>| <a  className=' text-[13px]' href="/privacy" target="_blank">Cookie &amp; Privacy Policy</a></span></div></div>
                            </div>


                        </div>

                    </div>
                }
                arrow
            >
                <div className=' text-white font-serif italic'>Products<ArrowDropDownIcon className=' relative right-1 h-2' /></div>
            </Tooltip>
        </ThemeProvider>
    );
};

export default CustomTooltip;