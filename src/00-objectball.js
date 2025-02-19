
function gameObject() {
    const obj = {
        "home":{
            "teamName": "Brooklyn Nets" , 
            "colors": ["Black", "White"], 
            "players": {
                "Alan Anderson": {
                    "number": 0, 
                    "shoe": 16, 
                    "points":22,
                    "rebounds":12,
                    "assists": 12, 
                    "steals": 3, 
                    "blocks":1,
                    "slamDunks":1,
                },
                "Reggie Evans": {
                    "number": 30, 
                    "shoe": 14, 
                    "points":12,
                    "rebounds":12,
                    "assists": 12, 
                    "steals": 12, 
                    "blocks":12,
                    "slamDunks":7,
                },
                "Brook Lopez": {
                    "number": 11, 
                    "shoe": 17, 
                    "points":17,
                    "rebounds":19,
                    "assists": 10, 
                    "steals": 3, 
                    "blocks":1,
                    "slamDunks":15,
                },
                "Mason Plumlee": {
                    "number": 1, 
                    "shoe": 19, 
                    "points":26,
                    "rebounds":12,
                    "assists": 6, 
                    "steals": 3, 
                    "blocks":8,
                    "slamDunks":5,
                },
                "Jason Terry": {
                    "number": 31, 
                    "shoe": 15, 
                    "points":19,
                    "rebounds":2,
                    "assists": 2, 
                    "steals": 4, 
                    "blocks":11,
                    "slamDunks":1,
                },
            }
        } , 
        "away":{
            "teamName": "Charlotte Hornets" , 
            "colors": ["Turquoise", "Purple"], 
            "players": {
                "Jeff Adrien": {
                    "number": 4, 
                    "shoe": 18, 
                    "points":10,
                    "rebounds":1,
                    "assists": 1, 
                    "steals": 2, 
                    "blocks":7,
                    "slamDunks":2, 
                },
                "Bismak Biyombo": {
                    "number": 0, 
                    "shoe": 16, 
                    "points":12,
                    "rebounds":4,
                    "assists": 7, 
                    "steals": 7, 
                    "blocks":15,
                    "slamDunks":10,
                },
                "DeSagna Diop": {
                    "number": 2, 
                    "shoe": 14, 
                    "points":24,
                    "rebounds":12,
                    "assists": 12, 
                    "steals": 4, 
                    "blocks":5,
                    "slamDunks":5,
                },
                "Ben Gordon": {
                    "number": 8, 
                    "shoe": 15, 
                    "points":33,
                    "rebounds":3,
                    "assists": 2, 
                    "steals": 1, 
                    "blocks":1,
                    "slamDunks":0,
                },
                "Brendan Haywood": {
                    "number": 33, 
                    "shoe": 15, 
                    "points":6,
                    "rebounds":12,
                    "assists": 12, 
                    "steals": 22, 
                    "blocks":5,
                    "slamDunks":12,
                },
            }
        },
    }
    return obj
}

function numPointsScored(playerName){
    let selection = gameObject();
    let homePlayers = Object.keys(selection.home.players);
    let awayPlayers = Object.keys(selection.away.players);

    for (let n = 0; n < 5; n++) {
        if (homePlayers[n] === playerName) {
            return selection.home.players[playerName].points
        }
        else if (awayPlayers[n] === playerName) {
            return selection.away.players[playerName].points
        }
    }
}

function shoeSize(playerName){
    let selection = gameObject();
    let homePlayers = Object.keys(selection.home.players);
    let awayPlayers = Object.keys(selection.away.players);

    for (let n = 0; n < 5; n++) {
        if (homePlayers[n] === playerName) {
            return selection.home.players[playerName].shoe
        }
        else if (awayPlayers[n] === playerName) {
            return selection.away.players[playerName].shoe
        }
    }
}

function teamColors(team){
    let selection = gameObject();
    if (selection.home.teamName === team) {
        return selection.home.colors
    }
    else if (selection.away.teamName === team) {
        return selection.away.colors
    }
}

function teamNames(){
    let selection = gameObject();
    let newArray = [];
    
    newArray.push(selection.home.teamName, selection.away.teamName)
    return newArray
}

function playerNumbers(team){
    let selection = gameObject();
    let newArray = [];
    if (selection.home.teamName === team) {
        for (n=0 ; n<5; n++) {
            let teamPlayers = Object.values(selection.home.players);
            newArray.push(teamPlayers[n].number);
        }
    }
    else if (selection.away.teamName === team) {
        for (n=0 ; n<5 ; n++) {
            let teamPlayers = Object.values(selection.away.players);
            newArray.push(teamPlayers[n].number);
        }
    }
    return newArray
}

function playerStats(playerName){
    let selection = gameObject();
    let homePlayers = Object.keys(selection.home.players);
    let awayPlayers = Object.keys(selection.away.players);
    for (let n = 0; n < 5; n++) {
        if (homePlayers[n] === playerName) {
            return selection.home.players[playerName]
        }
        else if (awayPlayers[n] === playerName) {
            return selection.away.players[playerName]
        }
    }
}

function bigShoeRebounds(){
    let selection = gameObject();
    let homeStats = Object.values(selection.home.players);
    let awayStats = Object.values(selection.away.players);
    let obj1 = {}
    let obj2 = {}
    let obj3 = {}
    let obj4 = {}

    function homeTeam(){
        let homePlayers = Object.keys(selection.home.players);
        for (n=0 ; n<5 ; n++) {
            let keyHome = homePlayers[n]; 
            let valueShoeHome = homeStats[n].shoe;
            let valueReboundsHome = homeStats[n].rebounds;
            obj1[keyHome] = valueShoeHome;
            obj3[keyHome] = valueReboundsHome;
        }
        return obj1, obj3
    }

    function awayTeam(){
        let awayPlayers = Object.keys(selection.away.players);
        for (n=0 ; n<5 ; n++) {
            let keyAway = awayPlayers[n]
            let valueShoeAway = awayStats[n].shoe;
            let valueReboundsAway = awayStats[n].rebounds;
            obj2[keyAway]=valueShoeAway; 
            obj4[keyAway]=valueReboundsAway;  
        }
        return obj2, obj4
    }

    homeTeam()
    awayTeam()
    const mergedShoes = {...obj1,...obj2};
    const mergedRebounds = {...obj3,...obj4}
    // console.log(mergedShoes)
    // console.log(mergedRebounds)
    let bigShoe = Math.max(...Object.values(mergedShoes))   
    let bigKey; 
    let bigValue;

    for (let [key, value] of Object.entries(mergedShoes)) {
        if (value === bigShoe) {
            bigKey = key;
        }
    }

    for (let [key,value] of Object.entries(mergedRebounds)){
        if (key === bigKey) {
            bigValue = value;
        }
    }
    return bigValue;

}
    