// Reference : https://developer.mozilla.org/ko/docs/Web/API/FormData/FormData

{/* <form id="myForm" name="myForm">
  <div>
    <label for="username">Enter name:</label>
    <input type="text" id="username" name="username">
  </div>
  <div>
    <label for="useracc">Enter account number:</label>
    <input type="text" id="useracc" name="useracc">
  </div>
  <div>
    <label for="userfile">Upload file:</label>
    <input type="file" id="userfile" name="userfile">
  </div>
<input type="submit" value="Submit!">
</form> */}

var myForm = document.getElementById('myForm');
let formData = new FormData(myForm);

var xhr = new XMLHttpRequest();

xhr.open("POST", "http://localhost:8000");  
xhr.send(formData);