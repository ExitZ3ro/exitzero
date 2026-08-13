// TEMPLATE — copy to content/projects/<slug>.js, fill in, then add
//   <script src="content/projects/<slug>.js"></script>
// to index.html.
//
// For a locked entry, put the file in content/classified/ and use
// EXITZERO.classified({...}) instead — same shape.

EXITZERO.project({
  slug: 'project-name',                   // the directory name

  // What the button in ~/projects/ shows.
  card: {
    tag:   'short category',              // small label beside the name
    desc:  'What it is, in a couple of lines.',
    stack: ['Python', 'OpenCV'],
  },

  // Optional. Same shape as a role's page. Omit it and the entry 404s,
  // which is the right state while the writeup is unwritten.
  //
  // page: {
  //   project:  { name: '…', desc: '…' },
  //   sections: [ { title: '…', body: '…', tech: ['…'] } ],
  //   stack:    ['…'],
  // },
});
