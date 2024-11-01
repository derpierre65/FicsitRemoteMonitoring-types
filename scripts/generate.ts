import axios from 'axios';
import * as fs from 'fs';
import type {Coordinates, GeometryLine, GeometryPoint} from '../src';

const types = {
  InventoryItemObject: {
    fields: {
      Name: 'string',
      ClassName: 'string',
      Amount: 'number',
    },
  },
  IDClassObject: {
    fields: {
      ID: 'number',
      Name: 'string',
      ClassName: 'string',
    },
  },
  ClassObject: {
    fields: {
      Name: 'string',
      ClassName: 'string',
    },
  },
  CoordinatesWithRotation: {
    fields: {
      x: 'number',
      y: 'number',
      z: 'number',
      rotation: 'number',
    },
  },
  Coordinates: {
    fields: {
      x: 'number',
      y: 'number',
      z: 'number',
    },
  },
  PowerInfoObject: {
    fields: {
      CircuitGroupID: 'number',
      CircuitID: 'number',
      PowerConsumed: 'number',
      MaxPowerConsumed: 'number',
    },
  },
  GeometryPoint: {
    fields: {
      type: '!Point',
      coordinates: 'Coordinates',
    },
  },
  GeometryLine: {
    fields: {
      type: '!Line',
      coordinates: 'Coordinates[]',
    },
  },
  HasLocationWIthRotation: {
    includes: true,
    fields: {
      location: 'CoordinatesWithRotation',
    },
  },
  HasLocation: {
    includes: true,
    fields: {
      location: 'Coordinates',
    },
  },
};

function findTypeByKeys(keys: object) {
  for (const type of Object.keys(types)) {
    let found = true;
    const fields = Object.keys(types[type].fields);
    for (const field of fields) {
      if (keys[field] !== types[type].fields[field]) {
        found = false;
        break;
      }
    }

    if (found) {
      for (const field of fields) {
        delete keys[field];
      }

      return type;
    }
  }

  return null;
}

function generateType(obj: object, ignore: string[] = []) {
  const keys = {};

  for (const key of Object.keys(obj)) {
    if (ignore.some(ignoreKey => ignoreKey === key)) {
      continue;
    }

    if (Array.isArray(obj[key])) {
      keys[key] = (obj[key][0] ? generateType(obj[key][0]) : 'unknown') + '[]';
    } else if (typeof obj[key] === 'object') {
      keys[key] = obj[key] ? generateType(obj[key]) : 'null';
    } else {
      keys[key] = typeof obj[key];
    }
  }

  let includeTypes = [];
  let type = null;
  while (type = findTypeByKeys(keys)) {
    includeTypes.push(type);
  }

  let includedTypes = includeTypes.join(' & ');
  const foundFields = Object.keys(keys);

  if (!foundFields.length) {
    return includedTypes;
  }

  if (includedTypes.length) {
    includedTypes += ' & ';
  }

  return `${includedTypes}{
  ${foundFields.map(key => `${key}: ${keys[key]};`).join('\n  ')}
  }`;
}

function generateTypes(endpoint: string, ignore: string[] = []) {
  console.log(endpoint);
  return axios
    .get(`http://localhost:8081/${endpoint}`)
    .then(({data}) => {
      let generatedTypes = '';
      let objectType = '';

      const responseType = endpoint.substring(0, 1).toUpperCase() + endpoint.substring(1);
      let objectTypeName = endpoint.substring(3) + 'Object';
      let responseObjectType = endpoint.substring(3) + 'Object';

      if (Array.isArray(data)) {
        objectType = generateType(data[0] || {}, ignore);
        responseObjectType += '[]';
      } else {
        objectType = generateType(data, ignore);
      }

      generatedTypes = `
      type ${objectTypeName} = ${objectType};

      type ${responseType}Response = ${responseObjectType};`;

      try {
        fs.writeFile(`generated/${endpoint}.d.ts`, generatedTypes, () => {
          // do nothing
        });
      } catch (e) {
        console.log(e);
      }
    })
}

const endpoints = [
//  'getAssembler',
//  'getBelts',
//  'getBiomassGenerator',
//  'getBlender',
//  'getCloudInv',
//  'getCoalGenerator',
//  'getConstructor',
//  'getDoggo',
//  'getDrone',
//  'getDroneStation',
//  'getDropPod',
  'getConverter',
  'getEncoder',
//  'getExtractor',
//  'getExplorationSink',
//  'getFoundry',
//  'getFrackingActivator',
//  'getFuelGenerator',
//  'getGeothermalGenerator',
//  'getHUBTerminal',
//  'getHypertube',
//  'getManufacturer',
//  'getModList',
//  'getNuclearGenerator',
//  'getPackager',
//  'getParticle',
//  'getPipes',
//  'getPlayer',
  'getPortal',
//  'getPower',
//  'getPowerSlug',
//  'getPowerUsage',
//  'getProdStats',
//  'getPump',
//  'getRadarTower',
  'getRecipes',
//  'getRefinery',
//  'getResourceGeyser', // BROKEN?
//  'getResourceNode',
//  'getResourceSink',
//  'getResourceSinkBuilding',
//  'getResourceWell', // same response like resource node?
//  'getSessionInfo',
  'getSchematics',
//  'getSinkList',
//  'getSmelter',
//  'getSpaceElevator',
//  'getStorageInv',
//  'getSwitches',
//  'getPaths',
//  'getExplorer',
//  'getFactoryCart',
//  'getTractor',
//  'getTruck',
//  'getTruckStation',
//  'getVehicles',
//  'getTrains',
//  'getTrainStation',
//  'getWorldInv',
//  'getResearchTrees',
//  'getFactory',
//  'getGenerators',
];

(async() => {
  for ( const endpoint of endpoints ) {
    generateTypes(endpoint, ['features']);
  }
})()