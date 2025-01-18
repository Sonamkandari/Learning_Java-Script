// reference
const insert =document.getElementById('insert');

//adding a event listener to the window
window.addEventListener('keydown',(e)=>{
  //html table element we directly import from the internet 
  //if we know that how to use an element we can insert it any where any time 
    insert.innerHTML=`
    <div class='Color'>
    <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===" "? "space":e.key }</td>  
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>

    </div>`;
})