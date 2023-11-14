/*****************************************************************
 Author: Antonio Melpignano
 Testato e funzionante con Selenium driver




 */
const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
async function compraora() {
    // launch the browser



    let driver = await new Builder().forBrowser("chrome").build();

    try {
//collegamento al sito
        await driver.get("https://www.autohero.com/it/");
        // resize della finestra browser, altrimenti non è raggiungibile l'elemento Trova un'auto
        await driver.manage().window().setRect({ width: 1980, height: 1020 });
//click su accetta tutto (autorizzazione cokies)
        await driver.findElement(By.xpath("//*[text()='Accetta tutto']")).click();
        await driver.manage().setTimeouts({ implicit: 5000 });
      //click su trova un'auto
        await driver.findElement(By.xpath("//*[@id=\"app\"]/div/header/div[2]/div/div[3]/nav/div[1]/div[1]/a")).click();
//è un brutto xpath ma quello parlante ha l'apostrofo in mezzo
        await driver.manage().setTimeouts({ implicit: 5000 });
        //clicca su marca
        await driver.findElement(By.xpath("//button[@id='carMakeFilter']")).click();
        await driver.manage().setTimeouts({ implicit: 5000 });
        //clicca Audi
        await driver.findElement(By.xpath("//*[@id='app']/div/main/div/div[3]/div/div/div[1]/div/div[1]/div[1]/ul/div[3]/div/label/span/span")).click();
        await driver.manage().setTimeouts({ implicit: 5000 });
        //clicca modello
        await driver.findElement(By.xpath("//*[@id=\"carModelsFilter\"]")).click();
        await driver.manage().setTimeouts({ implicit: 5000 });
//clicca A3
        await driver.findElement(By.xpath("//*[@id='app']/div/main/div/div[3]/div/div[1]/div[2]/div/div[2]/label[4]/span/span")).click();
        await driver.manage().setTimeouts({ implicit: 5000 });
        await driver.findElement(By.xpath("//*[@id='sortBy']")).click();
        await driver.manage().setTimeouts({ implicit: 5000 });
        //*[text()='Prezzo più alto']
        await driver.findElement(By.xpath("//*[@id=\"sortBy\"]/option[4]")).click();
        await driver.manage().setTimeouts({ implicit: 5000 });
        //Check page title, to confirm login was successful
        //*[@id="ad-items-wrapper"]/div/div/div[1]/div/div/div/div[4]/a/div[1]/img
        await driver.findElement(By.xpath("//*[@id=\"ad-items-wrapper\"]/div/div/div[1]/div/div/div/div[4]/a/div[1]/img")).click();
        await driver.manage().setTimeouts({ implicit: 5000 });
        await driver.findElement(By.xpath("//*[text()='Compra ora']")).click();
        //*[text()='Compra ora']
        await driver.manage().setTimeouts({ implicit: 5000 });


    } finally {
        await driver.quit();
    }
}
compraora();