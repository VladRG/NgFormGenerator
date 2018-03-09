export enum FieldType {
  TEXT = 'text',
  EMAIL = 'email',
  PASSWORD = 'password',
  SELECT = 'select',
  DATE = 'date',
  DATETIME = 'datetime',
  RADIO = 'radio',
  CHECKBOX = 'checkbox'
}

export const FieldTypes = Object.keys(FieldType)
  .filter(type => typeof FieldType[type as string] === 'string')
  .map(type => FieldType[type as string]);
