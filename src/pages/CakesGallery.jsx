import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

// Pick only the cake images you want to show in your gallery
const galleryItems = [
  { id: 1, src: assets.WeddingCake, alt: 'Wedding Cake' },
  { id: 2, src: assets.CupCake,     alt: 'Cup Cake'     },
  { id: 3, src: assets.Birthday,    alt: 'Birthday Cake'},
  { id: 4, src: assets.sample,   alt: 'Catering Cake 1' },
  { id: 5, src: assets.sample,   alt: 'Catering Cake 2' },
  { id: 1, src: assets.WeddingCake, alt: 'Wedding Cake' },
  { id: 2, src: assets.CupCake,     alt: 'Cup Cake'     },
  { id: 3, src: assets.Birthday,    alt: 'Birthday Cake'},
  { id: 4, src: assets.sample,   alt: 'Catering Cake 1' },
  { id: 5, src: assets.sample,   alt: 'Catering Cake 2' },
  { id: 1, src: assets.WeddingCake, alt: 'Wedding Cake' },
  { id: 2, src: assets.CupCake,     alt: 'Cup Cake'     },
  { id: 3, src: assets.Birthday,    alt: 'Birthday Cake'},
  { id: 4, src: assets.sample,   alt: 'Catering Cake 1' },
  { id: 5, src: assets.sample,   alt: 'Catering Cake 2' },
  // …add more if you like
]

const CakesGallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* header row */}
      <div className="flex justify-between items-center mb-4">
        <Link to="/cakes" className="text-red-600 hover:underline">
          &lt;&lt; Cakes
        </Link>
        <Link to="/cakeQuote" className="text-red-600 hover:underline flex items-center">
          Request for a Quote
        </Link>
      </div>

      {/* gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {galleryItems.map(item => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-2 text-center text-sm text-gray-700">
              {item.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CakesGallery
