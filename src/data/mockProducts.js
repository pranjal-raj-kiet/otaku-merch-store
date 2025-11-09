export const products = [
  // KEYCHAINS
  {
    id: 1,
    name: "Naruto Ramen Keychain",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1638013412964-d8b72c5d3f5f",
    images: [
      "https://images.unsplash.com/photo-1638013412964-d8b72c5d3f5f",
      "https://images.unsplash.com/photo-1638012107344-3ed0f994d8d7",
      "https://images.unsplash.com/photo-1638016213453-ea0be6a7c938"
    ],
    category: "Keychains",
    description: "Premium anime keychain featuring the iconic Naruto ramen bowl. Made with high-quality metal and enamel finish. Perfect accessory for your keys or bag!",
    rating: 4.8,
    reviews: 120,
    inStock: true,
    isNew: true,
    variants: { size: ["One Size"], color: ["Red", "Orange"] }
  },
  {
    id: 2,
    name: "Pikachu Chibi Keychain",
    price: 249,
    originalPrice: null,
    image: "https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg",
    images: [
      "https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg",
      "https://images.unsplash.com/photo-1638013412964-d8b72c5d3f5f",
      "https://images.unsplash.com/photo-1638012107344-3ed0f994d8d7"
    ],
    category: "Keychains",
    description: "Adorable Pikachu chibi-style keychain that lights up! Battery-operated LED feature makes it stand out. A must-have for Pokemon fans!",
    rating: 4.9,
    reviews: 250,
    inStock: true,
    isNew: false,
    variants: { size: ["One Size"], color: ["Yellow"] }
  },
  {
    id: 3,
    name: "Attack Titan Keychain Set",
    price: 399,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1638012107344-3ed0f994d8d7",
    images: [
      "https://images.unsplash.com/photo-1638012107344-3ed0f994d8d7",
      "https://images.unsplash.com/photo-1638016213453-ea0be6a7c938",
      "https://images.unsplash.com/photo-1638013412964-d8b72c5d3f5f"
    ],
    category: "Keychains",
    description: "Set of 3 Attack on Titan keychains featuring Eren, Mikasa, and Levi. High-quality acrylic with vibrant prints. Comes with collector's card!",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    isNew: true,
    variants: { size: ["One Size"], color: ["Multi"] }
  },
  {
    id: 4,
    name: "One Piece Straw Hat Keychain",
    price: 199,
    originalPrice: 299,
    image: "https://images.unsplash.com/photo-1638016213453-ea0be6a7c938",
    images: [
      "https://images.unsplash.com/photo-1638016213453-ea0be6a7c938",
      "https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg",
      "https://images.unsplash.com/photo-1638013412964-d8b72c5d3f5f"
    ],
    category: "Keychains",
    description: "Luffy's iconic straw hat in keychain form! Detailed mini replica with soft PVC material. Show your pirate pride!",
    rating: 4.6,
    reviews: 167,
    inStock: true,
    isNew: false,
    variants: { size: ["One Size"], color: ["Beige"] }
  },
  // FIGURINES
  {
    id: 5,
    name: "Rem Re:Zero Premium Figurine",
    price: 1999,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1638013412964-d8b72c5d3f5f",
    images: [
      "https://images.unsplash.com/photo-1638013412964-d8b72c5d3f5f",
      "https://images.unsplash.com/photo-1638012107344-3ed0f994d8d7",
      "https://images.unsplash.com/photo-1638016213453-ea0be6a7c938"
    ],
    category: "Figurines",
    description: "Limited edition Rem figurine from Re:Zero. 8 inches tall with detailed sculpting and premium paint finish. Comes with display base and certificate.",
    rating: 4.9,
    reviews: 78,
    inStock: true,
    isNew: true,
    variants: { size: ["8 inch"], color: ["Original"] }
  },
  {
    id: 6,
    name: "Love Live Yoshiko Figurine",
    price: 1799,
    originalPrice: 2199,
    image: "https://images.unsplash.com/photo-1638012107344-3ed0f994d8d7",
    images: [
      "https://images.unsplash.com/photo-1638012107344-3ed0f994d8d7",
      "https://images.unsplash.com/photo-1638016213453-ea0be6a7c938",
      "https://images.unsplash.com/photo-1743685294851-68a4dc2a8d77"
    ],
    category: "Figurines",
    description: "Yoshiko Tsushima from Love Live Sunshine in fallen angel form! 7 inches tall with interchangeable parts and dynamic pose.",
    rating: 4.8,
    reviews: 92,
    inStock: true,
    isNew: false,
    variants: { size: ["7 inch"], color: ["Original"] }
  },
  {
    id: 7,
    name: "Nami One Piece Figurine",
    price: 1499,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1638016213453-ea0be6a7c938",
    images: [
      "https://images.unsplash.com/photo-1638016213453-ea0be6a7c938",
      "https://images.unsplash.com/photo-1743685294851-68a4dc2a8d77",
      "https://images.unsplash.com/photo-1761129386720-82a53e04d9b7"
    ],
    category: "Figurines",
    description: "Navigator of the Straw Hat Pirates! Nami figurine with detailed orange grove outfit. 6.5 inches with removable clima-tact accessory.",
    rating: 4.7,
    reviews: 134,
    inStock: true,
    isNew: false,
    variants: { size: ["6.5 inch"], color: ["Original"] }
  },
  {
    id: 8,
    name: "Anime Character Collection Set",
    price: 799,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1762089423685-60f5cef02cda",
    images: [
      "https://images.unsplash.com/photo-1762089423685-60f5cef02cda",
      "https://images.unsplash.com/photo-1735720518793-804614ff5c48",
      "https://images.unsplash.com/photo-1761129386720-82a53e04d9b7"
    ],
    category: "Figurines",
    description: "Set of 5 mini anime character figurines from popular series. Perfect for desk decoration or starting your collection. 3-4 inches each.",
    rating: 4.5,
    reviews: 201,
    inStock: true,
    isNew: true,
    variants: { size: ["Mini Set"], color: ["Multi"] }
  },
  // T-SHIRTS
  {
    id: 9,
    name: "Black Anime Character Tee",
    price: 699,
    originalPrice: 899,
    image: "https://images.unsplash.com/photo-1651087319658-a1923f85551f",
    images: [
      "https://images.unsplash.com/photo-1651087319658-a1923f85551f",
      "https://images.unsplash.com/photo-1660900506164-9efffc7a4245",
      "https://images.pexels.com/photos/29901276/pexels-photo-29901276.jpeg"
    ],
    category: "T-Shirts",
    description: "Premium cotton black tee with anime character print. Oversized fit, breathable fabric. Available in multiple sizes. Perfect for casual otaku style!",
    rating: 4.7,
    reviews: 312,
    inStock: true,
    isNew: true,
    variants: { size: ["S", "M", "L", "XL", "XXL"], color: ["Black"] }
  },
  {
    id: 10,
    name: "White Anime Graphics Shirt",
    price: 599,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1660900506164-9efffc7a4245",
    images: [
      "https://images.unsplash.com/photo-1660900506164-9efffc7a4245",
      "https://images.unsplash.com/photo-1651087319658-a1923f85551f",
      "https://images.pexels.com/photos/19101427/pexels-photo-19101427.jpeg"
    ],
    category: "T-Shirts",
    description: "Clean white tee with minimalist anime graphics. Soft cotton blend, regular fit. Subtle design for everyday wear. Machine washable.",
    rating: 4.6,
    reviews: 245,
    inStock: true,
    isNew: false,
    variants: { size: ["S", "M", "L", "XL"], color: ["White"] }
  },
  {
    id: 11,
    name: "Anime School Uniform Tee",
    price: 799,
    originalPrice: null,
    image: "https://images.pexels.com/photos/29901276/pexels-photo-29901276.jpeg",
    images: [
      "https://images.pexels.com/photos/29901276/pexels-photo-29901276.jpeg",
      "https://images.pexels.com/photos/19101427/pexels-photo-19101427.jpeg",
      "https://images.unsplash.com/photo-1651087319658-a1923f85551f"
    ],
    category: "T-Shirts",
    description: "Inspired by classic anime school uniforms! Unique design with collar print detail. Premium quality fabric. Stand out at conventions!",
    rating: 4.8,
    reviews: 156,
    inStock: true,
    isNew: true,
    variants: { size: ["S", "M", "L", "XL"], color: ["Navy", "Black"] }
  },
  {
    id: 12,
    name: "Otaku Street Style Tee",
    price: 499,
    originalPrice: 699,
    image: "https://images.pexels.com/photos/19101427/pexels-photo-19101427.jpeg",
    images: [
      "https://images.pexels.com/photos/19101427/pexels-photo-19101427.jpeg",
      "https://images.unsplash.com/photo-1660900506164-9efffc7a4245",
      "https://images.unsplash.com/photo-1651087319658-a1923f85551f"
    ],
    category: "T-Shirts",
    description: "Trendy anime-inspired streetwear tee. Bold graphics, comfortable fit. Express your love for anime culture. Limited stock available!",
    rating: 4.5,
    reviews: 189,
    inStock: true,
    isNew: false,
    variants: { size: ["M", "L", "XL"], color: ["Black", "White"] }
  },
  // ACCESSORIES
  {
    id: 13,
    name: "Anime Figure Display Set",
    price: 599,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1707602985834-eca0a6d63b2f",
    images: [
      "https://images.unsplash.com/photo-1707602985834-eca0a6d63b2f",
      "https://images.unsplash.com/photo-1762089423685-60f5cef02cda",
      "https://images.unsplash.com/photo-1590708622734-b1b8df3c3576"
    ],
    category: "Accessories",
    description: "Acrylic display case for your anime figures. 3-tier transparent shelves with LED lighting. Protect and showcase your collection in style!",
    rating: 4.7,
    reviews: 87,
    inStock: true,
    isNew: true,
    variants: { size: ["Standard"], color: ["Clear"] }
  },
  {
    id: 14,
    name: "Japanese Dragon Collectible",
    price: 699,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1590708622734-b1b8df3c3576",
    images: [
      "https://images.unsplash.com/photo-1590708622734-b1b8df3c3576",
      "https://images.unsplash.com/photo-1761129386720-82a53e04d9b7",
      "https://images.unsplash.com/photo-1707602985834-eca0a6d63b2f"
    ],
    category: "Accessories",
    description: "Traditional Japanese dragon sculpture. Hand-painted details, resin material. Perfect desk ornament for anime and manga enthusiasts!",
    rating: 4.6,
    reviews: 103,
    inStock: true,
    isNew: false,
    variants: { size: ["Medium"], color: ["Gold", "Silver"] }
  },
  {
    id: 15,
    name: "Anime Poster Collection Bundle",
    price: 399,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1762089423685-60f5cef02cda",
    images: [
      "https://images.unsplash.com/photo-1762089423685-60f5cef02cda",
      "https://images.unsplash.com/photo-1707602985834-eca0a6d63b2f",
      "https://images.unsplash.com/photo-1590708622734-b1b8df3c3576"
    ],
    category: "Accessories",
    description: "Set of 5 high-quality anime posters. A3 size, glossy finish. Features popular series characters. Decorate your room like a true otaku!",
    rating: 4.8,
    reviews: 267,
    inStock: true,
    isNew: true,
    variants: { size: ["A3"], color: ["Multi"] }
  },
  {
    id: 16,
    name: "Anime Phone Case Collection",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1761129386720-82a53e04d9b7",
    images: [
      "https://images.unsplash.com/photo-1761129386720-82a53e04d9b7",
      "https://images.unsplash.com/photo-1762089423685-60f5cef02cda",
      "https://images.unsplash.com/photo-1707602985834-eca0a6d63b2f"
    ],
    category: "Accessories",
    description: "Protective phone cases with anime designs. Available for iPhone and Samsung. Shockproof, slim profile. Show off your favorite characters!",
    rating: 4.5,
    reviews: 421,
    inStock: true,
    isNew: false,
    variants: { size: ["iPhone", "Samsung"], color: ["Clear", "Black"] }
  }
];

export const categories = [
  { name: "Keychains", icon: "🔑", count: 4 },
  { name: "Figurines", icon: "🎭", count: 4 },
  { name: "T-Shirts", icon: "👕", count: 4 },
  { name: "Accessories", icon: "✨", count: 4 }
];
