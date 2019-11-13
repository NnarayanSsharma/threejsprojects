import React from 'react'
import * as THREE from 'three'


function DemoMoreGeometryExam() {

    // scene setup
    var scene = new THREE.Scene()

    // camera setup
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0,0,80);
    camera.lookAt(0,0,10);

    // renderer setup
    var renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor('#e5e5a2');

    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', ()=>{
        renderer.setSize(window.innerWidth, window.innerHeight);

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix()
    })

    var geometry = new THREE.SphereGeometry(12,4,3);

    var material = new THREE.MeshLambertMaterial({color: 0xffffff})

    var sphere = new THREE.Mesh(geometry, material)

    scene.add(sphere)

    var light1 = new THREE.PointLight(0x0000ff,1,300)
    light1.position.set(100,0,100);
    scene.add(light1)

    var light2 = new THREE.PointLight(0xff0000,1,300)
    light2.position.set(-100,0,100);
    scene.add(light2)


    var render =()=>{
        requestAnimationFrame(render);
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        sphere.rotation.z += 0.01;

        renderer.render(scene, camera)
    }

    render()

    return (
        <div>
        </div>
    )
}

export default DemoMoreGeometryExam
