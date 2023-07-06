module.exports = global.info = {
    "ucr":[
        {incoming: true, text: "University"},
        {incoming: false, "text": "University of California, Riverside"},
        {incoming: false, "text": "MS in Computer Science"},
        {incoming: true, "text": "GPA"},
        {incoming: false, "text": "3.74"},
        {incoming: true, "text": "courses"},
        {incoming: false, "text": "Artificial Intelligence, Database Management Systems, Compiler Construction"},
        {incoming: false, "text": "Advanced Cryptography, Parallel Algorithms, Information Retrieval and Web Search"},
        {incoming: false, "text": "Design and Analysis of Algorithms, Algorithmic Techniques in Computational Biology, Software Testing and Debugging(Seminar)"}
    ],
    "svce": [
        {incoming: true,text: "College"},
        {incoming: false,"text": "Sri Venkateswara College of Engineering"},
        {incoming: false,"text": "Anna University"},
        {incoming: false,"text": "B.E Computer Science and Engineering"},
        {incoming: true,"text": "GPA"},
        {incoming: false,"text": "7.90/ 10"},
        {incoming: true,"text": "courses"},
        {incoming: false,"text": "Artificial Intelligence, Database Management Systems, Compiler Construction"},
        {incoming: false,"text": "Advanced Cryptography, Parallel Algorithms, Information Retrieval and Web Search"},
        {incoming: false,"text": "Design and Analysis of Algorithms, Algorithmic Techniques in Computational Biology, Software Testing and Debugging(Seminar)"}
    ],
    "zoho":[
        {incoming: true,text:"Where did you work?"},
        {incoming: false, text: "I worked as a Software Engineer (MTS) in Zoho Corporation"},
        {incoming: false, text: "My team is Zoho FSM. We build software solutions for field service management"},
        {incoming: true,text:"How many years?"},
        {incoming: false, text: "I worked for 3 years."},
        {incoming: true, text: "Which team did you work for?"},
        {incoming: false, text: "I worked for Zoho FSM"},
        {incoming: false, text: "fsm.zoho.com", link: "https://fsm.zoho.com/"}
    ],
    "zoho_pt":[
        {incoming: true,text:"Any other experiences?"},
        {incoming: false, text: "Internship at Zoho as a project trainee"},
        {incoming: false, text: "what were your responsibilities"},
        {incoming: true,text:"built jquery UI libraries"}
    ],
    "nokia":[
        {incoming: true,text:"Any other experiences?"},
        {incoming: false, text: "Internship at Zoho as a project trainee"},
        {incoming: false, text: "what were your responsibilities"},
        {incoming: true,text:"built jquery UI libraries"}
    ],
    "hadoop":[],
    "react": [],
    "scraping": [],
    "aipacman":[],
    "parallel_algo":[],
    "compiler":[],
    "maskdetection": []
}

 module.exports = global.defaults = {
    "academics": "ucr",
    "experience": "zoho",
    "projects": "hadoop"
 }

 module.exports = global.chatHeader = {
    "ucr": {
        "header": "University of California, Riverside",
        "subtext": "online (2022-2023)"
    },
    "svce": {
        "header": "SVCE, Anna University",
        "subtext": "2015 - 2019"
    },
    "zoho":{
        "header": "Zoho Corporation",
        "subtext": "2019-2022"
    },
    "zoho_pt":{
        "header": "Zoho Corporation, Project Trainee (Internship)",
        "subtext": "2018-2019"
    },
    "nokia":{
        "header": "Nokia Solutions and Networks (Internship)",
        "subtext": "2017-2018"
    },
    "hadoop": {
        "header": "Stable temperature analysis",
        "subtext": ""
    },
    "react":{
        "header": "Resume builder",
        "subtext": ""
    },
    "scraping":{
        "header": "QnA search engine",
        "subtext": ""
    },
    "parallel_algo":{
        "header": "Parallel Algorithms",
        "subtext": ""
    },
    "compiler":{
        "header": "Interprocedural Analysis",
        "subtext": ""
    },
    "aipacman":{
        "header": "AI Pacman",
        "subtext": ""
    },
    "maskdetection":{
        "header": "Covid Mask Detection",
        "subtext": ""
    }
    
 }