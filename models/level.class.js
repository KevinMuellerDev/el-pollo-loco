class Level{
    enemies;
    bat;
    backgroundObject;
    mana;
    coin;
    level_end_x = 1500;


    constructor(enemies, bat, backgroundObject, mana, coin){
        this.enemies = enemies;
        this.bat = bat;
        this.backgroundObject = backgroundObject;
        this.mana = mana;
        this.coin = coin;
    }
}