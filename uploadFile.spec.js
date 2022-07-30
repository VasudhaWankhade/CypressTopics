// http://automationpractice.com/index.php?controller=contact%27
// https://css-tricks.com/examples/DragAndDropFileUploading/
// https://davidwalsh.name/demo/multiple-file-upload.php
//https://davidwalsh.name/demo/multiple-file-upload.php




//.attachFile is jquery method which take files from fixture
//always select input tag for file upload
// install plugin for file upload
// import 'cypress-file-upload' ==> support/command.js

describe("Verify the functionality for file upload", () => {
    let file = 'meta.png'
    let file1 = 'Untitled.png'

    it("Upload file on webdriver university site", () => {
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile').attachFile(file)
        cy.get('#submit-button').click()
        cy.on('window:alert', (data) => {
            expect(data).to.eq('Your file has now been uploaded!')
            return true
        })
        cy.url().should('contain', file)
    })

    it("Upload file on second site", () => {
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        cy.get('#file').attachFile(file)
        cy.get('div[class="box__success"]').should('contain', 'Done')
    })

    it("Upload multiple files on third site", () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile([file, file1])
        cy.get('#fileList').children().should('have.length', 2)
    })

    it("Upload file on fourth site", () => {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        cy.get('#fileUpload').attachFile(file)
        cy.get('span[class="filename"]').should('contain', file)
    })

    it.only("Upload file on fourth site by changing file name", () => {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        cy.get('#fileUpload').attachFile({ filePath: file, fileName: "Metaverse.png" })

    })
})