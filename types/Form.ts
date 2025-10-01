import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Veuillez entrer une adresse email valide'),
  phone: z.string().min(10, 'Veuillez entrer un numéro de téléphone valide'),
  projectType: z.string().min(1, 'Veuillez sélectionner un type de projet'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  consent: z.boolean().refine(val => val === true, {
    message: 'Vous devez accepter la politique de confidentialité'
  })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;