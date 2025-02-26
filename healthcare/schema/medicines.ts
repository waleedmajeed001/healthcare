export default {
  name: 'medicines',
  type: 'document',
  title: 'Medicines',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Medicines',
    },
    {
      name: 'images',
      type: 'image',
      title: 'Medicines Images',   
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of medicines',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
   },
  ],
} 