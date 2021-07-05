class Album {
    title: string
    songs: string[]
    constructor(title, songs) {
        this.title = title
        this.songs = songs
    }
}

class Banda {
    members: string[];
    albums: Album[];
    constructor(members: string[], albums: Album[]) {
        this.members = members
        this.albums = albums
    }
}

const main = () => {
    const unAlbum = new Album ("El album de Agus", ["lalalal"])
    //console.log(unAlbum.title)
    const unaBanda = new Banda (["Agustin", "Gonzalo"], [unAlbum])
    console.log("Miembros: " + unaBanda.members); console.log("Albums: " + unAlbum.title)
    console.log("otro cambio")
}

main();