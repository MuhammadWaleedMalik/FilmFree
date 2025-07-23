export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'filmmaker' | 'festival' | 'admin';
  isVerified: boolean;
  createdAt: Date;
}

export interface Film {
  id: string;
  title: string;
  director: string;
  genre: string;
  duration: number;
  year: number;
  poster: string;
  description: string;
  trailer?: string;
  submissionCount: number;
  awards: string[];
  userId: string;
}

export interface Festival {
  id: string;
  name: string;
  location: string;
  startDate: Date;
  endDate: Date;
  description: string;
  banner: string;
  categories: string[];
  entryFee: number;
  deadline: Date;
  submissionCount: number;
  awards: string[];
  website?: string;
  isActive: boolean;
}

export interface Submission {
  id: string;
  filmId: string;
  festivalId: string;
  status: 'pending' | 'accepted' | 'rejected' | 'withdrawn';
  submittedAt: Date;
  fee: number;
  notes?: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

export interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

export type RouteType = 'public' | 'protected' | 'auth';