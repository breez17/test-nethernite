export interface PackagesDto {
  packages: PackageDto
}

export interface PackageDto extends PackagesDto {
  hits: number;
  name: string;
  type: string;
}
