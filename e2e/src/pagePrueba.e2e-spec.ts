import {browser, element, by } from 'protractor';
 
describe('Mi Test', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");

    });
    //creación de prueba 1
    it("titulo Thoru", ()=>{
        expect(element(by.css(".titulo ion-card-title")).getText()).toContain("Thoru");
    });  
    //creación de prueba 2
    it("subtitulo Dragona", ()=>{
        expect(element(by.css(".SubTittle ion-label")).getText()).toContain("Dragona");
    });  

});


 















