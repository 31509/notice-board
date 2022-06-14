window.addEventListener("load", function(){
//  아래 배열을 테이블로 만들어 줌
    var notices = [
        {"id":1, "title":"어린왕자", "writerId":"생텍쥐페리", "regDate":"1943-04-06"},
        {"id":2, "title":"반지의 제왕", "writerId":"J. R. R. 톨킨", "regDate":"1954-07-29"},
        {"id":3, "title":"해리 포터", "writerId":"J. K. 롤링", "regDate":"1997-06-26"},
        {"id":4, "title":"페스트", "writerId":"알베르 카뮈", "regDate":"1947-05-24"}
    ];

    var section = document.querySelector("#section");

    var noticeBoard = section.querySelector(".notice-board");
    var tbodyNode = noticeBoard.querySelector("tbody");

    var bindData = function(){
        var template = section.querySelector("template");

        for (var i=0; i<notices.length; i++) {
            var cloneNode = document.importNode(template.content, true);
            var tds = cloneNode.querySelectorAll("td");
            tds[0].textContent = notices[i].id;
            
            // var aNode = tds[1].children[0];
            // aNode.href = notices[i].id;
            tds[1].children[0].textContent = notices[i].title;

            tds[2].textContent = notices[i].writerId;
            tds[3].textContent = notices[i].regDate;

            tbodyNode.appendChild(cloneNode);
        }
    };

    bindData();

//  작성한 글을 게시판 목록에 저장
    document.getElementById('btnAdd').addEventListener('click', addList);
    function addList(){
        var titles = document.querySelector('.newTitle');
        var users = document.querySelector('.newUser');
        var date = document.querySelector('.newDate');

        // var tr = document.createElement('tr');
        // var input = document.createElement('input');

        // var td01 = document.createElement('td');
        // td01.textContent = notices[notices.length.id + 1];
        // tr.appendChild(td02);

        notices = notices.push({"id":notices.length+1, "title":titles, "writerId":users, "regDate": date});
        window.location.href="index.html";
    }

//  작성한 글의 제목을 클릭하면 불러옴
    var listContents = [
        {"title":"어린왕자", "writerId":"생텍쥐페리", "regDate":"1943-04-06", "contents":"사하라 사막에 불시착한 조종사가 자기의 작은 별에서 여러 별들을 거쳐서 드디어 지상에 내려온 소년의 이야기를 듣고 결국 소년이 뱀에게 물려 자신의 별로 돌아갈 때까지의 이야기이다."},
        {"title":"반지의 제왕", "writerId":"J. R. R. 톨킨", "regDate":"1954-07-29", "contents":"샤이어에 살고 있는 부유한 호빗 프로도는 삼촌 빌보로부터 물려받은 반지가 보통 반지가 아니라는 것을 현자 간달프에게 듣게 된다. 반지는 옛날 옛적에 악마 사우론이 만든 사악한 물건으로 샤이어에 있으면 안되는 물건이었다. 그래서 반지를 파괴하기 위한 원정대가 구성된다."},
        {"title":"해리 포터", "writerId":"J. K. 롤링", "regDate":"1997-06-26", "contents":"작은 체구에 갸름한 얼굴을 하고 까만 머리와 초록빛 눈을 가진 소년인 해리 포터는 이마에 번개 모양의 흉터가 있고 헐렁한 헌옷과 낡은 안경을 끼고 다닌다. 해리는 자신이 마법사라는 사실도 모른 채 더즐리 가족의 집에 맡겨져 온갖 멸시, 학대, 모욕을 당하며 계단 밑 벽장에서 불우한 삶을 살아간다. 그러다 루베우스 해그리드에게 입학 편지를 받게되고 해리는 호그와트라는 마법 학교에 입학하여 마법에 대해서 배우게 되는데."},
        {"title":"페스트", "writerId":"알베르 카뮈", "regDate":"1947-05-24", "contents":"제2차 세계 대전의 전운이 감돌던 1940년대 프랑스령 알제리 북부 해안의 작은 도시 오랑에서 갑작스럽게 페스트가 발생하고, 그에 따라 외부와 격리 조치가 취해지면서 오랑 시는 외부와 단절되고 시민들은 고립된다. 그렇게 외부로부터 고립된 채 하루에도 수십, 수백 명씩 사람들이 죽어 나가는 막장 상황이 1년 동안 지속되면서 드러나게 되는 인간 존재의 실존을 철학적으로 다뤘다."}
    ];
    
    var section2 = document.querySelector("#section2")
});