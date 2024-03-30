/*Ajout des question partie facile geographie */
const questions=[
    {
        question: "quel est le pays le plus vaste du monde?",
        answer:[
            {text: "Etats Unis", correct:"false"},
            {text: "Chine", correct:"false"},
            {text: "Canada", correct:"false"},
            {text: "Algerie", correct:"false"},
            {text: "Russie", correct:"true"},
        ]
    },
    {
        question: "quel est le fleuve le plus long du monde?",
        answer:[
            {text: "fleuve Senegal", correct:"false"},
            {text: "l'Amazonie", correct:"false"},
            {text: "l'euphrate", correct:"false"},
            {text: "Le Nil", correct:"true"},
            {text: "le fleuve de gambie", correct:"false"},
        ]
    },
    {
        question: "Dans quel continent se trouve l'Inde?",
        answer:[
            {text: "Amerique", correct:"false"},
            {text: "Europe", correct:"false"},
            {text: "Asie", correct:"true"},
            {text: "Afrique", correct:"false"},
            {text: "Oceanie", correct:"false"},
        ]
    },
    {
        question: "ou se trouve le desert de sahara?",
        answer:[
            {text: "Australie", correct:"false"},
            {text: "Chine", correct:"false"},
            {text: "Afrique", correct:"true"},
            {text: "Egypte", correct:"false"},
            {text: "New zelande", correct:"false"},
        ]
    },
    {
        question: "C'etait ou l'epicentre de la seconde guerre mondiale?",
        answer:[
            {text: "Etats Unis", correct:"false"},
            {text: "Chine", correct:"false"},
            {text: "Europe", correct:"True"},
            {text: "Vietnam", correct:"false"},
            {text: "senegal", correct:"false"},
        ]
    },
    {
        question: "Ou se trouve la grande muraille verte?",
        answer:[
            {text: "Taiwan", correct:"false"},
            {text: "Bresil", correct:"false"},
            {text: "Allemange", correct:"false"},
            {text: "Chine", correct:"true"},
            {text: "Suisse", correct:"false"},
        ]
    },
    {
        question: "Ou se trouve la Tour Eifel?",
        answer:[
            {text: "Londre", correct:"false"},
            {text: "Berlin", correct:"false"},
            {text: "Paris", correct:"true"},
            {text: "Ottawa", correct:"false"},
            {text: "Moscow", correct:"False"},
        ]
    },
    {
        question: "Ou se trouve Jerusalem?",
        answer:[
            {text: "Italie", correct:"false"},
            {text: "Russie", correct:"false"},
            {text: "Jordanie", correct:"false"},
            {text: "Algerie", correct:"false"},
            {text: "Palestine", correct:"true"},
        ]
    },
    {
        question: "quel est le plus grand continent du monde?",
        answer:[
            {text: "Etats Unis", correct:"false"},
            {text: "Chine", correct:"false"},
            {text: "Afrique", correct:"True"},
            {text: "Algerie", correct:"false"},
            {text: "Asie", correct:"False"},
        ]
    },
    {
        question: "Ou se trouve Frankfort?",
        answer:[
            {text: "Etats Unis", correct:"false"},
            {text: "Chine", correct:"false"},
            {text: "Canada", correct:"false"},
            {text: "Allemagne", correct:"true"},
            {text: "Russie", correct:"False"},
        ]
    }
];


/* recuperation du boutton next, du div parent des reponses et du div question*/
const question=document.querySelector(".h2quest");
const divbut=document.querySelector(".divbut");
const next=document.querySelector(".next");


/*Initialisation du score et de l'index des questions */
let questionsIndex=0;
let score=0;



