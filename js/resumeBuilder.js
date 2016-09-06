var work = {
    "jobs": [{
        "employer": "Brown Brothers Harriman",
        "title": "Product Designer",
        "location": "Kraków",
        "dates": "January 2014 - Now",
        "description": "Prototyping, Visual Design, Interface Design, Interaction Design"
    }, {
        "employer": "Brown Brothers Harriman",
        "title": "Reporting Specialist",
        "location": "Luxembourg, Kraków",
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
        "location": "Aix-en-Provence",
        "dates": "October 2005 - March 2007",
        "description": "Business Objects, Business analysis"
    }]
};


var projects = {
    "projects": [{
        "title": "Persevy",
        "dates": "January 2014 — Now",
        "description": "UX Designer and team leader on a time management web application",
        "images": ["images/screenshot1_tn.png", "images/screenshot2_tn.png"]
    }]
};



var bio = {
    "name": "Jonathan Gall",
    "role": "UX Designer and Front-End Developer",
    "contacts": {
        "mobile": "+48 535 203 086",
        "email": "jonathanonline@gmail.com",
        "github": "odajay",
        "twitter": "@odajay",
        "location": "Kielce"
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
};


function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};


displayWork();

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

       if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);

           }
        }
    };
};

projects.display();


$(document).click(function(loc) {
    // your code goes here
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function inName(USname) {
    var positionSpace = USname.indexOf(" ");
    var lastName = USname.slice(positionSpace).toUpperCase()
    var firstName = USname.slice(0, positionSpace)
    return firstName + lastName
};

var myInternationalization = internationalizeButton;
$("#main:last").append(myInternationalization);


$("#mapDiv").append(googleMap);
