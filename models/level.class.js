class Level {
    enemies;
    bat;
    backgroundObject;
    mana;
    coin;
    level_end_x = 1500;

    /**
     * @param {Array} enemies - Objects of enemies
     * @param {Array} bat - Objects of Bats
     * @param {Array} backgroundObject - Objects of Background Components
     * @param {Array} mana - Objects of Mana
     * @param {Array} coin - Objects of Coins
     */
    constructor(enemies, bat, backgroundObject, mana, coin) {
        this.enemies = enemies;
        this.bat = bat;
        this.backgroundObject = backgroundObject;
        this.mana = mana;
        this.coin = coin;
    }
}