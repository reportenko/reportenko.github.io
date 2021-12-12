class Homepage {
    get modelSLnk() {return $('#block-mainheadernavigation > ol > li:nth-child(1) > a');}
    get model3Lnk() {return $('#block-mainheadernavigation > ol > li:nth-child(2) > a');}
    get modelXLnk() {return $('#block-mainheadernavigation > ol > li:nth-child(3) > a');}
    get modelYLnk() {return $('#block-mainheadernavigation > ol > li:nth-child(4) > a');}
    get solarRoofLnk() {return $('#block-mainheadernavigation > ol > li:nth-child(5) > a');}
    get solarPanelsLnk() {return $('#block-mainheadernavigation > ol > li:nth-child(6) > a');}
}

module.exports = new Homepage();