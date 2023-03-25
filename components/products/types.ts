import { Phone } from '~~/types'

export enum SortKeys {
  MostSold = 'most_sold',
  Newest = 'newest',
  Promotion = 'deal',
}

export interface SortOption {
  name: string
  filter_key: SortKeys
}

export interface Filter {
  id: string
  name: string
  options: { name: string; value: string }[]
}

export interface FilterValues {
  manufacturer: string[]
  color: string[]
  '5G': boolean
  'E-SIM': boolean
  name: string
}

export type FilterOption = 'manufacturer' | 'color' | '5G' | 'E-SIM' | 'name'

export interface PhoneFilter {
  type: FilterOption
  handler: (phone: Phone, filterValue: any) => boolean
}
