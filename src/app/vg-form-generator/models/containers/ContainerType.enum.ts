export enum ContainerType {
  TABS = 'tab',
  MASTERDETAILS = 'master-detail',
  CONTAINER = 'container'
}

export const ContainerTypes = Object.keys(ContainerType)
  .filter(type => typeof ContainerType[type as string] === 'string')
  .map(type => ContainerType[type as string]);
