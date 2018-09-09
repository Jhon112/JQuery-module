var st = document.getElementById("students-template").innerHTML;
var template = Handlebars.compile(st);

// var studentList = $.ajax({
//     method: "GET",
//     url: "https://test-bootcamp-1524773485979.firebaseio.com/jhon/students.json"
// })

// studentList. 
// $(".students").append()

$("form").submit(function (e) {
    e.preventDefault();

    var student = {
        name: $("input[name='name']").val(),
        age: $("input[name='age']").val(),
        email: $("input[name='email']").val()
    };
    
    var students = JSON.stringify(student);

    var request = $.ajax({
        method: "POST",
        url: "https://test-bootcamp-1524773485979.firebaseio.com/jhon/students.json",
        data: students,
        contentType: "application/json"
    });

    request.done(function () {
        var requestStudents = $.ajax({
            method: "GET",
            url: "https://test-bootcamp-1524773485979.firebaseio.com/jhon/students.json",
        })

        requestStudents.done(function (data) {
            var students = [];
            $.each(data, function (key, value) {
                {
                    var student = {
                        name: value.name,
                        age: value.age,
                        email: value.email
                    };
                    students.push(student);
                }
            })
            console.log(students);
            var html = template({ students });
            $('.students').html(html);
        })      
    })
})



