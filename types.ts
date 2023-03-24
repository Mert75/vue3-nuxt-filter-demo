export interface PhoneFeed {
  products: Phone[]
}

export interface Phone {
  id: number
  name: string
  slug: string
  manufacturer: string
  model: string
  operating_system: string
  sim_card_capacity: string
  refurbished: boolean
  has_usp: boolean
  has_5g: boolean
  has_esim: boolean
  colors: string[]
  sort_order: number
  release_date: string
  default: string
  variants: Variant[]
  attributes: PromotionAttributes
  has_promotion: boolean
  imageSrc: string
}

export interface Variant {
  id: number
  name: string
  slug: string
  next_ship_date?: string
  usp_offer: UspOffer
  attributes: VariantAttributes
  ui_suggested_sort_order: number
}

export interface UspOffer {}

export interface VariantAttributes {
  color: string
  color_code: string
  color_name: string
  memory: string
  handset_cat_promotion_sticker?: string
  promotion_label?: string
  promotion_slider_source?: string
  promotion_bg_color?: string
  handset_cat_promotion_sticker_kz: any
  promotion_label_kz?: string
  promotion_slider_source_kz?: string
  promotion_bg_color_kz: any
}

export interface PromotionAttributes {
  handset_cat_promotion_sticker?: string
  promotion_label?: string
  promotion_slider_source?: string
  promotion_bg_color?: string
  handset_cat_promotion_sticker_kz: any
  promotion_label_kz?: string
  promotion_slider_source_kz?: string
  promotion_bg_color_kz: any
}
