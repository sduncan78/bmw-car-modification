import type { ContractInfo, ContractPage } from './typings'
import ThumbsUp from './components/SVG/ThumbsUp.astro'
import GearIcon from './components/SVG/GearIcon.astro'
import Umbrella from './components/SVG/Umbrella.astro'
import Options from './components/SVG/Options.astro'
import Profile from './components/SVG/Profile.astro'
import Car from './components/SVG/Car.astro'
import Calendar from './components/Calendar.astro'
import DocCheck from './components/SVG/DocCheck.astro'
import CarModif from './components/SVG/CarModif.astro'

export const PAGE_VOS_AVANTAGES: ContractPage = {
  name: 'Les avantages de votre contrat',
  url: '/vos-avantages',
  menuIcon: ThumbsUp
}

export const PAGE_VOS_SERVICES: ContractPage = {
  name: 'Vos services',
  url: '/vos-services',
  menuIcon: GearIcon
}

export const PAGE_VOS_GARANTIES: ContractPage = {
  name: 'Vos garanties',
  url: '/vos-garanties',
  menuIcon: Umbrella
}

export const PAGE_VOTRE_GARANTIE: ContractPage = {
  name: 'Votre garantie',
  url: '/votre-garantie',
  menuIcon: Umbrella
}

export const PAGE_VOS_OPTIONS: ContractPage = {
  name: 'Vos options',
  url: '/vos-options',
  menuIcon: Options
}

export const PAGE_VOS_CONTACTS_ET_DEMARCHES: ContractPage = {
  name: 'Vos contacts et démarches',
  url: '/vos-contacts-et-demarches',
  menuIcon: Profile
}

export const PAGE_RACHAT_DE_VOTRE_VEHICULE_EN_COURS_DE_CONTRAT: ContractPage = {
  name: 'Rachat de votre véhicule en cours de contrat',
  url: '/rachat-de-votre-vehicule-en-cours-de-contrat',
  menuIcon: Car
}

export const PAGE_REMBOURSEMENT_PAR_ANTICIPATION: ContractPage = {
  name: 'Remboursement de votre crédit par anticipation.',
  url: '/remboursement-de-votre-credit-par-anticipation',
  menuIcon: Car
}

export const PAGE_LA_FIN_DE_VOTRE_CONTRAT: ContractPage = {
  name: 'La fin de votre contrat',
  url: '/la-fin-de-votre-contrat',
  menuIcon: Calendar
}

export const PAGE_VOTRE_DECISION_DE_FIN_DE_CONTRAT: ContractPage = {
  name: 'Votre décision de fin de contrat',
  url: '/votre-decision-de-fin-de-contrat',
  menuIcon: Calendar
}

export const PAGE_EN_CAS_DE_SINISTRE: ContractPage = {
  name: 'En cas de sinistre',
  url: '/en-cas-de-sinistre',
  menuIcon: DocCheck
}

export const PAGE_MODIFICATION_DU_VEHICULE: ContractPage = {
  name: 'Modifications du véhicule',
  url: '/modifications-du-vehicule',
  menuIcon: CarModif
}

export const contracts: ContractInfo[] = [
  {
    name: 'LOA',
    cosyName: 'Contrat LOA',
    path: 'loa',
    textInfo: 'Location avec Option d’Achat',
    pages: [
      PAGE_VOS_AVANTAGES,
      PAGE_VOS_SERVICES,
      PAGE_VOS_GARANTIES,
      PAGE_VOS_CONTACTS_ET_DEMARCHES,
      PAGE_RACHAT_DE_VOTRE_VEHICULE_EN_COURS_DE_CONTRAT,
      PAGE_LA_FIN_DE_VOTRE_CONTRAT,
      PAGE_EN_CAS_DE_SINISTRE,
      PAGE_MODIFICATION_DU_VEHICULE
    ]
  },
  {
    name: 'PassLease LOA',
    cosyName: 'Contrat PassLease LOA',
    path: 'passlease-loa',
    textInfo: 'Location avec Option d’Achat puis reprise du véhicule par BMW si l’option n’est pas levée',
    pages: [
      PAGE_VOS_AVANTAGES,
      PAGE_VOS_SERVICES,
      PAGE_VOS_GARANTIES,
      PAGE_VOS_CONTACTS_ET_DEMARCHES,
      PAGE_RACHAT_DE_VOTRE_VEHICULE_EN_COURS_DE_CONTRAT,
      PAGE_LA_FIN_DE_VOTRE_CONTRAT,
      PAGE_EN_CAS_DE_SINISTRE,
      PAGE_MODIFICATION_DU_VEHICULE
    ]
  },
  {
    name: 'LLD',
    cosyName: 'Contrat LLD',
    path: 'lld',
    textInfo: 'Location Longue Durée sans option d’achat',
    pages: [
      PAGE_VOS_AVANTAGES,
      PAGE_VOS_SERVICES,
      PAGE_VOTRE_GARANTIE,
      PAGE_VOS_CONTACTS_ET_DEMARCHES,
      PAGE_LA_FIN_DE_VOTRE_CONTRAT,
      PAGE_EN_CAS_DE_SINISTRE,
      PAGE_MODIFICATION_DU_VEHICULE
    ]
  },
  {
    name: 'PassLease LLD',
    cosyName: 'Contrat PassLease LLD',
    path: 'passlease-lld',
    textInfo: 'Location Longue Durée sans option d’achat puis reprise du véhicule par BMW',
    pages: [
      PAGE_VOS_AVANTAGES,
      PAGE_VOS_SERVICES,
      PAGE_VOTRE_GARANTIE,
      PAGE_VOS_CONTACTS_ET_DEMARCHES,
      PAGE_LA_FIN_DE_VOTRE_CONTRAT,
      PAGE_EN_CAS_DE_SINISTRE,
      PAGE_MODIFICATION_DU_VEHICULE
    ]
  },
  {
    name: 'Crédit',
    cosyName: 'Crédit',
    path: 'credit',
    textInfo: 'Véhicule BMW financé par Crédit',
    pages: [
      PAGE_VOS_AVANTAGES,
      PAGE_VOS_SERVICES,
      PAGE_VOS_GARANTIES,
      PAGE_VOS_CONTACTS_ET_DEMARCHES,
      PAGE_REMBOURSEMENT_PAR_ANTICIPATION,
      PAGE_EN_CAS_DE_SINISTRE,
      PAGE_MODIFICATION_DU_VEHICULE
    ]
  },
  {
    name: 'Crédit Ballon',
    cosyName: 'Crédit ballon',
    path: 'credit-ballon',
    textInfo: 'Véhicule BMW financé par Crédit Ballon',
    pages: [
      PAGE_VOS_AVANTAGES,
      PAGE_VOS_SERVICES,
      PAGE_VOS_GARANTIES,
      PAGE_VOS_CONTACTS_ET_DEMARCHES,
      PAGE_REMBOURSEMENT_PAR_ANTICIPATION,
      PAGE_VOTRE_DECISION_DE_FIN_DE_CONTRAT,
      PAGE_EN_CAS_DE_SINISTRE,
      PAGE_MODIFICATION_DU_VEHICULE
    ]
  }
]
