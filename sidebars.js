module.exports = {
  mySidebar: [
    'index',
    'release-notes',
    {
      type: 'category', 
      label: 'Installation',
      collapsed: false,
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
      collapsed: false,
      items: [
        'administration/service-configuration',
        'administration/configuration-file',
        'administration/manage-lsam',
        'administration/scripts',
      ], 
    },
    {
      type: 'category', 
      label: 'Advanced features',
      collapsed: false,
      items: [
        'advanced-features/jors',
        'advanced-features/logging',
      ], 
    },
    {
      type: 'category', 
      label: 'Reference',
      collapsed: false,
      items: [
        'reference/job-actions',
      ], 
    },
  ],
};
