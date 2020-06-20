const JumpStop = []
const Chatten = []
const PolarRecords = []
const artists = [
    {
        name: "Bruce Atikins",
        style: "Country",
        age: 23
    },
    {
        name: "Jensen Brown",
        style: "Pop",
        age: 20
    },
    {
        name: "Dre Funkz",
        style: "Funk",
        age: 25
    },
    {
        name: "Dusta Grimes",
        style: "Rap",
        age: 21
    },
    {
        name: "Bartholomew Danielson",
        style: "Bluegrass",
        age: 23
    },
    
    {
        name: "Avilee Dallas",
        style: "Country",
        age: 19
    },
    {
        name: "Austin Kinkaid",
        style: "Pop",
        age: 22
    },
    {
        name: "Loyonce Branis",
        style: "Rap",
        age: 27
    },
]
const createCountryArtist = (newArtist) => {

    Chatten.push(newArtist)
}


const createPopArtist = (newPopArtist) => {
    
    PolarRecords.push(newPopArtist)
}


const createFunkArtist = (newFunkArtist) => {

    JumpStop.push(newFunkArtist)
}


const createRapArtist = (newRapArtist) => {

    JumpStop.push(newRapArtist)
}


const createBluegrassArtist = (newBluegrassArtist) => {
   
    Chatten.push(newBluegrassArtist)
}

for (let i = 0; i < artists.length;i++) {
    if (artists[i].style === "Rap")
    createRapArtist(artists[i])
    else if (artists[i].style === "Funk")
    createFunkArtist(artists[i])
    else if (artists[i].style === "Bluegrass")
    createBluegrassArtist(artists[i])
    else if (artists[i].style === "Country")
    createCountryArtist(artists[i])
    else if (artists[i].style === "Pop")
    createPopArtist(artists[i])
    else console.log(artist[i], "unknown artist")

}

console.log(JumpStop)
console.log(Chatten)
console.log(PolarRecords)