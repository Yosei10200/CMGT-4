import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    fish: new ImageSource('images/fish.png'),
    enemy: new ImageSource('images/enemy.png'),
    background: new ImageSource('images/background.png'),
    coin: new ImageSource('images/coin.png'),
    bullet: new ImageSource('images/bullet.png'),
    start: new ImageSource('images/start.png'),
    ufo: new ImageSource('images/ufo.png'),
}


const ResourceLoader = new Loader([
    Resources.fish,
    Resources.enemy,
    Resources.background,
    Resources.coin,
    Resources.bullet,
    Resources.start,
    Resources.ufo
])

export { Resources, ResourceLoader }