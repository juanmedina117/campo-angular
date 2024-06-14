export interface ConsumoMapsInterfece {
    type: string
    name: string
    crs: Crs
    features: Feature[]
  }
  
  export interface Crs {
    type: string
    properties: Properties
  }
  
  export interface Properties {
    name: string
  }
  
  export interface Feature {
    type: string
    geometry: Geometry
  }
  
  
  
  export interface Geometry {
    type: string
    coordinates: number[][][][]
  }
  