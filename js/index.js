var num = 1;

//메인에서 문제로 넘어가는 함수
function start() {
  $("#main").hide();
  $("#qna").show();
  next();
}

//버튼 클릭시 점수 계산
$("#A").click(function () {
  var type = $("#type").val();
  var preValue = $("#" + type).val();
  $("#" + type).val(parseInt(preValue) + 1);
  next();
});
$("#B").click(function () {
  next();
});

// 버튼 클릭시 발생하는 이벤트
function next() {
  if (num == 13) {
    //결과 계산
    $("#qna").hide();
    $("#result").show();

    var mbti = "";
    $("#EI").val() < 2 ? (mbti += "I") : (mbti += "E");
    $("#SN").val() < 2 ? (mbti += "N") : (mbti += "S");
    $("#TF").val() < 2 ? (mbti += "F") : (mbti += "T");
    $("#JP").val() < 2 ? (mbti += "P") : (mbti += "J");

    console.log(mbti);
    $(".subtitle").html(result[mbti]["subtitle"]);
    $(".explain").html(result[mbti]["explain"]);
    $("#result_img").attr("src", result[mbti]["img"]);
  } else {
    $(".progressBar").attr("style", "width: calc(100 / 12 * " + num + "%)");
    $("#title").html(q[num]["title"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    num++;
  }
}

//URL 복사 기능 - 구글링
function shareURL() {
  const dummy = document.createElement("textarea");
  document.body.appendChild(dummy);

  const url = window.document.location.href;
  dummy.value = url;

  navigator.clipboard
    .writeText(dummy.value)
    .then(() => {
      alert("복사가 완료되었습니다");
    })
    .catch((err) => {
      console.log("err:", err);
    });

  document.body.removeChild(dummy);
}

//카카오톡으로 공유하기

function shareMessage() {
  Kakao.Share.sendDefault({
    objectType: "text",
    text: "기본 템플릿으로 제공되는 텍스트 템플릿은 텍스트를 최대 200자까지 표시할 수 있습니다. 텍스트 템플릿은 텍스트 영역과 하나의 기본 버튼을 가집니다. 임의의 버튼을 설정할 수도 있습니다. 여러 장의 이미지, 프로필 정보 등 보다 확장된 형태의 카카오톡 공유는 다른 템플릿을 이용해 보낼 수 있습니다.",
    link: {
      // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
      mobileWebUrl: "https://main--jocular-kulfi-3929a7.netlify.app",
      webUrl: "https://main--jocular-kulfi-3929a7.netlify.app",
    },
  });
}
