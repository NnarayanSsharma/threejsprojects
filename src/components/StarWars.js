import React from 'react'
import * as THREE from 'three'
import { Triangle } from 'three'
import {textJson} from './fontJson'


function StarWars() {
    let scene, camera, renderer, text

    let createGeometry = function() {
        
        let loader = new THREE.FontLoader()
        let font = loader.parse(textJson)
        let title = 
        `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. 
        Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. 
        It has survived not only five centuries, 
        but also the leap into electronic typesetting, 
        remaining essentially unchanged. 
        It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like 
        Aldus PageMaker including versions of Lorem Ipsum.`
        
        let geometry = new THREE.TextGeometry(title ,{font: font, size: 1, height: 0.01})

        let material = new THREE.MeshBasicMaterial({color: Math.random() * 0xff0000})

        
        text = new THREE.Mesh(geometry, material)

        text.position.x = -15
        text.rotation.x = -0.9

        scene.add(text)
    }


    let init = function() {
        // create scene
        scene = new THREE.Scene()
        scene.background = new THREE.Color(0xababab)

        // create and locate the camera
        camera = new THREE.PerspectiveCamera(30, window.innerWidth/window.innerHeight,0.1,1000)
        camera.position.set(3,3,50);

        // see axies
        // axes = new THREE.AxesHelper(50 )
        // scene.add(axes)

        createGeometry()

        // create renderer
        renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight);

        document.body.appendChild(renderer.domElement)
    }

    let mainLoop = function() {

        text.position.z -= 0.05
        text.position.y += 0.05/2;

        text.material.color.setHex( Math.random() * 0xffffff );


        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera)
        requestAnimationFrame(mainLoop)
    }
    init()
    mainLoop()

    return (
        <div>
            
        </div>
    )
}

export default StarWars
