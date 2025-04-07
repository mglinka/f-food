
export interface Product {
  UUID: string
  EAN: string
  productName: string
  productDescription: string
  productQuantity: number
  unit: string
  packageType: string
  country: string
  ingredients: string[]
  additions: string[]
  flavour: string[]
  nutritionalIndexes: NutritionalIndex[]
  productIndexes: ProductIndex[]
  storage: string
  durability: string
  instructionsAfterOpening: string
  preparation: string
  allergens: string[]
  portion: Portion
  ratings: Rating[]
  image: string
  nutritionalValues: ProductNutritionalValue[]
}

interface NutritionalIndex{
  legend: string
  indexValue: number
}

interface ProductIndex{
  indexName: string
  indexValue: number
}

interface Portion{
  unit: string
  portionQuantity: number
}

interface Rating{
  groupName: string
  name: string
}

interface ProductNutritionalValue{
  nutritionalValueName: string
  nutritionalValueGroup: string;
  quantity: number;
  unit: string;

}

