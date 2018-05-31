users = [
    {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
    }
    },
    {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
    }
    },
    {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
    }
    }
]
function userLanguages(dict){
    for(let i of dict){
        str = i['fname']+' '+i['lname']+' knows ';
        for(var j = 0; j < i['languages'].length ;j++){
            if (j == i['languages'].length-1){
                str += 'and '+i['languages'][j]+'.';
            }
            else{
                str += i['languages'][j]+', ';
            }
        }
        console.log(str)
        str = i['fname']+' '+i['lname']+' is also interested in ';
        for(let k in i['interests']){
            for(var j= 0;j< i['interests'][k].length;j++){
                str+= i['interests'][k][j] + ', '
            }
        }
        str = str.slice(0, str.length-2);
        console.log(str)
    }
}
userLanguages(users)