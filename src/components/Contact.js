import { Component } from "react";

class Contact extends Component{
    render(){
        return(
            <div class="container mt-5">
                <div><center><h2 className="contactHead">For Services, Oppurtunities Contact:</h2></center></div>
                <div className="row">
                    <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                        <center>
                        <h5 className="card-title">Email</h5>
                        <p className="card-text"><i className="fas fa-envelope"></i></p>
                        <p><a href="mailto:gaminiharshith2004@gamil.com">Harshith Gamini</a></p>
                        </center>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-3">
                    <div className="card one">
                        <div className="card-body">
                        <center>
                        <h5 className="card-title">Ping Me!</h5>
                        <p className="card-text"><i className="fa fa-phone"></i></p>
                        <p><a href="mailto:gaminiharshith2004@gamil.com">+91 9182442142</a></p>
                        </center>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-3">
                    <div className="card one">
                        <div className="card-body">
                        <center>
                        <h5 className="card-title">Find Me!</h5>
                        <p className="card-text"><i className="fa fa-map-marker"></i></p>
                        <p>Rajahmundry</p>
                        </center>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-3">
                    <div className="card one">
                        <div className="card-body">
                        <center>
                        <h5 className="card-title">LinkedIn</h5>
                        <p className="card-text"><i className="fab fa-linkedin"></i></p>
                        <p><a href="https://www.linkedin.com/in/harshith-gamini-9990b4250/">Harshith-Gamini</a></p>
                        </center>
                        </div>
                    </div>
                    </div>
                
                </div>

                <div className="row mt-5">

                <div className="col-md-3">
                    <div className="card one">
                        <div className="card-body">
                        <center>
                        <h5 className="card-title">GitHub</h5>
                        <p className="card-text"><i className="fa-brands fa-github"></i></p>
                        <p><a href="https://github.com/Harshith-Gamini">Harshith-Gamini</a></p>
                        </center>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card one">
                        <div className="card-body">
                        <center>
                        <h5 className="card-title">Instagram</h5>
                        <p className="card-text"><i class="fa-brands fa-instagram"></i></p>
                        <p><a href="https://www.instagram.com/harshith.g_12/?utm_source=qr">Harshith</a></p>
                        </center>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card one">
                        <div className="card-body">
                        <center>
                        <h5 className="card-title">Facebook</h5>
                        <p className="card-text"><i class="fa-brands fa-facebook-f"></i></p>
                        <p><a href="https://www.facebook.com/profile.php?id=100006819796727">Gamini Harshith</a></p>
                        </center>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card one">
                        <div className="card-body">
                        <center>
                        <h5 className="card-title">Discord </h5>
                        <p className="card-text"><i class="fa-brands fa-discord"></i></p>
                        <p><a href="https://discordapp.com/users/1162380353424609433">Harshith</a></p>
                        </center>
                        </div>
                    </div>
                </div>

                </div>
                <br/>
            </div>

        );
    }
}

export default Contact;