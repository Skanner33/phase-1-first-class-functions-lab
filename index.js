const returnFirstTwoDrivers = (driver) => {return [driver[0],driver[1]]};

const returnLastTwoDrivers = (driver) => {return [driver[2],driver[3]]};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(cash){
    return (() => cash * 5)
}

const fareDoubler = function(cash){
    return (cash * 2)
}

const fareTripler = function(cash){
    return (cash * 3)
}

function selectDifferentDrivers(driver, selector){
    return selector(driver);
    }