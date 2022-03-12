import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
 
export const client = sanityClient({
  
  projectId: '9q7s3j9o',
  dataset: 'production',
  apiVersion: '2022-03-02',
  useCdn: true,
  token: 'skXRy2a0XuplEWNJksEZUJPUVqGcf2dA99rTzMW2hNv6wMlJaUvzqwHDbOeIdvIJCsc1UjJbSqIFW3J60GXnS5Sc50an7MxqLnhp9QHY8mrePzqeBWXbIr8Iy8eSktUJRs8kj7RLNRlxtG1oVQ2dYB5v8EbYiaqapvFap4Fl5wZUGfw8DYda',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
