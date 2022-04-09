const items = [
    {
        name:"PROG1000",
        title:"Career Planning",
        hours:"30.00",
        modules:"7",
        prereq:"NA",
        desc: "This course assesses student strengths and weaknesses to determine the best career fit in the technology field and provides training for students to build quality resumes and cover letters as well as guidance in applying for jobs and participating in practice interviews.",
        req: "This course has an online book that is interactive.",
        ov:"This course will give a few modules that will allow you to have an idea of what companies will be looking for as well as learning some new communication and interviewing skills."    
    },
    {
        name:"PROG1015",
        title:"Intro to Programming",
        hours:"30.00",
        modules:"5",
        prereq:"NA",
        desc: "This course is designed as an introduction to programming for the students who have no or very little programming knowledge and experience. ",
        req: "There are no major requirments for this class. Most information needed will be given to you throughout the course via videos.",
        ov:"You will go through the very basic concepts of programming. These may include, variables, variable types, loops, and methods."      
    },
    {
        name:"PROG1070",
        title:"Structured Project I",
        hours:"60.00",
        modules:"6",
        prereq:"NA",
        desc:"This course is designed to teach students programming syntax, design, thinking skills, troubleshooting techniques, and tools, while simulating industry by hands on exposure to the full lifecycle of a Software Developer. This course will provide students an opportunity to build a project as they learn syntax, concepts, tools, and techniques. This course starts from design and ends with a deep dive into methods.",
        req: "This course requires a book from the bookstore that teaches you C#. Please have this book within 7 days of the course enrollment.",
        ov:"You will have 6 modules that will go from a basic method to learning the way an inventory system will work"      
    },
    {
        name:"MATH1043",
        title:"Math for Software Technology",
        hours:"30.00",
        modules:"2",
        prereq:"NA",
        desc:"The purpose of this course is to teach students the essential concepts of mathematics including algebra that Software Developers use. Using the skills developed through this course students will be able to face the logical and mathematical challenges that programming represents.Objectives Gain practical mathematical knowledge, Build the foundation skills necessary for programming.",
        req: "Math Text book",
        ov:"NA"      
    },
    {
        name:"PROG1075",
        title:"Structured Project II",
        hours:"60.00",
        modules:"6",
        prereq:"Structured Project I",
        desc:"This course is designed to teach students programing syntax, design, thinking skills, troubleshooting techniques, and tools, while simulating industry by hands on exposure to the full lifecycle of Software Development. This course will provide students an opportunity to build a project as they learn syntax, concepts, tools, and techniques, This course starts from design and ends with a deep dive into methods.",
        req: "This course requires a book from the bookstore that teaches you C#. Please have this book within 7 days of the course enrollment.",
        ov:"You will have 6 modules that will go from a basic method to learning the way an inventory system will work"     
    },
    {
        name:"PROG1001",
        title:"Foundations of Computer Science",
        hours:"120.00",
        modules:"54",
        prereq:"INSTR APP",
        desc:"This course provides the students with a solid understanding in many computer science topics that have industry applications. Students will learn concepts such as ethical issues in computing, networks, operating systems, databases, problem solving and programming. This course will provide a background in basic computing along with many other foundation skills. Objectives: Build a foundational level of understanding in these areas: History and Social Implications of Computing, Computing Security and Ethics, Computer Architecture, Networks, The Internet, Database Fundamentals, Numbering Systems and Data Representations, Data Structures, Operating Systems, File Structures, The Human-Computer Interface, Problem Solving and Debugging, Software Engineering",
        req: "Foundations of Computer Science Text book.",
        ov:"NA"      
    },
    {
        name:"PROG1080",
        title:"Structured Project III",
        hours:"90.00",
        modules:"8",
        prereq:"Structured Project II",
        desc:"This course is designed to build on the skills presented in the previous project course and will expand students’ knowledge in programming by exploring design, thinking skills, troubleshooting techniques, and tools, while simulating industry through hands on exposure to the full lifecycle of Software Development. This course will provide students an opportunity to build a project as they learn syntax, concepts, tools, and techniques. This course covers basic user interfaces and end with searching and sorting. ",
        req: "This course requires a book from the bookstore that teaches you C#. Please have this book within 7 days of the course enrollment.",
        ov:"You will have 8 modules that will go from a basic method to learning the way an inventory system will work"      
    },
    {
        name:"PROG1501",
        title:"SQL",
        hours:"120.00",
        modules:"24",
        prereq:"PROG1011,INSTR APP",
        desc:"This course is designed to give users an understanding of the SQL language using Oracle’s SQL Developer tools. The course covers SQL commands for DML (data manipulation language), DDL (data definition language), and Query operations. The course topics are valid to all versions of Oracle through Oracle 12g. The SQL techniques can be applied to other database environments. Competencies: Ability to normalize a database to third form, Understand relational database theory and concepts, Demonstrate skill in the basics of the SQL language, Become proficient in formulating SQL queries, Understand Oracle’s SQL Developer tools, Ability to use DML (insert, update, and delete) and DDL (create, alter, and drop), Know and apply SQL programming techniques to retrieve desired data and write advanced queries",
        req: "Oracle SQL text book",
        ov:""      
    },
    {
        name:"PROG1085",
        title:"Structured Project IV",
        hours:"90.00",
        modules:"7",
        prereq:"Structured Project III",
        desc:"This course is designed to build on the skills presented in the previous project course and will expand students' knowledge in programming by exploring design, thinking skills, troubleshooting techniques, and tools, while simulating industry through hands on exposure to the full lifecycle of Software Development. This course will provide students an opportunity to build a project as they learn syntax, concepts, tools and techniques. This course covers custom lined data structures and ends with asynchronous programming.",
        req: "This course requires a book from the bookstore that teaches you C#. Please have this book within 7 days of the course enrollment.",
        ov:"You will have 7 modules that will go from a basic method to learning the way an inventory system will work"     
    },
    {
        name:"PROG1060",
        title:"Software Technology Capstone Project",
        hours:"60.00",
        modules:"7",
        prereq:"NA",
        desc:"This course provides an opportunity to complete a significant programming project from the design phase through implementation with minimal instructor support. Emphasis is placed on project definition, testing, presentation, and implementation. Upon completion, students should be able to complete a project from the definition phase through implementation. Objectives: Gain practical experience by working on projects, Build up your portfolio, Challenge yourself and expand your skills",
        req: "",
        ov:""      
    },
    {
        name:"PROG1090",
        title:"Job Prep",
        hours:"30.00",
        modules:"5",
        prereq:"NA",
        desc:"This course allows for students to develop the skills and tools necessary to prepare for entry into the job search as well as providing opportunities to participate in a realistic practice interview and job search refresher.",
        req: "",
        ov:""      
    }
]
export default items