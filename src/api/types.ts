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

export interface Banner {
  id: number;
  attributes: {
    benefit: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface LoungeWear {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    picture: Icon;
  };
}

export interface LoungeWearAdvantages {
  id: number;
  attributes: {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    advantageIcon: Icon;
  };
}

export interface OrderRule {
  id: number;
  attributes: {
    orderTitle: string;
    information: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    orderIcon: Icon;
  };
}
