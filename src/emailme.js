async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

function sendForm(URL, token) {
  let formToSend = document.getElementById("choose_form");
  let formFields = formToSend.getElementsByTagName("input");
  let template_params = {};

  for (let inputField in formFields) {
    template_params[formFields[inputField].name] = formFields[inputField].value;
  }
  postData(URL + token, [template_params]);
}

function send(URL, token, template_params = {}) {
  postData(URL + token, [template_params]);
}

const URL = 'http://127.0.0.1/api/send/mail/';

function init(token) {
  sendForm(URL, token);
}

function advanced(token, formFieldsArray) {
  send(URL, token, formFieldsArray);
}
