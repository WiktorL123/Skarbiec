// Źródło: docs/04-design-system.md i reference/stitch-original.txt.
// Paleta ciemna jest oddzielona od geometrii, aby później dodać motyw systemowy.
export const darkColors = {
  background: {
    void: '#060E20',
    surface: '#0B1326',
    container: 'rgba(19,27,46,0.65)',
    glass: 'rgba(255,255,255,0.04)',
  },
  border: {
    subtle: 'rgba(255,255,255,0.08)',
    crisp: 'rgba(255,255,255,0.14)',
    top: 'rgba(255,255,255,0.25)',
  },
  accent: {
    emerald: '#10B981',
    cobalt: '#3B82F6',
    violet: '#8B5CF6',
    amber: '#F59E0B',
    coral: '#EF4444',
  },
  text: { primary: '#F8FAFC', secondary: '#94A3B8', tertiary: '#64748B' },
  ambient: {
    emerald: 'rgba(16,185,129,0.18)',
    cobalt: 'rgba(59,130,246,0.12)',
    violet: 'rgba(139,92,246,0.12)',
    transparent: 'rgba(6,14,32,0)',
  },
  reflection: ['rgba(255,255,255,0.08)', 'rgba(15,23,42,0.16)'],
  shadow: '#000000',
} as const;

export const tokens = {
  colors: darkColors,
  radius: { card: 24, hero: 28, avatar: 14 },
  spacing: { screen: 24, card: 32 },
  typography: { greeting: 34, greetingLine: 44 },
  glass: { intensity: 50, minHeight: 210, maxWidth: 420 },
} as const;
