import React from 'react';
import logo from './logo.png';

const Header = () => {

    // banner style
    const bannerStyle = {
        backgroundColor: "#34495e",
        padding: "20px 0",
        textAlign: "center",
        color: "#fff"
    }

    // logo style
    const logoStyle = {
        width: "150px"
    }

    return (
        <div>
            {/* navbar */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="/home">
                        <img style={logoStyle} src={logo} alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/features">Developers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/pricing">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/service">Our Service</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* banner header */}
            <div style={bannerStyle}>
                <img style={{ width: "300px" }} src={logo} alt="logo" />
                <h1>Make a Developer Team!</h1>
                <p>Adding a "Meet the Team" page or section to your website is an easy, effective way to give your business an accessible face. </p>
                <h3>Monthly Salary Budget: $ 5 Million</h3>
            </div>
        </div>
    );
};

export default Header;