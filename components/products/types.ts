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

export type FilterOption = 'manufacturer' | 'color' | '5G' | 'E-SIM'

export interface PhoneFilter {
  type: FilterOption
  handler: (phone: Phone, filterValue: any) => boolean
}
