import React, { Component } from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import 'aframe-animation-component';
import Sky from '../img/sky.jpg';
import Teddy from '../models/Teddy.obj';
import '../css/AFrame.css';

class AFrame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: 'white'
        };
        this.generateColor = this.generateColor.bind(this);
    }

    generateColor(e) {
        const startCol = '#' + Math.random().toString(16).substr(-6);
        this.setState({ colors: startCol });
    }

    render() {

        return (
            <Scene>
                <a-assets>
                    <img id="sky-texture" src={Sky} alt="dark sky" />
                    <img id="ground-texture" crossOrigin="anonymous" src="https://cdn.aframe.io/a-painter/images/floor.jpg" alt="dark grid flooring" />
                    <a-asset-item id="teddy-bear" src={Teddy} />
                </a-assets>

                <Entity primitive="a-plane" color="#833535" rotation="-90 0 0" height="100" width="100" repeat="100 10" />
                <Entity primitive="a-light" type="ambient" color="#445451" />
                <Entity primitive="a-light" type="spot" intensity="1" position="0 1 1" angle="35" />
                <Entity primitive="a-cylinder" src="#ground-texture" radius="30" height="0.1" />
                <Entity primitive="a-sky" height="2048" radius="30" src="#sky-texture" theta-length="90" width="2048" />
                <Entity particle-system={{ preset: 'snow', particleCount: 5000 }} />

                <Entity id="box"
                    geometry={{ primitive: 'box' }}
                    material={{ color: 'black' }}
                    position={{ x: -2.5, y: 2.5, z: -18 }}
                    scale={{ x: 1, y: 5, z: 5 }}
                />
                <Entity id="box1"
                    geometry={{ primitive: 'box' }}
                    material={{ color: 'black' }}
                    position={{ x: 2.5, y: 2.5, z: -18 }}
                    scale={{ x: 1, y: 5, z: 5 }}
                />
                <Entity id="box2"
                    geometry={{ primitive: 'box' }}
                    material={{ color: 'black' }}
                    position={{ x: 0, y: 2.5, z: -20 }}
                    scale={{ x: 5, y: 5, z: 1 }}
                />
                <a-entity obj-model="obj: #teddy-bear"
                    position="0 0 -18"
                    scale="2 2 2"
                />
                <a-camera>
                    <a-cursor
                        color={this.state.colors}
                        onClick={this.generateColor}
                    />
                </a-camera>
                {/* <a-entity id="rig"
                    movement-controls
                    position="0 1 0">
                    <a-entity camera
                        position="0 1 0"
                        look-controls="pointerLockEnabled: true"
                        color={this.state.colors}
                        onClick={this.generateColor}
                    />
                </a-entity> */}
            </Scene>
        );
    }
}


export default AFrame;