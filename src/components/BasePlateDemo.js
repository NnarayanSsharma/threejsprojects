import React from 'react'
import * as THREE from 'three'
import { Triangle } from 'three'


function BasePlateDemo() {
    let scene, camera, renderer, triangle, square, circle, axes

    let createGeometry = function() {
        console.log("=====")
        let geometry1 = new THREE.CylinderGeometry(5,5,1,3)
        let geometry2 = new THREE.CylinderGeometry(5,5,1,100)
        let geometry3 = new THREE.CylinderGeometry(5,5,1,4)
        
        let material = new THREE.MeshBasicMaterial({color:0x000000,  wireframe:true})
        
        triangle = new THREE.Mesh(geometry1, material)
        circle = new THREE.Mesh(geometry2, material)
        square = new THREE.Mesh(geometry3, material)
        
        triangle.position.x = -13;
        triangle.rotation.x = 0.3;
        triangle.rotation.y = 0.3;

        circle.rotation.x = 0.3;
        circle.rotation.y = 0.3;

        square.position.x = 13
        square.rotation.x = 0.3;
        square.rotation.y = 0.3;

        scene.add(triangle)
        scene.add(circle)
        scene.add(square)
    }


    let init = function() {
        // create scene
        scene = new THREE.Scene()
        scene.background = new THREE.Color(0xababab)

        // create and locate the camera
        camera = new THREE.PerspectiveCamera(30, window.innerWidth/window.innerHeight,0.1,1000)
        camera.position.set(3,3,50);

        // see axies
        axes = new THREE.AxesHelper(50 )
        scene.add(axes)

        createGeometry()

        // create renderer
        renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight);

        document.body.appendChild(renderer.domElement)
    }

    let mainLoop = function() {
        // triangle.rotation.x += 0.01
        // triangle.rotation.y += 0.01
        // triangle.rotation.z += 0.01

        triangle.rotation.x += 0.01
        circle.rotation.x += 0.01
        square.rotation.x += 0.01

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera)
        requestAnimationFrame(mainLoop)
    }
    init()
    mainLoop()

    return (
        <div>
            <h1>Base Plate Demo of derick</h1>
        </div>
    )
}

export default BasePlateDemo