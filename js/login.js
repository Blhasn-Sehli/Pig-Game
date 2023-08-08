
var name1=$('#name1')
var name2=$('#name2')
$("#go--btn").click(function () {
    if(name1.val()!==""&&name2.val()!==''){

        localStorage.setItem("item",JSON.stringify([name1.val(),name2.val()])) 
        document.querySelector("#name1").value=""
        document.querySelector("#name2").value=""
        $(location).attr('href',"index.html")
    }else{
        alert("No")
    }
})

