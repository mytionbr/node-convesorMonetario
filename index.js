const puppeteer = require('puppeteer');



async function robo(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const moedaBase = 'dolar'
    const moedaFinal = 'real'
    const url = `https://www.google.com/search?q=conversor+de+${moedaBase}+para+${moedaFinal}&oq=conversor+de+${moedaBase}+para+&aqs=chrome.0.0i433j69i57j0l8.8609j1j7&sourceid=chrome&ie=UTF-8`
    await page.goto(url);

    const resultado = await page.evaluate(()=>{
        return{
            result: document.querySelector(".a61j6.vk_gy.vk_sh.Hg3mWc").value
        }
    })

    console.log(`o valor de 1 ${moedaBase} é de ${resultado.result} ${moedaFinal}`)

    await browser.close();
}
robo()