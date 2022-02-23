import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** Represents `true` or `false` values. */
  BooleanType: any
  CustomData: any
  /** A ISO 8601 compliant date value */
  Date: any
  /** A ISO 8601 compliant datetime value */
  DateTime: any
  /** Represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). */
  FloatType: any
  /** Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  IntType: any
  ItemId: any
  JsonField: any
  MetaTagAttributes: any
  UploadId: any
}

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']>
}

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata'
  count: Scalars['IntType']
}

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow',
}

export type ColorField = {
  __typename?: 'ColorField'
  alpha?: Maybe<Scalars['IntType']>
  blue?: Maybe<Scalars['IntType']>
  green?: Maybe<Scalars['IntType']>
  hex?: Maybe<Scalars['String']>
  red?: Maybe<Scalars['IntType']>
}

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>
}

/** Specifies how to filter Date fields */
export type DateFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['Date']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['Date']>
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['Date']>
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['Date']>
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['Date']>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['Date']>
}

export type DropModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<DropModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  deliveryDate?: InputMaybe<DateFilter>
  description?: InputMaybe<TextFilter>
  endDate?: InputMaybe<DateFilter>
  id?: InputMaybe<ItemIdFilter>
  pictures?: InputMaybe<GalleryFilter>
  products?: InputMaybe<LinksFilter>
  releaseDate?: InputMaybe<DateFilter>
  slug?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
}

export enum DropModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  CreatedAt_ASC = 'createdAt_ASC',
  CreatedAt_DESC = 'createdAt_DESC',
  DeliveryDate_ASC = 'deliveryDate_ASC',
  DeliveryDate_DESC = 'deliveryDate_DESC',
  EndDate_ASC = 'endDate_ASC',
  EndDate_DESC = 'endDate_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  ReleaseDate_ASC = 'releaseDate_ASC',
  ReleaseDate_DESC = 'releaseDate_DESC',
  Slug_ASC = 'slug_ASC',
  Slug_DESC = 'slug_DESC',
  Title_ASC = 'title_ASC',
  Title_DESC = 'title_DESC',
  UpdatedAt_ASC = 'updatedAt_ASC',
  UpdatedAt_DESC = 'updatedAt_DESC',
}

/** Record of type Drop (drop) */
export type DropRecord = {
  __typename?: 'DropRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  deliveryDate?: Maybe<Scalars['Date']>
  description?: Maybe<Scalars['String']>
  endDate?: Maybe<Scalars['Date']>
  id: Scalars['ItemId']
  pictures: Array<FileField>
  products: Array<ProductRecord>
  releaseDate?: Maybe<Scalars['Date']>
  slug?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Drop (drop) */
export type DropRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Drop (drop) */
export type DropRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>
}

/** Record of type DropPage (droppage) */
export type DroppageRecord = {
  __typename?: 'DroppageRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  id: Scalars['ItemId']
  metadata: Array<MetadatumRecord>
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type DropPage (droppage) */
export type DroppageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type DropPage (droppage) */
export type DroppageRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>
}

export type ErrorpageModelBodyField = {
  __typename?: 'ErrorpageModelBodyField'
  blocks: Array<Scalars['String']>
  links: Array<Scalars['String']>
  value: Scalars['JsonField']
}

/** Record of type ErrorPage (errorpage) */
export type ErrorpageRecord = {
  __typename?: 'ErrorpageRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  body?: Maybe<ErrorpageModelBodyField>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  updatedAt: Scalars['DateTime']
}

/** Record of type ErrorPage (errorpage) */
export type ErrorpageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type FaqcategoryModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<FaqcategoryModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  name?: InputMaybe<StringFilter>
  position?: InputMaybe<PositionFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
}

export enum FaqcategoryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  CreatedAt_ASC = 'createdAt_ASC',
  CreatedAt_DESC = 'createdAt_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  Name_ASC = 'name_ASC',
  Name_DESC = 'name_DESC',
  Position_ASC = 'position_ASC',
  Position_DESC = 'position_DESC',
  UpdatedAt_ASC = 'updatedAt_ASC',
  UpdatedAt_DESC = 'updatedAt_DESC',
}

/** Record of type FAQCategory (faqcategory) */
export type FaqcategoryRecord = {
  __typename?: 'FaqcategoryRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  name?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['IntType']>
  updatedAt: Scalars['DateTime']
}

/** Record of type FAQCategory (faqcategory) */
export type FaqcategoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type FaqitemModelAnswerField = {
  __typename?: 'FaqitemModelAnswerField'
  blocks: Array<Scalars['String']>
  links: Array<Scalars['String']>
  value: Scalars['JsonField']
}

/** Record of type FaqItem (faqitem) */
export type FaqitemRecord = {
  __typename?: 'FaqitemRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  answer?: Maybe<FaqitemModelAnswerField>
  category?: Maybe<FaqcategoryRecord>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  question?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type FaqItem (faqitem) */
export type FaqitemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type FAQPage (faqpage) */
export type FaqpageRecord = {
  __typename?: 'FaqpageRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  items: Array<FaqitemRecord>
  updatedAt: Scalars['DateTime']
}

/** Record of type FAQPage (faqpage) */
export type FaqpageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication',
}

export type FileField = {
  __typename?: 'FileField'
  _createdAt: Scalars['DateTime']
  _updatedAt: Scalars['DateTime']
  alt?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  basename: Scalars['String']
  blurUpThumb?: Maybe<Scalars['String']>
  blurhash?: Maybe<Scalars['String']>
  colors: Array<Maybe<ColorField>>
  copyright?: Maybe<Scalars['String']>
  customData?: Maybe<Scalars['CustomData']>
  exifInfo?: Maybe<Scalars['CustomData']>
  filename: Scalars['String']
  focalPoint?: Maybe<FocalPoint>
  format: Scalars['String']
  height?: Maybe<Scalars['IntType']>
  id: Scalars['UploadId']
  md5: Scalars['String']
  mimeType: Scalars['String']
  notes?: Maybe<Scalars['String']>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars['IntType']
  smartTags: Array<Maybe<Scalars['String']>>
  tags: Array<Maybe<Scalars['String']>>
  title?: Maybe<Scalars['String']>
  url: Scalars['String']
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars['IntType']>
}

export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: InputMaybe<Scalars['Float']>
  quality?: InputMaybe<Scalars['Int']>
  size?: InputMaybe<Scalars['Int']>
}

export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars['String']>
}

export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

/** Specifies how to filter Floating-point fields */
export type FloatFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['FloatType']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['FloatType']>
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['FloatType']>
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['FloatType']>
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['FloatType']>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['FloatType']>
}

/** Specifies how to filter Multiple files/images field */
export type GalleryFilter = {
  /** Filter records that have all of the specified uploads. The specified values must be Upload IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>
  /** Filter records that have one of the specified uploads. The specified values must be Upload IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>
  /** Search for records with an exact match. The specified values must be Upload IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
  /** Filter records that do not have any of the specified uploads. The specified values must be Upload IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>
}

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField'
  facebookPageUrl?: Maybe<Scalars['String']>
  fallbackSeo?: Maybe<SeoField>
  siteName?: Maybe<Scalars['String']>
  titleSuffix?: Maybe<Scalars['String']>
  twitterAccount?: Maybe<Scalars['String']>
}

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']>
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']>
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']>
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']>
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']>
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']>
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']>
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']>
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']>
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']>
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']>
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']>
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']>
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']>
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']>
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']>
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']>
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']>
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']>
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']>
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']>
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']>
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']>
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']>
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']>
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']>
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']>
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']>
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']>
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']>
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']>
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']>
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']>
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']>
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']>
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']>
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']>
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']>
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']>
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']>
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']>
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']>
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']>
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']>
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']>
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']>
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']>
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']>
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']>
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']>
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']>
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']>
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']>
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']>
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']>
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']>
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']>
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']>
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']>
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']>
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']>
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']>
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']>
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']>
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']>
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']>
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']>
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']>
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']>
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']>
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']>
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']>
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']>
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']>
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']>
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']>
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']>
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']>
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']>
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']>
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']>
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']>
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']>
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']>
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']>
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']>
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']>
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']>
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']>
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']>
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']>
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']>
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']>
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: InputMaybe<Scalars['IntType']>
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']>
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']>
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']>
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']>
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']>
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']>
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']>
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']>
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']>
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']>
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars['FloatType']>
}

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye',
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight',
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit',
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width',
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb',
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Solid = 'solid',
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale',
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v',
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp',
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block',
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsMarkTile {
  Grid = 'grid',
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json',
}

export enum ImgixParamsTransparency {
  Grid = 'grid',
}

export enum ImgixParamsTrim {
  Auto = 'auto',
  Color = 'color',
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start',
}

export enum ImgixParamsTxtFit {
  Max = 'max',
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']>
}

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']>
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']>
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>
}

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated',
}

export type LegalpageModelBodyField = {
  __typename?: 'LegalpageModelBodyField'
  blocks: Array<Scalars['String']>
  links: Array<Scalars['String']>
  value: Scalars['JsonField']
}

/** Record of type LegalPage (legalpage) */
export type LegalpageRecord = {
  __typename?: 'LegalpageRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  body?: Maybe<LegalpageModelBodyField>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  updatedAt: Scalars['DateTime']
}

/** Record of type LegalPage (legalpage) */
export type LegalpageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>
}

/** Record of type Metadata (metadatum) */
export type MetadatumRecord = {
  __typename?: 'MetadatumRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  id: Scalars['ItemId']
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Metadata (metadatum) */
export type MetadatumRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Metadata (metadatum) */
export type MetadatumRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>
}

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
}

export type NodroppageModelBodyField = {
  __typename?: 'NodroppageModelBodyField'
  blocks: Array<Scalars['String']>
  links: Array<Scalars['String']>
  value: Scalars['JsonField']
}

/** Record of type NoDropPage (nodroppage) */
export type NodroppageRecord = {
  __typename?: 'NodroppageRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  body?: Maybe<NodroppageModelBodyField>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  updatedAt: Scalars['DateTime']
}

/** Record of type NoDropPage (nodroppage) */
export type NodroppageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>
}

/** Specifies how to filter by position (sorted and tree-like collections) */
export type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']>
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']>
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']>
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']>
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']>
}

export type ProductModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  allergens?: InputMaybe<TextFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  description?: InputMaybe<TextFilter>
  id?: InputMaybe<ItemIdFilter>
  ingredients?: InputMaybe<TextFilter>
  name?: InputMaybe<StringFilter>
  pictures?: InputMaybe<GalleryFilter>
  unitPrice?: InputMaybe<FloatFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
}

export enum ProductModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  CreatedAt_ASC = 'createdAt_ASC',
  CreatedAt_DESC = 'createdAt_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  Name_ASC = 'name_ASC',
  Name_DESC = 'name_DESC',
  UnitPrice_ASC = 'unitPrice_ASC',
  UnitPrice_DESC = 'unitPrice_DESC',
  UpdatedAt_ASC = 'updatedAt_ASC',
  UpdatedAt_DESC = 'updatedAt_DESC',
}

/** Record of type Product (product) */
export type ProductRecord = {
  __typename?: 'ProductRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  allergens?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  id: Scalars['ItemId']
  ingredients?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  pictures: Array<FileField>
  unitPrice?: Maybe<Scalars['FloatType']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Product (product) */
export type ProductRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Product (product) */
export type ProductRecordAllergensArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>
}

/** Record of type Product (product) */
export type ProductRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>
}

/** Record of type Product (product) */
export type ProductRecordIngredientsArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>
}

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>
}

/** The query root for this schema */
export type Query = {
  __typename?: 'Query'
  /** Returns meta information regarding a record collection */
  _allDropsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allFaqcategoriesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allProductsMeta: CollectionMetadata
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta?: Maybe<CollectionMetadata>
  /** Returns the single instance record */
  _site: Site
  /** Returns a collection of records */
  allDrops: Array<DropRecord>
  /** Returns a collection of records */
  allFaqcategories: Array<FaqcategoryRecord>
  /** Returns a collection of records */
  allProducts: Array<ProductRecord>
  /** Returns a collection of assets */
  allUploads: Array<FileField>
  /** Returns a specific record */
  drop?: Maybe<DropRecord>
  /** Returns the single instance record */
  droppage?: Maybe<DroppageRecord>
  /** Returns the single instance record */
  errorpage?: Maybe<ErrorpageRecord>
  /** Returns a specific record */
  faqcategory?: Maybe<FaqcategoryRecord>
  /** Returns the single instance record */
  faqpage?: Maybe<FaqpageRecord>
  /** Returns the single instance record */
  legalpage?: Maybe<LegalpageRecord>
  /** Returns the single instance record */
  nodroppage?: Maybe<NodroppageRecord>
  /** Returns a specific record */
  product?: Maybe<ProductRecord>
  /** Returns the single instance record */
  termspage?: Maybe<TermspageRecord>
  /** Returns a specific asset */
  upload?: Maybe<FileField>
}

/** The query root for this schema */
export type Query_AllDropsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<DropModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllFaqcategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<FaqcategoryModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllProductsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ProductModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryAllDropsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<DropModelFilter>
  first?: InputMaybe<Scalars['IntType']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<DropModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']>
}

/** The query root for this schema */
export type QueryAllFaqcategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<FaqcategoryModelFilter>
  first?: InputMaybe<Scalars['IntType']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<FaqcategoryModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']>
}

/** The query root for this schema */
export type QueryAllProductsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ProductModelFilter>
  first?: InputMaybe<Scalars['IntType']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']>
}

/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  first?: InputMaybe<Scalars['IntType']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']>
}

/** The query root for this schema */
export type QueryDropArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<DropModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<DropModelOrderBy>>>
}

/** The query root for this schema */
export type QueryDroppageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryErrorpageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryFaqcategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<FaqcategoryModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<FaqcategoryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryFaqpageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryLegalpageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryNodroppageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryProductArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ProductModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTermspageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
}

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>
}

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage'
  alt?: Maybe<Scalars['String']>
  aspectRatio: Scalars['FloatType']
  base64?: Maybe<Scalars['String']>
  bgColor?: Maybe<Scalars['String']>
  height: Scalars['IntType']
  sizes: Scalars['String']
  src: Scalars['String']
  srcSet: Scalars['String']
  title?: Maybe<Scalars['String']>
  webpSrcSet: Scalars['String']
  width: Scalars['IntType']
}

export type SeoField = {
  __typename?: 'SeoField'
  description?: Maybe<Scalars['String']>
  image?: Maybe<FileField>
  title?: Maybe<Scalars['String']>
  twitterCard?: Maybe<Scalars['String']>
}

export type Site = {
  __typename?: 'Site'
  favicon?: Maybe<FileField>
  faviconMetaTags: Array<Tag>
  globalSeo?: Maybe<GlobalSeoField>
  locales: Array<SiteLocale>
}

export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>
}

export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export enum SiteLocale {
  Fr = 'fr',
}

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>
}

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']>
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']>
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']>
  pattern: Scalars['String']
  regexp?: InputMaybe<Scalars['BooleanType']>
}

export type Tag = {
  __typename?: 'Tag'
  attributes?: Maybe<Scalars['MetaTagAttributes']>
  content?: Maybe<Scalars['String']>
  tag: Scalars['String']
}

export type TermspageModelBodyField = {
  __typename?: 'TermspageModelBodyField'
  blocks: Array<Scalars['String']>
  links: Array<Scalars['String']>
  value: Scalars['JsonField']
}

/** Record of type TermsPage (termspage) */
export type TermspageRecord = {
  __typename?: 'TermspageRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  body?: Maybe<TermspageModelBodyField>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  updatedAt: Scalars['DateTime']
}

/** Record of type TermsPage (termspage) */
export type TermspageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter text fields */
export type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']>
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>
}

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>
}

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']>
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']>
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
}

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']>
}

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export type UploadFilter = {
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>
  _createdAt?: InputMaybe<UploadCreatedAtFilter>
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>
  alt?: InputMaybe<UploadAltFilter>
  author?: InputMaybe<UploadAuthorFilter>
  basename?: InputMaybe<UploadBasenameFilter>
  colors?: InputMaybe<UploadColorsFilter>
  copyright?: InputMaybe<UploadCopyrightFilter>
  filename?: InputMaybe<UploadFilenameFilter>
  format?: InputMaybe<UploadFormatFilter>
  height?: InputMaybe<UploadHeightFilter>
  id?: InputMaybe<UploadIdFilter>
  inUse?: InputMaybe<InUseFilter>
  md5?: InputMaybe<UploadMd5Filter>
  mimeType?: InputMaybe<UploadMimeTypeFilter>
  notes?: InputMaybe<UploadNotesFilter>
  orientation?: InputMaybe<OrientationFilter>
  resolution?: InputMaybe<ResolutionFilter>
  size?: InputMaybe<UploadSizeFilter>
  smartTags?: InputMaybe<UploadTagsFilter>
  tags?: InputMaybe<UploadTagsFilter>
  title?: InputMaybe<UploadTitleFilter>
  type?: InputMaybe<TypeFilter>
  width?: InputMaybe<UploadWidthFilter>
}

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']>
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']>
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']>
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']>
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']>
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']>
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']>
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']>
}

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']>
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']>
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>
}

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']>
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']>
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']>
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']>
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export enum UploadOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  Basename_ASC = 'basename_ASC',
  Basename_DESC = 'basename_DESC',
  Filename_ASC = 'filename_ASC',
  Filename_DESC = 'filename_DESC',
  Format_ASC = 'format_ASC',
  Format_DESC = 'format_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  MimeType_ASC = 'mimeType_ASC',
  MimeType_DESC = 'mimeType_DESC',
  Resolution_ASC = 'resolution_ASC',
  Resolution_DESC = 'resolution_DESC',
  Size_ASC = 'size_ASC',
  Size_DESC = 'size_DESC',
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square',
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']>
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']>
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']>
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']>
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']>
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']>
}

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']>
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']>
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video',
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']>
}

export type UploadVideoField = {
  __typename?: 'UploadVideoField'
  duration: Scalars['Int']
  framerate: Scalars['Int']
  mp4Url?: Maybe<Scalars['String']>
  muxAssetId: Scalars['String']
  muxPlaybackId: Scalars['String']
  streamingUrl: Scalars['String']
  thumbnailUrl: Scalars['String']
}

export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>
  res?: InputMaybe<VideoMp4Res>
}

export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>
}

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']>
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']>
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']>
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']>
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']>
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']>
}

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium',
}

export type FocalPoint = {
  __typename?: 'focalPoint'
  x?: Maybe<Scalars['FloatType']>
  y?: Maybe<Scalars['FloatType']>
}

export type DropsQueryVariables = Exact<{ [key: string]: never }>

export type DropsQuery = {
  __typename?: 'Query'
  allDrops: Array<{
    __typename?: 'DropRecord'
    id: any
    slug?: string | null
    releaseDate?: any | null
    deliveryDate?: any | null
    endDate?: any | null
    title?: string | null
    description?: string | null
    pictures: Array<{
      __typename?: 'FileField'
      id: any
      alt?: string | null
      url: string
    }>
    products: Array<{
      __typename?: 'ProductRecord'
      id: any
      description?: string | null
      name?: string | null
      unitPrice?: any | null
      allergens?: string | null
      ingredients?: string | null
      pictures: Array<{
        __typename?: 'FileField'
        id: any
        alt?: string | null
        url: string
      }>
    }>
  }>
}

export type DropByIdQueryVariables = Exact<{
  dropId?: InputMaybe<Scalars['ItemId']>
}>

export type DropByIdQuery = {
  __typename?: 'Query'
  drop?: {
    __typename?: 'DropRecord'
    id: any
    slug?: string | null
    releaseDate?: any | null
    endDate?: any | null
    deliveryDate?: any | null
    title?: string | null
    description?: string | null
    pictures: Array<{
      __typename?: 'FileField'
      id: any
      alt?: string | null
      url: string
    }>
    products: Array<{
      __typename?: 'ProductRecord'
      id: any
      name?: string | null
      description?: string | null
      unitPrice?: any | null
      pictures: Array<{
        __typename?: 'FileField'
        id: any
        alt?: string | null
        url: string
      }>
    }>
  } | null
}

export type NextIncomingDropsQueryVariables = Exact<{
  TODAY?: InputMaybe<Scalars['Date']>
}>

export type NextIncomingDropsQuery = {
  __typename?: 'Query'
  allDrops: Array<{
    __typename?: 'DropRecord'
    id: any
    slug?: string | null
    releaseDate?: any | null
    endDate?: any | null
    deliveryDate?: any | null
    title?: string | null
    description?: string | null
    pictures: Array<{
      __typename?: 'FileField'
      id: any
      alt?: string | null
      url: string
    }>
    products: Array<{
      __typename?: 'ProductRecord'
      id: any
      name?: string | null
      description?: string | null
      unitPrice?: any | null
      pictures: Array<{
        __typename?: 'FileField'
        id: any
        alt?: string | null
        url: string
      }>
    }>
  }>
  droppage?: {
    __typename?: 'DroppageRecord'
    title?: string | null
    description?: string | null
    metadata: Array<{
      __typename?: 'MetadatumRecord'
      title?: string | null
      description?: string | null
    }>
  } | null
}

export type LegalPageQueryVariables = Exact<{ [key: string]: never }>

export type LegalPageQuery = {
  __typename?: 'Query'
  legalpage?: {
    __typename?: 'LegalpageRecord'
    body?: {
      __typename?: 'LegalpageModelBodyField'
      blocks: Array<string>
      links: Array<string>
      value: any
    } | null
  } | null
}

export type TermsPageQueryVariables = Exact<{ [key: string]: never }>

export type TermsPageQuery = {
  __typename?: 'Query'
  termspage?: {
    __typename?: 'TermspageRecord'
    body?: {
      __typename?: 'TermspageModelBodyField'
      blocks: Array<string>
      links: Array<string>
      value: any
    } | null
  } | null
}

export type FaqPageQueryVariables = Exact<{ [key: string]: never }>

export type FaqPageQuery = {
  __typename?: 'Query'
  faqpage?: {
    __typename?: 'FaqpageRecord'
    items: Array<{
      __typename?: 'FaqitemRecord'
      id: any
      question?: string | null
      updatedAt: any
      answer?: {
        __typename?: 'FaqitemModelAnswerField'
        blocks: Array<string>
        links: Array<string>
        value: any
      } | null
      category?: {
        __typename?: 'FaqcategoryRecord'
        id: any
        name?: string | null
        position?: any | null
      } | null
    }>
  } | null
}

export type ErrorPageQueryVariables = Exact<{ [key: string]: never }>

export type ErrorPageQuery = {
  __typename?: 'Query'
  errorpage?: {
    __typename?: 'ErrorpageRecord'
    body?: {
      __typename?: 'ErrorpageModelBodyField'
      blocks: Array<string>
      links: Array<string>
      value: any
    } | null
  } | null
}

export type NoDropPageQueryVariables = Exact<{ [key: string]: never }>

export type NoDropPageQuery = {
  __typename?: 'Query'
  nodroppage?: {
    __typename?: 'NodroppageRecord'
    body?: {
      __typename?: 'NodroppageModelBodyField'
      blocks: Array<string>
      links: Array<string>
      value: any
    } | null
  } | null
}

export const DropsDocument = gql`
  query Drops {
    allDrops {
      id
      slug
      releaseDate
      deliveryDate
      endDate
      pictures {
        id
        alt
        url
      }
      products {
        id
        description
        name
        unitPrice
        allergens
        ingredients
        pictures {
          id
          alt
          url
        }
      }
      title
      description
    }
  }
`

/**
 * __useDropsQuery__
 *
 * To run a query within a React component, call `useDropsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDropsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDropsQuery({
 *   variables: {
 *   },
 * });
 */
export function useDropsQuery(
  baseOptions?: Apollo.QueryHookOptions<DropsQuery, DropsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DropsQuery, DropsQueryVariables>(
    DropsDocument,
    options
  )
}
export function useDropsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<DropsQuery, DropsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<DropsQuery, DropsQueryVariables>(
    DropsDocument,
    options
  )
}
export type DropsQueryHookResult = ReturnType<typeof useDropsQuery>
export type DropsLazyQueryHookResult = ReturnType<typeof useDropsLazyQuery>
export type DropsQueryResult = Apollo.QueryResult<
  DropsQuery,
  DropsQueryVariables
>
export const DropByIdDocument = gql`
  query dropById($dropId: ItemId) {
    drop(filter: { id: { eq: $dropId } }) {
      id
      slug
      releaseDate
      endDate
      deliveryDate
      endDate
      pictures {
        id
        alt
        url
      }
      products {
        id
        name
        description
        unitPrice
        pictures {
          id
          alt
          url
        }
      }
      title
      description
    }
  }
`

/**
 * __useDropByIdQuery__
 *
 * To run a query within a React component, call `useDropByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useDropByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDropByIdQuery({
 *   variables: {
 *      dropId: // value for 'dropId'
 *   },
 * });
 */
export function useDropByIdQuery(
  baseOptions?: Apollo.QueryHookOptions<DropByIdQuery, DropByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DropByIdQuery, DropByIdQueryVariables>(
    DropByIdDocument,
    options
  )
}
export function useDropByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DropByIdQuery,
    DropByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<DropByIdQuery, DropByIdQueryVariables>(
    DropByIdDocument,
    options
  )
}
export type DropByIdQueryHookResult = ReturnType<typeof useDropByIdQuery>
export type DropByIdLazyQueryHookResult = ReturnType<
  typeof useDropByIdLazyQuery
>
export type DropByIdQueryResult = Apollo.QueryResult<
  DropByIdQuery,
  DropByIdQueryVariables
>
export const NextIncomingDropsDocument = gql`
  query nextIncomingDrops($TODAY: Date) {
    allDrops(
      orderBy: endDate_ASC
      filter: { endDate: { gte: $TODAY }, releaseDate: { lte: $TODAY } }
    ) {
      id
      slug
      releaseDate
      endDate
      deliveryDate
      endDate
      pictures {
        id
        alt
        url
      }
      products {
        id
        name
        description
        unitPrice
        pictures {
          id
          alt
          url
        }
      }
      title
      description
    }
    droppage {
      title
      description
      metadata {
        title
        description
      }
    }
  }
`

/**
 * __useNextIncomingDropsQuery__
 *
 * To run a query within a React component, call `useNextIncomingDropsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNextIncomingDropsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNextIncomingDropsQuery({
 *   variables: {
 *      TODAY: // value for 'TODAY'
 *   },
 * });
 */
export function useNextIncomingDropsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    NextIncomingDropsQuery,
    NextIncomingDropsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    NextIncomingDropsQuery,
    NextIncomingDropsQueryVariables
  >(NextIncomingDropsDocument, options)
}
export function useNextIncomingDropsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NextIncomingDropsQuery,
    NextIncomingDropsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    NextIncomingDropsQuery,
    NextIncomingDropsQueryVariables
  >(NextIncomingDropsDocument, options)
}
export type NextIncomingDropsQueryHookResult = ReturnType<
  typeof useNextIncomingDropsQuery
>
export type NextIncomingDropsLazyQueryHookResult = ReturnType<
  typeof useNextIncomingDropsLazyQuery
>
export type NextIncomingDropsQueryResult = Apollo.QueryResult<
  NextIncomingDropsQuery,
  NextIncomingDropsQueryVariables
>
export const LegalPageDocument = gql`
  query LegalPage {
    legalpage {
      body {
        blocks
        links
        value
      }
    }
  }
`

/**
 * __useLegalPageQuery__
 *
 * To run a query within a React component, call `useLegalPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useLegalPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLegalPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useLegalPageQuery(
  baseOptions?: Apollo.QueryHookOptions<LegalPageQuery, LegalPageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<LegalPageQuery, LegalPageQueryVariables>(
    LegalPageDocument,
    options
  )
}
export function useLegalPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LegalPageQuery,
    LegalPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<LegalPageQuery, LegalPageQueryVariables>(
    LegalPageDocument,
    options
  )
}
export type LegalPageQueryHookResult = ReturnType<typeof useLegalPageQuery>
export type LegalPageLazyQueryHookResult = ReturnType<
  typeof useLegalPageLazyQuery
>
export type LegalPageQueryResult = Apollo.QueryResult<
  LegalPageQuery,
  LegalPageQueryVariables
>
export const TermsPageDocument = gql`
  query TermsPage {
    termspage {
      body {
        blocks
        links
        value
      }
    }
  }
`

/**
 * __useTermsPageQuery__
 *
 * To run a query within a React component, call `useTermsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useTermsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTermsPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useTermsPageQuery(
  baseOptions?: Apollo.QueryHookOptions<TermsPageQuery, TermsPageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TermsPageQuery, TermsPageQueryVariables>(
    TermsPageDocument,
    options
  )
}
export function useTermsPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TermsPageQuery,
    TermsPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TermsPageQuery, TermsPageQueryVariables>(
    TermsPageDocument,
    options
  )
}
export type TermsPageQueryHookResult = ReturnType<typeof useTermsPageQuery>
export type TermsPageLazyQueryHookResult = ReturnType<
  typeof useTermsPageLazyQuery
>
export type TermsPageQueryResult = Apollo.QueryResult<
  TermsPageQuery,
  TermsPageQueryVariables
>
export const FaqPageDocument = gql`
  query FaqPage {
    faqpage {
      items {
        id
        question
        answer {
          blocks
          links
          value
        }
        updatedAt
        category {
          id
          name
          position
        }
      }
    }
  }
`

/**
 * __useFaqPageQuery__
 *
 * To run a query within a React component, call `useFaqPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useFaqPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFaqPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useFaqPageQuery(
  baseOptions?: Apollo.QueryHookOptions<FaqPageQuery, FaqPageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FaqPageQuery, FaqPageQueryVariables>(
    FaqPageDocument,
    options
  )
}
export function useFaqPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FaqPageQuery, FaqPageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FaqPageQuery, FaqPageQueryVariables>(
    FaqPageDocument,
    options
  )
}
export type FaqPageQueryHookResult = ReturnType<typeof useFaqPageQuery>
export type FaqPageLazyQueryHookResult = ReturnType<typeof useFaqPageLazyQuery>
export type FaqPageQueryResult = Apollo.QueryResult<
  FaqPageQuery,
  FaqPageQueryVariables
>
export const ErrorPageDocument = gql`
  query ErrorPage {
    errorpage {
      body {
        blocks
        links
        value
      }
    }
  }
`

/**
 * __useErrorPageQuery__
 *
 * To run a query within a React component, call `useErrorPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useErrorPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useErrorPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useErrorPageQuery(
  baseOptions?: Apollo.QueryHookOptions<ErrorPageQuery, ErrorPageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ErrorPageQuery, ErrorPageQueryVariables>(
    ErrorPageDocument,
    options
  )
}
export function useErrorPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ErrorPageQuery,
    ErrorPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ErrorPageQuery, ErrorPageQueryVariables>(
    ErrorPageDocument,
    options
  )
}
export type ErrorPageQueryHookResult = ReturnType<typeof useErrorPageQuery>
export type ErrorPageLazyQueryHookResult = ReturnType<
  typeof useErrorPageLazyQuery
>
export type ErrorPageQueryResult = Apollo.QueryResult<
  ErrorPageQuery,
  ErrorPageQueryVariables
>
export const NoDropPageDocument = gql`
  query NoDropPage {
    nodroppage {
      body {
        blocks
        links
        value
      }
    }
  }
`

/**
 * __useNoDropPageQuery__
 *
 * To run a query within a React component, call `useNoDropPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoDropPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoDropPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useNoDropPageQuery(
  baseOptions?: Apollo.QueryHookOptions<
    NoDropPageQuery,
    NoDropPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<NoDropPageQuery, NoDropPageQueryVariables>(
    NoDropPageDocument,
    options
  )
}
export function useNoDropPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NoDropPageQuery,
    NoDropPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<NoDropPageQuery, NoDropPageQueryVariables>(
    NoDropPageDocument,
    options
  )
}
export type NoDropPageQueryHookResult = ReturnType<typeof useNoDropPageQuery>
export type NoDropPageLazyQueryHookResult = ReturnType<
  typeof useNoDropPageLazyQuery
>
export type NoDropPageQueryResult = Apollo.QueryResult<
  NoDropPageQuery,
  NoDropPageQueryVariables
>
