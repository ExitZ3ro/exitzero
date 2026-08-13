// AgResearch — Computer Vision Research
// Registered on load. Order on the page follows load order in index.html.
EXITZERO.role('agresearch', {
  slug:      'agresearch',
  title:     'Computer Vision Research',
  company:   'AgResearch',
  period:    'Jan 2021 — Jan 2022',
  location:  'Christchurch, New Zealand',
  active:    false,
  status:    'completed',
  logo:      './assets/agresearch-logo.png',
  heroVideo: './assets/videos/agresearch-hero.mp4',

  // what the button in ~/experience/ shows
  card: {
    subtitle: 'Automated Detection of Contaminants on Shipping Containers',
    desc:     'Field data collection at ports, preprocessing pipelines, and iterating on ' +
              'YOLO-based architectures for real-world contaminant detection under variable ' +
              'lighting and environmental conditions.',
  },

  // what opens when you click it. omit `page` and the entry 404s.
  page: {
    project: {
      name: 'Automated Detection of Contaminants on Shipping Containers',
      desc: 'Applied research on real-world detection of contaminants on shipping ' +
            'containers under highly variable conditions — a real problem with a very ' +
            'messy dataset.',
    },

    sections: [
      {
        title: 'Field Data Collection',
        body:  'Traveled onsite to ports and container-handling yards to capture diverse ' +
               'images under variable lighting and environmental conditions. Deliberately ' +
               'over-sampled edge cases so the dataset reflected real-world complexities ' +
               'rather than idealised ones.',
        tech:  ['field-work', 'imaging'],
      },
      {
        title: 'Data Preparation & Augmentation',
        body:  'Cleansed images, annotated contaminant regions, balanced classes, and ' +
               'augmented with rotations, brightness shifts, and noise injection to ' +
               'improve robustness on unseen samples.',
        tech:  ['Python', 'OpenCV', 'annotation pipelines'],
      },
      {
        title: 'Neural Network Design',
        body:  'Architected and iterated on convolutional and transformer-based ' +
               'architectures (YOLO-family) tailored for precise contaminant detection. ' +
               'Optimised jointly for accuracy, inference speed, and deployment ' +
               'feasibility on the target hardware.',
        tech:  ['YOLO', 'PyTorch', 'CNN', 'transformers'],
      },
    ],

    stack: ['Python', 'YOLO', 'PyTorch', 'OpenCV', 'NumPy']
  },
});
