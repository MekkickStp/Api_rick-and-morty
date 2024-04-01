const inputName = document.getElementById('input-name')
const characterName = document.getElementById('character-name') 
const characterType = document.getElementById('character-type')
const characterImage = document.getElementById('character-image')
const findBtn = document.getElementById('find-btn')


findBtn.addEventListener('click',async () => { //ฟังชั่น click 
    
    try{
        const input = inputName.value
        const url = `https://rickandmortyapi.com/api/character?name=${input}` //ลิ้งค์ api
        const response = await (await fetch(url)).json()

        if(!response.results){
            throw{ message:`${input} not found`}
        }

        if(!response.results?.length) {
            throw{ message: `${input} not found`}
        }

        const character = response.results[0] //เอาค่ามาเก็บ

        characterName.innerHTML = character.name
        characterImage.src = character.image
        characterType.innerHTML = character.species

    }catch(error){
        window.alert(`[ERROR] => ${error.message}`) //เช็ค error

    }finally{
        inputName.value=''
    }
})