

const excel= require('exceljs');
const { test, expect } = require('@playwright/test');





const workbook=new excel.Workbook();
await workbook.xlsx.readFile('./TestData/TestData.xlsx')


//const  sheets=   workbook.getWorksheet('Sheet1');

sheets.eachRow((row,rowNumber) =>
{

    row.eachCell((cell,colNum) =>
    {
       // console.log(`Row ${rowNum} Cell ${colNum}: ${cell.value}`);
console.log(cell.value);
    } )


})

