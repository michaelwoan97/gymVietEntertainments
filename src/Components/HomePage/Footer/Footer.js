import React from 'react';
import Logo from '../../../Images/Logo.png';
import './Footer.scss';

class Footer extends React.Component {
    render() {
        return(
            <footer>
                    <section>
                        <img src={Logo} alt='GymVietEntertain Logo' />
                        <p>&#9400; 2019 copyright, GVE Inc. </p>
                    </section>
                    
                    <section>
                        <a href="#"><i className='fab fa-facebook-square'></i></a>
                        <a href="#"><i className='fab fa-instagram'></i></a>
                        <a href="#"><i class='fab fa-twitter-square'></i></a>
                    </section>
            </footer>
        );
    }
}

export default Footer;