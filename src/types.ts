export type Language = 'en' | 'ru' | 'uz';

export interface ProjectData {
  id: string;
  title: string;
  cat: string;
  desc: string;
  fullDesc: string;
  aiBenefit: string;
  businessValue: string;
  price: string;
  challenges: string[];
  tags: string[];
  image: string;
  link?: string;
}
