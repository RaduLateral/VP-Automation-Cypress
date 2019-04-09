const createPlannedRoutePage = { 
    plannedRouteName: 'input[name="routeTemplateName"]',
    plannedRouteVehicleType: 'input#vehicleTypeId',
    plannedDayOfService: 'input#scheduledDay',
    plannedRouteWasteType: 'input#wasteMaterialTypeId',
    plannedRouteDate:'label',
    addStopsField: '#react-select-3-input',
    addStopBtn: 'button',
    plannedRouteSaveBtn: 'button',
}
export default cy => {
    return { 
        plannedRouteName: () => 
            cy
                .get(createPlannedRoutePage.plannedRouteName),
        plannedDayOfService: () => 
            cy
                .get(createPlannedRoutePage.plannedDayOfService),
        plannedRouteVehicleType: () => 
            cy
                .get(createPlannedRoutePage.plannedRouteVehicleType),
        plannedRouteWasteType: () => 
            cy
                .get(createPlannedRoutePage.plannedRouteWasteType),
        datePicker: () =>
            cy
                .get(createPlannedRoutePage.plannedRouteDate)
                .contains("Date")
                .next(),
        dateSelectToday: () =>
            cy
                .get(createPlannedRoutePage.plannedRouteDate)
                .contains("Date")
                .next()
                .find('div.DayPicker-Day.DayPicker-Day--today'),
        addStopsField: () => 
            cy
                .get(createPlannedRoutePage.addStopsField),
        addStopBtn: () => 
            cy
                .get(createPlannedRoutePage.addStopBtn)
                .contains('Add Stop'),
        plannedRouteSaveBtn: () => 
            cy
                .get(createPlannedRoutePage.plannedRouteSaveBtn)
                .contains('Save'),
      
    };
  };
  
