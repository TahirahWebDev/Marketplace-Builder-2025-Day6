export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Blog Name',
      description: 'Enter the title of the blog post',
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Blog Content',
      description: 'Enter the content of the blog post',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Blog Image',
      description: 'Upload an image for the blog post',
      options: {
        hotspot: true, // Enable hotspot for image cropping
      },
    },
    {
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
      description: 'Date when the blog post was created',
      // Default to the current date if no value is provided
      initialValue: () => new Date().toISOString(),
    },
  ],
};
