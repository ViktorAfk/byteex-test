interface Icon {
  data: {
    id: number;
    attributes: {
      name: string;
      width: number;
      height: number;
      url: string;
    };
  };
}

export interface HeroAdvantage {
  id: number;
  attributes: {
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    icon: Icon;
  };
}

export interface ApiResponse<T> {
  data: T;
}

export interface HeroReview {
  id: number;
  attributes: {
    userName: string;
    additionalInfo: string;
    description: string;
    rate: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    userIcon: Icon;
  };
}
