export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f53c888cbf55b2f873a2b37',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4wrqy2je',
                  apiId: 'e748843d-6a9b-4dca-afd5-0205e66e495a'
                },
                {
                  buildHookId: '5f53c88890670f5a825c42ff',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hd6oonv4',
                  apiId: '22839a4b-a5b2-4c74-a1f1-6751849cfd0d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ubersl0th/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hd6oonv4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
