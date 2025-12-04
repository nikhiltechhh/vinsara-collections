import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-12 text-gray-900">
          About Us
        </h1>

        {/* Main Content Container */}
        <div className="max-w-5xl mx-auto">
          {/* Image Section */}
          <div className="w-full mb-8">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&h=600&fit=crop"
                alt="Vinsaraa Collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-base md:text-lg font-light">
              In the world of handcrafted textiles, Vinsaraa is a rare and inspired talent, who has, over the past two decades pioneered something of a revolution in Indian textiles. Using traditional techniques and indigenous materials, but with constant experimentation and research, Vinsaraa has created a whole new vocabulary in textile design. The combination of her unique sensibility, especially in tone and texture, with her profound knowledge of the weaving process and other textile techniques, as well as her commitment to support the craft sector has made such innovation possible. Through her prodigious output, she has generated an exciting and original, extremely contemporary, design palette, while at the same time pushing forward the frontiers of the traditional skills on which her work is based.
            </p>

            <p className="text-base md:text-lg font-light">
              A 1980 graduate of the National Institute of Design in Ahmedabad, India, Vinsaraa made her first commercial breakthrough in 1989 with her signature 'First Design', a black and tussar weave, which was acclaimed internationally. Widely covered by the media as a designer who had achieved a rare synergy between classic textile craft and contemporary design, her work is often described as 'contemporary classic'.
            </p>

            <p className="text-base md:text-lg font-light">
              Entry into the export market led to Vinsaraa's participation in major international trade fairs, including the Maison et Object and the Pret a Porter in Paris and the Hiemtextil in Frankfurt. Her clients include Liberty, Selfridges, The Conran Shop, Anthropologie, Le Bon Marche, and Caravane. Endorsed also by the connoisseur, Vinsaraa's textiles have been described as "collectible antiques of the future". Vinsaraa's label covers a range of products including shawls, scarves, ready-to-wear garments, and home furnishings. New lines and products are emerging all the time as a team of young designers works with Vinsaraa at her studio, exploring every conceivable textile technique to discover new possibilities.
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="max-w-5xl mx-auto mt-20">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8">
            PROJECTS
          </h2>
          {/* Add your projects content here */}
        </div>
      </div>
    </div>
  );
}