const excelGenerator = (product, res, name) => {
  const xl = require('excel4node')

  product = product.map(p => (p._id = p._id.toString()))

  const wb = new xl.Workbook()
  const ws = wb.addWorksheet('Products')

  product.forEach((p, i) => {
    const valuesProduct = Object.values(p)
    valuesProduct.forEach((value, j) => {
      ws.cell(i + 1, j + 1).string(value)
    })
  })

  wb.write(`${name}.xlsx`, res)
}

module.exports.excelGeneratorUtil = { excelGenerator }
