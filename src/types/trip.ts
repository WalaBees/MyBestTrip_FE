export interface Trip {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  description: string;
  startDate: string;
  endDate: string;
}

export type ViewMode = 'list' | 'grid'; 