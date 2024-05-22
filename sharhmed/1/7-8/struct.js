import data from './data.js'

const cardContent = document.querySelector('.card-content')

let cardContentValue = "";
let cardID = 0
let buttonID = 0

data.sort((a, b) => a.id - b.id)

data.forEach(card => {
    let skip = false
    if (cardID == 1) {
        cardContentValue += `
        <div id="" class="title_item">
                 ٨  
                <br> الدرس الثامِنُ  
                </div>
        `
        cardID++
        buttonID++
        skip = true
    }
    if (cardID == 2 && !skip) {
        cardContentValue += `
        <div id="" class="title_item">
                الإشارَةُ إلَى المُعَرَّفِ بِأَلْ
                <br> указание на определённое имя посредством аль
                </div>
        `
        cardID++
        buttonID++
        skip = true
    }
    if (cardID == 3 && !skip) {
        cardContentValue += `
        <div id="" class="title_item">
                لِمَنْ
                <br> чей / для кого
                </div>
        `
        cardID++
        buttonID++
        skip = true
    }
    if (cardID == 5 && !skip) {
        cardContentValue += `
        <div id="" class="title_item">
                أمامَ ، خَلْفَ
                <br> спереди (амама), сзади (хольфа)
                </div>
        `
        cardID++
        buttonID++
        skip = true
    }
    if (skip == false) {
        const { russian, arabic } = card;

    cardContentValue += `
    <div class="card-content">
    <div class="card">
            <div class="front rusfont">
                ${russian}
            </div>  

            <div class="buttons">
            <button id="idHide${buttonID}" class="buttons_style" onclick="hideText(${cardID})">скрыть текст</button>
    <button id="id${buttonID}" class="buttons_style" onclick="revealLetter(${cardID})" disabled>открыть букву</button>
    <button id="id${buttonID}" class="buttons_style" onclick="revealWord(${cardID})" disabled>открыть слово</button>
    <button id="id${buttonID}" class="buttons_style" onclick="revealAll(${cardID})" disabled>открыть всё</button>
            </div>


            <div id="${cardID}" class="back arfont">
                ${arabic}
            </div>

            

            
            
    </div>
    </div>
`
    cardID++
    buttonID++
    }
    
})



// data.forEach(card => {
//     const { russian, arabic } = card;

//     cardContentValue += `
//     <div class="card-content">
//     <div class="card">
//             <div class="front rusfont">
//                 ${russian}
//             </div>  

//             <div class="buttons">
//             <button id="idHide${buttonID}" class="buttons_style" onclick="hideText(${cardID})">скрыть текст</button>
//     <button id="id${buttonID}" class="buttons_style" onclick="revealLetter(${cardID})" disabled>открыть букву</button>
//     <button id="id${buttonID}" class="buttons_style" onclick="revealWord(${cardID})" disabled>открыть слово</button>
//     <button id="id${buttonID}" class="buttons_style" onclick="revealAll(${cardID})" disabled>открыть всё</button>
//             </div>


//             <div id="${cardID}" class="back arfont">
//                 ${arabic}
//             </div>

            

            
            
//     </div>
//     </div>
// `
// cardID++
// buttonID++
// })




cardContent.innerHTML = cardContentValue

// let flipElements = document.querySelectorAll(".card .flip");

// flipElements.forEach(el => {
//     el.addEventListener("click", flipEl)
// })

// function flipEl({ currentTarget }) {
//     currentTarget?.classList.toggle("active");

//     if (currentTarget.classList.contains("active")) {
//         const back = currentTarget.querySelector(".back");
//         currentTarget.style.height = `${back.getBoundingClientRect().height + 2}px`
//     } else {
//         const front = currentTarget.querySelector(".front");
//         currentTarget.style.height = `${front.getBoundingClientRect().height + 2}px`
//     }
// }