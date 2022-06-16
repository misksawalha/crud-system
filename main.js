var courseNameInput=document.getElementById('courseName');
var courseCategoryInput=document.getElementById('courseCategory');
var coursePriceInput=document.getElementById('coursePrice');
var courseDescriptionInput=document.getElementById('courseDescription');
var nameAlert=document.getElementById('nameAlert');
var onBtn=document.getElementById('click');

var deleteBtn=document.getElementById('deleteAll');

var data=document.getElementById('data');

var inputs=document.getElementsByClassName('inputs');

var nameAlert=document.getElementById('nameAlert');
var currentIndex=0;

if(localStorage.getItem("courseList")==null){
    var courses=[];
}
else{
   var courses=JSON.parse(localStorage.getItem("courseList"));
    displayData();
}

// console.log(test);
 //console.log(inputs);


onBtn.onclick=function(){
   if(onBtn.innerHTML=="Add Course"){addData();}
   else{
    updateCourse();
   }
   displayData();
   clearForm();
//    deleteCourse();
}
   function addData(){
    var course = {
        name:courseNameInput.value,
        Category:courseCategoryInput.value,
        Price:coursePriceInput.value,
        Description:courseDescriptionInput.value
    }
    courses.push(course);
    localStorage.setItem("courseList",JSON.stringify(courses));
 
   }
   function displayData(){
    var result="";
   for(var i=0;i<courses.length;i++){

      result+=
      `<tr>
      <td>${i} </td>
      <td>${courses[i].name}</td>
      <td>${courses[i].Category}</td>
      <td>${courses[i].Price}</td>
      <td>${courses[i].Description}</td>
      <td><button class="update btn btn-primary text-white" onclick="getData(${i})">Update</button></td>
      <td><button class="delete btn btn-danger text-white" onclick="deleteCourse(${i})">Delete</button></td> 

      </tr>
      `;
    
   }

   data.innerHTML=result;
   }
   function clearForm(){
       for(var i=0;i<inputs.length;i++){
           inputs[i].value="";
       }
    }
function deleteCourse(index){
 courses.splice(index,1);
 localStorage.setItem("courseList",JSON.stringify(courses));
 displayData();

}
 deleteBtn.onclick=function(){
  localStorage.removeItem("courseList");
  courses=[];
  data.innerHTML="";
 }
 function search(value){

    var result="";

      for(var i=0;i<courses.length;i++){
       if(courses[i].name.toLowerCase().includes(value.toLowerCase())){
      result+=
      `<tr>
      <td>${i} </td>
      <td>${courses[i].name}</td>
      <td>${courses[i].Category}</td>
      <td>${courses[i].Price}</td>
      <td>${courses[i].Description}</td>
      <td><button class="update " onclick="updateCourse()">Update</button></td>
      <td><button class="delete " onclick="deleteCourse(${i})">Delete</button></td> 

      </tr>
      `;
       }
   }

   data.innerHTML=result;
   
 }
 function getData(index) {
    var course=courses[index];
    courseNameInput.value=course.name;
    courseCategoryInput.value=course.Category;
    coursePriceInput.value=course.Price;
    courseDescriptionInput.value=course.Description;
    onBtn.innerHTML="update";
    currentIndex=index;
    console.log(course);
 }
 function updateCourse(){
    var course = {
        name:courseNameInput.value,
        Category:courseCategoryInput.value,
        Price:coursePriceInput.value,
        Description:courseDescriptionInput.value
    };
    courses[currentIndex].name=course.name,
    courses[currentIndex].Category=course.Category,
    courses[currentIndex].Price=course.Price,
    courses[currentIndex].Description=course.Description;
    
    localStorage.setItem("courseList",JSON.stringify(courses));
    onBtn.innerHTML="Add Course";
 }
 courseName.onkeyup=function (){
     var namePattern=/^[A-Z][a-z]{2,8}$/;
     if(namePattern.test(courseName.value)){
         onBtn.removeAttribute("disabled");
         courseName.classList.add('is-valid');
         courseName.classList.remove('is-invalid');
         nameAlert.classList.add('d-none');
     }
     else{
        nameAlert.classList.remove('d-none');
       onBtn.disabled=true;
       courseName.classList.remove('is-valid');
        courseName.classList.add('is-invalid');
       
     }
 }
//  courseName.onkeyup=function (){
//   var namePattern= /^[A-Z][a-z]{2,8}$/;
//   if(namePattern.test(courseName.value)){
          
//          onBtn.removeAttribute("disabled");  //to make the btn enable to click
//          courseName.classList.add('is-valid');
//          courseName.classList.remove('is-invalid');
//          nameAlert.classList.add('d-none');
//   }
//   else{
//     courseName.classList.add('is-invalid'); 
//     courseName.classList.remove('is-valid');
//     nameAlert.classList.remove('d-none');
//   }
//  }

//  var pattern=/^[a-z]/;
//  var n="202";
//  console.log(pattern.test(n));
/* */