function hometownPrint(person) {
    console.log(person.hometown);
  }
  
  
  function HtmlTransformer(array) {
  
    let ul=document.createElement('ul')
  
    for(i=0 ; i<array.length ; i++){
    let li=document.createElement('li')
    let usera=document.createElement('a')
    usera.className='name'
    let userdiv=document.createElement('div')
    userdiv.className='age'
  
    usera.textContent=array[i].firstName+' '+array[i].lastName
    userdiv.textContent=array[i].age
    
    let pass=array[i]
  
    usera.onclick=function(){
      hometownPrint(pass)
    }
  
    li.appendChild(usera)
    li.appendChild(userdiv)
    
    ul.appendChild(li)
  }
  return ul
  }
  
  HtmlTransformer([
    {firstName: 'Chris', lastName: 'Martin', age: 30, hometown: 'Vienna'},
    {firstName: 'John', lastName: 'Cena', age:29, hometown: 'Florida'},
    {firstName: 'H', lastName: 'Lee', age:29, hometown: 'Somewhere in Korea'}
  ])

/*
  <ul>​
      <li>​
          <a class=​"name">​Chris Martin​</a>​
          <div class=​"age">​30​</div>
      ​</li>​
      <li>
          ​<a class=​"name">​John Cena​</a>
          ​<div class=​"age">​29​</div>​</li>
      ​<li>
         ​<a class=​"name">​H Lee​</a>
         ​<div class=​"age">​29​</div>​</li>​
  </ul>​

  */