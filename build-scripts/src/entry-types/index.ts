interface ICategory {
  description: string|null;
  entries: any[];
  name: string|null;
}

export function createCategory() {
  const item: ICategory = {
    description: null,
    entries: [],
    name: null,
  };
  return item;
}

interface IEntry {
  [unknowProps: string]: any;
  examples: IExample[];
  parameters: IParameter[];
}
export function createEntry() {
  const item: IEntry = {
    category: null,
    description: null,
    examples: [],
    kind:  null,
    name:  null,
    parameters: [],
    returns: null,
    subcategory: null,
    summary:  null,
    tags: [],
    todo:  null,
  };
  return item;
}

interface IExample {
  code: string|null;
  description: string|null;
}
export function createExample() {
  const item: IExample =  {
    code: null,
    description: null,
  };
  return item;
}

interface IParameter {
  description: string|null;
  name: string|null;
  optional: boolean;
  type: string[];
}
export function createParameter() {
  const item: IParameter = {
    description: null,
    name: null,
    optional: false,
    type: [],
  };
  return item;
}

interface IReturnValue {
  description: string|null;
  name: string|null;
  type: string[];
}
export function createReturnValue() {
  const item: IReturnValue = {
    description: null,
    name: null,
    type: [],
  };
  return item;
}

export function createTag() {
  return {
    description: null,
    name: null,
    title: null,
    type: null,
  };
}
