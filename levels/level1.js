let level1;

function initLevel(world){
    level1 = new Level(
        [
            new Zombie(),
            new Zombie2(),
            new Zombie(),
            new Zombie(),
            new Zombie2(),
            new Zombie(),
            new Zombie(),
            new Zombie2(),
            new Zombie(),
            new Endboss()
        ],
        [
            new Bat(),
            new Bat(),
            new Bat(),
            new Bat(),
            new Bat(),
            new Bat(),
            new Bat(),
            new Bat(),
            new Bat(),
            new Bat(),
            new Bat(),
            new Bat(),
            new Bat(),
            new Bat(),
            new Bat(),
            new Bat(),
            new Bat(),
            new Bat()
        ],
        [
            new BackgroundObject('./img/background/layers/1.png', 0),
            new BackgroundObject('./img/background/layers/2.png', 0),
            new BackgroundObject('./img/background/layers/3.png', 0),
            new BackgroundObject('./img/background/layers/4.png', 0),
            new BackgroundObject('./img/background/layers/5.png', 0),
            new BackgroundObject('./img/background/layers/6.png', 0),
            new BackgroundObject('./img/background/layers/7.png', 0),
            new BackgroundObject('./img/background/layers/8.png', 0),
            new BackgroundObject('./img/background/layers/9.png', 0),
            new BackgroundObject('./img/background/layers/1.png', 720),
            new BackgroundObject('./img/background/layers/2.png', 720),
            new BackgroundObject('./img/background/layers/3.png', 720),
            new BackgroundObject('./img/background/layers/4.png', 720),
            new BackgroundObject('./img/background/layers/5.png', 720),
            new BackgroundObject('./img/background/layers/6.png', 720),
            new BackgroundObject('./img/background/layers/8.png', 720),
            new BackgroundObject('./img/background/layers/9.png', 720),
            new BackgroundObject('./img/background/layers/1.png', 1440),
            new BackgroundObject('./img/background/layers/2.png', 1440),
            new BackgroundObject('./img/background/layers/3.png', 1440),
            new BackgroundObject('./img/background/layers/4.png', 1440),
            new BackgroundObject('./img/background/layers/5.png', 1440),
            new BackgroundObject('./img/background/layers/6.png', 1440),
            new BackgroundObject('./img/background/layers/7.png', 1440),
            new BackgroundObject('./img/background/layers/8.png', 1440),
            new BackgroundObject('./img/background/layers/9.png', 1440),
            new BackgroundObject('./img/background/layers/1.png', 2160),
            new BackgroundObject('./img/background/layers/2.png', 2160),
            new BackgroundObject('./img/background/layers/3.png', 2160),
            new BackgroundObject('./img/background/layers/4.png', 2160),
            new BackgroundObject('./img/background/layers/5.png', 2160),
            new BackgroundObject('./img/background/layers/6.png', 2160),
            new BackgroundObject('./img/background/layers/8.png', 2160),
            new BackgroundObject('./img/background/layers/9.png', 2160)
        ],
        [
            new Mana(world),
            new Mana(world),
            new Mana(world),
        ],
        [
            new Coin(world),
            new Coin(world),
            new Coin(world),
            new Coin(world),
            new Coin(world),
            new Coin(world),
            new Coin(world)
        ]
    );
}

