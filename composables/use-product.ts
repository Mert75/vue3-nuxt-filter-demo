import { COLOR_MAPPING } from '~~/components/products/constants'
import { FilterOption } from '~~/components/products/types'
import { Phone, PhoneFeed } from '~~/types'

interface PhoneFilter {
  type: FilterOption
  handler: (phone: Phone, filterValue: any) => boolean
}

export default function () {
  const phones = ref<Phone[]>([])
  const filteredPhones = ref<Phone[]>([])

  async function fetchFeed(): Promise<PhoneFeed> {
    const res = await useFetch('/api/phone-feed')

    return JSON.parse(res.data.value)
  }

  const getUniqueManufacturers = computed(() => {
    return [...new Set(phones.value.map(product => product.manufacturer))]
  })

  const getUniqueColors = computed(() => {
    return [...new Set(phones.value.map(product => product.variants.map(variant => variant.attributes.color_name)).flat())]
  })

  const getColorMapping = (color: string[]) => {
    return color.map(color => COLOR_MAPPING[color])
  }

  const filterValues = reactive<Record<FilterOption, any>>({
    'manufacturer': [''],
    'color': [''],
    '5G': false,
    'E-SIM': false,
  })

  // The filters array contains filter objects with two properties:
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
      handler: (phone, filterValue: boolean) => phone.has_5g === filterValue,
    },
    {
      type: 'E-SIM',
      handler: (phone, filterValue) => phone.has_esim === filterValue,
    },
  ]

  onMounted(async () => {
    const data = await fetchFeed()

    // Set the products to the data returned from the phone feed
    phones.value = data.products.map((product: Phone) => {
      return {
        ...product,
        imageSrc: 'https://www.kpn.com/shop/cdn/products/_/product_11755930_main.webp',
      }
    })
  })

  // This code watches for changes in the filter values and filters the list of phones accordingly.
  // watchEffect(() => {
  //   filteredPhones.value = phones.value.filter((phone: Phone) => {
  //     return filters.every((filter: PhoneFilter) => {
  //       return filter.handler(phone, filterValues[filter.type])
  //     })
  //   })
  // })

  return {
    fetchFeed,
    products: phones,
    filteredPhones,
    uniqueManufacturers: getUniqueManufacturers,
    colors: {
      getUniqueColors,
      getColorMapping,
    },
    filters: {
      filterValues,
      phoneFilters: filters,
    },
  }
}
