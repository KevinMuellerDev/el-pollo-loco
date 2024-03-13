class Level{
    enemies;
    bat;
    backgroundObject;
    level_end_x = 1500;

    constructor(enemies, bat, backgroundObject){
        this.enemies = enemies;
        this.bat = bat;
        this.backgroundObject = backgroundObject;
    }
}