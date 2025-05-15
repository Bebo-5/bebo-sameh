create table department (
    departmentid int primary key,
    departmentname varchar(100)
);
create table staff (
    staffid int primary key ,
    firstname varchar(50),
    lastname varchar(50),
    phone varchar(20),
    email varchar(100),
    position varchar(50),
    departmentid int,
    foreign key (departmentid) references department(departmentid)
);
create table students (
    studentid int primary key,
    firstname varchar(50),
    lastname varchar(50),
    phone varchar(20),
    email varchar(100),
    gender varchar(10),
    age int,
    classplaceid int
);
create table teachers (
    teacherid int primary key,
    firstname varchar(50),
    lastname varchar(50),
    phone varchar(20),
    email varchar(100),
    subspecialty varchar(100),
    staffid int,
    foreign key (staffid) references staff(staffid)
);
create table classplace (
    classplaceid int primary key,
    capacity int,
    buildingname varchar(100),
    roomnumber varchar(20)
);
create table administrators (
    adminid int primary key,
    firstname varchar(50),
    lastname varchar(50),
    email varchar(100),
    officelocation varchar(100),
    role varchar(50),
    staffid int,
    classplaceid int,
    foreign key (staffid) references staff(staffid),
    foreign key (classplaceid) references classplace(classplaceid)
);

insert into department (departmentid,departmentname) values
(1,'computer science'),
(2,'mathematics'),
(3,'physics'),
(4,'biology'),
(5,'chemistry'),
(6,'engineering'),
(7,'english'),
(8,'history'),
(9,'art'),
(10,'economics');

insert into staff (staffid, firstname, lastname, phone, email, position, department_id) values
(1,'abanoub','sameh','123456789','abanoub@email.com','professor',1),
(2,'abanoub','hany','123456780','abanoub@email.com','lecturer',2),
(3,'kero','gamal','123456781','kero@email.com','lab assistant',3),
(4,'ahmed','maher','123456782','ahmed@email.com','technician',4),
(5,'ahmed','esam','123456783','ahmed@email.com','professor',5),
(6,'boushra','saied','123456784','boushra@email.com','admin',6),
(7,'hussien','barkat','123456785','hussien@email.com','coordinator',7),
(8,'hossam','mostafa','123456786','hossam@email.com','professor',8),
(9,'felo','gergess','123456787','felo@email.com','lecturer',9),
(10,'marco','maged','123456788','marco@email.com','technician',10);

insert into students (studentid, firstname, lastname, phone, email, gender, age, class_place_id) values
(1,'mohammed','ali','123456789','mohammed@email.com','male',20,1),
(2,'aisha','salem','123456789','aisha@email.com','female',21,2),
(3,'yousef','omar','123456789','yousef@email.com','male',22,3),
(4,'layla','kareem','123456789','layla@email.com','female',20,4),
(5,'nour','ibrahim','123456789','nour@email.com','female',19,5),
(6,'huda','sami','123456789','huda@email.com','female',21,6),
(7,'salman','majid','123456789','salman@email.com','male',23,7),
(8,'dana','hassan','123456789','dana@email.com','female',22,8),
(9,'badr','saad','123456789','badr@email.com','male',21,9),
(10,'reem','faisal','123456789','reem@email.com','female',20,10);

insert into classplace (classplaceid,capacity,buildingname,roomnumber) values
(1,30,'building a','101'),
(2,25,'building a','102'),
(3,20,'building b','201'),
(4,35,'building b','202'),
(5,40,'building c','301'),
(6,30,'building c','302'),
(7,45,'building d','401'),
(8,50,'building d','402'),
(9,30,'building e','501'),
(10,60,'building e','502');

insert into teachers (teacherid,firstname,lastname,phone,email,subspecialty,staffid) values
(1,'majed','amin','01205799458','majed@email.com','networks',1),
(2,'rawan','othman','01205799458','rawan@email.com','algebra',2),
(3,'hussein','fayez','01205799458','hussein@email.com','quantum physics',3),
(4,'nada','salem','01205799458','nada@email.com','genetics',4),
(5,'faisal','ziad','01205799458','faisal@email.com','organic chemistry',5);

insert into administrators (adminid,firstname,lastname,email,officelocation,role,staffid,classplaceid) values
(1,'sami','tariq','sami@email.com','building a- room 100','registrar',6,1),
(2,'hanan','ali','hanan@email.com','building b- room 200','coordinator',7,2),
(3,'fadi','nabil','fadi@email.com','building c- room 300','manager',8,3);

SELECT firstname, lastname, email FROM students;

SELECT firstname, lastname, subspecialty FROM teachers;

SELECT * FROM classplace WHERE capacity > 30;

SELECT t.firstname, t.lastname, d.departmentname
FROM teachers t
JOIN staff s ON t.staffid = s.staffid
JOIN department d ON s.departmentid = d.departmentid;

SELECT s.firstname, s.lastname, c.buildingname, c.roomnumber
FROM students s
JOIN classplace c ON s.classplaceid = c.classplaceid;

SELECT a.firstname, a.lastname, c.roomnumber
FROM administrators a
JOIN classplace c ON a.classplaceid = c.classplaceid;

SELECT gender, COUNT(*) AS count FROM students GROUP BY gender;

SELECT AVG(age) AS average_age FROM students;