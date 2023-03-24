import { SortKeys, SortOption } from './types'

export const SORT_OPTIONS: SortOption[] = [
  { name: 'Most Sold', filter_key: SortKeys.MostSold },
  { name: 'Newest', filter_key: SortKeys.Newest },
  { name: 'Promotion', filter_key: SortKeys.Promotion },
]

export const MANIFACTURERS = [
  'Apple',
  'Samsung',
  'Xiaomi',
  'Oppo',
  'Huawei',
  'Google',
  'OnePlus',
]

export const DEFAULT_OPTIONS = [
  { name: 'Yes', value: 'yes' },
  { name: 'No', value: 'no' },
]

export const COLORS = [
  'white',
  'beige',
  'blue',
  'brown',
  'green',
  'purple',
]

export const COLOR_MAPPING: Record<string, string> = {
  BLAUW: '#215E7B',
  ROZE: '#F9DED7',
  ZILVER: '#F9F4EF',
  ZWART: '#161D24',
  GEEL: 'yellow',
  GOUD: 'gold',
  ROOD: '#a30112',
  PAARS: '#8B008B',
}
