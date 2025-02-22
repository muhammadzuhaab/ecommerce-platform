const intialValue = [
    {
        id: 1,
        link: `/product/1`,
        imgSrc: '/images/product1.jpg',
        title: 'Running Shoes for Men',
        description: 'Lightweight running shoes designed for comfort and speed, featuring breathable mesh material, cushioned insoles, and durable rubber outsoles for a smooth ride on any surface. Ideal for runners of all levels.',
        currency: '$',
        price: 120,
        quantity: 200,
        discount: null,
        isFavourite: false,
        isFeatured: true
    },
    {
        id: 2,
        link: `/product/2`,
        imgSrc: '/images/product2.jpg',
        title: 'Basketball Sneakers',
        description: 'High-performance sneakers engineered for optimal court traction and support. These shoes come with advanced cushioning technology to absorb impact during jumps and quick lateral movements, making them perfect for basketball enthusiasts.',
        currency: '$',
        price: 150,
        quantity: 150,
        discount: 10,
        isFavourite: false,
        isFeatured: false
    },
    {
        id: 3,
        link: `/product/3`,
        imgSrc: '/images/product3.jpg',
        title: 'Classic Leather Boots',
        description: 'Timeless leather boots that combine style and functionality. Crafted from premium leather, these boots offer exceptional durability and comfort. Perfect for both formal occasions and casual outings, with a classic design that never goes out of style.',
        currency: '$',
        price: 250,
        quantity: 80,
        discount: null,
        isFavourite: false,
        isFeatured: true
    },
    {
        id: 4,
        link: `/product/4`,
        imgSrc: '/images/product4.jpg',
        title: 'Trail Running Shoes',
        description: 'Durable shoes designed specifically for rugged terrain and outdoor adventures. Featuring reinforced toe caps and aggressive tread patterns, these shoes provide excellent grip and protection, making them ideal for trail runners and hikers.',
        currency: '$',
        price: 130,
        quantity: 100,
        discount: 15,
        isFavourite: false,
        isFeatured: false
    },
    {
        id: 5,
        link: `/product/5`,
        imgSrc: '/images/product5.jpg',
        title: 'Casual Sneakers',
        description: 'Stylish sneakers designed for everyday wear. These shoes combine comfort with trendy aesthetics, featuring cushioned insoles and flexible outsoles. Perfect for casual outings, they add a touch of style to any outfit.',
        currency: '$',
        price: 70,
        quantity: 250,
        discount: null,
        isFavourite: false,
        isFeatured: false
    },
    {
        id: 6,
        link: `/product/6`,
        imgSrc: '/images/product6.jpg',
        title: 'Training Shoes',
        description: 'Versatile shoes ideal for various training sessions, from running to weightlifting. With a lightweight design and responsive cushioning, these shoes offer the support and comfort you need for your workout, making them a must-have for fitness enthusiasts.',
        currency: '$',
        price: 90,
        quantity: 180,
        discount: 5,
        isFavourite: false,
        isFeatured: false
    },
    {
        id: 7,
        link: `/product/7`,
        imgSrc: '/images/product7.jpg',
        title: 'Golf Shoes',
        description: 'Performance golf shoes designed to provide excellent grip and stability on the course. Featuring waterproof materials and cushioned insoles, these shoes keep your feet comfortable and dry, allowing you to focus on your game.',
        currency: '$',
        price: 110,
        quantity: 75,
        discount: null,
        isFavourite: false,
        isFeatured: false
    },
    {
        id: 8,
        link: `/product/8`,
        imgSrc: '/images/product8.jpg',
        title: 'Skate Shoes',
        description: 'Durable and stylish shoes crafted for skating. These shoes feature reinforced stitching, a padded tongue, and a grippy sole for optimal board feel and control. Perfect for both beginners and experienced skaters alike.',
        currency: '$',
        price: 85,
        quantity: 120,
        discount: null,
        isFavourite: false,
        isFeatured: false
    },
    {
        id: 9,
        link: `/product/9`,
        imgSrc: '/images/product9.jpg',
        title: 'Dance Sneakers',
        description: 'Flexible sneakers designed for dance and movement, offering excellent support and comfort. With a lightweight design and slip-resistant soles, these shoes allow for fluid motion and are perfect for various dance styles.',
        currency: '$',
        price: 75,
        quantity: 150,
        discount: null,
        isFavourite: false,
        isFeatured: false
    },
    {
        id: 10,
        link: `/product/10`,
        imgSrc: '/images/product10.jpg',
        title: 'Winter Boots',
        description: 'Insulated boots built for cold weather conditions. Featuring waterproof materials and a warm lining, these boots provide comfort and protection from the elements, making them perfect for winter adventures.',
        currency: '$',
        price: 160,
        quantity: 60,
        discount: 20,
        isFavourite: false,
        isFeatured: true
    },
    {
        id: 11,
        link: `/product/11`,
        imgSrc: '/images/product11.jpg',
        title: 'Crossfit Shoes',
        description: 'Supportive shoes designed for high-intensity workouts. With a stable base and breathable upper, these shoes help you perform your best in any Crossfit session, offering both comfort and durability.',
        currency: '$',
        price: 95,
        quantity: 90,
        discount: null,
        isFavourite: false,
        isFeatured: false
    },
    {
        id: 12,
        link: `/product/12`,
        imgSrc: '/images/product12.jpg',
        title: 'Flip Flops',
        description: 'Comfortable flip flops for casual outings, featuring cushioned footbeds and durable straps. Perfect for warm weather, they provide easy slip-on convenience and are ideal for trips to the beach or pool.',
        currency: '$',
        price: 20,
        quantity: 300,
        discount: null,
        isFavourite: false,
        isFeatured: false
    },
    {
        id: 13,
        link: `/product/13`,
        imgSrc: '/images/product13.jpg',
        title: 'Hiking Boots',
        description: 'Sturdy boots designed for all your hiking adventures. Featuring a rugged outsole and waterproof materials, these boots offer traction and protection on various terrains, ensuring comfort during long hikes.',
        currency: '$',
        price: 140,
        quantity: 100,
        discount: null,
        isFavourite: false,
        isFeatured: false
    },
    {
        id: 14,
        link: `/product/14`,
        imgSrc: '/images/product14.jpg',
        title: 'Soccer Cleats',
        description: 'Lightweight cleats designed for better traction on the field. With a snug fit and responsive design, these cleats help you make quick movements while providing the necessary support during gameplay.',
        currency: '$',
        price: 100,
        quantity: 80,
        discount: 10,
        isFavourite: false,
        isFeatured: true
    },
    {
        id: 15,
        link: `/product/15`,
        imgSrc: '/images/product15.jpg',
        title: 'Paddle Tennis Shoes',
        description: 'Specialized shoes designed for paddle tennis, offering excellent grip and support. With lightweight materials and a cushioned insole, these shoes provide comfort during intense matches.',
        currency: '$',
        price: 85,
        quantity: 70,
        discount: null,
        isFavourite: false,
        isFeatured: false
    },
    {
        id: 16,
        link: `/product/16`,
        imgSrc: '/images/product16.jpg',
        title: 'Ballet Shoes',
        description: 'Soft and flexible shoes crafted for ballet dancers. Designed to provide comfort and support, these shoes allow for smooth movement and are ideal for both practice and performances.',
        currency: '$',
        price: 30,
        quantity: 200,
        discount: null,
        isFavourite: false,
        isFeatured: false
    },
    {
        id: 17,
        link: `/product/17`,
        imgSrc: '/images/product17.jpg',
        title: 'Climbing Shoes',
        description: 'High-performance shoes designed for rock climbing, featuring a snug fit and sticky rubber soles for optimal grip. These shoes provide the support and sensitivity needed for challenging climbs.',
        currency: '$',
        price: 120,
        quantity: 50,
        discount: null,
        isFavourite: false,
        isFeatured: true
    },
    {
        id: 18,
        link: `/product/18`,
        imgSrc: '/images/product16.jpg',
        title: 'Trail Walking Shoes',
        description: 'Comfortable shoes designed for long walks on trails, featuring cushioned soles and durable materials for support and protection. Ideal for both casual walkers and serious hikers looking to explore nature.',
        currency: '$',
        price: 80,
        quantity: 150,
        discount: null,
        isFavourite: false,
        isFeatured: true
    }
];



const ProductReducer = (state = intialValue, action) => {
    return state;
}

export default ProductReducer