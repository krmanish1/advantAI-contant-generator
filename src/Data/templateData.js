const template = [
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves your personal blog post writer that generate the blog based on your niche & outline.',
        category: 'Coding',
        icon: 'https://cdn-icons-png.flaticon.com/128/9623/9623631.png',
        aiPrompt: 'Provide me a blog content on the following niche & outline that contains best meta descriptions and title for SEO  and give me result in Rich text editor format.',
        slug: 'generate-blog-content',
        button: 'Generate Blog',
        form: [

            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                require: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',

            }
        ]
    },
    {
        name: 'Write Code',
        desc: 'AI Model to generate programming code in any language.',
        category: 'Coding',
        icon: 'https://cdn-icons-png.flaticon.com/128/1537/1537675.png',
        aiPrompt: 'Write a code with example and provide its explainations based on the description and give me result in Rich text editor format.',
        slug: 'generate-code',
        button: 'Generate Code',
        form: [

            {
                label: 'Enter description of the code you want along with programming language.',
                field: 'textarea',
                name: 'description',
                require: true
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that generate blog topic ideas depends on your information.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        aiPrompt: 'Can you suggest a 10 creative blog topic ideas in bullet wise only based on given niche & outline and give me result in Rich text editor format.',
        slug: 'generate-topic-ideas',
        button: 'Generate Ideas',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                require: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',

            }
        ]
    },
    {
        name: 'Blog Title',
        desc: 'An AI tool that generate blog title depends on your blog information.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Help me come up with a 5 catchy blog title in bullet wise only based on given niche & outline and give me result in Rich text editor format.',
        slug: 'generate-blog-title',
        button: 'Generate Title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                require: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',

            }
        ]
    }
]

export { template }