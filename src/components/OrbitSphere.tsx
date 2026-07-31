"use client";

import { useRef, useMemo, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

interface OrbitSphereProps {
  images: string[];
}

const PARTICLE_COUNT = 400;
const PARTICLE_SIZE_MIN = 0.02;
const PARTICLE_SIZE_MAX = 0.045;
const SPHERE_RADIUS = 9;
const POSITION_RANDOMNESS = 4;
const ROTATION_SPEED_Y = 0.0006;

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const list = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
      const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
      const radiusVariation =
        SPHERE_RADIUS + (Math.random() - 0.5) * POSITION_RANDOMNESS;

      const x = radiusVariation * Math.cos(theta) * Math.sin(phi);
      const y = radiusVariation * Math.cos(phi);
      const z = radiusVariation * Math.sin(theta) * Math.sin(phi);

      list.push({
        position: [x, y, z] as [number, number, number],
        scale: Math.random() * (PARTICLE_SIZE_MAX - PARTICLE_SIZE_MIN) + PARTICLE_SIZE_MIN,
        color: new THREE.Color().setHSL(
          Math.random() * 0.08 + 0.05,
          0.75,
          0.55 + Math.random() * 0.25,
        ),
      });
    }

    return list;
  }, []);

  useLayoutEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const dummy = new THREE.Object3D();
    particles.forEach((particle, i) => {
      dummy.position.set(...particle.position);
      dummy.scale.setScalar(particle.scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      mesh.setColorAt(i, particle.color);
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [particles]);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
      <sphereGeometry args={[1, 6, 5]} />
      <meshBasicMaterial vertexColors />
    </instancedMesh>
  );
}

export function OrbitSphere({ images }: OrbitSphereProps) {
  const IMAGE_COUNT = images.length;
  const IMAGE_SIZE = 1.6;

  const groupRef = useRef<THREE.Group>(null);

  const textures = useTexture(images);

  const orbitingImages = useMemo(() => {
    const list = [];

    for (let i = 0; i < IMAGE_COUNT; i++) {
      const angle = (i / IMAGE_COUNT) * Math.PI * 2;
      const x = SPHERE_RADIUS * Math.cos(angle);
      const y = 0;
      const z = SPHERE_RADIUS * Math.sin(angle);

      const position = new THREE.Vector3(x, y, z);
      const outwardDirection = position.clone().normalize();

      const euler = new THREE.Euler();
      const matrix = new THREE.Matrix4();
      matrix.lookAt(position, position.clone().add(outwardDirection), new THREE.Vector3(0, 1, 0));
      euler.setFromRotationMatrix(matrix);

      list.push({
        position: [x, y, z] as [number, number, number],
        rotation: [euler.x, euler.y, euler.z] as [number, number, number],
        textureIndex: i % textures.length,
      });
    }

    return list;
  }, [IMAGE_COUNT, SPHERE_RADIUS, textures.length]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += ROTATION_SPEED_Y;
    }
  });

  return (
    <group ref={groupRef}>
      <Particles />

      {orbitingImages.map((image, index) => (
        <mesh key={`image-${index}`} position={image.position} rotation={image.rotation}>
          <planeGeometry args={[IMAGE_SIZE, IMAGE_SIZE]} />
          <meshBasicMaterial map={textures[image.textureIndex]} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}
