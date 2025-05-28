import React from 'react';
import './footer.css'; 
export default function Footer(){
    return (
        <footer>
            <div className="footer-content">
                <div className='newsletter1'>
                    <div className='newsletter-h2'>
                    <h2>Subscribe to our Newsletter</h2>
                    <p>Get the latest updates and offers.</p>
                    </div>
                    <div className='newsletter-form'>
                    <form onSubmit={(e) => {
                             e.preventDefault();
                             alert("Subscribed!");
                         }}>
                        <input type="email" placeholder="Enter your email" required style={{width: "400px"}}  />
                        <button type="submit" style={{marginTop: "10px",marginRight: "20px"}}>Subscribe</button>
                    </form>
                    </div>
                </div>
<div className='footer-container'>
                <div className='footer-paragraph' style={{marginLeft: "-150px"}}>
                    <div className='footer-img'></div>
                    <div className='footer-p'>
                        <p>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
                          Voluptatibus facere modi <br />possimus dignissimos, aliquam nobis eaque? <br />
                              Voluptatem magnam quisquam rem. </p>
                    </div>
                </div>

                
                    <div className='footer-quick'>
                        <h2>Quick Links</h2>
                        <ul>
                            <li><i class='bx bx-right-arrow-alt'></i><a href="#">Home</a></li>
                            <li><i class='bx bx-right-arrow-alt'></i><a href="#">About Us</a></li>
                            <li><i class='bx bx-right-arrow-alt'></i><a href="#">Services</a></li>
                            <li><i class='bx bx-right-arrow-alt'></i><a href="#">Portfolio</a></li>

                        </ul>
                    </div>
                    <div className='footer-resources'>
                        <h2>Resources</h2>
                        <ul>
                            <li><i class='bx bx-right-arrow-alt'></i><a href="">support</a></li>
                            <li><i class='bx bx-right-arrow-alt'></i><a href="">dashboard</a></li>
                            <li><i class='bx bx-right-arrow-alt'></i><a href="">drivers</a></li>
                            <li><i class='bx bx-right-arrow-alt'></i><a href="">services</a></li>
                        </ul>
                    </div>
                    <div className='footer-conatct' >
                        <h2>Contact</h2>
                        <ul>
                            <li><i className='bx bx-envelope icon3' ></i><a href="">example@support.com</a></li>
                            <li><i class='bx bx-map'></i><a href="">5 Xyz st., Abc, alexandria, egypt.</a></li>
                            <li><i class='bx bx-phone'></i><a href="">+20123456789 </a></li>
                            
                        </ul>         <div className='newsletter'>
                    <h2>Follow Us</h2>
                    <p>Connect with us on social media.</p>
                    <ul>
                        <li><i className="bx bxl-facebook"></i></li>
                        <li ><i className="bx bxl-instagram"></i></li>
                        <li><i className="bx bxl-twitter"></i></li>
                        <li><i className="bx bxl-linkedin"></i></li>
                    </ul>
                </div>
                    </div>
            
</div>
       
                <div></div>
                <div >
                    <p style={{marginTop: "75px", textAlign: "center"}}>
                &copy; {new Date().getFullYear()} AlphaWeb. All rights reserved.
                
            </p>
                </div>
            </div>

        </footer>
    );
};

