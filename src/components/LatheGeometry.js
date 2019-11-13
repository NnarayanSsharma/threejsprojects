import React from 'react'
import * as THREE from 'three'


function LatheGeometry() {

    let scene, camera, renderer, lathe

    let createLathe =()=>{
        var points = [];
        for ( var i = 0; i < 10; i ++ ) {
	        points.push( new THREE.Vector2( Math.sin( i * 0.1 ) * 10 + 5, ( i - 0 ) * 5 ) );
        }
        var geometry = new THREE.LatheGeometry( points );
        var material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );
        lathe = new THREE.Mesh( geometry, material );
        scene.add( lathe );

        var axesHelper = new THREE.AxesHelper( 50 );
        scene.add( axesHelper );

    }

    let init = () => {
        // scene setup
        scene = new THREE.Scene()
        scene.background = new THREE.Color(0xaaaaaa)

        // camera setup
        camera = new THREE.PerspectiveCamera(30, window.innerWidth/window.innerHeight, 0.1, 1000)
        camera.position.set(5,5,100)


        createLathe()

        // renderer
        renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)

        document.body.appendChild(renderer.domElement)

    }

    let mainLoop = () =>{
        // console.log(lathe)
        lathe.rotation.y += 0.01;
        
        renderer.render(scene, camera)
        requestAnimationFrame(mainLoop)
    }

    init()
    mainLoop()


    return (
        <div>
            LatheGeometry
        </div>
    )
}

export default LatheGeometry
