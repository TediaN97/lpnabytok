const importAll = (r: Record<string, string>) =>
  Object.entries(r).map(([key, value]) => ({
    key,
    value,
  }));

export const kitchenImages = importAll(
  import.meta.glob('../../public/kuchyne/*.webp') as Record<string, string>
);

export const bedroomsImages = importAll(
  import.meta.glob('../../public/spalne/*.webp') as Record<string, string>
);

export const bathroomsImages = importAll(
  import.meta.glob('../../public/kupelne/*.webp') as Record<string, string>
);

export const wardrobesImages = importAll(
  import.meta.glob('../../public/steny_a_skrine/*.webp') as Record<string, string>
);



