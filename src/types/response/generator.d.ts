import type {ClassObject, CoordinatesWithRotation, Features, FeaturesProperty, InventoryItemObject} from '../general';
import {Building} from '../../enums/building';

type GeneratorData<ClassName> = ClassObject<ClassName> & {
  location: CoordinatesWithRotation;
  CircuitID: number;
  BaseProd: number;
  DynamicProdCapacity: number;
  DynamicProdDemandFactor: number;
  RegulatedDemandProd: number;
  IsFullSpeed: boolean;
  CanStart: boolean;
  LoadPercentage: number;
  ProdPowerConsumption: number;
  CurrentPotential: number;
  ProductionCapacity: number;
  DefaultProductionCapacity: number;
  PowerProductionPotential: number;
  FuelAmount: number;
  Supplement: ClassObject & {
    Name: 'N/A' | string;
    CurrentConsumed: number;
    MaxConsumed: number;
    PercentFull: number;
  };
  NuclearWarning: string;
  FuelResource: 'Unknown' | 'Geothermal';
  GeoMinPower: number;
  GeoMaxPower: number,
  AvailableFuel: InventoryItemObject[];
  WasteInventory: [];
  features: Features<FeaturesProperty>;
};

type GetGeneratorsResponse = GeneratorData<
  Building.FuelGenerator |
  Building.CoalGenerator |
  Building.BiomassBurner |
  Building.GeothermalGenerator |
  Building.NuclearPowerPlant
>[];
type GetCoalGeneratorResponse = GeneratorData<Building.CoalGenerator>[];
type GetFuelGeneratorResponse = GeneratorData<Building.FuelGenerator>[];
type GetNuclearGeneratorResponse = GeneratorData<Building.NuclearPowerPlant>[];
type GetGeothermalGeneratorResponse = GeneratorData<Building.GeothermalGenerator>[];
type GetBiomassGeneratorResponse = GeneratorData<Building.BiomassBurner>[];

export type {
  GeneratorData,
  GetGeneratorsResponse,
  GetCoalGeneratorResponse,
  GetFuelGeneratorResponse,
  GetNuclearGeneratorResponse,
  GetGeothermalGeneratorResponse,
  GetBiomassGeneratorResponse,
}