// Kea Aerospace — Aerospace Software Engineer
// Registered on load. Order on the page follows load order in index.html.
EXITZERO.role('kea', {
  slug:      'kea-aerospace',
  title:     'Aerospace Software Engineer',
  company:   'Kea Aerospace',
  period:    'Apr 2022 — Sep 2025',
  location:  'Christchurch, New Zealand',
  active:    false,
  status:    'completed · 3.5 years',
  logo:      './assets/kea-logo.png',
  heroVideo: './assets/videos/kea-hero.mp4',

  // what the button in ~/experience/ shows
  card: {
    subtitle: 'Unmanned Solar-Powered Stratospheric Aircraft',
    desc:     'Avionics firmware for stratospheric flight (STM32, ESP), end-to-end live ' +
              'telemetry infrastructure, in-house ground-station GUIs, and Python tooling ' +
              'for post-flight data analysis.',
  },

  // what opens when you click it. omit `page` and the entry 404s.
  page: {
    project: {
      name: 'Unmanned Solar-Powered Stratospheric Aircraft',
      desc: 'Built the flight software, ground systems, and telemetry infrastructure ' +
            'for a fleet of solar-powered aircraft designed to operate in the ' +
            'stratosphere.',
    },

    sections: [
      {
        title: 'Airborne Embedded Systems',
        body:  'Design, develop, test, and maintain avionics firmware for onboard system ' +
               'monitoring and control. Focused on reliable real-time operation and robust ' +
               'fault-handling for stratospheric flight environments, where recovery ' +
               'windows are measured in seconds.',
        tech:  ['C++', 'STM32', 'ESP32', 'real-time'],
      },
      {
        title: 'Networking / Live Telemetry',
        body:  'Designed and built the end-to-end live telemetry infrastructure — enabling ' +
               'real-time aircraft tracking and diagnostics during flights. Handles ' +
               'UDP/TCP transport, socket layer, and a REST facade for tooling.',
        tech:  ['REST', 'sockets', 'UDP', 'TCP', 'C++', 'Python'],
      },
      {
        title: 'Graphical Interfaces',
        body:  'Designed and developed the in-house ground-station GUIs for visualising ' +
               'live telemetry and remotely commanding avionics systems. Real-time render ' +
               'pipelines for high-frequency data streams.',
        tech:  ['ImGui', 'Vulkan', 'Flutter'],
      },
      {
        title: 'Internal Libraries & Tooling',
        body:  'Developed Python tooling and libraries for post-flight data processing and ' +
               'analysis — empowering engineers to automate performance evaluations, ' +
               'detect anomalies faster, and streamline report generation.',
        tech:  ['Python', 'NumPy', 'Pandas'],
      },
      {
        title: 'Airflow Sensor Prototype',
        body:  'Designed and built an airflow sensor from scratch — schematics, PCB, ' +
               'mechanical, and firmware — for accurately measuring gas volume based on ' +
               'flow and time. End-to-end hardware/software ownership.',
        tech:  ['ESP32', 'Altium', 'SolidWorks', 'C++'],
      },
    ],

    stack: ['C++', 'Python', 'STM32', 'ESP32', 'ImGui', 'Vulkan', 'Flutter', 'REST', 'UDP', 'TCP', 'sockets', 'NumPy', 'Pandas', 'Altium', 'SolidWorks']
  },
});
