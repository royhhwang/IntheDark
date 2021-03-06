import React, { Component } from 'react';
import Cellphone from '../img/cellphone.png';
import Eyelid from '../img/eye.png';
import Face from '../img/scaryface.png';
import Eye from '../img/bear.png';
import Doodle from '../img/doodle.png';
import "../css/Preloader.css";

class Preloader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            reveal: true,
            layer: true
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ reveal: false }), 0);
        setTimeout(() => this.setState({ visible: false }), 3200);
        setTimeout(() => this.setState({ layer: false }), 8000);
    }

    componentWillUnmount() {
        clearInterval(this.state);
    }

    render() {

        const cellReveal = this.state.reveal ? 'cell-invisible' : 'cell-visible'
        const cellFlip = this.state.visible ? 'cell-call' : 'cell-receive'
        const cellDisappear = this.state.layer ? 'layer-visible' : 'layer-fade'

        return (
            <div className={cellDisappear + " cell-layer"}>
                <div className={cellReveal} id="cell-center">
                    <div id="cell-absolute">
                        <img src={Cellphone} className="glitch-box cell-image" alt="cellphone-n" />
                        <img src={Cellphone} className="glitch-box cell-image" alt="cellphone-n1" />
                        <img src={Cellphone} className="glitch-box cell-image" alt="cellphone-n2" />
                        <img src={Cellphone} className="glitch-box cell-image" alt="cellphone-n3" />
                        <img src={Cellphone} className="glitch-box cell-image" alt="cellphone-n4" />
                        <div className={cellFlip} id="cell-screen">
                            <img src={Eyelid} className="ring-glitch" id="ring-screen" alt="spinning eyelid"></img>
                            <img src={Eyelid} className="ring-glitch" id="ring-screen3" alt="spinning eyelid"></img>
                            <img src={Face} id="face-screen" alt="glitched face"></img>
                            <img src={Eye} id="eye-screen" alt="glitched bear"></img>
                            <img src={Doodle} id="laugh-screen" alt="glitched laugh"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Preloader;