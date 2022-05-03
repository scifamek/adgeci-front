export interface IMetaData {
  code: string;
  message: string;
}
export interface IGeneralResponse<D> {
  meta: IMetaData;
  data: D;
}
