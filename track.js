let trackData = [
    {
        "year": 2019,
        "trackName": "Warm Up"
    },
    {
        "year": 2019,
        "trackName": "Aadat"
    },
    {
        "year": 2020,
        "trackName": "Untitled"
    },
    {
        "year": 2020,
        "trackName": "Maharani"
    },
    {
        "year": 2020,
        "trackName": "Makasam"
    },
    {
        "year": 2020,
        "trackName": "Sher"
    },
    {
        "year": 2019,
        "trackName": "Solo"
    }
];


let allData = new Array();
trackData.map((x) => {
    let isIn = false;          
    allData.map((y) => {        
        if (y.year == x.year) {
            isIn = true;
            y.trackList.push(x.trackName);
        }
    })

    //koi data available na hoy allData.
    if (!isIn) {
        let newData = new Object();
        newData.year = x.year;
        newData.trackList =new Array();
        newData.trackList.push(x.trackName);
        allData.push(newData);
    }
})

allData.forEach(element => {
    // console.log(element);
    var temp = ""
    for (let i = 0; i < element.trackList.length; i++) {
        temp += element.trackList[i] +'<br/>'
        console.log(temp);
    }
    document.getElementById("trackList").innerHTML = temp
});

