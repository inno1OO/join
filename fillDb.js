const Course = require('./models/course');


//Do not delete danger 
const categories = ['Programming', 'Graphic Design', 'Database'];

const JavaScriptForBeginner=`JavaScript is one of the most popular programming languages in the world, 
and growing faster than any other programming language. 
As a developer, you can use JavaScript to build web and mobile apps,
 real-time networking apps, command-line tools, and games.`;

const JavaFromScratch=`Popular for its versatility and ability to create a wide variety of applications, 
learning Java opens up your possibilities when coding. With it,
 you’ll be able to develop large systems, software, and mobile applications — and even create mobile apps for Android.
  Learn important Java coding fundamentals and practice your new skills with real-world projects.`;

const IntroductionToOOPInJava=`Popular for its versatility and ability to create a wide variety of applications, 
learning Java opens up your possibilities when coding. With it,
 you’ll be able to develop large systems, software, and mobile applications — and even create mobile apps for Android.
  Learn important Java coding fundamentals and practice your new skills with real-world projects.`;


  const FullstackWebDeveloper=`Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. 
  With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of Udemy! 
  At 65+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. 
  Even if you have zero programming experience, this course will take you from beginner to mastery.`;

  const ServerSideProgrammingInNodejs=`There are many reasons why Node.js often makes sense development-wise.
   For one thing, Node uses JavaScript, which is the same language used to build frontend side of the app. 
   Because of that, the backend and frontend developers can communicate much easier, which makes a huge difference when it comes to maintainability and needed team structure. 
   Node, being a JavaScript platform,
    also has a large community, and an easy learning curve. 
  But for businesses, the most important things are: perfect scalability, access to a vast talent pool, and the ability to build real-time,
   high-traffic apps (that can efficiently use cloud architecture).`;

   const IntroductionToMySql=`This SQL course starts with the absolute basic building blocks necessary to communicate effectively with any database.
    You'll learn how to query and manage a database using MySQL. 
   MySQL is a free open-source relational database management system (RDBMS), used by many of the world's largest organizations.
   Each section of the course will focus on a key topic of working with SQL.
    The video lectures have been created so you can follow along as the instructor demonstrates each concept.
     At the end of each section you can test your understanding through a section quiz and exercise. 
   Once you complete a section the next section will build on the topics of the previous section. 
   This encourages your learning as you build upon the knowledge you learn as you move from one section to the next.`;

   const PhotoshopForPhotographer=`If you love to capture amazing views, and moments. But constantly feel something could be improved in your images,
  whether they’re landscapes, cityscapes, portraits, or fashion images. This courses is the best place to be.
  I am Marcin, phtoshop educator, with 6 milion views on my photoshop free educational videos, and over 100 000 students who watched purchased my premium courses. 
  Except that, i am professional internationaly published retoucher and post production arist, working with magazines, tv, websites, fashion designers and top hairdressers. 
  I am here, to explain you photoshop in the easiest possible way. I designed this course as I would explain photoshop to my friend who just want to start adventure with photoshop, and become pro. 
  So i deliver you, all you need to know to become one, i give you tips and techniques that you want to use, and also, save your time by removing useless, 
  tools and techniques that could only teach you wrong habits. 
  In this course - you will learn everything you need about camera row, how to proces and edit your images, how to fix them, and how to give them extra punch.`;


  const HowToCreateALogoWithIllustrator=`This powerful extensive class trains you in all aspects of the logo design process including logo design theory, execution, working with typography, selecting color pallets, 
  preparing and exporting files and how to work with adobe illustrator to create stunning logos.
  Not only that this class teaches you how to work with clients by following several full logo design projects from start to finish. We talk about what type of questions to ask clients before starting your logo design process.
  We also apply our logos to mockups so we can create polished presentations for our portfolio or to the client for approval. We even talk about where to find possible clients by following a step by step process.
  For the theory section of this course we dive into logo design categories and also review all the different logo design styles while showing stellar examples of each.`;

  const PhotoshopMasterClass=`One of Udemy’s highest rated Photoshop courses – by one of the Top 10 Adobe Instructors in the world – this course teaches you to use this industry-leading image editing application as a creative professional. 
  The whole course content, including examples, techniques, exercises and quizzes have been carefully selected and refined to offer the most efficient and enjoyable way to master Adobe Photoshop.
  This course has been purposely designed for users of all experiences, from complete beginners to existing Photoshop users, 
  who want to take their skills to the next level. 
  Being able to confidently work in Photoshop is an essential skill for any Photographer or Graphic Designer, but it is an equally useful tool for Retouchers, UI/UX designers, Web Developers, 
  Digital Artists and various other areas within and outside of the creative industry.
  ‘One of the best courses on Udemy I've taken. It covers both the topic at hand and also how to get certified in it - all in a format that's relaxing and enjoyable. The instructor is impressive. Very knowledgeable man.’`;


  const CanvaForFreelancer=`In this course, I will share with you the complete road map to freelance graphic designing using canva and canva Pro. 
  Learning from how to design graphics to getting clients from canva and then some productivity hacks to get success as a successful freelance graphic designer.
  You will get to know how you can design professional and awesome graphics using canva and canva Pro with Hands-On and practical lectures.
   In which I have shared practical graphic design projects for freelancing including YouTube thumbnail design, infographic design for Pinterest and Instagram,
  logo design for businesses and professionals, t-shirts, 
   and mug designs which fall in the print-on-demand design category, etc.`;

   const BecomeAGraphicDesignerWithCorelDraw=`CorelDRAW is an advanced computer graphic editing software that includes various types of alteration and transformation of images and pages capabilities. 
   The CorelDRAW program is part of the package of Corel Graphics Suite designed by Corel Corporation, which has several versions from the most basic to the most advanced and latest.
   This software is used in fields of graphic arts and communication in order to produce, edit, and transform images to digital level. 
   It is a vector drawing application, layout tools, effects and functions about images and pages and retouching and editing multiple alternatives.`;


const IntroductionToMongoDB=`This course is for total beginners in MongoDB.
Goal of the course is to give you understanding of what is MongoDB, which main features it has and of course try to use those features yourself.
**NOTE** This course has edited by hand English Closed Captions (CC) for all lectures. 
They were also translated to many different languages. Please feel free to enable them in the video player.
You will learn how to perform following actions:`;

const OracleDatabaseForDBA=`Hello there,
Welcome to the Oracle Database Administrator DBA course.
Oracle Database Administration DBA become Oracle Database Administrator, Oracle DBA and get six figures jobs as DBA
This Oracle DBA course is one of the most awesome Udemy courses which teaches step-by-step and follow the methodology in introducing concepts and demos ( Learn by doing ) to the students so that they can learn with ease Oracle Database Administration. 
Oracle dba, dba oracle, oracle 12c dba, oracle dba 12c, oracle 11g dba, oracle cloud dba, oracle dba 11g
Oracle Database is an enterprise database that can handle online transaction processing needs, as well as data warehousing and workloads for enterprise resource planning (ERP). 
Oracle DB was designed to be a flexible way to handle large applications and massive amounts of structured data.`;

const MobileDevelopmentWithReactNative=`Just updated with all new React Native features for 2023! Join a live online community of over 900,000+ developers and a course taught by industry experts that have actually worked both in Silicon Valley and Toronto with React Native.
Using the latest version of React Native, this course is focused on efficiency. 
Never spend time on confusing, out of date, incomplete tutorials anymore, and instead, learn to build professional and modern Android and iPhone (iOS) apps! Graduates of Andrei’s courses are now working at Google, Tesla, Amazon, 
Apple, IBM, JP Morgan, Meta, + other top tech companies.`;

const FrontEndDevelopmentWithAngular=`In this Front-End Web Development - Complete Guide (Step by Step) [Updated 2023] you will learn complete front-end web development from scratch.
As part of the course, You will learn complete HTML5, and CSS3 step by step.
Later you will learn how to use, integrate or add user interactivity with the help of JavaScript. 
This course also covers the latest JavaScript version which is ECMA Script learn the modern JavaScript techniques with ECMA Script 6 or later.`;

const FrontEndDevelopmentWithReact=`In this Front-End Web Development - Complete Guide (Step by Step) [Updated 2023] you will learn complete front-end web development from scratch.
As part of the course, You will learn complete HTML5, and CSS3 step by step.
Later you will learn how to use, integrate or add user interactivity with the help of JavaScript. 
This course also covers the latest JavaScript version which is ECMA Script learn the modern JavaScript techniques with ECMA Script 6 or later.
The next big step would be to learn Bootstrap 5 which is the latest and the most popular CSS framework available. Here you will learn to create 3 Live Projects.
In the 1st project, you will learn to create an EMS Web App also known as Employee Management System.`;

const MasterFlyerCreationWithCanva=`In this course, I will share with you the complete road map to freelance graphic designing using canva and canva Pro. 
Learning from how to design graphics to getting clients from canva and then some productivity hacks to get success as a successful freelance graphic designer.
You will get to know how you can design professional and awesome graphics using canva and canva Pro with Hands-On and practical lectures.
 In which I have shared practical graphic design projects for freelancing including YouTube thumbnail design, infographic design for Pinterest and Instagram,
logo design for businesses and professionals, t-shirts, 
 and mug designs which fall in the print-on-demand design category, etc.`;

 const IntroductionToSqLite=`This course gives you a brief overview of SQLite and the SQLite’s distinctive features that make SQLite  one of the  most widely deployed SQL database engine.
 SQLite is a software library that provides a relational database management system. The lite in SQLite means light weight in terms of setup, database administration, and required resource. 
 SQLite does NOT require a server to run.
 Because of the serverless architecture, you don’t need to “install” SQLite before using it. There is no server process that needs to be configured, started, and stopped. SQLite uses dynamic types for tables. 
 It means you can store any value in any column, regardless of the data type.`;

 const PythonFromScratch=`Welcome to the 100 Days of Code - The Complete Python Pro Bootcamp, 
 the only course you need to learn to code with Python. With over 500,000 5 STAR reviews and a 4.8 average, 
 my courses are some of the HIGHEST RATED courses in the history of Udemy!  
  100 days, 1 hour per day, learn to build 1 project per day, this is how you master Python.
 At 60+ hours, this Python course is without a doubt the most comprehensive Python course available anywhere online. 
 Even if you have zero programming experience, this course will take you from beginner to professional.`;

 const VectorDesignIllustrator=`This is an amazing Graphic Design in Adobe Illustrator CC course.
 Do you want to learn the Essential tools in Adobe illustrator and start drawing like a seasoned graphic designer? Do you want to learn all the essential techniques to create stunning graphic designs?
 Then surely this course is for you. It’s the perfect course to start learning Adobe Illustrator and becoming a top graphic designer.
 I am Louay, Creator of some of best-selling Motion Graphics,  Visual Effects, Video Editing courses.`;






Course.insertMany([
    { name: 'JavaScript For Beginner', description:JavaScriptForBeginner,  category: categories[0], instructor:'Sridevi Malasani',length:'6h10mm',level:'Beginner',cover:'/photos/myphoto.jpg', price: 44.99  },
    { name: 'Java From Scratch',description:JavaFromScratch,  category: categories[0], instructor:'Michael Yang',length:'9h30mm',level:'Intermediate',cover:'/photos/myphoto.jpg', price: 55.99},
    { name: 'Introduction to OOP in Java',description:IntroductionToOOPInJava,  category: categories[0],instructor:'Joseph Lerman',length:'7h30mm',level:'Beginner',cover:'/photos/myphoto.jpg', price: 36.99},
    { name: 'Fullstack Web Developer',description:FullstackWebDeveloper,  category: categories[0], instructor:'Sridevi Malasani',length:'13h40mm',level:'Advanced',cover:'/photos/myphoto.jpg', price: 90.99},
    { name: 'Server Side Programming in Nodejs',description:ServerSideProgrammingInNodejs,  category: categories[0], instructor:'Sridevi Malasani',length:'5h40mm',level:'Intermediate',cover:'/photos/myphoto.jpg', price: 45.99},
    { name: 'Introduction To MySql',description:IntroductionToMySql,  category: categories[2], instructor:'Tacettin Umur Inan',length:'3h30mm',level:'Intermediate',cover:'/photos/myphoto.jpg', price: 41.99},
    { name: 'Photoshop For Photographer',description:PhotoshopForPhotographer,  category: categories[1], instructor:'John Wesley Jean Baptiste',length:'4h39mm',level:'Intermediate',cover:'/photos/myphoto.jpg', price: 49.99},
    { name: 'How to create a logo with Illustrator',description:HowToCreateALogoWithIllustrator,  category: categories[1], instructor:'Louinord Innocent',length:'8h30mm',level:'Intermediate',cover:'/photos/myphoto.jpg', price: 53.99},
    { name: 'Photoshop MasterClass',description:PhotoshopMasterClass,  category: categories[1], instructor:'Louinord Innocent',length:'9h30mm',level:'Intermediate',cover:'/photos/myphoto.jpg', price: 89.99},
    { name: 'Canva For Freelancer',description:CanvaForFreelancer,  category: categories[2], instructor:'John Wesley Jean Baptiste',length:'3h30mm',level:'Intermediate',cover:'/photos/myphoto.jpg', price: 45.99},
    { name: 'Become A Graphic Designer With CorelDraw',description:BecomeAGraphicDesignerWithCorelDraw,  category: categories[1], instructor:'Quelo Sossou',length:'4h30mm',level:'Intermediate',cover:'/photos/myphoto.jpg', price: 54.99},
    { name: 'Introduction To MongoDB',description:IntroductionToMongoDB,  category: categories[2], instructor:'Sridevi Malasani',length:'4h30mm',level:'Intermediate',cover:'/photos/myphoto.jpg', price: 45.99},
    { name: 'Oracle Database For DBA',description:OracleDatabaseForDBA,  category: categories[2], instructor:'Harald Jean Pierre',length:'12h30mm',level:'Advenced',cover:'/photos/myphoto.jpg', price: 89.99},
    { name: 'Mobile Development With React Native',description:MobileDevelopmentWithReactNative,  category: categories[0], instructor:'Robelkend Francois',length:'7h30mm',level:'Intermediate',cover:'/photos/myphoto.jpg', price: 45.99},
    { name: 'Front End Development With Angular',description:FrontEndDevelopmentWithAngular,  category: categories[0], instructor:'Muhyieddin Khaled',length:'5h30mm',level:'Beginner',cover:'/photos/myphoto.jpg', price: 45.99},
    { name: 'Front End Development With React',description:FrontEndDevelopmentWithReact,  category: categories[0], instructor:'Najeeb Najeeb',length:'7h30mm',level:'Beginner',cover:'/photos/myphoto.jpg', price: 45.99},
    { name: 'Master Flyer Creation With Canva',description:MasterFlyerCreationWithCanva,  category: categories[1], instructor:'John Wesley Jean Baptiste',length:'3h30mm',level:'Beginner',cover:'/photos/myphoto.jpg', price: 45.99},
    { name: 'Introduction To SqLite',description:IntroductionToSqLite,  category: categories[2], instructor:'Sridevi Malasani',length:'3h30mm',level:'Beginner',cover:'/photos/myphoto.jpg', price: 45.99},
    { name: 'Python From Scratch',description:PythonFromScratch,  category: categories[0], instructor:'Sridevi Malasani',length:'3h30mm',level:'Beginner',cover:'/photos/myphoto.jpg', price: 45.99},
    { name: 'Vector Design Illustrator',description:VectorDesignIllustrator,  category: categories[1], instructor:'Valery Sossou',length:'3h30mm',level:'Advanced',cover:'/photos/myphoto.jpg', price: 67.99}
     
])


// name: { type: String, required: true },
// description: { type: String, required: true },
// category: { type: String, required: true },
// instructor: { type: String, required: true },
// length: { type: String, required: true },
// level: { type: String, required: true },
// cover: { type: String, required: true },
// price: { type: Number, required: true }


