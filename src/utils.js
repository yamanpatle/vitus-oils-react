import { oilTypeIcons, oilTypeColors } from './constants'

export const getOilIcon = (type) => oilTypeIcons[type] || oilTypeIcons['Other']
export const getOilColor = (type) => oilTypeColors[type] || oilTypeColors['Other']
