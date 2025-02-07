import type React from "react"
import { getAverageProductionData } from "../utils/dataProcessing"

const BarChart: React.FC = () => {
  const data = getAverageProductionData()
  const maxProduction = Math.max(...data.map((d) => d.averageProduction))

  const width = 800
  const height = 400
  const margin = { top: 20, right: 20, bottom: 60, left: 60 }
  const chartWidth = width - margin.left - margin.right
  const chartHeight = height - margin.top - margin.bottom

  const barWidth = chartWidth / data.length

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
       
        <line x1={0} y1={0} x2={0} y2={chartHeight} stroke="black" />
        {[0, 0.25, 0.5, 0.75, 1].map((tick) => (
          <g key={tick} transform={`translate(0, ${chartHeight - tick * chartHeight})`}>
            <line x1={0} x2={-6} y1={0} y2={0} stroke="black" />
            <text x={-10} y={0} dy=".32em" textAnchor="end">
              {(tick * maxProduction).toFixed(2)}
            </text>
          </g>
        ))}

     
        <line x1={0} y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="black" />
        {data.map((d, i) => (
          <g key={d.crop} transform={`translate(${i * barWidth + barWidth / 2}, ${chartHeight})`}>
            <text y={20} textAnchor="end" transform="rotate(-45)">
              {d.crop}
            </text>
          </g>
        ))}

     
        {data.map((d, i) => (
          <rect
            key={d.crop}
            x={i * barWidth}
            y={chartHeight - (d.averageProduction / maxProduction) * chartHeight}
            width={barWidth - 1}
            height={(d.averageProduction / maxProduction) * chartHeight}
            fill="steelblue"
          />
        ))}

      
        <text x={chartWidth / 2} y={-margin.top / 2} textAnchor="middle" fontWeight="bold">
          Average Crop Production
        </text>
      </g>
    </svg>
  )
}

export default BarChart

