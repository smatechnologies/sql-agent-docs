module.exports = {
  mySidebar: [
    {
      type: 'doc',
      id: 'overview',
      label: 'SQL Agent',
    },
    'release-notes',
    {
      type: 'category',
      label: 'Installation',
      collapsed: true,
      link: { type: 'doc', id: 'installation/overview' },
      items: [
        'installation/determine-installation-media',
        'installation/new-installation',
        'installation/upgrade-installation',
        'installation/silent-mode',
        'installation/multiple-instances',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: true,
      link: { type: 'doc', id: 'administration/overview' },
      items: [
        'administration/service-configuration',
        'administration/configuration-file',
        'administration/manage-agent',
        'administration/scripts',
      ],
    },
    {
      type: 'category',
      label: 'Advanced features',
      collapsed: true,
      link: { type: 'doc', id: 'advanced-features/overview' },
      items: [
        'advanced-features/jors',
        'advanced-features/logging',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      link: { type: 'doc', id: 'reference/overview' },
      items: [
        'reference/job-actions',
      ],
    },
  ],
};
