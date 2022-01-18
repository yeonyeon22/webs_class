//결과보기 버튼을 클릭하면 경고창을 띄워주세요~
document.querySelector(".result").addEventListener("click", function(){
    alert("ddd")
});

//다른 방법으로 식 표현하기//
//document.querySelector(".result").addEventListener("click", () => {});//

document.querySelectorAll(".result").forEach(function(el){
    el.addEventListener("click", function(){
        alert("ddd")
    });
})