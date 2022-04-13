// The following exercise is a mock version of your mid term assessment. Follow the instructions carefully!

// Exercise One: Classes and Constructors 
// Estimated completion time: 30 minutes
// Total: 100 Marks


var username = "TimTomTucker";
var first = "Timothy";
var last = "Tuckerberg";
var email = "timtuckerberg@medinc.com";
var patient = true; 
var doctor = false; 
var adminStaff = false; 

function updateRole(pat,doc,admin){
     patient = pat;
     doctor = doc;
     adminStaff = admin;
}


// 1. Create a super class for the users of a Medical Appointment Booking site. Use the following procedural code as a starting point. [40]
//      1.1 Using Abstraction, ensure that the updateRole method is set to private!   

class Booking {
     constructor(username, first, last, email,patient,doctor,adminStaff){
          this.username= "TimTomTucker";
          this.first= "Timothy";
          this.last= "Tuckerberg";
          this.email= "timtuckerberg@medinc.com";
          this.patient= true;
          this.doctor= false;
          this.adminStaff= false;


          //makes it private
          let updateRole = function(pat,doc,admin){
               let patient = pat;
               let doctor = doc;
               let adminStaff = admin;
}


     }
    

    
}



// 2. Create a sub-class that inherits from the super class called Doctors [40]
//      2.1 Using the super function, inherit all properties from the super class
//      2.2 Automatically assign TRUE to the doctor property, and false to AdminStaff and Patient property
//      2.3 Create a new public METHOD called 'assignSpecialty', this method should add the property 'specialization' and take 1 parameter which will be the specialization.   
//      2.4 Create a new public METHOD called 'workstatus', this should add the property 'status' and should take 1 BOOLEAN parameter which indicates if the doctor is on duty or not.


class Doctors extends Booking{
     super(doctor, adminStaff, patient);
     doctor = true;
     adminStaff = false;
     patient= false;

     assignSpecialty(specialization){
          this.specialization = this.specialization;
     }

     workstatus(status){
          
          this.status = this.status;
     }


}

let Doctor = new Doctors(); 
Doctor.assignSpecialty();
// 3. Create a Sub-Class of Doctors called MedInterns [20]
//      3.1 Using the super function, inherit all properties from the Super class
//      3.2 Automatically assign False to the Doctor, AdminStaff and Patient property
//      3.3 Create a new public METHOD called 'assignDoctor', this method should add the property 'assDoc' and take 1 parameter which will be the Doctor the intern is assigned to.  

class MedInterns extends Doctors{
     super(doctor, adminStaff, patient);
     doctor = false;
     adminStaff = false;
     patient = false;

     assignDoctor(assDoc){
          this.assDoc = assDoc;
     }


}

assignDoctor(assDoc());
