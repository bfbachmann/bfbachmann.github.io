import {
    Clock,
    PerspectiveCamera,
    WebGLRenderer,
    AmbientLight,
    DirectionalLight,
    JSONLoader,
    MultiMaterial,
    Mesh,
    DoubleSide,
    Scene,
} from 'three';
import TrackballControls from './TrackballControls';
import SmallWorld from '../models/SmallWorld';
import OrbitalRock from '../models/OrbitalRock';


// Creates and renders a Three.js scene containing a rotating
// models of a mini world and some rocks that orbit it.
export default (container, width, height) => {
    const NUM_ROCKS = 20;
    const WORLD_MODEL_PATH = 'data:application/json,' + JSON.stringify(SmallWorld);
    const ROCK_MODEL_PATH = 'data:application/json,' + JSON.stringify(OrbitalRock);
    const clock = new Clock();
    const scene = new Scene();
    var worldModel, renderer, camera, controls;
    var tick = 0;
    var rockModels = [];

    // Init camera
    camera = new PerspectiveCamera(
        70, window.innerWidth / window.innerHeight, 1, 10000
    );
    camera.position.z = 5;
    camera.position.x = 7;

    // Init renderer
    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xf0f0f0);
    renderer.gammaOutput = true;
    container.appendChild(renderer.domElement);

    // Init mouse controls
    controls = initControls(camera, container, renderer, scene);
    initAmbientLight(scene);
    initSpotLight(scene);

    // Load 3D models and start animation
    initModels(scene, WORLD_MODEL_PATH, ROCK_MODEL_PATH, NUM_ROCKS);


    // Sets up camera controls
    function initControls(camera, container, renderer, scene) {
        const controls = new TrackballControls(camera, container);
        controls.noZoom = true;
        controls.addEventListener('change', () => {
            renderer.render(scene, camera);
        });
        return controls;
    }


    // Sets up ambient light
    function initAmbientLight(scene) {
        const light = new AmbientLight(0xf0f0f0, 2); // soft white light
        scene.add(light);
    }


    // Sets up spot light
    function initSpotLight(scene) {
        const spotLight = new DirectionalLight(0xffffff);
        spotLight.position.set(100, 1000, 100);
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 256;
        spotLight.shadow.mapSize.height = 256;
        spotLight.shadow.camera.near = 500;
        spotLight.shadow.camera.far = 4000;
        spotLight.shadow.camera.fov = 30;
        scene.add(spotLight);
    }


    // Loads 3D models into scene from JSON files
    function initModels(scene, worldModelPath, rockModelPath, numRockModels) {
        // Logs progress loading model
        function onProgressUpdate(progress) {
            console.log('Model ' +
                (progress.loaded / progress.total * 100) + '% loaded');
        }
        const loader = new JSONLoader();

        // Load world model
        loader.load(
            worldModelPath,
            (geometry, materials) => {
                // Make materials double sided so they can be seen from all angles
                materials.forEach(material => {
                    material.side = DoubleSide;
                });
                const material = new MultiMaterial(materials);
                worldModel = new Mesh(geometry, material);
                scene.add(worldModel);
            },
            onProgressUpdate,
            console.log,
        );

        // Load rock models
        loader.load(
            rockModelPath,
            (geometry, material) => {
                for (var i = 0; i < numRockModels; i++) {
                    const rockMaterial = new MultiMaterial(material);
                    const model = new Mesh(geometry, rockMaterial);
                    const modelScale = Math.random() / 2 + 0.1;

                    model.position.set(Math.random() * 4 + 5, Math.random() * 4 + 1, Math.random() * 4 + 1);
                    model.radius = model.position.length();
                    model.scale.set(modelScale, modelScale, modelScale);

                    scene.add(model);
                    rockModels.push(model);
                }
                // Begin animation
                animate(renderer, scene, camera, controls);
            },
            onProgressUpdate,
            console.log,
        );
    }


    // Amimate the scene
    function animate() {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
        controls.update();
        animateWorldModel(worldModel);
        animateRockModels(rockModels);
    }


    // Animates 3D world model
    function animateWorldModel(model) {
        model.rotation.x += 0.001;
        model.rotation.y += 0.003;
    }


    // Animates 3D rocket models
    function animateRockModels(rockModels) {
        // Get the amount of time that has passed
        tick += clock.getDelta();

        // Check for wraparound (we want tick to stay positive)
        if (tick < 0) {
            tick = 0;
        }

        rockModels.forEach((rock, i) => {
            const x = i + 1;
            const theta = tick * x / (NUM_ROCKS * 1.5);

            rock.position.x = rock.radius * Math.sin(theta - i);
            rock.position.y = rock.radius * Math.sin(theta - 1.2 * i);
            rock.position.z = rock.radius * Math.cos(theta - i);

            rock.rotateX(i / (Math.pow(NUM_ROCKS, 2)));
            rock.rotateY(i / (Math.pow(NUM_ROCKS, 3)));
            rock.rotateY(i / (Math.pow(NUM_ROCKS, 2)));
        });
    }
}