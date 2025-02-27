import { create } from 'zustand';
import { Service } from '../types';

interface ServiceState {
  services: Service[];
  addService: (service: Omit<Service, 'id'>) => void;
}

export const useServiceStore = create<ServiceState>((set) => ({
  services: [],
  addService: (newService) => set((state) => ({
    services: [{
      ...newService,
      id: Math.random().toString(36).substr(2, 9),
    }, ...state.services],
  })),
}));