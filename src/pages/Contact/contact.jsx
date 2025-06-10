import react from 'react';
import './contact.css';
import Header from '../../composant/Header/header';
import Footer from '../../composant/Footer/footer';
export default function Contact(){
 return (
    <> <Header/>
    <div className='contact'>
       
        <div className='contact-header'>
            <h1 className='contact-p'>Contact Us</h1>
            <p className='contact-p2'><a href="" className='home-p-contact'>Home</a> / Contact</p>
        </div>
        <div className='contact-h1'><h1>Let’s Start a Conversation</h1></div>
        <div className='contact-container'> 
            <div className='contact-info'>
                
                <h2 className='contact-h2'>Contact Information</h2>
                <div className='contact-p3'><div className='label'><i className='bx bx-phone'></i><h3>Phone:</h3> </div> <p>+212 (123) 456-7890</p></div>
                <div className='contact-p3'><div className='label'><i className='bx bx-envelope'></i><h3>Email:</h3></div> <p>AlphaWeb@gmail.com</p> </div>
                <div className='contact-p3'><div className='label'><i className='bx bx-map'></i> <h3>Address:</h3></div><p>123 Main Street, Casablanca, Morocco</p> </div>
            </div>
            <div className='contact-form'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    alert("Message Sent!");
                }}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    
                    <input type="text" placeholder="Subject" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit" className='btn-send'>Send Message</button>
                </form>
            </div>

        </div>
    </div>
   
     
    </>
 );
};