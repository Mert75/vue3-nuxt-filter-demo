import { COLOR_MAPPING } from '~~/components/products/constants'
import { Phone } from '~~/types'

export const useProduct = defineStore('products', () => {
  const phones = ref<Phone[]>([])
  const filteredPhones = ref<Phone[]>([])

  const filterStore = useFilter()

  async function fetchFeed() {
    const res = await useFetch('/api/phone-feed')

    return JSON.parse(res.data.value)
  }

  function applyFilters() {
    // Create a copy of the products array
    let _filteredProducts = phones.value.slice()

    // Loop through the filters and apply each filter to the products
    filterStore.filters.forEach((filter) => {
      _filteredProducts = _filteredProducts.filter(phone => filter.handler(phone, filterStore.filterValues[filter.type]))
    })

    filteredPhones.value = _filteredProducts
  }

  const getUniqueManufacturers = () => {
    return [...new Set(phones.value.map(phone => phone.manufacturer))]
  }

  function getUniqueColors() {
    const colors = phones.value.map(phone => phone.variants.map(variant => variant.attributes.color_name))

    return [...new Set(colors.flat())]
  }

  function mapColors(color: string[]) {
    return color.map(color => COLOR_MAPPING[color])
  }

  onMounted(async () => {
    const data = await fetchFeed()

    // Set the products to the data returned from the phone feed
    phones.value = data.products.map((product: Phone) => {
      return {
        ...product,
        imageSrc: new URL('~/assets/img/product_image.webp', import.meta.url).href,
      }
    })

    watchEffect(() => {
      // When the filter values change, apply the filters
      // We use the detached option so that the effect is not disposed when the component is unmounted
      // We use the immediate option so that the effect is run immediately
      filterStore.$subscribe(applyFilters, { detached: true, immediate: true })
    })
  })

  return {
    fetchFeed,
    filteredPhones: computed(() => filteredPhones.value),
    getUniqueManufacturers,
    getUniqueColors,
    mapColors,
  }
})
