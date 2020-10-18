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

// var myForm = document.getElementById('myForm');
// let formData = new FormData(myForm); // new FormData(document.getElementById('myForm'));

// var xhr = new XMLHttpRequest();

// xhr.open("POST", "http://localhost:8000");  
// xhr.send(formData);


var formData1 = new FormData();
formData1.append('menu1', 'chicken');
formData1.append('menu1', 'pickle');
formData1.append('menu2', 'bbq');

formData1.has('menu1'); // true
formData1.getAll('menu1'); // ['chicken', 'pickle']
formData1.delete('menu2');
formData1.set('menu2', 'steak');

let keys=formData1.keys();
keys.next(); // { done: false, value: 'menu1' }
keys.next(); // { done: false, value: 'menu1' }
keys.next(); // { done: false, value: 'menu2' }
keys.next(); // { done: true, value: undefined }

let values=formData1.values()
values.next(); // { done: false, value: 'chicken' }
values.next(); // { done: false, value: 'pickle' }
values.next(); // { done: false, value: 'steak' }
values.next(); // { done: true, value: undefined }

let entries=formData1.entries();
entries.next(); // { done: false, value: ['menu1', 'chicken'] }
entries.next(); // { done: false, value: ['menu1', 'pickle'] }
entries.next(); // { done: false, value: ['menu2', 'steak'] }
entries.next(); // { done: true, value: undefined }