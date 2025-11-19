'use client'
import { useState } from 'react'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  // Sample listings (connect to Supabase later for real user data)
  const sampleListings = [
    {
      id: 1,
      title: 'Leftover Red Bricks - 200 Pieces',
      description: 'Gently used reclaimed bricks from a local reno project. Perfect for garden walls or patios.',
      price: 'Free (pickup only)',
      location: 'Seattle, WA',
      ecoTags: 'Reclaimed, Zero Waste',
      rating: 5,
      seller: 'Alex (Top Eco Seller)'
    },
    {
      id: 2,
      title: 'Reclaimed Lumber - Oak Boards',
      description: 'High-quality oak scraps, sanded and ready for upcycling into furniture or shelving.',
      price: '$50',
      location: 'London, UK',
      ecoTags: 'Sustainable Wood, Recycled',
      rating: 4,
      seller: 'Maria (Reliable Buyer/Seller)'
    },
    {
      id: 3,
      title: 'PVC Pipes - Various Lengths',
      description: 'Clean, unused extras from plumbing job. Great for DIY irrigation systems.',
      price: '$10',
      location: 'Manchester, UK',
      ecoTags: 'Upcycled, Low Carbon',
      rating: 5,
      seller: 'EcoBuild Team'
    }
  ]

  const filteredListings = sampleListings.filter(listing =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#228B22] to-[#CD7F32] bg-clip-text text-transparent mb-4">
              BuildLoop
            </h1>
            <p className="text-2xl text-gray-700 mb-2">Your Community for Leftover Construction Materials</p>
            <p className="text-xl text-[#CD7F32] font-semibold mb-6">Trade • Reuse • Save the Planet</p>
            <button className="bg-[#228B22] hover:bg-[#1e7a1e] text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              Join the Community
            </button>
          </div>
          {/* Trust Badges / Rankings */}
          <div className="mt-8 flex justify-center space-x-8 text-sm bg-green-50 p-4 rounded-lg flex-wrap">
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span>Top Eco Seller – Alex (500+ trades)</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
              <span>Reliable Buyer – Maria</span>
            </div>
            <div className="text-green-600 font-bold">
              Items saved from landfill: 1,247+
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-md p-4">
          <input
            type="text"
            placeholder="Search materials (e.g., bricks Seattle or reclaimed lumber London)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 text-lg border-2 border-green-200 rounded-lg focus:border-[#228B22] focus:outline-none"
          />
        </div>
      </section>

      {/* Listings Grid */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Listings</h2>
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <span className="text-4xl">🧱</span> {/* Placeholder for images */}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{listing.title}</h3>
                  <p className="text-gray-600 mb-3 line-clamp-2">{listing.description}</p>
                  <p className="text-2xl font-bold text-[#228B22] mb-2">{listing.price}</p>
                  <p className="text-sm text-gray-500 mb-2">📍 {listing.location}</p>
                  <div className="flex items-center space-x-1 mb-3">
                    <span className="text-green-600 text-sm">🌿 {listing.ecoTags}</span>
                  </div>
                  {/* Seller Ranking */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-yellow-500 ${i < listing.rating ? 'fill-current' : 'text-gray-300'}`}>
                          ⭐
                        </span>
                      ))}
                      <span className="ml-1 text-sm text-gray-500">({listing.rating}/5)</span>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{listing.seller}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#228B22] to-[#CD7F32] text-white py-2 rounded-lg hover:opacity-90 transition">
                    Contact Seller
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-12 text-lg">No listings match your search—be the first to post one! 🌱</p>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#228B22] text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 BuildLoop. Building Smarter. Wasting Less.</p>
        </div>
      </footer>
    </div>
  )
}
