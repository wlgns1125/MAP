
(function sendValue() {

    let btn = document.querySelector("#btn")
    btn.addEventListener("click",function() {

    console.log("hi")

        var custom_id = document.getElementById("new_id").value;
        var name = document.getElementById("new_name").value;
        var modem_number= document.getElementById("new_mdNum").value;
    
        var address = document.getElementById("new_addr").value;
    
        var administrative_dong = document.getElementById("new_dong").value;
        var lat= document.getElementById("new_lat").value;
        var lon = document.getElementById("new_lon").value;
        var installation_datetime = document.getElementById("new_installDate").value;
        var memo = document.getElementById("memo").value;
    
        
    
    
        // [요청 url 선언]
    var reqURL = "http://127.0.0.1:23000/boards"; // 요청 주소
    
    
    // [요청 json 데이터 선언]
    var jsonData = { // Body에 첨부할 json 데이터
        "custom_id" : custom_id,
        "name" : name,
        "modem_number" : modem_number,
        "address" :address ,
        "administrative_dong" : administrative_dong,
        "lat" : lat,
        "lon" : lon,
        "installation_datetime" : installation_datetime,
        "memo" : memo
        };  
    
    console.log("");
    console.log("[requestPostBodyJson] : [request url] : " + reqURL);
    console.log("[requestPostBodyJson] : [request data] : " + JSON.stringify(jsonData));
    console.log("[requestPostBodyJson] : [request method] : " + "POST BODY JSON");
    console.log("");
    
    $.ajax({
        // [요청 시작 부분]
        url: reqURL, //주소
        data: JSON.stringify(jsonData), //전송 데이터
        type: "POST", //전송 타입
        async: true, //비동기 여부
        timeout: 5000, //타임 아웃 설정
        dataType: "JSON", //응답받을 데이터 타입 (XML,JSON,TEXT,HTML,JSONP)    			
        contentType: "application/json; charset=utf-8", //헤더의 Content-Type을 설정
                        
        // [응답 확인 부분 - json 데이터를 받습니다]
        success: function(response) {
            alert("성공적으로 보냈습니다!")
            opener.location.reload();
            window.close();
        },
                        
        // [에러 확인 부분]
        error: function(xhr) {
            alert("에러가 났습니다!")			
        },
                        
        // [완료 확인 부분]
        complete:function(data,textStatus) {
            console.log("");
            console.log("[requestPostBodyJson] : [complete] : " + textStatus);
            console.log("");    				
        }
        });		
    })
    

})();


// sendValue();
