// TEMPLATE — copy to content/experience/<slug>.js, fill in, then add
//   <script src="content/experience/<slug>.js"></script>
// to index.html. The card, the detail page, `ls` and tab-completion all
// follow from this one file.

EXITZERO.role('shortid', {
  slug:      'company-slug',              // the directory name: ~/experience/<slug>
  title:     'Your Title There',
  company:   'Company Name',
  period:    'Mon 20XX — Mon 20XX',       // or 'Mon 20XX — Present'
  location:  'City, Country',
  active:    false,                       // true adds the ACTIVE badge
  status:    'completed',                 // shown in the detail meta grid
  logo:      './assets/company-logo.png', // optional
  heroVideo: './assets/videos/x-hero.mp4',// optional; NO SIGNAL until it exists

  // What the button in ~/experience/ shows. Independent of the page —
  // this is the pitch, the page is the detail.
  card: {
    subtitle: 'One line under the title',
    desc:     'Two or three lines. What you actually did, concretely enough ' +
              'that someone can tell whether they want to click.',
  },

  // What opens when the card is clicked.
  // Delete this whole block and the entry 404s instead — useful while a
  // writeup is still being drafted.
  page: {
    project: {
      name: 'The thing you worked on',
      desc: 'A paragraph framing the problem.',
    },

    sections: [
      {
        title: 'Area of work',
        body:  'What you did and why it was hard.',
        tech:  ['C++', 'STM32'],
      },
    ],

    stack: ['C++', 'Python'],

    // Optional. Bare paths, or { src, caption } for hover captions.
    // Omit it entirely and no media section is rendered.
    //
    // gallery: [
    //   'content/<slug>/airframe.png',
    //   { src: 'content/<slug>/ground-station.png', caption: 'telemetry view' },
    // ],
  },
});
