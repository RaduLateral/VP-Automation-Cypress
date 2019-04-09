import credentials from '../credentials'
import loginPage from '../Pages/loginPage'
import vendorSelectPage from '../Pages/vendorSelectPage';
import tutorialPage from '../Pages/tutorialPage';
import dashboardPage from '../Pages/dashboardPage';
import customersPage from '../Pages/customersPage';
import routesPage from '../Pages/routesPage';
import plannerPage from '../Pages/plannerPage';
import createDailyRoutePage from '../Pages/createDailyRoutePage';
import createPlannedRoutePage from '../Pages/createPlannedRoutePage';
import trackerPage from '../Pages/trackerPage';

describe('Getting to Dashboard', function() {
    const createDailyRoutePageInstance = createDailyRoutePage(cy); 
    const createPlannedRoutePageInstance = createPlannedRoutePage(cy); 
    const trackerPageInstance = trackerPage(cy); 
      
    it('Login', function() {
        cy.visit('https://hauler.dev.aws.rubiconglobal.com/')

        cy.log(loginPage)
        cy.get(loginPage.emailTextBox)
            .type(credentials.email)
        cy.get(loginPage.passwordTextBox)
            .type(credentials.password)
        cy.get(loginPage.loginBtn)
            .click()

        cy.url().should('eq', 'https://hauler.dev.aws.rubiconglobal.com/select-default-vendor')
        Cypress.Cookies.preserveOnce('session')
    })

    it('Select Vendor', function() {     
        cy.get(vendorSelectPage.vendorDropDown)
            .type(credentials.vendor, {force: true})
            .type('{Enter}')
        cy.get(vendorSelectPage.applyBtn)
            .click()
        cy.get(tutorialPage.tutorialTitle)
            .should('contain', 'Welcome')
        Cypress.Cookies.preserveOnce('session')
    })
    
    it('Skip Tutorial', function() {     
        cy.get(tutorialPage.skipBtn)
            .click();
        cy.url().should('eq', 'https://hauler.dev.aws.rubiconglobal.com/dashboard')
        Cypress.Cookies.preserveOnce('session')
    })
/*
    it('Create a new Customer', function() {     
        cy.get(dashboardPage.customersBtn)
            .click()
        cy.get(customersPage.createCustomerBtn)
            .click()
        cy.get(customersPage.createCustomerName)
            .type(credentials.customerName)            
        
        cy.get('input#customerTypeId').last()
            .click()
            .type(credentials.customerType)
            .type('{Enter}')
        cy.get(customersPage.createCustomerSaveBtn)
    })
    
    it('Create a new Daily Route', function() {    
        cy.get(dashboardPage.routesBtn)
            .click()     
        cy.get(routesPage.plannerBtn)
            .click()
            .wait(1000)
        cy.get(plannerPage.planARouteBtn).contains('Plan a Route')
            .click()
        cy.get(plannerPage.dailyRouteBtn).contains('Daily Route')   
            .click()

        createDailyRoutePageInstance.datePicker()
            .click()
        createDailyRoutePageInstance.dateSelectToday()
            .click()
        createDailyRoutePageInstance.dailyRouteName()
            .type(credentials.dailyRouteName)
        createDailyRoutePageInstance.dailyRouteVehicleType()
            .type(credentials.dailyRouteVehicleType)
            .type('{Enter}')
        createDailyRoutePageInstance.dailyRouteWasteType()
            .type(credentials.dailyRouteWasteType)
            .type('{Enter}')
        createDailyRoutePageInstance.addStops()
            .type(credentials.locationAddress, {force:true})
            .wait(2000)
            .type('{Enter}') 
        createDailyRoutePageInstance.addStopBtn()
            .click()
        createDailyRoutePageInstance.dailyRouteSaveBtn()
            .click()   
            .wait(5000)
        
        cy.get(plannerPage.title).contains('Automation_Daily_Route')
            .should('be.visible')
        
        Cypress.Cookies.preserveOnce('session')
    })/*
    it('Create a new Route Template', function() {     
        cy.get(dashboardPage.routesBtn)
            .click()     
        cy.get(routesPage.plannerBtn)
            .click()
            .wait(1000)
        cy.get(plannerPage.planARouteBtn).contains('Plan a Route')
            .click()
        cy.get(plannerPage.planARouteBtn).contains('Route Template')
            .click()

        createPlannedRoutePageInstance.plannedRouteName()
            .type(credentials.plannedRouteName)
        createPlannedRoutePageInstance.plannedDayOfService()
            .type(credentials.plannedDayOfService)
            .type('{Enter}')
        createPlannedRoutePageInstance.plannedRouteVehicleType()
            .type(credentials.plannedVehicleType)
            .type('{Enter}')
        createPlannedRoutePageInstance.plannedRouteWasteType()
            .type(credentials.plannedWasteType)
            .type('{Enter}')
        createPlannedRoutePageInstance.datePicker()
            .click()
        createPlannedRoutePageInstance.dateSelectToday()
            .click()
        createPlannedRoutePageInstance.addStopsField()
            .type(credentials.locationAddress,{force:true})
            .wait(2000)
            .type('{Enter}')  
        createPlannedRoutePageInstance.addStopBtn()
            .click()
        createPlannedRoutePageInstance.plannedRouteSaveBtn()
            .click()
            .wait(5000)          
        
        cy.get(plannerPage.title).contains('Automation_Template')
            .should('be.visible')
    })*/

    it('Copy Route Functionality', function() {     
        cy.get(dashboardPage.routesBtn)
            .click()     
            .wait(5000)
        //cy.get(trackerPage.deleteBtn).click()    
    })
  })
