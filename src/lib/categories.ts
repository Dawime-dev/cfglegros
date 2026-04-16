export const categories = {
  metiers: {
    label: 'Métiers',
    description: 'Découvrez les métiers qui recrutent, les fiches métiers détaillées et les perspectives de carrière.',
    color: 'bg-sky-50 text-sky-700 ring-sky-200',
    icon: 'briefcase',
  },
  formations: {
    label: 'Formations',
    description: 'Guides et conseils pour choisir votre formation, comprendre l\'alternance et financer votre parcours.',
    color: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    icon: 'book',
  },
  ecoles: {
    label: 'Écoles',
    description: 'Comparatifs, labels qualité et conseils pour choisir le bon établissement de formation.',
    color: 'bg-violet-50 text-violet-700 ring-violet-200',
    icon: 'building',
  },
  orientation: {
    label: 'Orientation',
    description: 'Trouver sa voie : bilans de compétences, tests d\'orientation et accompagnement personnalisé.',
    color: 'bg-amber-50 text-amber-700 ring-amber-200',
    icon: 'compass',
  },
  actualites: {
    label: 'Actualités',
    description: 'Les dernières nouvelles sur l\'éducation, les réformes et les aides disponibles.',
    color: 'bg-rose-50 text-rose-700 ring-rose-200',
    icon: 'newspaper',
  },
} as const;

export type CategoryKey = keyof typeof categories;
