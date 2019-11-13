import React from 'react'
import * as THREE from 'three'


function DemoUdemyCourse() {
    let scene, camera, renderer, cube, axes;
    let rain = [];
    let ADD = 0.01;

    let randomRange = function(from, to){
        let x = Math.random() * (to-from);
        return x+from;
    }


    let createCube = function() {
        let geometry = new THREE.SphereGeometry(0.1,20,20,20);
        let material = new THREE.MeshBasicMaterial({color: Math.random()*0xffffff, wireframe: true});
        cube = new THREE.Mesh(geometry, material);

        cube.position.x = randomRange(-15,15);
        cube.position.y = randomRange(-15,15);
        cube.position.z = 15;

        scene.add(cube);
        rain.push(cube);
        
        console.log(rain.length)
        
    }

    let init = function() {
        // create scene
        scene = new THREE.Scene()
        scene.background = new THREE.Color(0xababab)

        // create and locate the camera
        camera = new THREE.PerspectiveCamera(30, window.innerWidth/window.innerHeight,0.1,1000)
        camera.position.z = 50;
        // camera.position.x = 10;
        // camera.position.y = 5;

        // see axies
        // axes = new THREE.AxesHelper(50 )
        // scene.add(axes)

        createCube()

        // create renderer
        renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight);

        document.body.appendChild(renderer.domElement)
    }


    // main animation loop - calls every 50-60 ms
    let mainLoop = function() {
        // cube.position.x += ADD;
        
        // if(cube.position.x <= -3 || cube.position.x >= 3)
        //     ADD *= -1;
        
        // cube.rotation.x += 0.6
        // cube.rotation.y += 0.6
        let x = Math.random();
        
        if( x < 0.01 )
            createCube();
        
        rain.forEach(d=> d.position.y -= 0.3)

        // cube.rotation.y += 0.01

        renderer.render(scene, camera)
        requestAnimationFrame(mainLoop)
    }

    init();
    mainLoop();

    return (
        <div>
        </div>
    )
}

export default DemoUdemyCourse
