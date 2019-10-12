function findMatching(drivers, string) {
    return drivers.filter(driver => {
        if (driver.toUpperCase() === string.toUpperCase()) {
            return driver
        }
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => {
        if (driver.toUpperCase().substring(0, 2) === string.toUpperCase()) {
            return driver
        }
    })
}

function matchName(drivers, string) {
    return drivers.filter(driver => {
        if (driver.name.toUpperCase() === string.toUpperCase()) {
            return driver
        }
    })
}