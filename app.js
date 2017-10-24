var webdriver=require('selenium-webdriver')
var driver=new webdriver.Builder().forBrowser('firefox').build();
driver.get('http://google.com');
driver.wait(webdriver.until.elementLocated({name: 'q'}),2000)
driver.findElement({name: 'q'}).sendKeys('Gunasekhar Kanumuri')
driver.findElement({name: 'q'}).sendKeys(webdriver.Key.ENTER)
driver.wait(webdriver.until.elementLocated({name: 'q'}),2000)
driver.getTitle().then(function(title){console.log(title)})
driver.quit()
