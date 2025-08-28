export interface Favorite {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  description: string;
  addedDate: string;
}

export type ViewMode = 'list' | 'grid'; 