// ThreeBackground.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 10, 15);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(6, 8, 4);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Utility functions
    const randint = (min, max) => Math.floor(Math.random() * max) + min;
    const RGB = (r, g, b) =>
      `rgb(${Math.min(255, Math.max(0, r))},${Math.min(255, Math.max(0, g))},${Math.min(255, Math.max(0, b))})`;
    const rgb2hex = (rgb) => {
      const match = rgb.match(/\d+/g);
      return match
        ? `0x${match
            .map((x) => ("0" + parseInt(x, 10).toString(16)).slice(-2))
            .join("")}`
        : "0x000000";
    };
    const rgb2color = (r, g, b) => rgb2hex(RGB(r, g, b));
    const sin = (t, h) => Math.sin(t) * h;

    // Cubes
    const cubes = [];
    for (let x = -6; x <= 6; x++) {
      for (let z = -6; z <= 6; z++) {
        const geometry = new THREE.BoxGeometry(1, 1, 1, 6, 6, 6);
        const cube = {
          colored: Math.random() > 0.75,
          height: randint(1, 10) / 10,
          aniOffset: randint(1, 400) / 100,
        };
        cube.material = new THREE.MeshPhongMaterial({
          color: cube.colored ? "blue" : "black",
        });
        cube.mesh = new THREE.Mesh(geometry, cube.material);
        cube.mesh.position.set(x, 0, z);
        scene.add(cube.mesh);
        cubes.push(cube);
      }
    }

    // Lights
    [-5, 0, 5].forEach((x) => {
      [-5, 0, 5].forEach((z) => {
        const light = new THREE.PointLight("white", 1, 7.5);
        light.position.set(x, 2, z);
        scene.add(light);
      });
    });

    let time = 0;
    const color = {
      r: 0,
      g: 0,
      b: 255,
      rt: 0,
      gt: 0,
      bt: 255,
      rs: 0,
      gs: 0,
      bs: 0,
    };

    const animate = () => {
      time += 1;
      camera.position.y += sin(time * 0.005 + 10, 0.005);
      camera.position.x += sin(time * 0.004 + 5, 0.005);
      camera.position.z += sin(time * 0.006, 0.005);
      camera.rotation.z += sin(time * 0.0045 + 15, 0.002);
      camera.lookAt(new THREE.Vector3(0, 0, 0));

      if (
        Math.abs(color.r - color.rt) < 5 &&
        Math.abs(color.g - color.gt) < 5 &&
        Math.abs(color.b - color.bt) < 5
      ) {
        const divisor = 20;
        color.rt = randint(0, 255);
        color.gt = randint(0, 255);
        color.bt = randint(0, 255);
        color.rs = (color.rt > color.r ? 1 : -1) * randint(5, 45) / divisor;
        color.gs = (color.gt > color.g ? 1 : -1) * randint(5, 45) / divisor;
        color.bs = (color.bt > color.b ? 1 : -1) * randint(5, 45) / divisor;
      } else {
        if (Math.abs(color.r - color.rt) >= 5) color.r += color.rs;
        if (Math.abs(color.g - color.gt) >= 5) color.g += color.gs;
        if (Math.abs(color.b - color.bt) >= 5) color.b += color.bs;
      }

      const r = Math.round(color.r);
      const g = Math.round(color.g);
      const b = Math.round(color.b);

      cubes.forEach((cube) => {
        cube.mesh.position.y = sin(time / 100 + cube.aniOffset, cube.height);
        if (cube.colored) {
          cube.mesh.material.color.setHex(rgb2color(r, g, b));
        }
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
  ref={mountRef}
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "10%",
    height: "10%",
    zIndex:0, // Try 0 instead of -1 to debug
    backgroundColor: "#000", // Helps test if div is visible
    pointerEvents: "none", // Prevents interfering with UI clicks
  }}
/>
  );
}
