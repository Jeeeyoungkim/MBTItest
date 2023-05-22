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
  Kakao.Share.sendScrap({
    requestUrl: "https://jocular-kulfi-3929a7.netlify.app",
  });
}
