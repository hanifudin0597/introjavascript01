
const biodata = {
    name : "Hanifudin Alfauzi",
    age : 24,
    hobbies : ["nonton","bermain game","badminton"],
    Ismarried : false,
    schooList : [
        {
            name : "SDN Gerih 2",
            yearIn : 2004,
            yearOut : 2010,
            major : null,

        },
        {
            name : "SMPN 1 Geneng",
            yearIn : 2010,
            yearOut : 2013,
            major : null,

        },
        {
            name : "SMAN 1 Maospati",
            yearIn : 2013,
            yearOut : 2016,
            major : null,

        },
        {
            name : "IT PLN",
            yearIn : 2016,
            yearOut : 2020,
            major : "Engineering informatics"

        }
    ],
    skills : [
        {
            skillName : "programming",
            level : "very beginner",
        },
        {
            skillName : "membaca cepat",
            level : "very beginner",
        },
    ],
    interestInCoding : true,
}

console.log(biodata.skills[0].skillName)
// console.log(biodata)