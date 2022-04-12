//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetFlixShow{
    constructor(name, episodes, duration, seasons){
        this.name = name
        this.episodes = episodes
        this.duration = duration
        this.seasons = seasons

    }
    watch(){
        alert("youre watching")
    }
    whatSeason(){
        alert("on season 8")
    }
    howLong(){
        alert("very long time")
    }
}
