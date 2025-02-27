import React from 'react';
import { useServiceStore } from '../store/serviceStore';
import { useAuthStore } from '../store/authStore';

export const ServiceList = () => {
  const services = useServiceStore((state) => state.services);
  const { user } = useAuthStore();

  if (services.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        No services listed yet. Be the first to offer your services!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {services.map((service) => (
        <div key={service.id} className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500 capitalize">{service.category}</span>
            <span className="font-semibold text-lg">{service.price} ETH</span>
          </div>
          {service.sellerId === user?.id && (
            <div className="mt-2 text-sm text-blue-500">Listed by you</div>
          )}
        </div>
      ))}
    </div>
  );
};