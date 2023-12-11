const importAll = (r: Record<string, string>) =>
  Object.entries(r).map(([key, value]) => ({
    key,
    value,
  }));

export const kitchenImages = importAll(
  import.meta.glob('../../public/kuchyne/*.jpg') as Record<string, string>
);

export const bedroomsImages = importAll(
  import.meta.glob('../../public/spalne/*.jpg') as Record<string, string>
);

export const bathroomsImages = importAll(
  import.meta.glob('../../public/kupelne/*.jpg') as Record<string, string>
);

export const accessoriesImages = importAll(
  import.meta.glob('../../public/ine/*.jpg') as Record<string, string>
);

export const wardrobesImages = importAll(
  import.meta.glob('../../public/vstavaneSkrine/*.jpg') as Record<string, string>
);

export const livingWallsImages = importAll(
  import.meta.glob('../../public/obyvacieSteny/*.jpg') as Record<string, string>
);



