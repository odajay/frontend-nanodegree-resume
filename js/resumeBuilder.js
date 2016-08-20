var work = {
    "jobs": [{
        "employer": "Brown Brothers Harriman",
        "title": "Product Designer",
        "location": "Krakow, Poland",
        "dates": "January 2014 - Now",
        "description": "Prototyping, Visual Design, Interface Design, Interaction Design"
    }, {
        "employer": "Brown Brothers Harriman",
        "title": "Reporting Specialist",
        "location": "Poland — Luxembourg",
        "dates": "September 2010 - January 2014",
        "description": "IBM Cognos 10, SAS, Efront, Business analysis"
    }, {
        "employer": "Schroders Investment Management",
        "title": "Reporting Specialist",
        "location": "Luxembourg",
        "dates": "March 2007 - September 2010",
        "description": "Business Objects, Business analysis"

    }, {
        "employer": "Euriware, Amphaz",
        "title": "Reporting Specialist",
        "location": "France",
        "dates": "October 2005 - March 2007",
        "description": "Business Objects, Business analysis"
    }]
};


var projects = {
    "projects": [{
        "title": "Persevy",
        "dates": "January 2014 — Now",
        "description": "UX Designer and team leader on a time management web application",
        "images": ["images/screenshot1.png", "images/screenshot2.png"]

    }]
};

var bio = {
    "name": "Jonathan Gall",
    "role": "UX Designer",
    "contacts": {
        "mobile": "+48 535 203 086",
        "email": "jonathanonline@gmail.com",
        "github": "odajay",
        "twitter": "@odajay",
        "location": "Poland"
    },
    "welcomeMessage": "I always loved to solve problems, so I found a way to make a living out of it. I am focusing in rapid prototyping, user experience research and design languages.",
    "skills": ["Rapid Prototyping", "Information Architecture", "Data visualization", "Framer", "HTML/CSS/JS"],
    "bioPic": "images/portrait.jpg"
};



var education = {
    "schools": [{
        "name": "Grenoble Ecole de Management",
        "city": "Grenoble",
        "degree": "Postgraduate",
        "majors": ["Business Intelligence"],
        "years": "2003-2004",
        "url": "http://en.grenoble-em.com/"
    }, {
        "name": "Ecole Supérieure de Commerce de Pau",
        "city": "Pau",
        "degree": "Graduate",
        "majors": ["Information Systems"],
        "minor": ["Human Ressources"],
        "years": "2000-2003",
        "url": "http://www.esc-pau.com/"
    }],
    "onlineCourses": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "dates": 2016,
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"

    }]
};

var myName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(myName);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}
