export interface MetricItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
  accentColor: string;
}

export interface ConnectorInfo {
  id: string;
  name: string;
  iconName: string;
  category: string;
  description: string;
  whatItProvides: string;
  realRunResult: {
    status: 'success' | 'warning' | 'error';
    details: string;
    itemsFound: string[];
  };
}

export interface ProblemPoint {
  id: string;
  number: string;
  title: string;
  description: string;
  impactTag: string;
  color: string;
}

export interface DualAnswerDetail {
  title: string;
  question: string;
  badge: string;
  color: string;
  items: {
    title: string;
    description: string;
    concreteExample: string;
  }[];
}

export interface ComparisonRow {
  aspect: string;
  traditional: string;
  bia: string;
  impact: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: string;
  tag: string;
}
