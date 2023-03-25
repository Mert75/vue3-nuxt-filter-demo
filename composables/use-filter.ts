import { FilterOption, PhoneFilter } from '~~/components/products/types'
import { Phone } from '~~/types'

export const useFilter = defineStore('filterValues', () => {
  const filterValues = reactive<Record<FilterOption, string[] | boolean>>({
    'manufacturer': ['Apple'],
    'color': [],
    '5G': true,
    'E-SIM': true,
  })

  // The filters array contains two properties:
  // type: The type of filter. This is used to determine the filter value to use.
  // handler: The filter handler function. This function takes the phone and value as arguments and returns true or false.
  const filters: PhoneFilter[] = [
    {
      type: 'manufacturer',
      handler: (phone: Phone, filterValue: string[]) => {
        if (filterValue.length === 0)
          return true

        return filterValue.includes(phone.manufacturer)
      },
    },
    {
      type: 'color',
      handler: (phone: Phone, filterValue: string[]) => {
        if (filterValue.length === 0)
          return true

        return phone.variants.some(variant => filterValue.includes(variant.attributes.color_name))
      },
    },
    {
      type: '5G',
      handler: (phone: Phone, filterValue: boolean) => phone.has_5g === filterValue,
    },
    {
      type: 'E-SIM',
      handler: (phone: Phone, filterValue: boolean) => phone.has_esim === filterValue,
    },
  ]

  return { filterValues, filters }
})
