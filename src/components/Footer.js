import React, { useState } from 'react';
import "../styles/Footer.css";

const Footer = () => {
    const [style, setStyle] = useState({ 
        transform: "scale(1)",
        borderRadius: "50% 50% 0% 0%",
    });

    const handleMouseOver = () => {
        const customBorderRadius = Math.random() < 0.5 
        ? '40% 60% 0% 0%' 
        : '60% 40% 0% 0%';

        setStyle({
            transform: "scale(1.3)",
            transition: 'transform 0.5s',
            borderRadius: customBorderRadius,
        })
    }

    const handleMouseOut = () => {
        setStyle({
            transform: "scale(1)",
            transition: 'transform 0.5s',
            borderRadius: "40% 40% 0% 0%",
        })
    }

    return (
        <footer
        style={style}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
            <div className="footerBottom">
                <div className="socialIcons">
                <a href="https://www.facebook.com/zuzia.nowak.50951/">
                    <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://github.com/zuzqqa">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/zuzanna-nowak-aa071125b">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                </div>
                <p>© 2025 - Portfolio</p>
            </div>
        </footer>
    );
};

export default Footer;