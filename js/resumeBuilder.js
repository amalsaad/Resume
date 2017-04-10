var bio = {
    "name": "AMAL BIN SULTAN",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+966561712300",
        "email": "amal.al-sultan@hotmail.com",
        "github": "amalsaad",
        "location": "Saudi Arabia, Riyadh"
    },
    "welcomeMessage": "Welcome to my CV",
    "skills": ["C#", "ASP.NET", "HTML"],
    "biopic": "images/fry.jpg",

};


bio.display = function() {

    //header

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
    HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
    HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);

    HTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


    $("#header").prepend(HTMLheaderRole);
    $("#header").prepend(formattedName);

    var elements = [HTMLmobile, HTMLemail, HTMLgithub, HTMLlocation];
    for (x = 0; x < elements.length; x++) {

        $("#topContacts, #footerContacts").append(elements[x]);

    }


    $("#header").append(HTMLbioPic);
    $("#header").append(HTMLwelcomeMsg);
    $("#header").append(HTMLskillsStart);

    // loop through skills using forEach -- comments for education purpose	 
    if (bio.skills.length > 0) {
        bio.skills.forEach(function(skill) {
            var skills = HTMLskills.replace("%data%", skill);
            $("#skills").append(skills);
        });

        // loop through skills using for in -- comments for education purpose

        // if(bio.skills.length >0){
        // 	for( skill in bio.skills){
        //       if(bio.skills.hasOwnProperty(skill)){
        // 		var skills = HTMLskills.replace("%data%",bio.skills[skill]);
        // 		$( "#skills" ).append(skills);	
        // 		}		
        // 	}	 



    }
};

//work section
var work = {
    "jobs": [{
            "employer": "KFSH&RC:",
            "title": "Web Developer",
            "location": "Saudi Arabia, Riyadh",
            "dates": "March,2016",
            "description": "Employee in department of Health Information System Affairs, Job Title DotNet Developer"
        },
        // {
        // "employer": "KFSH&RC:", 
        // "title": "Web Developer", 
        // "location": "Riyadh", 
        // "dates": "March,2016",
        // "description": "Employee in department of Health Information System Affairs, Job Title DotNet Developer"
        // }
    ]
};

work.display = function() {

    var text;
    $("#workExperience").append("<div id='work-foldable-content'></div>");
    for (var i = 0; i < work.jobs.length; i++) {
        $("#work-foldable-content").append(HTMLworkStart);
        var text1 = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var text2 = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        text = text1 + text2;
        $(".work-entry:last").append(text);
        text = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(text);
        text = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(text);
        text = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(text);

    }

};

// projects section 

var projects = {
    "projects": [{
            "title": "Online Ordering System",
            "dates": "January, 2017",
            "description": "The project follows software development process covered plan, analysis, design, implementation and test.",
            "images": ["images/OOS.png"],
            "link": "https://github.com/amalsaad"
        },
        {
            "title": "Fingerprint System",
            "dates": "November, 2016",
            "description": "The project follows software development process covered plan, analysis, design, implementation and test.",
            "images": ["images/Fingerprint.png"],
            "link": "https://github.com/amalsaad"
        }
    ]
};


projects.display = function() {
    'use strict';
    // loop through projects details using forEach -- comments for education purpose

    projects.projects.forEach(function(proj) {

        $("#projects").append("<div id='projects-foldable-content'></div>");
        $("#projects-foldable-content").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", "<a href=\"" + proj.link + "\" target=\"_bkank\">" + proj.title + "</a>"));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", proj.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", proj.description));
        if (proj.images.length > 0) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", proj.images[0]));
        }
    });

    // loop through projects details using for in -- comments for education purpose
    // var proj;
    // $("#projects").append("<div id='projects-foldable-content'></div>");
    // for( proj in projects.projects){
    // 	if(projects.projects.hasOwnProperty(proj)){
    // 		  $("#projects-foldable-content").append(HTMLprojectStart);
    // 		  $(".project-entry:last").append(HTMLprojectTitle.replace("%data%","<a href=\""+ projects.projects[proj].link + "\" target=\"_bkank\">" + projects.projects[proj].title + "</a>"));
    // 		  $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[proj].dates));
    // 		  $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[proj].description));
    // 		  if (projects.projects[proj].images.length > 0) {
    // 		  $(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[proj].images[0]));
    // 	}
    // 	}
    // }

};


// //education section

var education = {
    "schools": [{
            "name": "Princess Nourah Bint Abdurahman University",
            "location": "Saudi Arabia, Riyadh",
            "degree": "Bachelor in Computer Information System",
            "majors": ["HTML", " C#", " Data Analysis", " English"],
            "dates": "May, 2015"
        },
        // {
        //    "name": "Princess Nourah Bint Abdurahman University",
        //    "location": "Saudi Arabia, Riyadh",
        //    "degree": "Bachelor in Computer Information System",
        //    "majors": ["Science", "English"],
        //    "dates": "May, 2015"	
        // }
    ],

    "onlineCourses": [{
        "title": "JavaScript fundamental",
        "school": "Pluralsight",
        "dates": "Desember, 2016",
        "url": "https://www.pluralsight.com/"

    }]

};

education.display = function() {
    'use strict';
    var name, degree, formattedHtml, school, title, edu;
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {

        $("#education").append("<div id='education-foldable-content'></div>");

        // loop through education details using forEach -- comments for education purpose

        education.schools.forEach(function(edu) {
            $("#education-foldable-content").append(HTMLschoolStart);
            name = HTMLschoolName.replace("%data%", edu.name);
            degree = HTMLschoolDegree.replace("%data%", edu.degree);
            formattedHtml = name + degree;
            $(".education-entry:last").append(formattedHtml);
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", edu.dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", edu.location));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", edu.majors));
        });
        $(".education-entry:last").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(edu) {
            title = HTMLonlineTitle.replace("%data%", edu.title);
            school = HTMLonlineSchool.replace('%data%', edu.school);
            formattedHtml = title + school;
            $(".education-entry:last").append(formattedHtml);
            $(".education-entry:last").append(HTMLonlineDates.replace('%data%', edu.dates));
            $(".education-entry:last").append(HTMLonlineURL.replace('%data%', edu.url));
        });

        // loop through education details using for in -- comments for education purpose

        // for (edu in education.schools) {
        //     if (education.schools.hasOwnProperty(edu)) {
        //         $("#education-foldable-content").append(HTMLschoolStart);
        //         name = HTMLschoolName.replace("%data%", education.schools[edu].name);
        //         degree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree); 
        //         formattedHtml = name + degree;
        //         $(".education-entry:last").append(formattedHtml);
        //         $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[edu].dates));
        //         $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[edu].location));
        //         $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[edu].majors));
        //     }
        // }


        // for (edu in education.onlineCourses) {
        //     if (education.onlineCourses.hasOwnProperty(edu)) {
        //         title = HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title);
        //         school = HTMLonlineSchool.replace('%data%', education.onlineCourses[edu].school)
        //         formattedHtml = title + school;
        //         $(".education-entry:last").append(formattedHtml);
        //         $(".education-entry:last").append(HTMLonlineDates.replace('%data%', education.onlineCourses[edu].dates));
        //         $(".education-entry:last").append(HTMLonlineURL.replace('%data%', education.onlineCourses[edu].url));
        //     }
        // }
    }
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
initializeMap();