import { Component } from "react";

class Projects extends Component{
    render(){

        const p1 = process.env.PUBLIC_URL + '/Project1.jpg';
        const p2 = process.env.PUBLIC_URL + '/Project2.jpg';

        return(
            <div class="container mt-2">
                <div><center><h2 className="contactHead">Projects Developed:</h2></center></div>
                
                <div class="jumbotron jumbotron-fluid">
                    <div class="container1 border border-secondary rounded">
                        <h1 class="display-6">Placement Prediction</h1>
                        <hr class="my-4"></hr>
                        <div class="smallContainer">
                        <img src={p1} class="small-image" alt="Proj1"/>
                        <p class="lead">
                            A Web Interface that is user-friendly which predicts the status of a placement based on inputs
                            given by the user. The result is predicted using a well trained Machine Learning model.</p>
                        </div>
                    </div>
                </div>

                <div class="jumbotron jumbotron-fluid ">
                    <div class="container1 border border-secondary rounded mt-2">
                        <h1 class="display-6">Heart health Risk Detection</h1>
                        <hr class="my-4"></hr>
                        <div class="smallContainer">
                        <img src={p2} class="small-image" alt="Proj2"/>
                        <p class="lead">Developed a physical heart health detection system using IoT, Arduino and Machine Learning
                                        Technologies used: Arduino UNO, Python, Machine Learning</p>
                                        </div>
                    </div>
                </div>

                <br/>
            </div>
            
        );
    }
}

export default Projects;