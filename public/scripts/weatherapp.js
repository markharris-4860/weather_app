

class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.renderWeather = this.renderWeather.bind(this);
        this.state = {
            visibility : false
        }
    }

    render() {
        return (
            <div> 
                <h1> weather app</h1>
                <div>
                    City Name : 
                    <input type="text" id="city" />
                    <br></br>
                    <br></br>  
                    <input type="button" id="weather" value="get weather" onClick={this.renderWeather}/>
                    <br></br>
                     { this.state.visibility && <div> current weather for this city is </div> }
                </div> 
            </div>
        );
    }
    renderWeather() {
        alert('this is for check');
    }

    
}

ReactDOM.render(<Weather /> , document.getElementById('app'));



//npx babel public/scripts/master.js --out-file=public/scripts/weatherapp.js --presets=@babel/preset-env,@babel/preset-react --watch