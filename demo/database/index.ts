export
async function init_db() {
  console.log('initializing database connection')
  await new Promise(res =>
    setTimeout(res, 1000)
  )
  console.log('database is ok')
}
