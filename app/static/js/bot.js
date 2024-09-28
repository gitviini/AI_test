const form = document.querySelector('form')
const container_msg = document.querySelector('#container_msg')

form.onsubmit = async (e) =>{
    e.preventDefault()

    let input = form.children[0]
    let button = form.children[1]

    let text = input.value

    input.classList.add('click')
    button.classList.add('click')

    generate_msg(await ask(text))

    input.value = ''

    input.classList.remove('click')
    button.classList.remove('click')
}

async function ask(text_=""){
    let promise = await fetch('/bot',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'text':text_})
    })

    let json = promise.json()
    let [res,text] = await json.then(res=>res)
    console.log(res)
    console.log(text)
    if(res){
        return text
    }
}

function generate_msg(text_=""){
    let msg = document.createElement('p')
    msg.innerHTML = text_
    msg.setAttribute('class','msg flex column start')
    container_msg.insertAdjacentElement('afterbegin', msg)
}