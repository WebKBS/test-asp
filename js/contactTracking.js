var TrackingUrl = 'https://teratto.io:4431/restapi';

// 클라이언트 사이트에 넣어두는 것은 문제가 될수 있다. 서버 사이드에서 읽어와서 처리해야된다.
var keycode = 'g2p2f';
// 방문자가 로그인 했다면 여기에 값을 넣어서 호출해야 된다
var playercode = '';

function Tracking_MoveScreen(screen) {
  if (screen == '') return;
  fetch(TrackingUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      key: 10,
      KeyCode: keycode,
      PlayerCode: playercode,
      data: Base64.encode(JSON.stringify({ CurrentScreen: screen })),
      Protocol: 1,
    }),
  })
    .then((response) => response.text())
    .then((resultdata) => {
      let jsonData = JSON.parse(Base64.decode(resultdata));
      if (jsonData.success) {
        console.log('_MoveScreen > ' + jsonData.success);
        return '';
      } else {
        let jsonTest = JSON.parse(Base64.decode(jsonData.data));
        console.log('_MoveScreen > ' + jsonTest.ErrorKey + ' > ' + jsonTest.ErrorDetail);
        return jsonTest.ErrorDetail;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

//AddSubscribe('test@naver.com');

function Tracking_AddSubscribe(email) {
  if (email.length < 5) return;
  fetch(TrackingUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      key: 15,
      KeyCode: keycode,
      PlayerCode: playercode,
      data: Base64.encode(JSON.stringify({ Email: email })),
      Protocol: 1,
    }),
  })
    .then((response) => response.text())
    .then((resultdata) => {
      let jsonData = JSON.parse(Base64.decode(resultdata));
      if (jsonData.success) {
        console.log('AddSubscribe > ' + jsonData.success);
        return '';
      } else {
        let jsonTest = JSON.parse(Base64.decode(jsonData.data));
        console.log('AddSubscribe > ' + jsonTest.ErrorKey + ' > ' + jsonTest.ErrorDetail);
        return jsonTest.ErrorDetail;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

//Tracking_AddContact('test@naver.com', 'hi every one', 'eekdro','datwaeffewaata', 'Q&A');

function Tracking_AddContact(email, title, name, contents, contentstype) {
  /* 숫자 정규식 */
  let regPhone = /[0-9]/g;
  /* 이메일 정규식 */
  let emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (name === '') {
    Swal.fire({
      icon: 'error',
      text: 'Please enter your name.',
    });
    return;
  }

  if (!regPhone.exec(title)) {
    Swal.fire({
      icon: 'error',
      text: 'Please re-enter your phone number.',
    });
    document.getElementById('user_phone').value = '';

    return;
  }

  if (email.length < 10 && !emailReg.exec(email)) {
    Swal.fire({
      icon: 'error',
      text: 'Please check the email form.',
    });
    return 'Email Length is too short';
  }

  if (contents.length < 10) {
    Swal.fire({
      icon: 'error',
      text: 'Please write at least 10 characters.',
    });
    return 'contents Length is too short';
  }

  let senddata = Base64.encode(JSON.stringify({ Email: email, Title: title, Name: name, Contents: contents, ContentsType: contentstype }));

  fetch(TrackingUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      key: 16,
      KeyCode: keycode,
      PlayerCode: playercode,
      data: Base64.encode(JSON.stringify({ tContact: senddata })),
      Protocol: 1,
    }),
  })
    .then((response) => response.text())
    .then((resultdata) => {
      let jsonData = JSON.parse(Base64.decode(resultdata));
      if (jsonData.success) {
        console.log('tContact > ' + jsonData.success);
        Swal.fire({
          icon: 'success',
          text: 'transfer complete.',
        });
        document.getElementById('submit_btn').readonly = false;
        document.getElementById('submit_btn').style.backgroundColor = '#ccc';
        return '';
      } else {
        let jsonTest = JSON.parse(Base64.decode(jsonData.data));
        console.log('tContact > ' + jsonTest.ErrorKey + ' > ' + jsonTest.ErrorDetail);
        return jsonTest.ErrorDetail;
      }
    })
    .catch((error) => {
      Swal.fire({
        icon: 'warning',
        text: 'Already sent.',
      });
    });
}

//SendEmail
function Tracking_SendEmail(app_Idx, email, title, contents, emailtype, callbackfn) {
  if (email.length < 10) {
    console.log('Email format does not match.');
    callbackfn('Email format does not match.');
    return;
  }
  if (contents.length < 10) {
    console.log('contents Length is too short');
    callbackfn('contents Length is too short');
    return;
  }

  let senddata = Base64.encode(JSON.stringify({ App_Idx: app_Idx, Email: email, Title: title, Contents: contents, MailType: emailtype }));
  senddata = Base64.encode(JSON.stringify({ tSendMail: senddata }));

  alert(senddata);

  fetch(TrackingUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      key: 17,
      KeyCode: keycode,
      PlayerCode: playercode,
      data: senddata,
      Protocol: 1,
    }),
  })
    .then((response) => response.text())
    .then((resultdata) => {
      let jsonData = JSON.parse(Base64.decode(resultdata));
      if (jsonData.success) {
        console.log('tSendMail > ' + jsonData.success);
        if (callbackfn != null) callbackfn('');
      } else {
        let jsonTest = JSON.parse(Base64.decode(jsonData.data));
        console.log('tSendMail > ' + jsonTest.ErrorKey + ' > ' + jsonTest.ErrorDetail);
        if (callbackfn != null) callbackfn(jsonTest.ErrorDetail);
      }
    })
    .catch((error) => {
      console.log(error);
      if (callbackfn != null) callbackfn(error);
    });
}

//SendEmail
function Tracking_SendEmail2(app_Idx, email, title, contents, emailtype, callbackfn) {
  if (email.length < 10) {
    console.log('Email format does not match.');
    callbackfn('Email format does not match.');
    return;
  }
  if (contents.length < 10) {
    console.log('contents Length is too short');
    callbackfn('contents Length is too short');
    return;
  }

  let senddata = Base64.encode(JSON.stringify({ App_Idx: app_Idx, Email: email, Title: title, Contents: Base64.encode(contents), MailType: emailtype }));
  (senddata = Base64.encode(JSON.stringify({ tSendMail: senddata }))), alert(senddata);

  $.ajax({
    url: TrackingUrl,
    type: 'post',
    dataType: 'json',
    data: {
      key: 17,
      KeyCode: keycode,
      PlayerCode: playercode,
      Protocol: 1,
    },
    success: function (data) {
      alert('??');
      let jsonData = JSON.parse(Base64.decode(data));
      if (jsonData.success) {
        console.log('tSendMail > ' + jsonData.success);
        if (callbackfn != null) callbackfn('');
      } else {
        let jsonTest = JSON.parse(Base64.decode(jsonData.data));
        console.log('tSendMail > ' + jsonTest.ErrorKey + ' > ' + jsonTest.ErrorDetail);
        if (callbackfn != null) callbackfn(jsonTest.ErrorDetail);
      }
    },
    error: function (error) {
      UnLockScreen();
      swal('Error', 'Data Exception', 'error');
    },
  });
}
