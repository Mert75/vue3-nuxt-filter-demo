import { FilterValues, PhoneFilter } from '~~/components/products/types'
import { Phone } from '~~/types'

export const useFilter = defineStore('filterValues', () => {
  const filterValues = reactive<FilterValues>({
    'manufacturer': ['Apple'],
    'color': [],
    '5G': true,
    'E-SIM': true,
    'name': '',
  })

  // The filters array contains two properties:
  // type: The type of filter. This is used to determine the filter value to use.
  // handler: The filter handler function. This function takes the phone and value as arguments and returns true or false.
  const filters: PhoneFilter[] = [
    {
      type: 'manufacturer',
      handler: (phone, filterValue: string[]) => {
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
    {
      type: 'name',
      handler: (phone: Phone, filterValue: string) => phone.name.toLowerCase().includes(filterValue.toLowerCase()),
    },
  ]

  const applyFilter = (phones: Ref<Phone[]>) => {
    return phones.value.filter((phone) => {
      return filters.every((filter) => {
        return filter.handler(phone, filterValues[filter.type])
      })
    })
  }

  return { filterValues, applyFilter, filters }
})
