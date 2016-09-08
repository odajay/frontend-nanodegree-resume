var work = {
    "jobs": [{
        "employer": "Brown Brothers Harriman",
        "title": "Product Designer",
        "location": "Kraków",
        "dates": "January 2014 - Now",
        "description": "Prototyping of innovative data-centric financial application using Framer and Invision. Leading the Visual Design, Interface Design and Interaction Design."
    }, {
        "employer": "Brown Brothers Harriman",
        "title": "BI Developer",
        "location": "Luxembourg, Kraków",
        "dates": "September 2010 - January 2014",
        "description": "Development of reports using IBM Cognos 10, SAS, Efront. Business analysis and redaction of specifications."
    }, {
        "employer": "Schroders Investment Management",
        "title": "BI Developer",
        "location": "Luxembourg",
        "dates": "March 2007 - September 2010",
        "description": "Development of reports using Business Objects. Business analysis and redaction of specifications."

    }, {
        "employer": "Euriware, Amphaz",
        "title": "BI Developer",
        "location": "Aix-en-Provence",
        "dates": "October 2005 - March 2007",
        "description": "Development of reports using Business Objects. Business analysis and redaction of specifications."
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

var education = {
    "schools": [{
        "name": "Grenoble Ecole de Management",
        "location": "Grenoble",
        "degree": "Postgraduate",
        "majors": ["Business Intelligence"],
        "dates": "2003-2004",
        "url": "http://en.grenoble-em.com/"
    }, {
        "name": "Ecole Supérieure de Commerce de Pau",
        "location": "Pau",
        "degree": "Graduate",
        "majors": ["Information Systems"],
        "minor": ["Human Ressources"],
        "dates": "2000-2003",
        "url": "http://www.esc-pau.com/"
    }],
    "onlineCourses": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"

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
    "welcomeMessage": "I am focusing in rapid prototyping, user experience research and design languages.",
    "skills": ["Rapid Prototyping", "Information Architecture", "Data visualization", "Framer", "HTML/CSS/JS/jQuery", "Automation with Grunt", "Team player"],
    "biopic": "images/portrait.jpg"
};


bio.display = function() {

    var myRole = HTMLheaderRole.replace("%data%", bio.role);
    var myName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(myName, myRole);

    var contactInfo = [];

    contactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    contactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    contactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    contactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    contactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    for (i = 0; i < contactInfo.length; i++) {
        $("#topContacts").append(contactInfo[i]);
        $("#footerContacts").append(contactInfo[i]);
    }

    var mybioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var mywelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(mybioPic, mywelcomeMessage);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(val, i) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        });
    }
};

bio.display();

education.display = function() {
    $("#education").append(HTMLschoolStart);

    education.schools.forEach(function(val, i) {

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedschoolNameDegree = formattedschoolName + formattedschoolDegree;
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedschoolNameDegree, formattedschoolDates, formattedschoolLocation, formattedschoolMajor);
    });

    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(val, i) {

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
        var formattedsonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedonlineTitleSchool, formattedsonlineDates, formattedonlineURL);
    });
};

education.display();


work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    work.jobs.forEach(function(val, i) {

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
    });
};
work.display();


projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    projects.projects.forEach(function(val, i) {


        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

        if (projects.projects[i].images.length > 0) {
            projects.projects[i].images.forEach(function(val, y) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[y]);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};
projects.display();


$("#mapDiv").append(googleMap);
