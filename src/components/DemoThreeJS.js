import React from 'react'
import * as THREE from 'three'
import { Geometry, TorusGeometry } from 'three';

function DemoThreeJS() {
    
    // scene setup
    var scene = new THREE.Scene();
    
    // camera setup
    var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set(0,0,100);
    camera.lookAt(0,0,0)
    
    // renderer setup
    var renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor('#e5e5a2');
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    document.body.appendChild( renderer.domElement );

    window.addEventListener('resize', ()=>{
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix()
    })

    // square material
    var material = new THREE.LineBasicMaterial( { color: 0x00ff00} );
    
    // small square
    var geometry1 = new THREE.Geometry();

    geometry1.vertices.push(new THREE.Vector3(-10,0,0))
    geometry1.vertices.push(new THREE.Vector3(0,10,0))
    geometry1.vertices.push(new THREE.Vector3(10,0,0))
    geometry1.vertices.push(new THREE.Vector3(0,-10,0))
    geometry1.vertices.push(new THREE.Vector3(-10,0,0))

    // big square
    var geometry2 = new THREE.Geometry()

    geometry2.vertices.push(new THREE.Vector3(-20,0,0))
    geometry2.vertices.push(new THREE.Vector3(0,20,0))
    geometry2.vertices.push(new THREE.Vector3(20,0,0))
    geometry2.vertices.push(new THREE.Vector3(0,-20,0))
    geometry2.vertices.push(new THREE.Vector3(-20,0,0))

    // first thread
    var geometry3 = new THREE.Geometry()

    geometry3.vertices.push(new THREE.Vector3(0,10,0))
    geometry3.vertices.push(new THREE.Vector3(0,20,0))


    // second thread
    var geometry4 = new THREE.Geometry()

    geometry4.vertices.push(new THREE.Vector3(0,-10,0))
    geometry4.vertices.push(new THREE.Vector3(0,-20,0))

    // sphere
    // var geometry5 = new THREE.SphereGeometry(6,4,3)
    // var material5 = new THREE.MeshLambertMaterial({color: 0xff0000});
    // var sphere = new THREE.Mesh( geometry5, material5)
    // scene.add(sphere)

    // cone
    var geometryCone = new THREE.ConeGeometry(3,10,60)
    var materialCone = new THREE.MeshBasicMaterial({color: 0xffff00});
    var cone = new THREE.Mesh(geometryCone, materialCone)
    scene.add(cone) 

    
    
    var line1 = new THREE.Line( geometry1, material );
    scene.add( line1 );

    var line2 = new THREE.Line( geometry2, material)
    scene.add(line2);

    var line3 = new THREE.Line(geometry3, material)
    scene.add(line3)

    var line4 = new THREE.Line(geometry4, material)
    scene.add(line4)


    // light
    var light = new THREE.PointLight(0xff0000,1,800)
    light.position.set(0,0,10)
    scene.add(light)


    var animate = function() {
        requestAnimationFrame( animate );
        line1.rotation.x += 0.01;
        line1.rotation.y += 0.01;
        // line1.rotation.z += 0.01;

        line2.rotation.x += 0.01;
        line3.rotation.x += 0.01;
        line4.rotation.x += 0.01;

        // sphere
        // sphere.rotation.x += 0.01;
        // sphere.rotation.y += 0.01;
        // sphere.rotation.z += 0.01;

        cone.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
    animate();
    
    
    
    return (
        <div>
        </div>
    )
}

export default DemoThreeJS
