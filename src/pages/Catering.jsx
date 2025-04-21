import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Catering = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll be in touch shortly to discuss your event.");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl overflow-hidden shadow-xl">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="md:w-1/2 lg:pr-20">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Premium Catering Services in Colombo
              </h1>
              <p className="text-lg text-white/90 mb-8">
                Elevate your events with our exquisite catering solutions. From intimate gatherings to grand celebrations, we deliver culinary excellence paired with impeccable service.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="font-medium">Customized menu planning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="font-medium">Professional event staffing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="font-medium">Complete tableware & setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="font-medium">End-to-end event management</span>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 relative mt-12 md:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={assets.Catering1}
                  alt="Gourmet catering presentation"
                  className="w-full h-96 object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="my-20">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          {/* Form Header */}
          <div className="bg-primary text-white px-8 py-6">
            <h2 className="text-3xl font-bold mb-2">Request a Custom Quote</h2>
            <p className="opacity-90">
              Complete the form below and our event specialists will prepare a personalized proposal within 24 hours.
            </p>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">First Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Last Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              {/* Event Details */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Event Type *</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" required>
                  <option value="">Select event type</option>
                  <option>Wedding Celebration</option>
                  <option>Corporate Event</option>
                  <option>Private Party</option>
                  <option>Conference/Catering</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Preferred Cuisine *</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" required>
                  <option value="">Select cuisine style</option>
                  <option>International Fusion</option>
                  <option>Traditional Sri Lankan</option>
                  <option>Continental</option>
                  <option>Asian Specialties</option>
                  <option>Custom Menu</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Event Date *</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Guest Count *</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" required>
                  <option value="">Select approximate guests</option>
                  <option>20 - 50</option>
                  <option>50 - 100</option>
                  <option>100 - 200</option>
                  <option>200 - 300</option>
                  <option>300+</option>
                </select>
              </div>

              {/* Venue Details */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Venue Address *</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows="3"
                  placeholder="Please include full venue details"
                  required
                ></textarea>
              </div>

              {/* Additional Notes */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Special Requirements</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows="2"
                  placeholder="Dietary restrictions, theme details, or special requests"
                ></textarea>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Catering;