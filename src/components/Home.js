import { Component } from "react";

class Home extends Component{
    render(){

        const imageUrl = process.env.PUBLIC_URL + '/My Image.jpg';
        const compUrl = process.env.PUBLIC_URL + '/computer.png';
        return(
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <img src={imageUrl} alt="Me" class="img-fluid rounded border border-warning p-2 w-80 mt-5 slide-in "/>
                    </div>
                    <div class="col-md-8">
                        <div>
                            <h1 class="display-5">About Me</h1>
                            <p class="lead mt-5">
                                    Hello Folks!! I am Harshith Gamini.<br/>
                                    Computer Science Student passionate to work in a competitive environment where I can showcase my
                                    technical skills. 
                                    <ul class="lead mt-2">
                                        <li>Punctual, organized and good at Management tasks</li>
                                        <li>Adaptable and continuous learning nature</li>
                                        <li>Efficient in Prioritization and Time management</li>
                                        <li>Self Determined and Self motivated in taking up new challenges.</li>
                                    </ul>
                            </p>
                            <img src={compUrl} alt="comp" className="comp"/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;