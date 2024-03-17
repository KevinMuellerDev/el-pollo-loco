class Level{
    enemies;
    bat;
    backgroundObject;
    mana;
    level_end_x = 1500;


    constructor(enemies, bat, backgroundObject, mana){
        this.enemies = enemies;
        this.bat = bat;
        this.backgroundObject = backgroundObject;
        this.mana = mana;
    }
}