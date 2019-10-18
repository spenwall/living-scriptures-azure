const apiKey = process.env["AIRTABLE_API"]
const tableBase = process.env["AIRTABLE_BASE"]
const Airtable = require("airtable");
const base = new Airtable({ apiKey: apiKey }).base(
  tableBase
)
module.exports = async function () {
  base("movies")
  .select({
    filterByFormula: "AND({kind} = 'movie', {tmdb_id} > '')",
    maxRecords: 1000,
    view: "Grid view",
  })
  .eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        console.log(record.fields.tmdb_title)
      })
      fetchNextPage()
  },
  function done(err) {
    if (err) {
      console.error(err)
      return
    }
  }
  )
}