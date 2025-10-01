import { z } from 'zod';

export const emailSchema = z
  .string()
  .email('Veuillez entrer une adresse email valide');

export const phoneSchema = z
  .string()
  .min(10, 'Le numéro de téléphone doit contenir au moins 10 chiffres')
  .regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, 'Format de téléphone invalide');

export const nameSchema = z
  .string()
  .min(2, 'Le nom doit contenir au moins 2 caractères')
  .max(50, 'Le nom ne peut pas dépasser 50 caractères');

export const messageSchema = z
  .string()
  .min(10, 'Le message doit contenir au moins 10 caractères')
  .max(1000, 'Le message ne peut pas dépasser 1000 caractères');