const apiKey = process.env["AIRTABLE_API"]
const tableBase = process.env["AIRTABLE_BASE"]
const Airtable = require("airtable");
const base = new Airtable({ apiKey: apiKey }).base(
  tableBase
)
module.exports = async function (movies) {
  base("movies")
  .select({
    maxRecords: 10,
    pageSize: 5,
    view: "Grid view",
    filterByFormula: `({id} = ${movies})`
  })
  .eachPage(
    function page(records, fetchNextPage) {
      records.forEach((record) => {
        console.log(record)  
      })
  }, 
  function done(err) {
    if (err) {
      console.error(err)
      return
    }
  }
  )
}