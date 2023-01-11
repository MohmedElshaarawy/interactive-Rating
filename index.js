let btns = document.querySelectorAll('.btn div');
let Submit = document.getElementById('Submit');
let frontFace = document.querySelector('.containerFront');
let backFace = document.querySelector('.containerBack');
let selected = document.getElementById('selected');
let message = document.querySelector('.message');

            btns.forEach((btn,index)=>{
            btn.addEventListener('click',()=>{
                selected.innerHTML = `You selected ${index+1} out of 5`
                Submit.onclick = ()=>{
                frontFace.style.display = 'none'
                 backFace.style.display = 'block'
                 message.style.display = 'none'  
                }
              })
            Submit.onclick = ()=>{
            message.style.display = 'block'
        } 
      })
