import React from 'react'
import * as THREE from 'three'
import { Triangle } from 'three'


function CustomGeometry() {
    let scene, camera, renderer, triangle

    let createGeometry = function() {
        console.log("=====")
        let geometry = new THREE.Geometry()
        geometry.vertices.push(new THREE.Vector3(3,0,0))
        geometry.vertices.push(new THREE.Vector3(0,3,0))
        geometry.vertices.push(new THREE.Vector3(0,0,3))
        //  geometry.vertices.push(new THREE.Vector3(3,0,0))
        geometry.faces.push(new THREE.Face3(3,1,2));

        let material = new THREE.MeshBasicMaterial({color:0xffffaf, side:THREE.DoubleSide, wireframe:false})
        
        triangle = new THREE.Mesh(geometry, material)
        scene.add(triangle)
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
        triangle.rotation.x += 0.01
        triangle.rotation.y += 0.01
        triangle.rotation.z += 0.01

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

export default CustomGeometry
