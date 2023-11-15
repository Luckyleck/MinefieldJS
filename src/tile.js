class Tile {
    constructor() {
        this.isMine = false;
        this.discovered = false;
        this.id = 'unknown';
    }

    discover() {
        if (this.isMine) {
            this.id = 'mine'
        } else {
            this.id = 'safe'
        }
        this.discovered = true;
    }

    makeMine() {
        this.isMine = true;
    }
}

export default Tile;