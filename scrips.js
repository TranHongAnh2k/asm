const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = (()=>{
    let i = 0
    const stt = []
    const name = []
    const coinMath = []
    const coinPhysic = []
    const coinChemic = []
    const coin = []
    const root = $('#root')
    const inputName = $('#name')
    const inputMath = $('#math')
    const inputPhysic = $('#physic')
    const inputChemic = $('#chemic')
    const submit = $('#submit')
    const coinMedium = $('#coinMedium')
    return {
        add(_stt,_name,_coinMath,_coinPhysic,_coinChemic){
            stt.push(_stt)
            name.push(_name)
            coinMath.push(_coinMath)
            coinPhysic.push(_coinPhysic)
            coinChemic.push(_coinChemic)
        },
        delete(index){
            stt.splice(index,1)
            name.splice(index,1)
            coinMath.splice(index,1)
            coinPhysic.splice(index,1)
            coinChemic.splice(index,1)
        },
        render(){
            let html =``
            for (let index=0;index<stt.length;index++){
                let x = `<tr class = 'text-center'><th scope="col">${stt[index]}</th>
                            <th scope="col">${name[index]}</th>
                            <th scope="col">${coinMath[index]}</th>
                            <th scope="col">${coinPhysic[index]}</th>
                            <th scope="col">${coinChemic[index]}</th>
                            <th scope="col">${coin[index]}</th></tr>`
                html+=x
                }
                root.innerHTML= html
            
        },
        init(){
            submit.onclick = ()=>{
                const name = inputName.value
                const coinMath = inputMath.value
                const coinPhysic = inputPhysic.value
                const coinChemic = inputChemic.value
                this.add(++i,name,coinMath,coinPhysic,coinChemic)
                this.render()
                inputName.value=null
                inputMath.value=null
                inputChemic.value=null
                inputPhysic.value=null
                inputName.focus()
                inputMath.focus()
                inputChemic.focus()
                inputPhysic.focus()
            }
            coinMedium.onclick = ()=>{
                for (let index=0;index<stt.length;index++){
                    // debugger
                    const sum = (parseFloat(coinMath[index]) +parseFloat(coinPhysic[index])+parseFloat(coinChemic[index]))/3
                    Math.round(sum * 10) / 10
                    coin.push(sum)
                }
                this.render()
            }
        }
    }
})();

app.init()