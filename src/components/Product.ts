interface Product {
  id: string;
  version: number;
  country: string;
  ean: string;
  productDescription: string;
  productName: string;
  productQuantity: number;
  compositionId: string;
  labelId: string;
  packageTypeId: string;
  portionId: string;
  producerId: string;
  unitId: string;
  labelDTO: LabelDTO;
  compositionDTO: CompositionDTO;
  nutritionalValueDTOS: NutritionalValueDTO[];
  categoryDTO: CategoryDTO;
  ratingDTOS: RatingDTO[];
  nutritionalIndexDTOS: NutritionalIndexDTO[];
  productIndexDTOS: ProductIndexDTO[];
}

interface LabelDTO {
  storage: string;
  durability: string;
  instructionsAfterOpening: string;
  preparation: string | null;
  allergens: string;
  image?: string; // Base64
}

interface CompositionDTO {
  ingredientDTOS: IngredientDTO[];
  additionDTOS: AdditionDTO[];
  flavourDTO: FlavourDTO | null;
}

interface IngredientDTO {
  name: string;
}

interface AdditionDTO {
  name: string;
}

interface FlavourDTO {
  name: string;
}

interface NutritionalValueDTO {
  nutritionalValueName: NutritionalValueNameDTO;
  quantity: number;
  unit: UnitDTO;
  nrv: number;
}

interface NutritionalValueNameDTO {
  group: NutritionalValueGroupDTO;
  name: string;
}

interface NutritionalValueGroupDTO {
  groupName: string;
}

interface UnitDTO {
  name: string;
}

interface CategoryDTO {
  id: string;
  name: string;
}

interface RatingDTO {
  groupName: string;
  name: string;
}

interface NutritionalIndexDTO {
  indexValue: number;
  legend: string | null;
}

interface ProductIndexDTO {
  indexName: string;
  indexValue: number;
}