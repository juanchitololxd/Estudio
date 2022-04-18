export interface MateriaNode {
    name: string;
    children?: MateriaNode[];
    
  }

export interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
  }

export interface Materia {
  temas: string[];
  name: string;
  id: string;

}

export interface Tema {
  html: string;
  name: string;
  css: string;
}