import React from 'react'
import * as THREE from 'three'
import { Mesh } from 'three'

function Saturn() {

    let scene, camera, renderer,ring,axes;
    let planet;
    let ADD = 0.01;
    let rings = [];

    let createSaturn =()=>{
        let geometry = new THREE.SphereGeometry(4,30,30)
        let material = new THREE.MeshBasicMaterial({color: 0x8d5524})
        
        planet = new THREE.Mesh(geometry, material )
        scene.add(planet)

        geometry = new THREE.TorusGeometry(5.1,0.7,2,50)
        material = new THREE.MeshBasicMaterial({color: 0xffe39f})
        ring = new THREE.Mesh(geometry, material)
        rings.push(ring)
        scene.add(ring)

        geometry = new THREE.TorusGeometry(6.9,0.7,2,50)
        material = new THREE.MeshBasicMaterial({color: 0xffad60})
        ring = new THREE.Mesh(geometry, material)
        rings.push(ring)
        scene.add(ring)

        geometry = new THREE.TorusGeometry(8.5, 0.7, 2, 50)
        material = new THREE.MeshBasicMaterial({color: 0xeac086})
        ring = new THREE.Mesh(geometry, material)
        rings.push(ring);
        scene.add(ring);

        rings.forEach(ring=>{
            ring.rotation.x = 1.7;
            ring.rotation.y = 0.5;
            scene.add(ring)
        })



    }

    let init = () => {
        // scene setup
        scene = new THREE.Scene()
        scene.background = new THREE.Color(0x1a1a1a)

        // camera setup
        camera = new THREE.PerspectiveCamera(30, window.innerWidth/window.innerHeight, 0.1, 1000)
        camera.position.z=60;

        createSaturn()

        // see axies
        // axes = new THREE.AxesHelper(50 )
        // scene.add(axes)

        // renderer
        renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)

        document.body.appendChild(renderer.domElement)

    }

    let mainLoop = () =>{

        camera.position.y += ADD
        if(camera.position.y >=5 || camera.position.y <= -5){
            ADD *= -1
        }

        renderer.render(scene, camera)
        // torus.rotation.x += 0.01
        // torus.rotation.y += 0.01
        
        requestAnimationFrame(mainLoop)
    }

    init()
    mainLoop()

    return (
        <div>
            <h2><u><i>Saturn</i></u></h2>
        </div>
    )
}

export default Saturn
