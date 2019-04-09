const createDailyRoutePage = {
  dailyRouteName: 'input[name="routeName"]',
  dailyRouteVehicleType: "input#vehicleTypeId",
  dailyRouteWasteType: "input#wasteMaterialTypeId",
  dailyRouteDate: "label",
  addStops: "#react-select-3-input",
  addStopBtn: "button",
  dailyRouteSaveBtn: "button"
};

export default cy => {
  return {
    datePicker: () =>
        cy
            .get(createDailyRoutePage.dailyRouteDate)
            .contains("Date")
            .next(),
        dateSelectToday: () =>
        cy
            .get(createDailyRoutePage.dailyRouteDate)
            .contains("Date")
            .next()
            .find('div.DayPicker-Day.DayPicker-Day--today'),
    dailyRouteName: () => 
        cy
            .get(createDailyRoutePage.dailyRouteName),
    dailyRouteVehicleType: () => 
        cy
            .get(createDailyRoutePage.dailyRouteVehicleType),
    dailyRouteWasteType: () => 
        cy
            .get(createDailyRoutePage.dailyRouteWasteType),
    addStops: () => 
        cy
            .get(createDailyRoutePage.addStops),
    addStopBtn: () => 
        cy
            .get(createDailyRoutePage.addStopBtn)
            .contains('Add Stop'),
    dailyRouteSaveBtn: () => 
        cy
            .get(createDailyRoutePage.dailyRouteSaveBtn)
            .contains('Save'),
  };
};
