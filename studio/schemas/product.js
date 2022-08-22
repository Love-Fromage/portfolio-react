export default {
    name:"product",
    title:"Product",
    type:"document",
    fields:[
        {
            name: "title",
            type: "string",
        },
        {
            name:"description",
            type:"text",
        },
        {
            name:"price",
            type:"number"
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
          },

    ],
}