// Syos Aerospace — Aerospace Software Engineer
// Registered on load. Order on the page follows load order in index.html.
EXITZERO.role('syos', {
  slug:      'syos-aerospace',
  title:     'Aerospace Software Engineer',
  company:   'Syos Aerospace',
  period:    'Sep 2025 — Present',
  location:  'Tauranga, New Zealand',
  active:    true,
  status:    'active engagement',
  logo:      './assets/syos-logo.png',
  heroVideo: './assets/videos/syos-hero.mp4',

  // what the button in ~/experience/ shows
  card: {
    subtitle: 'Current engagement — details being written up',
    desc:     'Software for uncrewed platforms across land, air, sea and subsurface — the ' +
              'same discipline applied to four very different sets of physics.',
  },

  // what opens when you click it. omit `page` and the entry 404s.
  page: {
    project: {
      name: '[details being written up]',
      desc: 'Software for uncrewed platforms operating across land, air, sea and ' +
            'subsurface — the same discipline applied to four very different sets of ' +
            'physics. Live engagement; the case study fills in as work ships.',
    },

    sections: [

    ],

    stack: ['C++', 'Python', 'embedded systems', 'real-time', 'autonomy']
  },
});
