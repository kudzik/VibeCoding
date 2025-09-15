// 2D Space Shooter Game using Three.js
class SpaceShooterGame {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.canvas = null;
        
        // Game state
        this.gameState = 'playing'; // 'playing', 'paused', 'gameOver'
        this.score = 0;
        this.lives = 3;
        this.level = 1;
        
        // Game objects
        this.player = null;
        this.bullets = [];
        this.enemies = [];
        this.enemyBullets = [];
        this.stars = [];
        
        // Controls
        this.keys = {};
        this.lastShot = 0;
        this.shotCooldown = 200; // ms
        
        // Game settings
        this.enemySpawnRate = 2000; // ms
        this.lastEnemySpawn = 0;
        this.enemySpeed = 0.02;
        this.bulletSpeed = 0.8;
        this.playerSpeed = 0.1;
        
        this.init();
    }
    
    init() {
        this.setupScene();
        this.setupCamera();
        this.setupRenderer();
        this.setupLights();
        this.createPlayer();
        this.createStars();
        this.setupEventListeners();
        this.updateUI();
        this.animate();
    }
    
    setupScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000011);
    }
    
    setupCamera() {
        this.camera = new THREE.OrthographicCamera(
            -10, 10, // left, right
            7.5, -7.5, // top, bottom
            0.1, 1000 // near, far
        );
        this.camera.position.z = 10;
    }
    
    setupRenderer() {
        this.canvas = document.getElementById('gameCanvas');
        this.renderer = new THREE.WebGLRenderer({ 
            canvas: this.canvas,
            antialias: true 
        });
        this.renderer.setSize(800, 600);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }
    
    setupLights() {
        const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
        this.scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
        directionalLight.position.set(0, 0, 10);
        directionalLight.castShadow = true;
        this.scene.add(directionalLight);
    }
    
    createPlayer() {
        const geometry = new THREE.ConeGeometry(0.5, 1.5, 8);
        const material = new THREE.MeshLambertMaterial({ 
            color: 0x00ffff,
            emissive: 0x004444
        });
        
        this.player = new THREE.Mesh(geometry, material);
        this.player.position.set(0, -6, 0);
        this.player.rotation.x = Math.PI;
        this.scene.add(this.player);
    }
    
    createStars() {
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 200;
        const positions = new Float32Array(starCount * 3);
        
        for (let i = 0; i < starCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 20;
            positions[i + 1] = (Math.random() - 0.5) * 15;
            positions[i + 2] = (Math.random() - 0.5) * 10;
        }
        
        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const starMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.1,
            transparent: true,
            opacity: 0.8
        });
        
        const stars = new THREE.Points(starGeometry, starMaterial);
        this.scene.add(stars);
        this.stars.push(stars);
    }
    
    setupEventListeners() {
        // Keyboard controls
        document.addEventListener('keydown', (event) => {
            this.keys[event.code] = true;
            
            if (event.code === 'Space') {
                event.preventDefault();
                this.shoot();
            }
            
            if (event.code === 'Escape') {
                this.togglePause();
            }
        });
        
        document.addEventListener('keyup', (event) => {
            this.keys[event.code] = false;
        });
        
        // Restart button
        document.getElementById('restartBtn').addEventListener('click', () => {
            this.restart();
        });
    }
    
    shoot() {
        if (this.gameState !== 'playing') return;
        
        const now = Date.now();
        if (now - this.lastShot < this.shotCooldown) return;
        
        this.lastShot = now;
        
        const bulletGeometry = new THREE.SphereGeometry(0.1, 8, 8);
        const bulletMaterial = new THREE.MeshLambertMaterial({ 
            color: 0xffff00,
            emissive: 0x444400
        });
        
        const bullet = new THREE.Mesh(bulletGeometry, bulletMaterial);
        bullet.position.set(
            this.player.position.x,
            this.player.position.y + 1,
            this.player.position.z
        );
        
        this.scene.add(bullet);
        this.bullets.push(bullet);
    }
    
    createEnemy() {
        const geometry = new THREE.ConeGeometry(0.4, 1, 6);
        const material = new THREE.MeshLambertMaterial({ 
            color: 0xff0000,
            emissive: 0x440000
        });
        
        const enemy = new THREE.Mesh(geometry, material);
        enemy.position.set(
            (Math.random() - 0.5) * 18,
            8,
            0
        );
        enemy.rotation.x = 0;
        
        this.scene.add(enemy);
        this.enemies.push(enemy);
    }
    
    updatePlayer() {
        if (this.gameState !== 'playing') return;
        
        const speed = this.playerSpeed;
        
        if (this.keys['KeyA'] || this.keys['ArrowLeft']) {
            this.player.position.x = Math.max(-9, this.player.position.x - speed);
        }
        if (this.keys['KeyD'] || this.keys['ArrowRight']) {
            this.player.position.x = Math.min(9, this.player.position.x + speed);
        }
        if (this.keys['KeyW'] || this.keys['ArrowUp']) {
            this.player.position.y = Math.min(6, this.player.position.y + speed);
        }
        if (this.keys['KeyS'] || this.keys['ArrowDown']) {
            this.player.position.y = Math.max(-6, this.player.position.y - speed);
        }
    }
    
    updateBullets() {
        for (let i = this.bullets.length - 1; i >= 0; i--) {
            const bullet = this.bullets[i];
            bullet.position.y += this.bulletSpeed;
            
            // Remove bullets that are off screen
            if (bullet.position.y > 8) {
                this.scene.remove(bullet);
                this.bullets.splice(i, 1);
            }
        }
    }
    
    updateEnemies() {
        const now = Date.now();
        if (now - this.lastEnemySpawn > this.enemySpawnRate) {
            this.createEnemy();
            this.lastEnemySpawn = now;
        }
        
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const enemy = this.enemies[i];
            enemy.position.y -= this.enemySpeed;
            
            // Remove enemies that are off screen
            if (enemy.position.y < -8) {
                this.scene.remove(enemy);
                this.enemies.splice(i, 1);
                this.loseLife();
            }
        }
    }
    
    checkCollisions() {
        // Bullets vs Enemies
        for (let i = this.bullets.length - 1; i >= 0; i--) {
            const bullet = this.bullets[i];
            
            for (let j = this.enemies.length - 1; j >= 0; j--) {
                const enemy = this.enemies[j];
                
                const distance = bullet.position.distanceTo(enemy.position);
                if (distance < 0.8) {
                    // Collision detected
                    this.scene.remove(bullet);
                    this.scene.remove(enemy);
                    this.bullets.splice(i, 1);
                    this.enemies.splice(j, 1);
                    
                    this.score += 10;
                    this.updateUI();
                    break;
                }
            }
        }
        
        // Player vs Enemies
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const enemy = this.enemies[i];
            const distance = this.player.position.distanceTo(enemy.position);
            
            if (distance < 1.0) {
                this.scene.remove(enemy);
                this.enemies.splice(i, 1);
                this.loseLife();
            }
        }
    }
    
    loseLife() {
        this.lives--;
        this.updateUI();
        
        if (this.lives <= 0) {
            this.gameOver();
        } else {
            // Flash effect when hit
            this.player.material.emissive.setHex(0x444444);
            setTimeout(() => {
                this.player.material.emissive.setHex(0x004444);
            }, 200);
        }
    }
    
    gameOver() {
        this.gameState = 'gameOver';
        document.getElementById('gameOver').classList.remove('hidden');
        document.getElementById('finalScore').textContent = this.score;
    }
    
    restart() {
        // Reset game state
        this.gameState = 'playing';
        this.score = 0;
        this.lives = 3;
        this.level = 1;
        
        // Clear all objects
        this.bullets.forEach(bullet => this.scene.remove(bullet));
        this.enemies.forEach(enemy => this.scene.remove(enemy));
        this.enemyBullets.forEach(bullet => this.scene.remove(bullet));
        
        this.bullets = [];
        this.enemies = [];
        this.enemyBullets = [];
        
        // Reset player position
        this.player.position.set(0, -6, 0);
        this.player.material.emissive.setHex(0x004444);
        
        // Hide game over screen
        document.getElementById('gameOver').classList.add('hidden');
        
        this.updateUI();
    }
    
    togglePause() {
        if (this.gameState === 'playing') {
            this.gameState = 'paused';
        } else if (this.gameState === 'paused') {
            this.gameState = 'playing';
        }
    }
    
    updateUI() {
        document.getElementById('score').textContent = `Punkty: ${this.score}`;
        document.getElementById('lives').textContent = `Życia: ${this.lives}`;
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        if (this.gameState === 'playing') {
            this.updatePlayer();
            this.updateBullets();
            this.updateEnemies();
            this.checkCollisions();
        }
        
        this.renderer.render(this.scene, this.camera);
    }
}

// Start the game when the page loads
window.addEventListener('load', () => {
    new SpaceShooterGame();
});
