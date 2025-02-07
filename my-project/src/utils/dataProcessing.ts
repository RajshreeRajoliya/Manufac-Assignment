import agricultureData from "../data/agriculture_data.json"

interface CropData {
  Year: number
  Crop: string
  Production: number
}

export function getAggregatedTableData() {
  const yearlyData: { [year: number]: { max: CropData; min: CropData } } = {}

  agricultureData.forEach((crop: CropData) => {
    if (!yearlyData[crop.Year]) {
      yearlyData[crop.Year] = { max: crop, min: crop }
    } else {
      if (crop.Production > yearlyData[crop.Year].max.Production) {
        yearlyData[crop.Year].max = crop
      }
      if (crop.Production < yearlyData[crop.Year].min.Production) {
        yearlyData[crop.Year].min = crop
      }
    }
  })

  return Object.entries(yearlyData).map(([year, data]) => ({
    year: Number.parseInt(year),
    maxCrop: data.max.Crop,
    minCrop: data.min.Crop,
  }))
}

export function getAverageProductionData() {
  const cropTotals: { [crop: string]: { total: number; count: number } } = {}

  agricultureData.forEach((crop: CropData) => {
    if (!cropTotals[crop.Crop]) {
      cropTotals[crop.Crop] = { total: 0, count: 0 }
    }
    cropTotals[crop.Crop].total += crop.Production
    cropTotals[crop.Crop].count++
  })

  return Object.entries(cropTotals).map(([crop, data]) => ({
    crop,
    averageProduction: data.total / data.count,
  }))
}

